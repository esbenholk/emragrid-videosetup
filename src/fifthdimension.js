import React, { Component } from "react";
import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

////variable scene componenets

console.log("santity check");
var camera, scene, renderer, controls;
var raycaster;
var moveForward = false;
var moveBackward = false;
var moveLeft = false;
var moveRight = false;
var canJump = false;
var prevTime = performance.now();
var velocity = new THREE.Vector3();
var direction = new THREE.Vector3();
var online = false;
let boxes = [];
let sphere, sphere2;
let cube;
let fog = 10;

export default class FifthDimension extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.animate = this.animate.bind(this);
    this.moveHeadlines = this.moveHeadlines.bind(this);
    this.toggleGame = this.toggleGame.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  componentDidMount() {
    this.init();
    this.animate();
    document.addEventListener("keydown", this.toggleGame, false); ///activates mouse focus control
    document.addEventListener("keydown", this.onKeyDown);
    document.addEventListener("keyup", this.onKeyUp);
    // document.addEventListener("click", function() {
    //   var newVideo = document.getElementById("video1");
    //   console.log("play video");
    //   newVideo.play();
    // });
  }
  toggleGame(event) {
    if (event.keyCode === 82) {
      if (online == false) {
        controls.lock();
        this.moveHeadlines();
        online = true;
        this.props.setConditional();
      } else {
        controls.unlock();
        online = false;
      }
    }
  }
  moveHeadlines() {
    var element = document.getElementById("startpage");
    element.classList.add("on");
    var canvas = document.getElementsByTagName("canvas");
    canvas[0].classList.add("on");
  }
  onKeyUp(event) {
    switch (event.keyCode) {
      case 38: // up
      case 87: // w
        moveForward = false;
        break;
      case 37: // left
      case 65: // a
        moveLeft = false;
        break;
      case 40: // down
      case 83: // s
        moveBackward = false;
        break;
      case 39: // right
      case 68: // d
        moveRight = false;
        break;
    }
  }
  onKeyDown(event) {
    switch (event.keyCode) {
      case 38: // up
      case 87: // w
        moveForward = true;
        break;
      case 37: // left
      case 65: // a
        moveLeft = true;
        break;
      case 40: // down
      case 83: // s
        moveBackward = true;
        break;
      case 39: // right
      case 68: // d
        moveRight = true;
        break;
      case 32: // space
        if (canJump === true) velocity.y += 350;
        canJump = false;
        break;
    }
  }
  init() {
    //set up textureloader for url texture placement
    const textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = "Anonymous";
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    camera.position.y = 40;
    scene = new THREE.Scene();
    // scene.fog = new THREE.Fog(0xffffff, fog, 200);
    var light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
    light.position.set(0.5, 1, 0.75);
    scene.add(light);
    controls = new PointerLockControls(camera, document.body);
    scene.add(controls.getObject());

    function createfloor() {
      let ground = new THREE.PlaneGeometry(3000, 3000, 100, 100);
      ground.rotateX(-Math.PI / 2);
      var texture = new THREE.Texture(generateTexture());
      texture.needsUpdate = true; // important!
      var material = new THREE.MeshBasicMaterial({
        map: texture,
        overdraw: 0.5
      });
      var floor = new THREE.Mesh(ground, material);
      scene.add(floor);
      function generateTexture() {
        var size = 20;
        // create canvas
        let floorcolor = document.createElement("canvas");
        floorcolor.width = size;
        floorcolor.height = size;

        // get context
        var context = floorcolor.getContext("2d");

        // draw gradient
        context.rect(0, 0, size, size);
        var gradient = context.createLinearGradient(0, 0, size, size);
        gradient.addColorStop(0, "white"); // light blue
        gradient.addColorStop(0.6, "#89fffb"); // dark blue
        // gradient.addColorStop(0.8, "red"); // dark blue

        context.fillStyle = gradient;
        context.fill();

        return floorcolor;
      }
    }
    createfloor();

    var video = document.getElementById("video1");
    let texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;
    let boxMaterial = new THREE.MeshBasicMaterial({ map: texture });
    var boxGeometry = new THREE.BoxGeometry(40, 40, 40);

    var video2 = document.getElementById("video2");
    let texture2 = new THREE.VideoTexture(video2);
    texture2.minFilter = THREE.LinearFilter;
    texture2.magFilter = THREE.LinearFilter;
    texture2.format = THREE.RGBFormat;
    let boxMaterial2 = new THREE.MeshBasicMaterial({ map: texture2 });
    var boxGeometry2 = new THREE.BoxGeometry(50, 50, 50);
    var video3 = document.getElementById("video3");
    let texture3 = new THREE.VideoTexture(video3);
    texture3.minFilter = THREE.LinearFilter;
    texture3.magFilter = THREE.LinearFilter;
    texture3.format = THREE.RGBFormat;
    let boxMaterial3 = new THREE.MeshBasicMaterial({ map: texture3 });
    var boxGeometry3 = new THREE.BoxGeometry(30, 30, 30);
    // for (let i = 0; i < this.props.images.length; i++) {
    for (let i = 0; i < 500; i++) {
      var box = new THREE.Mesh(boxGeometry, boxMaterial);
      box.position.x = Math.floor(Math.random() * 20 - 10) * 60;
      box.position.y = Math.floor(Math.random() * 500) * 4;
      box.position.z = Math.floor(Math.random() * 20 - 10) * 60;
      boxes.push(box);
      scene.add(box);
      var box2 = new THREE.Mesh(boxGeometry2, boxMaterial2);
      box2.position.x = Math.floor(Math.random() * 20 - 10) * 60;
      box2.position.y = Math.floor(Math.random() * 200) * 40;
      box2.position.z = Math.floor(Math.random() * 20 - 10) * 60;
      boxes.push(box2);
      scene.add(box2);
      var box3 = new THREE.Mesh(boxGeometry3, boxMaterial3);
      box3.position.x = Math.floor(Math.random() * 20 - 10) * 80;
      box3.position.y = Math.floor(Math.random() * 200) * 40;
      box3.position.z = Math.floor(Math.random() * 20 - 10) * 80;
      boxes.push(box3);
      scene.add(box3);
    }

    var SphereGeometry = new THREE.SphereGeometry(10, 100, 100);
    let sphereImage = textureLoader.load(
      "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png"
    );
    let sphereMaterial = new THREE.MeshBasicMaterial({
      map: sphereImage
    });
    sphere = new THREE.Mesh(SphereGeometry, boxMaterial);
    sphere.position.x = 0;
    sphere.position.y = 10;
    sphere.position.z = 0;
    scene.add(sphere);
    var SphereGeometry2 = new THREE.SphereGeometry(100, 100, 100);
    sphere2 = new THREE.Mesh(SphereGeometry2, boxMaterial);
    sphere2.position.x = 0;
    sphere2.position.y = 300;
    sphere2.position.z = 0;
    scene.add(sphere2);

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    //
    window.addEventListener("resize", this.onWindowResize, false);
  }
  onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  animate() {
    requestAnimationFrame(this.animate);
    fog += 0.1;
    scene.fog = new THREE.Fog(0xffffff, fog, fog + 80);
    console.log(scene.fog);
    function createControls() {
      var time = performance.now();
      var delta = (time - prevTime) / 1000;
      velocity.x -= velocity.x * 10.0 * delta;
      velocity.z -= velocity.z * 10.0 * delta;
      velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass
      direction.z = Number(moveForward) - Number(moveBackward);
      direction.x = Number(moveRight) - Number(moveLeft);
      direction.normalize(); // this ensures consistent movements in all directions
      if (moveForward || moveBackward) velocity.z -= direction.z * 150 * delta;
      if (moveLeft || moveRight) velocity.x -= direction.x * 150.0 * delta;

      controls.moveRight(-velocity.x * delta);
      controls.moveForward(-velocity.z * delta);
      controls.getObject().position.y += velocity.y * delta; // new behavior
      if (controls.getObject().position.y < 10) {
        velocity.y = 0;
        controls.getObject().position.y = 10;
        canJump = true;
      }
      prevTime = time;
    }
    createControls();

    for (var i = 0; i < boxes.length; i++) {
      // boxes[i].rotation.y += 0.005;
      boxes[i].rotation.z += 0.004;
      boxes[i].position.y += -0.3;
      sphere2.rotation.x += 0.000001;
    }

    renderer.render(scene, camera);
  }
  render() {
    return (
      <div className="hiddenmessage">
        <a href="https://www.facebook.com/esbenholk">
          <h1> nosy lil internet native arent u? </h1>
        </a>
      </div>
    );
  }
}

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
let sphere;

export default class FifthDimension extends Component {
  constructor(props) {
    console.log("fifth", props.images);
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
    scene.fog = new THREE.Fog(0x000000, 90, 200);
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
        gradient.addColorStop(0, "blue"); // light blue
        gradient.addColorStop(0.6, "black"); // dark blue
        // gradient.addColorStop(0.8, "red"); // dark blue

        context.fillStyle = gradient;
        context.fill();

        return floorcolor;
      }
    }
    createfloor();

    // objects
    var boxGeometry = new THREE.BoxGeometry(100, 100, 100);
    for (let i = 0; i < this.props.images.length; i++) {
      let boxImage, boxMaterial;
      boxImage = textureLoader.load(this.props.images[i]);
      boxMaterial = new THREE.MeshBasicMaterial({
        map: boxImage
      });
      var box = new THREE.Mesh(boxGeometry, boxMaterial);
      box.position.x = Math.floor(Math.random() * 20 - 10) * 40;
      box.position.y = Math.floor(Math.random() * -200) * 10;
      box.position.z = Math.floor(Math.random() * 20 - 10) * 40;
      boxes.push(box);
      scene.add(box);
    }
    //

    var SphereGeometry = new THREE.SphereGeometry(10, 100, 100);
    let sphereImage = textureLoader.load(
      "https://houseofkillingwebsite.s3.amazonaws.com/Screen+Shot+2020-01-31+at+17.04.45.png"
    );
    let sphereMaterial = new THREE.MeshBasicMaterial({
      map: sphereImage
    });
    sphere = new THREE.Mesh(SphereGeometry, sphereMaterial);
    sphere.position.x = 0;
    sphere.position.y = 10;
    sphere.position.z = 0;
    scene.add(sphere);

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
    // raycaster.ray.origin.copy(controls.getObject().position);
    // raycaster.ray.origin.y -= 10;
    // var intersections = raycaster.intersectObjects(objects);
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
      boxes[i].rotation.z += 0.002;
      boxes[i].position.y += 0.5;
      sphere.rotation.y += 0.005;
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

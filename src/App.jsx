// import * as THREE from "three";

// //Scene
// const Scene = new THREE.Scene();

// //Create our sphere
// const geometry = new THREE.SphereGeometry(3,64,64)

// //Material
// const material= new THREE.MeshStandardMaterial({
//   color:'#00f83',
// })

// const mesh = new THREE.Mesh(geometry,material);
// Scene.add(mesh)
// //light
// const light = new THREE.PointLight(0xffffff,1,100)
// light.position.set(0,10,10)
// Scene.add(light)

// //Camera
// const Camera = new THREE.PerspectiveCamera(45,800/600)
// Camera.position.z= 20
// Scene.add(Camera)

// //Renderer
// const canvas = document.querySelector('.webgl')
// const renderer = new THREE.WebGLRenderer({canvas});
// renderer.setSize(800,600)
// renderer.render(Scene,Camera);
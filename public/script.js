const Colors = {
  truck: 0x8ec8e5,
  iceCream: 0xd9526b,
  cone: 0xd9ae5f,
  truckDetails: 0x4971e2,
  tire: 0x262626,
  window: 0xded0f2,
  truckLight: 0xf2c572,
  white: 0xd8d0d1,
};

let scene,
  camera,
  fieldOfView,
  aspectRatio,
  nearPlane,
  farPlane,
  HEIGHT,
  WIDTH,
  renderer,
  container;

const createScene = () => {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x9977eb, 10, 900);

  aspectRatio = WIDTH / HEIGHT;
  fieldOfView = 60;
  nearPlane = 1;
  farPlane = 10000;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  );

  camera.position.x = 0;
  camera.position.z = 300;
  camera.position.y = 180;
  camera.rotation.x = 50;

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setSize(WIDTH, HEIGHT);

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  container = document.getElementById("canvas");
  container.appendChild(renderer.domElement);

  window.addEventListener("resize", handleWindowResize, false);
};

const handleWindowResize = () => {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
};

let hemisphereLight, shadowLight, ambientLight;

const createLights = () => {
  hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.9);
  shadowLight = new THREE.DirectionalLight(0xffffff, 0.4);

  shadowLight.position.set(-150, 350, 350);
  shadowLight.castShadow = true;

  shadowLight.shadow.camera.left = -400;
  shadowLight.shadow.camera.right = 400;
  shadowLight.shadow.camera.top = 400;
  shadowLight.shadow.camera.bottom = -400;
  shadowLight.shadow.camera.near = 1;
  shadowLight.shadow.camera.far = 1000;

  shadowLight.shadow.mapSize.width = 2048;
  shadowLight.shadow.mapSize.height = 2048;

  ambientLight = new THREE.AmbientLight(0xffffff, 0.2);

  scene.add(hemisphereLight);
  scene.add(shadowLight);
  scene.add(ambientLight);
};

function Truck() {
  this.mesh = new THREE.Group();

  // Cabin
  let geomCabin = new THREE.BoxGeometry(400, 200, 250, 1, 1, 1);
  geomCabin.vertices[0].x -= 20;
  geomCabin.vertices[0].z -= 20;
  geomCabin.vertices[1].x -= 20;
  geomCabin.vertices[1].z += 20;

  geomCabin.vertices[2].z -= 20;
  geomCabin.vertices[3].z += 20;

  let matCabin = new THREE.MeshPhongMaterial({
    color: Colors.truck,
    flatShading: true,
  });
  let cabin = new THREE.Mesh(geomCabin, matCabin);
  cabin.castShadow = true;
  cabin.receiveShadow = true;

  // Engine
  let geomEngine = new THREE.BoxGeometry(40, 70, 210, 1, 1, 1);
  geomEngine.vertices[0].y -= 30;
  geomEngine.vertices[0].z -= 20;
  geomEngine.vertices[1].y -= 30;
  geomEngine.vertices[1].z += 20;

  geomEngine.vertices[2].z -= 20;
  geomEngine.vertices[2].y -= 10;
  geomEngine.vertices[3].z += 20;
  geomEngine.vertices[3].y -= 10;

  let matEngine = new THREE.MeshPhongMaterial({
    color: Colors.truck,
    flatShading: true,
  });

  let engine = new THREE.Mesh(geomEngine, matEngine);
  engine.position.x = 215;
  engine.position.y = -63;
  engine.rotation.z = 0.1;
  engine.castShadow = true;
  engine.receiveShadow = true;

  var singleGeometry = new THREE.Geometry();

  cabin.updateMatrix();
  singleGeometry.merge(cabin.geometry, cabin.matrix);

  engine.updateMatrix();
  singleGeometry.merge(engine.geometry, engine.matrix);

  var mergeTruck = new THREE.Mesh(singleGeometry, matCabin);
  mergeTruck.scale.z = 0.9;
  mergeTruck.castShadow = true;
  mergeTruck.receiveShadow = true;
  this.mesh.add(mergeTruck);

  // Windows
  let geomRoof = new THREE.BoxGeometry(230, 8, 130, 1, 1, 1);
  let matTruckDetails = new THREE.MeshPhongMaterial({
    color: Colors.truckDetails,
    flatShading: true,
  });
  let roof = new THREE.Mesh(geomRoof, matTruckDetails);
  roof.position.z = 90;
  roof.position.y = 75;
  roof.position.x = -50;
  roof.castShadow = true;
  roof.receiveShadow = true;
  this.mesh.add(roof);

  let table = roof.clone();
  table.position.y = -30;
  table.position.z = 60;
  this.mesh.add(table);

  let geomWindow = new THREE.BoxGeometry(70, 8, 100, 1, 1, 1);
  let matWindow = new THREE.MeshPhongMaterial({
    color: Colors.window,
    flatShading: true,
    refractionRatio: 0.8,
  });
  let window1 = new THREE.Mesh(geomWindow, matWindow);
  window1.position.y = 25;
  window1.position.z = 100;
  window1.position.x = 130;
  window1.rotation.x = 1.6;
  window1.castShadow = true;
  window1.receiveShadow = true;
  this.mesh.add(window1);

  let window2 = window1.clone();
  window2.scale.x = 3;
  window2.position.z = 110;
  window2.position.x = -50;
  this.mesh.add(window2);

  let window3 = window1.clone();
  window3.scale.x = 2.5;
  window3.position.x = 185;
  window3.position.y = 35;
  window3.position.z = 0;
  window3.rotation.z = 1.55;
  window3.rotation.y = 0.1;
  window3.rotation.x = Math.PI / 2;
  this.mesh.add(window3);

  // Tires
  let geomTire1 = new THREE.CylinderGeometry(30, 30, 10, 32);
  let matTire1 = new THREE.MeshPhongMaterial({
    color: Colors.tire,
    flatShading: true,
  });
  let tire1 = new THREE.Mesh(geomTire1, matTire1);
  tire1.position.y = -100;
  tire1.position.x = -100;
  tire1.position.z = 100;
  tire1.rotation.x = 1.6;
  tire1.castShadow = true;
  tire1.receiveShadow = true;
  this.mesh.add(tire1);

  let tire2 = tire1.clone();
  tire2.position.x = 100;
  tire1.position.z = 110;
  this.mesh.add(tire2);

  let tire3 = tire1.clone();
  tire3.position.z = -110;
  this.mesh.add(tire3);

  let tire4 = tire1.clone();
  tire4.position.z = -110;
  tire4.position.x = 100;
  this.mesh.add(tire4);

  let geomRim1 = new THREE.CylinderGeometry(15, 15, 10, 32);
  let matRim1 = new THREE.MeshPhongMaterial({
    color: Colors.white,
    flatShading: true,
  });
  this.rim1 = new THREE.Mesh(geomRim1, matRim1);
  this.rim1.position.y = -100;
  this.rim1.position.x = -100;
  this.rim1.position.z = 115;
  this.rim1.rotation.x = 1.6;
  this.rim1.castShadow = true;
  this.rim1.receiveShadow = true;
  this.mesh.add(this.rim1);

  this.rim2 = this.rim1.clone();
  this.rim2.position.x = 100;
  this.rim2.position.z = 105;
  this.mesh.add(this.rim2);

  this.rim3 = this.rim1.clone();
  this.rim3.position.z = -115;
  this.mesh.add(this.rim3);

  this.rim4 = this.rim1.clone();
  this.rim4.position.z = -115;
  this.rim4.position.x = 100;
  this.mesh.add(this.rim4);

  // Cone base
  let geomBase1 = new THREE.CylinderGeometry(5, 5, 90, 32);
  let matBase1 = new THREE.MeshPhongMaterial({
    color: Colors.tire,
    flatShading: true,
  });
  let base1 = new THREE.Mesh(geomBase1, matBase1);
  base1.position.y = 100;
  base1.position.x = -100;
  base1.receiveShadow = true;
  base1.castShadow = true;
  this.mesh.add(base1);

  let base2 = base1.clone();
  base2.position.x = 100;
  base2.position.y = 120;
  this.mesh.add(base2);

  // Cone

  let geomCone = new THREE.CylinderGeometry(5, 70, 180, 50);
  let matCone = new THREE.MeshPhongMaterial({
    color: Colors.cone,
    flatShading: true,
  });
  let cone = new THREE.Mesh(geomCone, matCone);
  cone.position.y = 170;
  cone.position.x = -100;
  cone.rotation.z = -400;
  cone.receiveShadow = true;
  cone.castShadow = true;
  this.mesh.add(cone);

  // Ice cream

  let geomIceCream1 = new THREE.IcosahedronGeometry(130, 1);

  let matIceCream1 = new THREE.MeshPhongMaterial({
    color: Colors.iceCream,
    flatShading: true,
  });

  let iceCream1 = new THREE.Mesh(geomIceCream1, matIceCream1);
  iceCream1.position.y = 270;
  iceCream1.position.x = 60;
  iceCream1.receiveShadow = true;
  iceCream1.castShadow = true;
  this.mesh.add(iceCream1);

  // Truck lights

  let geomTruckLight = new THREE.SphereGeometry(15, 10, 10);
  let matTruckLight = new THREE.MeshPhongMaterial({
    color: Colors.truckLight,
    flatShading: true,
  });
  let truckLight1 = new THREE.Mesh(geomTruckLight, matTruckLight);
  truckLight1.position.y = -80;
  truckLight1.position.z = 50;
  truckLight1.position.x = 230;
  truckLight1.receiveShadow = true;
  truckLight1.castShadow = true;
  this.mesh.add(truckLight1);

  let truckLight2 = truckLight1.clone();
  truckLight2.position.z = -50;
  this.mesh.add(truckLight2);

  const headLight1 = new THREE.PointLight(Colors.truckLight, 1.5, 40);
  headLight1.position.set(280, -90, 50);
  this.mesh.add(headLight1);

  const headLight2 = new THREE.PointLight(Colors.truckLight, 1.5, 40);
  headLight2.position.set(280, -90, -70);
  this.mesh.add(headLight2);

  // Bumper

  let geomBumper = new THREE.BoxGeometry(20, 150, 10);
  let bumper = new THREE.Mesh(geomBumper, matTruckDetails);
  bumper.position.y = -108;
  bumper.position.z = -5;
  bumper.position.x = 235;
  bumper.rotation.x = 1.6;
  this.mesh.add(bumper);

  // Truck details

  let geomRoofDetail1 = new THREE.CylinderGeometry(
    25,
    25,
    2,
    8,
    1,
    false,
    0,
    Math.PI
  );
  let roofDetail1 = new THREE.Mesh(geomRoofDetail1, matTruckDetails);
  roofDetail1.position.x = -120;
  roofDetail1.position.z = 170;
  roofDetail1.position.y = 85;
  roofDetail1.rotation.x = 1.6;
  roofDetail1.rotation.y = -1.6;
  truckLight1.receiveShadow = true;
  truckLight1.castShadow = true;
  this.mesh.add(roofDetail1);

  let roofDetail2 = roofDetail1.clone();
  roofDetail2.position.x = -65;
  this.mesh.add(roofDetail2);

  let roofDetail3 = roofDetail1.clone();
  roofDetail3.position.x = -5;
  this.mesh.add(roofDetail3);

  let roofDetail4 = roofDetail1.clone();
  roofDetail4.position.x = 55;
  this.mesh.add(roofDetail4);
}

let truck;

const createTruck = () => {
  truck = new Truck();
  truck.mesh.scale.set(0.25, 0.25, 0.25);
  truck.mesh.position.y = 80;

  truck.mesh.position.z = 100;
  truck.mesh.rotation.y = -45 * (Math.PI / 180);
  scene.add(truck.mesh);
};

const createFloor = () => {
  let floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(4000, 4000),
    new THREE.MeshPhongMaterial({ color: 0x9977eb, flatShading: true })
  );
  floor.rotation.x -= Math.PI / 2;
  floor.position.y = 45;
  floor.receiveShadow = true;
  scene.add(floor);
};

const targetTruckPosition = 40;
const animationDuration = 2000;

const loop = () => {
  const t = (Date.now() % animationDuration) / animationDuration;

  renderer.render(scene, camera);

  const delta = targetTruckPosition * Math.sin(Math.PI * 2 * t);

  truck.mesh.position.x = delta;
  truck.mesh.position.z = delta;

  truck.mesh.rotation.z = Math.sin(Math.PI * 2 * (t + 0.25)) * 0.1;

  requestAnimationFrame(loop);
};

const main = () => {
  createScene();
  createLights();
  createFloor();
  createTruck();

  renderer.render(scene, camera);
  loop();
};

window.addEventListener("load", main, false);

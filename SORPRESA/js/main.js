// === CORAZÓN NEÓN ===

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("heartCanvas"),
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000, 1);

function createHeartPath(i, total) {
  const t = (i / total) * Math.PI * 2;
  const scale = 15;
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y =
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t);
  return new THREE.Vector3(x * scale, y * scale, 0);
}

// === PARTÍCULAS DEL CORAZÓN ===
const totalParticles = 9000;
const start = [];
const target = [];
const delays = [];
const colors = [];
const color = new THREE.Color();

for (let i = 0; i < totalParticles; i++) {
  start.push(
    (Math.random() - 0.5) * 800,
    (Math.random() - 0.5) * 800,
    (Math.random() - 0.5) * 800
  );
  const p = createHeartPath(i, totalParticles);
  const thick = 6;
  target.push(
    p.x + (Math.random() - 0.5) * thick,
    p.y + (Math.random() - 0.5) * thick,
    (Math.random() - 0.5) * thick * 2
  );
  const dist = Math.sqrt(p.x * p.x + p.y * p.y);
  delays.push(dist / 180);
  color.setHSL(i / totalParticles, 1, 0.6);
  colors.push(color.r, color.g, color.b);
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(start), 3));
geometry.setAttribute("target", new THREE.BufferAttribute(new Float32Array(target), 3));
geometry.setAttribute("delay", new THREE.BufferAttribute(new Float32Array(delays), 1));
geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({
  size: 1.6,
  vertexColors: true,
  blending: THREE.AdditiveBlending,
  transparent: true,
  opacity: 0,
  depthWrite: false,
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);
camera.position.z = 300;

// === ANIMACIÓN DEL CORAZÓN ===
let globalTime = 0;
let visible = 0;
const speed = 0.003;
const floatStrength = 0.6;
let finished = false;

function animate() {
  requestAnimationFrame(animate);
  globalTime += speed;

  const pos = geometry.attributes.position.array;
  const tgt = geometry.attributes.target.array;
  const delay = geometry.attributes.delay.array;
  const time = Date.now() * 0.001;

  if (visible < totalParticles) {
    visible += 50;
    if (visible > totalParticles) visible = totalParticles;
  }

  for (let i = 0, j = 0; i < pos.length; i += 3, j++) {
    if (j > visible) continue;
    const p = Math.max(0, Math.min(1, (globalTime - delay[j]) * 2));
    if (p < 1) {
      pos[i] += Math.sin(time * 0.8 + i) * floatStrength * (1 - p);
      pos[i + 1] += Math.cos(time * 0.9 + i * 0.4) * floatStrength * (1 - p);
      pos[i + 2] += Math.sin(time * 1.1 + i * 0.3) * floatStrength * (1 - p);
    }
    pos[i] += (tgt[i] - pos[i]) * p * 0.025;
    pos[i + 1] += (tgt[i + 1] - pos[i + 1]) * p * 0.025;
    pos[i + 2] += (tgt[i + 2] - pos[i + 2]) * p * 0.025;
  }

  if (material.opacity < 0.9) material.opacity += 0.005;

  if (!finished && visible >= totalParticles) {
    finished = true;
    setTimeout(() => {
      document.querySelector(".button-container").classList.add("show");
    }, 800);
  }

  geometry.attributes.position.needsUpdate = true;
  renderer.render(scene, camera);
}

animate();

// === EVENTO DEL BOTÓN ===
document.querySelector(".magic-btn").addEventListener("click", () => {
  // Crear coche
  const car = document.createElement("div");
  car.classList.add("car-icon");
  document.body.appendChild(car);

  const overlay = document.getElementById("pageOverlay");

  // Mostrar overlay y mover coche
  setTimeout(() => {
    overlay.style.left = "0";
  }, 700);

  setTimeout(() => {
    car.style.left = "120%";
  }, 400);

  // Redirigir a calendario.html al final
  setTimeout(() => {
    window.location.href = "calendario.html";
  }, 4600);
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

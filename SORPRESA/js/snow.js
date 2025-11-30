// === NIEVE ANIMADA ===
const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

let flakes = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Crear copos de nieve
for (let i = 0; i < 120; i++) {
  flakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,       // tamaño del copo
    d: Math.random() + 1,           // densidad
  });
}

function drawFlakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  ctx.beginPath();
  for (let i = 0; i < flakes.length; i++) {
    const f = flakes[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  updateFlakes();
}

let angle = 0;
function updateFlakes() {
  angle += 0.01;
  for (let i = 0; i < flakes.length; i++) {
    const f = flakes[i];
    f.y += Math.pow(f.d, 2) + 1;
    f.x += Math.sin(angle) * 0.5;

    if (f.y > canvas.height) {
      flakes[i] = {
        x: Math.random() * canvas.width,
        y: 0,
        r: f.r,
        d: f.d,
      };
    }
  }
}

function animateSnow() {
  drawFlakes();
  requestAnimationFrame(animateSnow);
}
animateSnow();

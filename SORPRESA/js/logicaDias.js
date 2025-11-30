// ===== Suavizado de entrada =====
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

const grid = document.getElementById('calendarGrid');

// ===== Crear las 24 tarjetas =====
// ===== Crear las 24 tarjetas con bloqueo real por fecha =====
const hoy = new Date();
const mesActual = hoy.getMonth(); // Enero=0 ... Diciembre=11
const diaActual = hoy.getDate();  // Día real (1–31)

for (let i = 1; i <= 24; i++) {
  const card = document.createElement("div");
  card.classList.add("day-card");
  const imagePath = `assets/img/Foto_${i}.jpeg`;

  card.innerHTML = `
    <div class="card-photo" style="background-image: url('${imagePath}')"></div>
    <div class="card-label">DÍA ${i}</div>
  `;

  // === Bloqueo real solo si estamos en diciembre ===
  let desbloqueado = true;

  if (mesActual === 11) {
    // Si estamos en diciembre, solo desbloquea los días <= hoy
    if (i <= diaActual) {
      desbloqueado = true;
    } else {
      desbloqueado = false;
    }
  } else {
    // Si no estamos en diciembre, deja todo desbloqueado (modo prueba)
    desbloqueado = true;
  }

  // === Si el día está bloqueado ===
  if (!desbloqueado) {
    card.classList.add("locked");

    const lock = document.createElement("div");
    lock.classList.add("lock-overlay");
    lock.innerHTML = "🔒";
    card.appendChild(lock);

    // Pequeño aviso si intenta abrir un día bloqueado
    lock.addEventListener("click", (e) => {
      e.stopPropagation();
      const msg = document.createElement("div");
      msg.classList.add("locked-msg");
      msg.textContent = "⏳ Este día aún no está disponible";
      card.appendChild(msg);
      setTimeout(() => msg.remove(), 1800);
    });
  }

  // === Si el día está desbloqueado ===
  if (desbloqueado) {
    card.addEventListener("click", () => {
      const dia = dias.find((d) => d.id === i);
      const modal = document.getElementById("modalDia");
      const body = document.getElementById("modalBody");

      if (dia) {
        body.innerHTML = dia.contenido;
        modal.style.display = "flex";

        // Ejecutar función específica si existe
        const fn = window[`iniciarDia${i}`];
        if (typeof fn === "function") fn();
      }
    });
  }

  grid.appendChild(card);
}

// ===== Cerrar modal =====
document.addEventListener('click', e => {
  if (e.target.classList.contains('close-btn') || e.target.id === 'modalDia') {
    document.getElementById('modalDia').style.display = 'none';
  }
});

// ===================================================
// === FUNCIONES DE INTERACCIÓN PARA CADA DÍA ========
// ===================================================

function iniciarDia2() {
  setTimeout(() => {
    const boton = document.getElementById("btnDia2");
    const input = document.getElementById("respuestaDia2");
    const resultado = document.getElementById("resultadoDia2");

    if (boton && input && resultado) {
      boton.addEventListener("click", () => {
        const respuesta = input.value.toLowerCase().trim();
        if (["tiempo", "el tiempo"].includes(respuesta)) {
          resultado.innerHTML = "✨ ¡Exacto! Ni siquiera el giratiempo puede vencer al <strong>TIEMPO</strong>. Esa es tu primera palabra clave. ⏳";
          resultado.style.color = "#00ff90";
        } else {
          resultado.innerHTML = "❌ No exactamente... piensa en lo que el giratiempo intentaba cambiar, pero nunca podía detener.";
          resultado.style.color = "#ff6b6b";
        }
      });
    }
  }, 100);
}

function iniciarDia3() {
  setTimeout(() => {
    const boton = document.getElementById("btnDia3");
    const input = document.getElementById("respuestaDia3");
    const resultado = document.getElementById("resultadoDia3");

    if (boton && input && resultado) {
      boton.addEventListener("click", () => {
        const respuesta = input.value.toLowerCase().trim();
        if (["expecto patronum", "patronum"].includes(respuesta)) {
          resultado.innerHTML = "🦌 ¡Brillante! Has conjurado tu <strong>Expecto Patronum</strong>. Tu palabra clave es <strong>ESPERANZA</strong>. ✨";
          resultado.style.color = "#90ee90";
        } else {
          resultado.innerHTML = "❌ No es ese... recuerda, el hechizo que expulsa la oscuridad de los dementores.";
          resultado.style.color = "#ff6b6b";
        }
      });
    }
  }, 100);
}

function iniciarDia4() {
  setTimeout(() => {
    const boton = document.getElementById("btnDia4");
    const input = document.getElementById("respuestaDia4");
    const resultado = document.getElementById("resultadoDia4");

    if (boton && input && resultado) {
      boton.addEventListener("click", () => {
        const respuesta = input.value.toLowerCase().trim();

        if (["alohomora"].includes(respuesta)) {
          resultado.innerHTML =
            "🔓 La puerta se abre… y tras ella descubres que lo imposible solo necesita fe. Tu palabra clave es <strong>QUIMERA</strong>. ✨";
          resultado.style.color = "#90ee90";
        } else {
          resultado.innerHTML =
            "❌ No es ese hechizo… recuerda el que abre puertas y rompe los límites.";
          resultado.style.color = "#ff6b6b";
        }
      });
    }
  }, 100);
}
function iniciarDia5() {
  setTimeout(() => {
    const boton = document.getElementById("btnDia5");
    const input = document.getElementById("respuestaDia5");
    const resultado = document.getElementById("resultadoDia5");

    if (boton && input && resultado) {
      boton.addEventListener("click", () => {
        const respuesta = input.value.toLowerCase().trim();

        if (["wingardium leviosa", "leviosa"].includes(respuesta)) {
          resultado.innerHTML =
            "🪶 El objeto asciende con elegancia, obedeciendo tu varita. Has encontrado la armonía entre mente y magia. Tu palabra clave es <strong>UNIÓN</strong>. ✨";
          resultado.style.color = "#90ee90";
        } else {
          resultado.innerHTML =
            "❌ El hechizo no surte efecto... recuerda: equilibrio, concentración y una pronunciación perfecta.";
          resultado.style.color = "#ff6b6b";
        }
      });
    }
  }, 100);
}
function iniciarDia6() {
  setTimeout(() => {
    const boton = document.getElementById("btnDia6");
    const input = document.getElementById("respuestaDia6");
    const resultado = document.getElementById("resultadoDia6");

    if (boton && input && resultado) {
      boton.addEventListener("click", () => {
        const respuesta = input.value.toLowerCase().trim();

        if (["instinto", "intuicion"].includes(respuesta)) {
          resultado.innerHTML =
            "🍀 ¡Exacto! El verdadero poder del Elixir Dorado es creer en tu <strong>INSTINTO</strong>. Esa es tu palabra clave. ✨";
          resultado.style.color = "#00ff90";
        } else {
          resultado.innerHTML =
            "❌ No... no es suerte ni destino. Es algo dentro de ti que siempre sabe el camino.";
          resultado.style.color = "#ff6b6b";
        }
      });
    }
  }, 100);
}
function iniciarDia7() {
  setTimeout(() => {
    const boton = document.getElementById("btnDia7");
    const input = document.getElementById("respuestaDia7");
    const resultado = document.getElementById("resultadoDia7");

    if (boton && input && resultado) {
      boton.addEventListener("click", () => {
        const respuesta = input.value.toLowerCase().trim();

        if (["energia", "energía"].includes(respuesta)) {
          resultado.innerHTML =
            "🕯️ Incluso en la oscuridad más profunda, la <strong>ENERGÍA</strong> del alma sigue viva. Esa es tu palabra clave. ✨";
          resultado.style.color = "#00ff90";
        } else {
          resultado.innerHTML =
            "❌ No es poder, ni magia… es algo que fluye en todo ser vivo, imposible de destruir.";
          resultado.style.color = "#ff6b6b";
        }
      });
    }
  }, 100);
}
function iniciarDia8() {
  setTimeout(() => {
   const boton = document.getElementById("btnDia8");
   const input = document.getElementById("respuestaDia8");
   const resultado = document.getElementById("resultadoDia8");

   if (boton && input && resultado) {
     boton.addEventListener("click", () => {
       const respuesta = input.value.toLowerCase().trim();

       if (["hogwarts", "el colegio hogwarts"].includes(respuesta)) {
         resultado.innerHTML = "🏰 Has recordado dónde nace la magia y donde siempre hay un lugar para volver. Tu palabra clave es <strong>REFUGIO</strong>. ✨";
         resultado.style.color = "#90ee90";
       } else {
         resultado.innerHTML = "❌ Piensa en el castillo que siempre recibe a sus alumnos sin importar el tiempo o la distancia.";
         resultado.style.color = "#ff6b6b";
       }
     });
   }
  }, 100);
}
function iniciarDia10() {
  setTimeout(() => {
    const boton = document.getElementById("btnDia10");
    const input = document.getElementById("respuestaDia10");
    const resultado = document.getElementById("resultadoDia10");

    if (boton && input && resultado) {
      boton.addEventListener("click", () => {
        const respuesta = input.value.toLowerCase().trim();

        if (["memoria", "recuerdo", "recuerdos"].includes(respuesta)) {
          resultado.innerHTML =
            "🩸 Cada nombre grabado en piedra vive en tu <strong>MEMORIA</strong>. No olvides de dónde vienes, ni por quién sigues de pie. ✨";
          resultado.style.color = "#00ff90";
        } else {
          resultado.innerHTML =
            "❌ No es fuerza ni destino… es algo que permanece incluso cuando todo se pierde.";
          resultado.style.color = "#ff6b6b";
        }
      });
    }
  }, 100);
}
function iniciarDia11() {
  setTimeout(() => {
    const botones = document.querySelectorAll(".opcion");
    const resultado = document.getElementById("resultadoDia11");

    if (botones.length && resultado) {
      botones.forEach(boton => {
        boton.addEventListener("click", () => {
          const eleccion = boton.getAttribute("data-respuesta");

          if (eleccion === "corazon") {
            resultado.innerHTML =
              "🐉 El dragón baja la cabeza, reconociendo tu sinceridad. Has elegido con <strong>INTUICIÓN</strong>. Esa es tu palabra clave. ✨";
            resultado.style.color = "#00ff90";
          } else if (eleccion === "mente") {
            resultado.innerHTML =
              "⚙️ Los dragones respetan la estrategia, pero no la frialdad. Intenta escuchar más allá de la razón...";
            resultado.style.color = "#ff6b6b";
          } else {
            resultado.innerHTML =
              "💪 La fuerza atrae, pero no convence. El instinto no se demuestra, se siente.";
            resultado.style.color = "#ff6b6b";
          }
        });
      });
    }
  }, 100);
}
function iniciarDia12() {
  setTimeout(() => {
    const botones = document.querySelectorAll(".opcion12");
    const resultado = document.getElementById("resultadoDia12");

    if (botones.length && resultado) {
      botones.forEach(boton => {
        boton.addEventListener("click", () => {
          const eleccion = boton.getAttribute("data-respuesta");

          if (eleccion === "salto") {
            resultado.innerHTML =
              "🔥 Sin dudarlo, saltas. Las llamas te rozan, pero el miedo retrocede. Eso es <strong>BRAVURA</strong>, y esa es tu palabra clave. ✨";
            resultado.style.color = "#00ff90";
          } else if (eleccion === "pensar") {
            resultado.innerHTML =
              "⚖️ La estrategia salva vidas, pero a veces el fuego no espera. El valor no siempre da tiempo para pensar.";
            resultado.style.color = "#ff6b6b";
          } else {
            resultado.innerHTML =
              "⚔️ La paciencia puede ser sabia… pero también puede dejar atrás lo que importa. El valor actúa, incluso cuando tiembla.";
            resultado.style.color = "#ff6b6b";
          }
        });
      });
    }
  }, 100);
}
function iniciarDia13() {
  setTimeout(() => {
    const boton = document.getElementById("btnDia13");
    const input = document.getElementById("respuestaDia13");
    const resultado = document.getElementById("resultadoDia13");

    if (boton && input && resultado) {
      boton.addEventListener("click", () => {
        const respuesta = input.value.toLowerCase().trim();

        if (["resiliencia", "fortaleza", "voluntad"].includes(respuesta)) {
          resultado.innerHTML =
            "🐲 Las alas pesan, pero sigues volando. Has aprendido el verdadero significado de la <strong>RESILIENCIA</strong>. Esa es tu palabra clave. ✨";
          resultado.style.color = "#00ff90";
        } else {
          resultado.innerHTML =
            "❌ No es fuerza ni poder… es algo que te permite seguir, incluso cuando todo duele.";
          resultado.style.color = "#ff6b6b";
        }
      });
    }
  }, 100);
}
function iniciarDia14() {
  setTimeout(() => {
    const botones = document.querySelectorAll(".opcion14");
    const resultado = document.getElementById("resultadoDia14");

    if (botones.length && resultado) {
      botones.forEach(boton => {
        boton.addEventListener("click", () => {
          const eleccion = boton.getAttribute("data-respuesta");

          if (eleccion === "confianza") {
            resultado.innerHTML =
              "🤝 El dragón baja la cabeza. No hay dominio, solo respeto. Has comprendido el valor de la <strong>UNIDAD</strong>. Esa es tu palabra clave. ✨";
            resultado.style.color = "#00ff90";
          } else if (eleccion === "fuerza") {
            resultado.innerHTML =
              "⚔️ La fuerza puede someter, pero nunca vincular. Recuerda: los dragones no obedecen, eligen.";
            resultado.style.color = "#ff6b6b";
          } else {
            resultado.innerHTML =
              "🐉 En el silencio hay entendimiento, pero sin palabras, el vínculo se desvanece.";
            resultado.style.color = "#ff6b6b";
          }
        });
      });
    }
  }, 100);
}
function iniciarDia15() {
  setTimeout(() => {
    const boton = document.getElementById("btnDia15");
    const input = document.getElementById("respuestaDia15");
    const resultado = document.getElementById("resultadoDia15");

    if (boton && input && resultado) {
      boton.addEventListener("click", () => {
        const respuesta = input.value.toLowerCase().trim();

        if (["justicia", "la justicia"].includes(respuesta)) {
          resultado.innerHTML =
            "⚖️ Has hablado con sabiduría. El poder sin <strong>JUSTICIA</strong> es destrucción, y tú has recordado el equilibrio. Esa es tu palabra clave. ✨";
          resultado.style.color = "#00ff90";
        } else {
          resultado.innerHTML =
            "❌ No es ley ni poder… es aquello que equilibra ambos y evita el caos.";
          resultado.style.color = "#ff6b6b";
        }
      });
    }
  }, 100);
}
function iniciarDia16() {
  setTimeout(() => {
    const boton = document.getElementById("btnDia16");
    const input = document.getElementById("respuestaDia16");
    const resultado = document.getElementById("resultadoDia16");

    if (boton && input && resultado) {
      boton.addEventListener("click", () => {
        const respuesta = input.value.toLowerCase().trim();

        if (["la fuerza", "fuerza"].includes(respuesta)) {
          resultado.innerHTML =
            "🌌 Sientes cómo fluye a tu alrededor, uniéndolo todo. Has escuchado la <strong>Fuerza</strong>, y tu palabra clave es <strong>INSPIRACIÓN</strong>. ✨";
          resultado.style.color = "#00ff90";
        } else {
          resultado.innerHTML =
            "❌ No es energía ni poder… es algo más grande, que une y equilibra todo lo vivo.";
          resultado.style.color = "#ff6b6b";
        }
      });
    }
  }, 100);
}

function iniciarDia17() {
  setTimeout(() => {
    const botones = document.querySelectorAll(".opcion17");
    const resultado = document.getElementById("resultadoDia17");

    if (botones.length && resultado) {
      botones.forEach(boton => {
        boton.addEventListener("click", () => {
          const eleccion = boton.getAttribute("data-respuesta");

          if (eleccion === "propio") {
            resultado.innerHTML =
              "🌠 Has elegido sin miedo y sin guía. Esa es tu <strong>TRAVESÍA</strong>: seguir tu propio camino. ✨";
            resultado.style.color = "#00ff90";
          } else if (eleccion === "luz") {
            resultado.innerHTML =
              "✨ La luz ilumina, pero también ciega. A veces, la verdad está entre ambas orillas.";
            resultado.style.color = "#fffb91";
          } else {
            resultado.innerHTML =
              "🌑 La oscuridad otorga poder, pero nunca paz. Recuerda: la fuerza sin equilibrio consume.";
            resultado.style.color = "#ff6b6b";
          }
        });
      });
    }
  }, 100);
}
function iniciarDia18() {
  setTimeout(() => {
    const boton = document.getElementById("btnDia18");
    const input = document.getElementById("respuestaDia18");
    const resultado = document.getElementById("resultadoDia18");

    if (boton && input && resultado) {
      boton.addEventListener("click", () => {
        const respuesta = input.value.toLowerCase().trim();

        if (["estrella", "las estrellas", "luz", "estrellas"].includes(respuesta)) {
          resultado.innerHTML =
            "🌠 Has mirado al cielo y encontrado tu camino. Las <strong>ALAS</strong> que te elevan no siempre son visibles. ✨";
          resultado.style.color = "#00ff90";
        } else {
          resultado.innerHTML =
            "❌ No vuela, pero brilla; no respira, pero guía. Mira al cielo y piensa qué siempre te acompaña en la oscuridad.";
          resultado.style.color = "#ff6b6b";
        }
      });
    }
  }, 100);
}
function iniciarDia19() {
  setTimeout(() => {
    const canvas = document.getElementById("canvasJedi");
    const resultado = document.getElementById("resultadoDia19");
    if (!canvas || !resultado) return;
    const ctx = canvas.getContext("2d");

    const jugador = { x: 300, y: 350, w: 40, h: 40, speed: 5 };
    const balas = [];
    const orbes = [];
    let puntos = 0;
    let juegoActivo = true;
    const meta = 5; // orbes necesarios para ganar

    const imgJugador = new Image();
    imgJugador.src = "assets/img/han_solo.jpg"; // Imagen del personaje

    // === Crear orbes ===
    function crearOrbe() {
      if (!juegoActivo) return;
      const x = Math.random() * (canvas.width - 40);
      orbes.push({ x, y: -40, r: 15, speed: 1 + Math.random() * 1.5 }); // más lentos
      setTimeout(crearOrbe, 1500 + Math.random() * 1000); // tardan más en aparecer

    }

    // === Dibujar ===
    function dibujar() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Jugador
      ctx.drawImage(imgJugador, jugador.x, jugador.y, jugador.w, jugador.h);

      // Balas
      ctx.fillStyle = "#00bfff";
      for (let i = balas.length - 1; i >= 0; i--) {
        const b = balas[i];
        b.y -= 6;
        if (b.y < 0) balas.splice(i, 1);
        ctx.beginPath();
        ctx.arc(b.x, b.y, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Orbes enemigos
      ctx.fillStyle = "#ff3333";
      for (let i = orbes.length - 1; i >= 0; i--) {
        const o = orbes[i];
        o.y += o.speed;
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fill();

        // Colisión jugador
        if (
          o.x > jugador.x &&
          o.x < jugador.x + jugador.w &&
          o.y + o.r > jugador.y &&
          o.y < jugador.y + jugador.h
        ) {
          finDelJuego(false);
          return;
        }
      }

      // Colisiones bala–orbe
      for (let i = balas.length - 1; i >= 0; i--) {
        for (let j = orbes.length - 1; j >= 0; j--) {
          const b = balas[i];
          const o = orbes[j];
          const dx = b.x - o.x;
          const dy = b.y - o.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < o.r + 4) {
            orbes.splice(j, 1);
            balas.splice(i, 1);
            puntos++;
            if (puntos >= meta) {
              finDelJuego(true);
              return;
            }
          }
        }
      }

      // Marcador
      ctx.fillStyle = "#00bfff";
      ctx.font = "16px Poppins";
      ctx.fillText(`Puntos: ${puntos}`, 10, 20);
    }

    // === Movimiento del jugador ===
    const teclas = {};
    document.addEventListener("keydown", e => (teclas[e.code] = true));
    document.addEventListener("keyup", e => (teclas[e.code] = false));

    function moverJugador() {
      if (teclas["ArrowLeft"] && jugador.x > 0) jugador.x -= jugador.speed;
      if (teclas["ArrowRight"] && jugador.x < canvas.width - jugador.w)
        jugador.x += jugador.speed;
      if (teclas["Space"]) {
        if (
          balas.length === 0 ||
          Date.now() - balas[balas.length - 1].t > 250
        ) {
          balas.push({
            x: jugador.x + jugador.w / 2,
            y: jugador.y,
            t: Date.now(),
          });
        }
      }
    }

    // === Bucle principal ===
    function loop() {
      if (!juegoActivo) return;
      moverJugador();
      dibujar();
      requestAnimationFrame(loop);
    }

    // === Fin del juego ===
    function finDelJuego(ganado) {
      juegoActivo = false;
      orbes.length = 0;
      balas.length = 0;

      // Dibuja mensaje dentro del canvas después de un frame
      setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.textAlign = "center";
        ctx.shadowColor = ganado ? "#00ff90" : "#ff5555";
        ctx.shadowBlur = 15;
        ctx.font = "26px Poppins";
        ctx.fillStyle = ganado ? "#00ff90" : "#ff5555";

        if (ganado) {
          ctx.fillText("¡Has dominado el entrenamiento Jedi!", canvas.width / 2, 180);
          ctx.fillText("Tu palabra clave es MAGIA ✨", canvas.width / 2, 230);
          resultado.innerHTML =
            "⚔️ ¡Excelente puntería, piloto! Has dominado el entrenamiento Jedi.<br>Tu palabra clave es <strong>MAGIA</strong>. ✨";
          resultado.style.color = "#00ff90";
        } else {
          ctx.fillText("💥 Un orbe te alcanzó...", canvas.width / 2, 200);
          ctx.fillText("La paciencia es el camino del poder.", canvas.width / 2, 240);
          resultado.innerHTML =
            "💥 Un orbe te alcanzó. Recuerda: la paciencia y la concentración son tu mejor arma.";
          resultado.style.color = "#ff6b6b";
        }

        // Borde visual
        ctx.shadowBlur = 0;
        ctx.strokeStyle = ganado ? "#00ff90" : "#ff5555";
        ctx.lineWidth = 2;
        ctx.strokeRect(50, 100, canvas.width - 100, 200);
      }, 150);
    }

    crearOrbe();
    loop();
  }, 500);
}
function iniciarDia21() {
  setTimeout(() => {
    const canvas = document.getElementById("canvasFuerza");
    const resultado = document.getElementById("resultadoDia21");
    if (!canvas || !resultado) return;
    const ctx = canvas.getContext("2d");

    const centro = { x: canvas.width / 2, y: canvas.height / 2, r: 30 };
    const orbes = [];
    let repelidos = 0;
    let fallos = 0;
    let juegoActivo = true;
    let animacion;

    // === Crear orbes ===
    function crearOrbe() {
      if (!juegoActivo) return;
      const angulo = Math.random() * Math.PI * 2;
      const distancia = 320 + Math.random() * 30;
      const x = centro.x + Math.cos(angulo) * distancia;
      const y = centro.y + Math.sin(angulo) * distancia;
      orbes.push({
        x,
        y,
        r: 15,
        speed: 1 + Math.random() * 1.2,
        angulo,
        golpeado: false,
      });
      setTimeout(crearOrbe, 900);
    }

    // === Dibujar ===
    function dibujar() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Centro
      ctx.beginPath();
      ctx.arc(centro.x, centro.y, centro.r, 0, Math.PI * 2);
      ctx.fillStyle = "#002244";
      ctx.shadowColor = "#00ff90";
      ctx.shadowBlur = 15;
      ctx.fill();

      // Orbes
      ctx.fillStyle = "#00bfff";
      ctx.shadowColor = "#00bfff";
      ctx.shadowBlur = 10;
      orbes.forEach(o => {
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // HUD
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#00bfff";
      ctx.font = "16px Poppins";
      ctx.fillText(`Repelidos: ${repelidos}`, 10, 20);
      ctx.fillText(`Fallos: ${fallos}/3`, 550, 20);
    }

    // === Actualizar ===
    function actualizar() {
      orbes.forEach((o, i) => {
        if (!o.golpeado) {
          const dx = centro.x - o.x;
          const dy = centro.y - o.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          o.x += (dx / dist) * o.speed;
          o.y += (dy / dist) * o.speed;

          if (dist < centro.r) {
            fallos++;
            orbes.splice(i, 1);
            if (fallos >= 3) finDelJuego(false);
          }
        } else {
          // animación de orbe repelido
          o.x += Math.cos(o.angulo) * o.speed * 10;
          o.y += Math.sin(o.angulo) * o.speed * 10;
          if (
            o.x < -50 ||
            o.x > canvas.width + 50 ||
            o.y < -50 ||
            o.y > canvas.height + 50
          ) {
            orbes.splice(i, 1);
          }
        }
      });

      if (repelidos >= 10) finDelJuego(true);
    }

    // === Control de clic (usar la Fuerza) ===
    canvas.addEventListener("click", e => {
      if (!juegoActivo) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      orbes.forEach(o => {
        const dx = x - o.x;
        const dy = y - o.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < o.r + 10 && !o.golpeado) {
          o.golpeado = true;
          repelidos++;
        }
      });
    });

    // === Bucle principal ===
    function loop() {
      if (!juegoActivo) return;
      actualizar();
      dibujar();
      animacion = requestAnimationFrame(loop);
    }

    // === Fin del juego ===
    function finDelJuego(ganado) {
      if (!juegoActivo) return; // evitar dobles finales
      juegoActivo = false;

      cancelAnimationFrame(animacion); // detiene el loop

      // Dibujar texto después de limpiar y esperar un frame
      setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.textAlign = "center";
        ctx.font = "26px Poppins";
        ctx.shadowColor = ganado ? "#00ff90" : "#ff5555";
        ctx.shadowBlur = 20;
        ctx.fillStyle = ganado ? "#00ff90" : "#ff5555";

        if (ganado) {
          ctx.fillText("¡Has usado la Fuerza con sabiduría!", canvas.width / 2, 180);
          ctx.fillText("Tu palabra clave es FUERZA ⚡", canvas.width / 2, 230);
          resultado.innerHTML =
            "⚡ Has repelido la oscuridad. La Fuerza está contigo.<br>Tu palabra clave es <strong>FUERZA</strong>. ✨";
          resultado.style.color = "#00ff90";
        } else {
          ctx.fillText("💥 Has perdido el equilibrio…", canvas.width / 2, 200);
          ctx.fillText("La concentración lo es todo.", canvas.width / 2, 240);
          resultado.innerHTML =
            "💥 Has perdido el equilibrio. Vuelve a intentarlo: la Fuerza requiere paciencia.";
          resultado.style.color = "#ff6b6b";
        }
      }, 100);
    }

    crearOrbe();
    loop();
  }, 500);
}
function iniciarDia22() {
  setTimeout(() => {
    const botones = document.querySelectorAll(".opcion22");
    const resultado = document.getElementById("resultadoDia22");

    if (botones.length && resultado) {
      botones.forEach(boton => {
        boton.addEventListener("click", () => {
          const eleccion = boton.getAttribute("data-respuesta");

          if (eleccion === "mente") {
            resultado.innerHTML =
              "🌌 La mente en calma ve más allá de los ojos. Has entendido el verdadero poder de la <strong>IMAGINACIÓN</strong>. ✨";
            resultado.style.color = "#90ee90";
          } else if (eleccion === "sable") {
            resultado.innerHTML =
              "🗡️ La fuerza bruta no siempre abre caminos. A veces, las respuestas no se cortan, se crean.";
            resultado.style.color = "#fffb91";
          } else {
            resultado.innerHTML =
              "⚡ El poder sin dirección es solo ruido en la galaxia. Intenta mirar más allá de lo evidente.";
            resultado.style.color = "#ff6b6b";
          }
        });
      });
    }
  }, 100);
}
function iniciarDia23() {
  setTimeout(() => {
    const botones = document.querySelectorAll(".opcion23");
    const resultado = document.getElementById("resultadoDia23");

    if (botones.length && resultado) {
      botones.forEach(boton => {
        boton.addEventListener("click", () => {
          const eleccion = boton.getAttribute("data-respuesta");

          if (eleccion === "arriesgar") {
            resultado.innerHTML =
              "⚔️ Sin dudar, saltas al hiperespacio. La nave vibra, pero sobrevives. Esa es la verdadera <strong>OSADÍA</strong>. ✨";
            resultado.style.color = "#00ff90";
          } else if (eleccion === "esperar") {
            resultado.innerHTML =
              "🛡️ A veces la espera es prudente, pero la prudencia no cambia galaxias.";
            resultado.style.color = "#ffd166";
          } else {
            resultado.innerHTML =
              "🛰️ El miedo es un refugio cómodo, pero nunca un camino digno de un rebelde.";
            resultado.style.color = "#ff6b6b";
          }
        });
      });
    }
  }, 100);
}
function iniciarDia24() {
  setTimeout(() => {
    const boton = document.getElementById("btnFinal");
    const input = document.getElementById("claveFinal");
    const resultado = document.getElementById("resultadoDia24");
    const enlace = document.getElementById("enlaceDescarga");

    if (!boton || !input || !resultado || !enlace) return;

    boton.addEventListener("click", () => {
      const clave = input.value.toLowerCase().trim();

      if (clave === "te quiero mi brujita mafiosa") {
        resultado.innerHTML = "✨ ¡Has pronunciado el hechizo completo! El portal se abre... ✨";
        resultado.style.color = "#00ff90";
        enlace.style.display = "block";
      } else {
        resultado.innerHTML = "❌ Esa no es la frase correcta... reúne bien todas las palabras.";
        resultado.style.color = "#ff6b6b";
        enlace.style.display = "none";
      }
    });
  }, 100);
}



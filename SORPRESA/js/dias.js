// =======================
// 📜 Contenido de cada día
// =======================

const dias = [
  // === DÍA 1 ===
   {
id: 1,
  titulo: "Carta de Aceptación a Hogwarts ✉️",
  tipo: "texto",
  contenido: `
    <div class="carta-hp">
      <p style="text-align: left; margin-bottom: 25px;">
        Srta. Angela Colina <br>
        Futura Maga<br>
        España<br>
      </p>

      <p>Querida Srta. Angela,</p>

      <p>Nos complace informarle que ha sido aceptada para participar en un calendario mágico muy especial: <strong>El Calendario del Misterio</strong>.</p>

      <p>A partir de hoy, deberá resolver acertijos, encontrar pistas y superar pequeños desafíos cada día. Cada vez que lo haga, recibirá una <strong>recompensa</strong>.</p>

      <p>Le recomendamos conservar dichas recompensas, ya que el 24 de diciembre descubrirá un secreto que solo una auténtica maga podría descifrar. ✨</p>

      <p>El viaje comenzará hoy mismo, al abrir la primera de las puertas encantadas. Estamos seguros de que disfrutará cada paso de esta aventura.</p>

      <p>Atentamente,</p>

      <!-- 💡 Espacio para que no se monte sobre la firma -->
      <div style="height:200px;"></div>
    </div>
  `
},

  // === DÍA 2 (ejemplo placeholder, puedes cambiarlo) ===
{
  id: 2,
  titulo: "Primer Desafío ⏳ El Giratiempo",
  tipo: "acertijo",
  recompensa: "Tiempo",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #1b0030 0%, #0a0013 80%);
      border: 2px solid #d4af37;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
      max-width: 600px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
    ">
      <h2 style="color:#ffd700; margin-bottom:25px;">Primer Desafío ⏳</h2>
      <p>“El tiempo es un misterio, incluso para los magos más poderosos.”</p>
      <p><em>– Hermione Granger</em></p>
      <hr style="margin:25px 0; border: none; border-top: 1px solid rgba(255,255,255,0.3);">
      <p><strong>Acertijo:</strong> En Hogwarts, Hermione tenía un artefacto que giraba una y otra vez,
      capaz de cambiar el pasado y alterar el presente. Pero incluso con su poder,
      hay algo que ni ella podía detener... ¿Qué es?</p>

      <input id="respuestaDia2" type="text" placeholder="Escribe tu respuesta..." 
        style="width:80%;padding:10px;border-radius:8px;border:none;
               font-size:1rem;text-align:center;margin-top:20px;">
      <button id="btnDia2" 
        style="margin-top:20px;padding:10px 25px;border:none;
               background:#ffd700;color:#111;border-radius:8px;
               cursor:pointer;font-weight:bold;transition:0.3s;">
        Comprobar
      </button>

      <p id="resultadoDia2" style="margin-top:25px;font-weight:bold;"></p>

      <img src="assets/img/giratiempo.jpg" alt="Giratiempo" 
        style="margin-top:30px;width:100px;height:auto;animation:rotar 8s linear infinite;opacity:0.9;">

      <div style="height:100px;"></div>
    </div>

    <style>
      @keyframes rotar {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    </style>
  `
},
{
  id: 3,
  titulo: "Segundo Desafío ✨ Expecto Patronum",
  tipo: "acertijo",
  recompensa: "Esperanza",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #1a0030 0%, #080015 80%);
      border: 2px solid #b0e0ff;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 30px rgba(176, 224, 255, 0.3);
      max-width: 600px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
    ">
      <h2 style="color:#b0e0ff; margin-bottom:25px;">Segundo Desafío ✨</h2>
      <p>“La felicidad puede hallarse hasta en los momentos más oscuros, si somos capaces de encender la luz.”</p>
      <p><em>- Albus Dumbledore</em></p>
      <hr style="margin:25px 0; border:none; border-top:1px solid rgba(255,255,255,0.3);">
      <p><strong>Acertijo:</strong> Los magos lanzan este hechizo cuando la oscuridad y el miedo los rodean.  
      Solo aquellos que conservan un pensamiento feliz pueden conjurarlo.  
      ¿Cómo se llama el hechizo que ahuyenta a los dementores?</p>

      <input id="respuestaDia3" type="text" placeholder="Escribe tu respuesta..." 
        style="width:80%;padding:10px;border-radius:8px;border:none;
               font-size:1rem;text-align:center;margin-top:20px;">
      <button id="btnDia3" 
        style="margin-top:20px;padding:10px 25px;border:none;
               background:#b0e0ff;color:#111;border-radius:8px;
               cursor:pointer;font-weight:bold;transition:0.3s;">
        Comprobar
      </button>

      <p id="resultadoDia3" style="margin-top:25px;font-weight:bold;"></p>

     <img src="assets/img/patronus.jpg" alt="Patronus" 
     style="margin-top:30px;width:50%;max-width:300px;height:auto;
            animation:brillar 3s ease-in-out infinite;
            opacity:0.95;filter:drop-shadow(0 0 15px #b0e0ff);">

      <div style="height:100px;"></div>
    </div>

    <style>
      @keyframes brillar {
        0% { filter: drop-shadow(0 0 2px #b0e0ff); }
        50% { filter: drop-shadow(0 0 15px #b0e0ff); }
        100% { filter: drop-shadow(0 0 2px #b0e0ff); }
      }
    </style>
  `
},
{
  id: 4,
  titulo: "Tercer Desafío 🔑 La Puerta de las Quimeras",
  tipo: "acertijo",
  recompensa: "Quimera",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #24004a 0%, #0a0018 80%);
      border: 2px solid #ffd700;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
      max-width: 600px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
    ">
      <h2 style="color:#ffd700; margin-bottom:25px;">Tercer Desafío 🔑</h2>
      <p>“Algunas puertas no llevan a lugares, sino a posibilidades.”</p>
      <p><em>– Hechizo de Apertura</em></p>
      <hr style="margin:25px 0; border:none; border-top:1px solid rgba(255,255,255,0.3);">
      <p><strong>Acertijo:</strong> Este encantamiento abre lo que está sellado,  
      pero también simboliza el coraje de quien se atreve a soñar más allá de los límites.  
      ¿Qué hechizo pronunciarías para abrir la puerta de lo imposible?</p>

      <input id="respuestaDia4" type="text" placeholder="Escribe tu respuesta..." 
        style="width:80%;padding:10px;border-radius:8px;border:none;
               font-size:1rem;text-align:center;margin-top:20px;">
      <button id="btnDia4" 
        style="margin-top:20px;padding:10px 25px;border:none;
               background:#ffd700;color:#111;border-radius:8px;
               cursor:pointer;font-weight:bold;transition:0.3s;">
        Comprobar
      </button>

      <p id="resultadoDia4" style="margin-top:25px;font-weight:bold;"></p>

      <img src="assets/img/alohomora.jpg" alt="Alohomora" 
        style="margin-top:30px;width:200px;height:auto;
               animation:flotar 4s ease-in-out infinite;
               opacity:0.9;filter:drop-shadow(0 0 10px #ffd700);">

      <div style="height:80px;"></div>
    </div>

    <style>
      @keyframes flotar {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
      }
    </style>
  `
},
{
  id: 5,
  titulo: "Cuarto Desafío 🪶 El Encantamiento del Aire",
  tipo: "acertijo",
  recompensa: "Unión",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #20003a 0%, #080015 80%);
      border: 2px solid #b47cff;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 30px rgba(180, 124, 255, 0.4);
      max-width: 600px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
    ">
      <h2 style="color:#b47cff; margin-bottom:25px;">Cuarto Desafío 🪶</h2>
      <p>“El verdadero poder no está en levantar algo, sino en hacerlo con gracia y control.”</p>
      <p><em>– Hechizo de Levitación</em></p>
      <hr style="margin:25px 0;border:none;border-top:1px solid rgba(255,255,255,0.3);">
      <p><strong>Acertijo:</strong> Este hechizo requiere equilibrio, concentración y una perfecta pronunciación.  
      Hace que los objetos desafíen la gravedad y se eleven suavemente.  
      ¿Qué encantamiento usarías para hacerlo flotar?</p>

      <input id="respuestaDia5" type="text" placeholder="Escribe tu respuesta..." 
        style="width:80%;padding:10px;border-radius:8px;border:none;
               font-size:1rem;text-align:center;margin-top:20px;">
      <button id="btnDia5" 
        style="margin-top:20px;padding:10px 25px;border:none;
               background:#b47cff;color:#111;border-radius:8px;
               cursor:pointer;font-weight:bold;transition:0.3s;">
        Comprobar
      </button>

      <p id="resultadoDia5" style="margin-top:25px;font-weight:bold;"></p>

      <img src="assets/img/Wingardium_leviosa.webp" alt="Encantamiento del Aire" 
        style="margin-top:30px;width:230px;height:auto;
               animation:flotar 4s ease-in-out infinite;
               opacity:0.95;filter:drop-shadow(0 0 15px #b47cff);">

      <div style="height:80px;"></div>
    </div>

    <style>
      @keyframes flotar {
        0% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
        100% { transform: translateY(0); }
      }
    </style>
  `
},
{
  id: 6,
  titulo: "Quinto Desafío 🍀 El Elixir Dorado",
  tipo: "acertijo",
  recompensa: "Instinto",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #2b003d 0%, #0b0014 80%);
      border: 2px solid #ffd700;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
      max-width: 600px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
    ">
      <h2 style="color:#ffd700; margin-bottom:25px;">Quinto Desafío 🍀</h2>
      <p>“La suerte sigue a quien escucha su voz interior.”</p>
      <p><em>– Profesor Slughorn</em></p>
      <hr style="margin:25px 0; border:none; border-top:1px solid rgba(255,255,255,0.3);">
      <p><strong>Acertijo:</strong> En un pequeño frasco dorado burbujea un líquido que hace que cada decisión parezca perfecta.  
      Pero el verdadero secreto no está en la poción, sino en aquello que la inspira.  
      ¿Qué fuerza invisible guía a quien confía en sí mismo?</p>

      <input id="respuestaDia6" type="text" placeholder="Escribe tu respuesta..." 
        style="width:80%;padding:10px;border-radius:8px;border:none;
               font-size:1rem;text-align:center;margin-top:20px;">
      <button id="btnDia6" 
        style="margin-top:20px;padding:10px 25px;border:none;
               background:#ffd700;color:#111;border-radius:8px;
               cursor:pointer;font-weight:bold;transition:0.3s;">
        Comprobar
      </button>

      <p id="resultadoDia6" style="margin-top:25px;font-weight:bold;"></p>

      <img src="assets/img/felix.jpg" alt="Felix Felicis" 
        style="margin-top:30px;width:220px;height:auto;
               animation:brillar 3s ease-in-out infinite;
               opacity:0.95;filter:drop-shadow(0 0 15px #ffd700);">

      <div style="height:80px;"></div>
    </div>

    <style>
      @keyframes brillar {
        0% { filter: drop-shadow(0 0 5px #ffd700); }
        50% { filter: drop-shadow(0 0 20px #ffd700); }
        100% { filter: drop-shadow(0 0 5px #ffd700); }
      }
    </style>
  `
},
{
  id: 7,
  titulo: "Sexto Desafío 🕯️ La Sombra del Alma",
  tipo: "acertijo",
  recompensa: "Energía",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #150015 0%, #000 80%);
      border: 2px solid #ff5555;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 30px rgba(255, 85, 85, 0.4);
      max-width: 600px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
    ">
      <h2 style="color:#ff5555; margin-bottom:25px;">Sexto Desafío 🕯️</h2>
      <p>“Hasta el alma más fragmentada guarda una chispa que jamás se apaga.”</p>
      <p><em>– Albus Dumbledore</em></p>
      <hr style="margin:25px 0; border:none; border-top:1px solid rgba(255,255,255,0.3);">
      <p><strong>Acertijo:</strong> Algunos magos oscuros dividieron su alma en objetos, buscando engañar a la muerte.  
      Pero en el interior de cada fragmento aún late una chispa que da vida.  
      ¿Cómo se llama esa fuerza que nunca se destruye, solo se transforma?</p>

      <input id="respuestaDia7" type="text" placeholder="Escribe tu respuesta..." 
        style="width:80%;padding:10px;border-radius:8px;border:none;
               font-size:1rem;text-align:center;margin-top:20px;">
      <button id="btnDia7" 
        style="margin-top:20px;padding:10px 25px;border:none;
               background:#ff5555;color:#fff;border-radius:8px;
               cursor:pointer;font-weight:bold;transition:0.3s;">
        Comprobar
      </button>

      <p id="resultadoDia7" style="margin-top:25px;font-weight:bold;"></p>

      <img src="assets/img/horrocrux.jpg" alt="Horrocrux" 
        style="margin-top:30px;width:230px;height:auto;
               animation:pulso 4s ease-in-out infinite;
               opacity:0.9;filter:drop-shadow(0 0 15px #ff5555);">

      <div style="height:80px;"></div>
    </div>

    <style>
      @keyframes pulso {
        0% { transform: scale(1); filter: drop-shadow(0 0 5px #ff5555); }
        50% { transform: scale(1.05); filter: drop-shadow(0 0 20px #ff8888); }
        100% { transform: scale(1); filter: drop-shadow(0 0 5px #ff5555); }
      }
    </style>
  `
},
{
  id: 8,
  titulo: "Séptimo Desafío 🏰 Donde Todo Comenzó",
  tipo: "acertijo",
  recompensa: "Refugio",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #1a0040 0%, #090018 80%);
      border: 2px solid #9b84ff;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 30px rgba(155, 132, 255, 0.4);
      max-width: 600px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
    ">
      <h2 style="color:#bdafff; margin-bottom:25px;">Séptimo Desafío 🏰</h2>
      <p>“Siempre habrá un lugar al que regresar. Un sitio donde la magia nunca muere.”</p>
      <p><em>– Albus Dumbledore</em></p>
      <hr style="margin:25px 0; border:none; border-top:1px solid rgba(255,255,255,0.3);">
      <p><strong>Acertijo:</strong> Entre sus muros se entrelazan ríos de recuerdos y risas. 
      Bajo sus torres descansa la historia de cada bruja y mago que llamó a este lugar su casa. 
      ¿Qué nombre recibe ese refugio de magia eterna?</p>

      <input id="respuestaDia8" type="text" placeholder="Escribe tu respuesta..." 
        style="width:80%;padding:10px;border-radius:8px;border:none;
               font-size:1rem;text-align:center;margin-top:20px;">
      <button id="btnDia8" 
        style="margin-top:20px;padding:10px 25px;border:none;
               background:#9b84ff;color:#111;border-radius:8px;
               cursor:pointer;font-weight:bold;transition:0.3s;">
        Comprobar
      </button>

      <p id="resultadoDia8" style="margin-top:25px;font-weight:bold;"></p>

      <img src="assets/img/hogwarts.webp" alt="Hogwarts" 
        style="margin-top:30px;width:260px;height:auto;
               animation:brillar 4s ease-in-out infinite;
               opacity:0.95;filter:drop-shadow(0 0 20px #9b84ff);">

      <div style="height:80px;"></div>
    </div>

    <style>
      @keyframes brillar {
        0% { filter: drop-shadow(0 0 5px #9b84ff); }
        50% { filter: drop-shadow(0 0 20px #bdafff); }
        100% { filter: drop-shadow(0 0 5px #9b84ff); }
      }
    </style>
  `
},
{
  id: 9,
  titulo: "Octavo Desafío 🐉 Bienvenida al Basgiath",
  tipo: "texto",
  recompensa: "Orgullo",
  contenido: `
    <div class="carta-alas" style="
      background: url('assets/img/carta_alas.jpg') center/cover no-repeat;
      padding: 140px 80px 100px 80px;
      max-width: 700px;
      min-height: 900px;
      margin: 0 auto;
      color: #2b1b10;
      font-family: 'Times New Roman', serif;
      font-size: 1.2rem;
      line-height: 1.6;
      text-align: justify;
      border-radius: 10px;
      box-shadow: 0 0 40px rgba(0,0,0,0.4);
      animation: aparecerCarta 1.5s ease forwards;
    ">
      <h2 style="text-align:center;margin-bottom:30px;color:#3b1a0a;">Academia Militar de Basgiath</h2>
      <p>Querida cadete,</p>
      <p>El viento sopla con fuerza entre las montañas y el rugido de los dragones se escucha incluso antes de verlos.  
      Has cruzado la puerta de un mundo donde la debilidad se castiga y el valor se forja en fuego y sangre.</p>

      <p>No todos los que entran en el parapeto sobreviven al otro lado.  
      Pero tú no eres como los demás.  
      En tus venas no corre miedo, sino determinación.  
      Y en tu alma hay una chispa que ningún dragón puede ignorar.</p>

      <p>Camina con orgullo, mantén la cabeza alta y nunca olvides quién eres,  
      porque aquí el poder no se hereda… se gana.</p>

      <p>Tu palabra clave es <strong>ORGULLO</strong>.</p>

      <p style="margin-top:40px;"><em>– Comandante Lilith Sorrengail</em></p>

      <div style="height:100px;"></div>
    </div>

    <style>
      @keyframes aparecerCarta {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
    </style>
  `
},
{
  id: 10,
  titulo: "Noveno Desafío 🩸 El Parapeto",
  tipo: "acertijo",
  recompensa: "Memoria",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #310000 0%, #0a0000 80%);
      border: 2px solid #ff4444;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 30px rgba(255, 68, 68, 0.4);
      max-width: 600px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
    ">
      <h2 style="color:#ff6666; margin-bottom:25px;">Noveno Desafío 🩸</h2>
      <p>“El viento corta, las piedras hieren, pero lo que más pesa es el recuerdo.”</p>
      <p><em>– Entrenamiento del Basgiath</em></p>
      <hr style="margin:25px 0; border:none; border-top:1px solid rgba(255,255,255,0.3);">
      <p><strong>Desafío:</strong> En el parapeto, cada paso es una promesa y cada caída, un nombre grabado en piedra.  
      No todos cruzan… pero aquellos que lo hacen jamás olvidan a quienes cayeron antes.  
      Recuerda bien: lo que define a un jinete no es su fuerza, sino su capacidad para recordar por quién lucha.  
      <br><br>
      Escribe la palabra que representa aquello que nos mantiene vivos incluso cuando el cuerpo falla.</p>

      <input id="respuestaDia10" type="text" placeholder="Escribe tu respuesta..." 
        style="width:80%;padding:10px;border-radius:8px;border:none;
               font-size:1rem;text-align:center;margin-top:20px;">
      <button id="btnDia10" 
        style="margin-top:20px;padding:10px 25px;border:none;
               background:#ff6666;color:#111;border-radius:8px;
               cursor:pointer;font-weight:bold;transition:0.3s;">
        Comprobar
      </button>

      <p id="resultadoDia10" style="margin-top:25px;font-weight:bold;"></p>

      <img src="assets/img/parapeto.webp" alt="El Parapeto" 
        style="margin-top:30px;width:250px;height:auto;
               animation:brillar 4s ease-in-out infinite;
               opacity:0.9;filter:drop-shadow(0 0 20px #ff4444);">

      <div style="height:80px;"></div>
    </div>

    <style>
      @keyframes brillar {
        0% { filter: drop-shadow(0 0 5px #ff4444); }
        50% { filter: drop-shadow(0 0 20px #ff7777); }
        100% { filter: drop-shadow(0 0 5px #ff4444); }
      }
    </style>
  `
},
{
  id: 11,
  titulo: "Décimo Desafío 🐉 El Instinto del Dragón",
  tipo: "elección",
  recompensa: "Intuición",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #2a0010 0%, #0a0000 80%);
      border: 2px solid #ffb347;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 30px rgba(255, 179, 71, 0.4);
      max-width: 650px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
    ">
      <h2 style="color:#ffb347; margin-bottom:25px;">Décimo Desafío 🐉</h2>
      <p>“Los dragones no eligen por fuerza ni apariencia… sino por instinto.”</p>
      <p><em>– Viejo dicho del Basgiath</em></p>
      <hr style="margin:25px 0; border:none; border-top:1px solid rgba(255,255,255,0.3);">
      <p><strong>Prueba:</strong> Imagina que estás frente a un dragón que te observa.  
      No puedes mentirle, no puedes esconderte.  
      Solo puedes mostrarle una verdad sobre ti.  
      ¿Qué le dirías para que confíe en ti?</p>

      <button class="opcion" data-respuesta="corazon" 
        style="margin-top:25px;display:block;width:80%;padding:12px;border:none;background:#ffb347;color:#111;
               border-radius:8px;cursor:pointer;font-weight:bold;margin:auto;margin-bottom:15px;transition:0.3s;">
        Que sigo lo que dicta mi corazón 💖
      </button>
      <button class="opcion" data-respuesta="mente"
        style="display:block;width:80%;padding:12px;border:none;background:#ffb347;color:#111;
               border-radius:8px;cursor:pointer;font-weight:bold;margin:auto;margin-bottom:15px;transition:0.3s;">
        Que siempre analizo cada movimiento ⚙️
      </button>
      <button class="opcion" data-respuesta="fuerza"
        style="display:block;width:80%;padding:12px;border:none;background:#ffb347;color:#111;
               border-radius:8px;cursor:pointer;font-weight:bold;margin:auto;margin-bottom:15px;transition:0.3s;">
        Que la fuerza es mi mayor virtud 💪
      </button>

      <p id="resultadoDia11" style="margin-top:30px;font-weight:bold;"></p>

      <img src="assets/img/dragon_instinto.webp" alt="El Instinto del Dragón" 
        style="margin-top:30px;width:260px;height:auto;
               animation:aliento 4s ease-in-out infinite;
               opacity:0.95;filter:drop-shadow(0 0 20px #ffb347);">

      <div style="height:80px;"></div>
    </div>

    <style>
      @keyframes aliento {
        0% { filter: drop-shadow(0 0 5px #ffb347); }
        50% { filter: drop-shadow(0 0 20px #ff8c00); }
        100% { filter: drop-shadow(0 0 5px #ffb347); }
      }
    </style>
  `
},
{
  id: 12,
  titulo: "Undécimo Desafío 🔥 El Salto del Fuego",
  tipo: "elección",
  recompensa: "Bravura",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #3b0000 0%, #0a0000 80%);
      border: 2px solid #ff7b00;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 30px rgba(255, 123, 0, 0.4);
      max-width: 650px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
    ">
      <h2 style="color:#ffb347; margin-bottom:25px;">Undécimo Desafío 🔥</h2>
      <p>“No todos los valientes sobreviven… pero todos los que sobreviven fueron valientes.”</p>
      <p><em>– Instrucción de la División de Jinetes</em></p>
      <hr style="margin:25px 0; border:none; border-top:1px solid rgba(255,255,255,0.3);">
      <p><strong>Prueba:</strong> El comandante te ordena saltar sobre una brecha envuelta en fuego para rescatar a un compañero.  
      Tienes solo unos segundos para decidir. ¿Qué haces?</p>

      <button class="opcion12" data-respuesta="salto"
        style="margin-top:25px;display:block;width:80%;padding:12px;border:none;background:#ff7b00;color:#111;
               border-radius:8px;cursor:pointer;font-weight:bold;margin:auto;margin-bottom:15px;transition:0.3s;">
        Saltar sin dudarlo 🔥
      </button>
      <button class="opcion12" data-respuesta="pensar"
        style="display:block;width:80%;padding:12px;border:none;background:#ff7b00;color:#111;
               border-radius:8px;cursor:pointer;font-weight:bold;margin:auto;margin-bottom:15px;transition:0.3s;">
        Analizar el riesgo antes de moverse ⚖️
      </button>
      <button class="opcion12" data-respuesta="esperar"
        style="display:block;width:80%;padding:12px;border:none;background:#ff7b00;color:#111;
               border-radius:8px;cursor:pointer;font-weight:bold;margin:auto;margin-bottom:15px;transition:0.3s;">
        Esperar refuerzos ⚔️
      </button>

      <p id="resultadoDia12" style="margin-top:30px;font-weight:bold;"></p>

      <img src="assets/img/salto_fuego.webp" alt="El Salto del Fuego" 
        style="margin-top:30px;width:250px;height:auto;
               animation:fuego 3s ease-in-out infinite;
               opacity:0.95;filter:drop-shadow(0 0 25px #ff7b00);">

      <div style="height:80px;"></div>
    </div>

    <style>
      @keyframes fuego {
        0% { filter: drop-shadow(0 0 5px #ff7b00); }
        50% { filter: drop-shadow(0 0 20px #ffaa00); }
        100% { filter: drop-shadow(0 0 5px #ff7b00); }
      }
    </style>
  `
},
{
  id: 13,
  titulo: "Duodécimo Desafío 🐲 El Peso de las Alas",
  tipo: "acertijo",
  recompensa: "Resiliencia",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #2d0010 0%, #000 80%);
      border: 2px solid #c0392b;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 30px rgba(192, 57, 43, 0.4);
      max-width: 600px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
    ">
      <h2 style="color:#ff7061; margin-bottom:25px;">Duodécimo Desafío 🐲</h2>
      <p>“No son las alas las que hacen volar al jinete, sino su voluntad.”</p>
      <p><em>– Instrucción del Escuadrón Tairn</em></p>
      <hr style="margin:25px 0;border:none;border-top:1px solid rgba(255,255,255,0.3);">
      <p><strong>Acertijo:</strong> Se rompe pero no se rinde.  
      Se dobla pero nunca cae.  
      Cada herida la hace más fuerte.  
      Y aunque el fuego la consuma, renace más pura que antes.  
      ¿Qué es?</p>

      <input id="respuestaDia13" type="text" placeholder="Escribe tu respuesta..." 
        style="width:80%;padding:10px;border-radius:8px;border:none;
               font-size:1rem;text-align:center;margin-top:20px;">
      <button id="btnDia13" 
        style="margin-top:20px;padding:10px 25px;border:none;
               background:#ff7061;color:#111;border-radius:8px;
               cursor:pointer;font-weight:bold;transition:0.3s;">
        Comprobar
      </button>

      <p id="resultadoDia13" style="margin-top:25px;font-weight:bold;"></p>

      <img src="assets/img/alas_peso.jpg" alt="El Peso de las Alas" 
        style="margin-top:30px;width:240px;height:auto;
               animation:resurgir 4s ease-in-out infinite;
               opacity:0.95;filter:drop-shadow(0 0 20px #ff7061);">

      <div style="height:80px;"></div>
    </div>

    <style>
      @keyframes resurgir {
        0% { transform: translateY(0); opacity: 0.9; }
        50% { transform: translateY(-8px); opacity: 1; }
        100% { transform: translateY(0); opacity: 0.9; }
      }
    </style>
  `
},
{
  id: 14,
  titulo: "Decimotercer Desafío 🐉 El Vínculo",
  tipo: "elección",
  recompensa: "Unidad",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #1b0010 0%, #000 80%);
      border: 2px solid #f0a500;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 30px rgba(240,165,0,0.4);
      max-width: 650px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
    ">
      <h2 style="color:#f0a500; margin-bottom:25px;">Decimotercer Desafío 🐉</h2>
      <p>“El vínculo entre jinete y dragón no se ordena, se gana.”</p>
      <p><em>– Instrucción de Vinculación del Basgiath</em></p>
      <hr style="margin:25px 0; border:none; border-top:1px solid rgba(255,255,255,0.3);">
      <p><strong>Prueba:</strong> Estás frente a tu dragón. Sientes su mente, su respiración, su fuerza.  
      Es un ser libre, y tú no puedes forzarlo.  
      ¿Qué le dices para demostrar que puede confiar en ti?</p>

      <button class="opcion14" data-respuesta="confianza"
        style="margin-top:25px;display:block;width:80%;padding:12px;border:none;background:#f0a500;color:#111;
               border-radius:8px;cursor:pointer;font-weight:bold;margin:auto;margin-bottom:15px;transition:0.3s;">
        “No intentaré controlarte, caminaremos juntos.” 🤝
      </button>
      <button class="opcion14" data-respuesta="fuerza"
        style="display:block;width:80%;padding:12px;border:none;background:#f0a500;color:#111;
               border-radius:8px;cursor:pointer;font-weight:bold;margin:auto;margin-bottom:15px;transition:0.3s;">
        “Obedecerás porque soy tu jinete.” ⚔️
      </button>
      <button class="opcion14" data-respuesta="silencio"
        style="display:block;width:80%;padding:12px;border:none;background:#f0a500;color:#111;
               border-radius:8px;cursor:pointer;font-weight:bold;margin:auto;margin-bottom:15px;transition:0.3s;">
        Guardar silencio y mirarle a los ojos 🐉
      </button>

      <p id="resultadoDia14" style="margin-top:30px;font-weight:bold;"></p>

      <img src="assets/img/vinculo.jpg" alt="El Vínculo" 
        style="margin-top:30px;width:270px;height:auto;
               animation:vinculo 4s ease-in-out infinite;
               opacity:0.95;filter:drop-shadow(0 0 20px #f0a500);">

      <div style="height:80px;"></div>
    </div>

    <style>
      @keyframes vinculo {
        0% { transform: scale(1); filter: drop-shadow(0 0 10px #f0a500); }
        50% { transform: scale(1.03); filter: drop-shadow(0 0 25px #ffd15c); }
        100% { transform: scale(1); filter: drop-shadow(0 0 10px #f0a500); }
      }
    </style>
  `
},
{
  id: 15,
  titulo: "Decimocuarto Desafío ⚖️ El Juramento del Jinete",
  tipo: "acertijo",
  recompensa: "Justicia",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #1a0005 0%, #000 80%);
      border: 2px solid #d4af37;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 30px rgba(212, 175, 55, 0.4);
      max-width: 600px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
    ">
      <h2 style="color:#ffd700; margin-bottom:25px;">Decimocuarto Desafío ⚖️</h2>
      <p>“El poder sin conciencia es el fin de todo imperio.”</p>
      <p><em>– Juramento de los Jinetes</em></p>
      <hr style="margin:25px 0;border:none;border-top:1px solid rgba(255,255,255,0.3);">
      <p><strong>Acertijo:</strong> Puede inclinarse ante el oro, pero nunca ante el miedo.  
      Golpea con razón, no con rabia.  
      Si no se cumple, el mundo se hunde en el caos.  
      ¿Qué es?</p>

      <input id="respuestaDia15" type="text" placeholder="Escribe tu respuesta..." 
        style="width:80%;padding:10px;border-radius:8px;border:none;
               font-size:1rem;text-align:center;margin-top:20px;">
      <button id="btnDia15" 
        style="margin-top:20px;padding:10px 25px;border:none;
               background:#d4af37;color:#111;border-radius:8px;
               cursor:pointer;font-weight:bold;transition:0.3s;">
        Comprobar
      </button>

      <p id="resultadoDia15" style="margin-top:25px;font-weight:bold;"></p>

      <img src="assets/img/juramento.webp" alt="El Juramento del Jinete" 
        style="margin-top:30px;width:240px;height:auto;
               animation:latir 4s ease-in-out infinite;
               opacity:0.95;filter:drop-shadow(0 0 20px #d4af37);">

      <div style="height:80px;"></div>
    </div>

    <style>
      @keyframes latir {
        0% { transform: scale(1); filter: drop-shadow(0 0 5px #d4af37); }
        50% { transform: scale(1.05); filter: drop-shadow(0 0 25px #fff4b2); }
        100% { transform: scale(1); filter: drop-shadow(0 0 5px #d4af37); }
      }
    </style>
  `
},
{
  id: 16,
  titulo: "Decimoquinto Desafío 🌌 La Llamada de la Fuerza",
  tipo: "texto",
  recompensa: "Inspiración",
  contenido: `
    <div style="
      position: relative;
      background: url('assets/img/stars_bg.webp') center/cover no-repeat #000;
      overflow: hidden;
      height: 90vh;
      max-height: 900px;
      color: #ffcc00;
      font-family: 'Pathway Gothic One', sans-serif;
      letter-spacing: 2px;
      perspective: 400px;
    ">
      <div style="
        position: absolute;
        bottom: -50px;
        width: 100%;
        transform-origin: 50% 100%;
        transform: rotateX(22deg);
        animation: crawl 45s linear forwards;
      ">
        <p style="text-align:center; font-size:2rem; margin-bottom:30px;">Episodio XVI</p>
        <h2 style="text-align:center; font-size:2.5rem; margin-bottom:40px; text-transform:uppercase;">
          La Llamada de la Fuerza
        </h2>
        <p style="width:70%; margin:0 auto; font-size:1.5rem; line-height:2.3rem; text-align:justify;">
          En una galaxia que lucha entre la luz y la oscuridad, surge una nueva esperanza.
          Un aprendiz siente el eco de algo antiguo… la Fuerza despierta en su interior.
          Los astros guardan silencio mientras un nuevo destino se escribe entre las estrellas.
        </p>
        <br>
        <p style="width:70%; margin:0 auto; font-size:1.5rem; line-height:2.3rem; text-align:justify;">
          Su misión no será sencilla: encontrar equilibrio donde otros solo ven poder.
          Las sombras susurran tentaciones, pero la luz siempre espera a quien se atreve a mirar más allá.
        </p>
        <br>
        <p style="width:70%; margin:0 auto; font-size:1.5rem; line-height:2.3rem; text-align:justify;">
          Que la Fuerza te guíe, aprendiz. En ella hallarás tu <strong>INSPIRACIÓN</strong>.
        </p>
        <br><br>
        <p style="text-align:center; font-size:1.2rem; opacity:0.8;"><em>– Maestro Obi-Wan Kenobi</em></p>
      </div>
    </div>

    <style>
      @keyframes crawl {
        0% { transform: rotateX(22deg) translateY(70vh); }
        100% { transform: rotateX(25deg) translateY(-350vh); }
      }
      @import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');
    </style>
  `
},
{
  id: 17,
  titulo: "Decimosexto Desafío 🌌 La Decisión del Camino",
  tipo: "elección",
  recompensa: "Travesía",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #000000 0%, #010a26 80%);
      border: 2px solid #66ccff;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 30px rgba(102,204,255,0.4);
      max-width: 650px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
    ">
      <h2 style="color:#66ccff; margin-bottom:25px;">Decimosexto Desafío 🌌</h2>
      <p>“Nuestro destino no está escrito por las estrellas, sino por las decisiones que tomamos.”</p>
      <p><em>– Maestro Jedi</em></p>
      <hr style="margin:25px 0; border:none; border-top:1px solid rgba(255,255,255,0.3);">
      <p><strong>Prueba:</strong> Estás ante dos caminos.  
      Uno brilla con una luz cálida y calma.  
      El otro vibra con poder y pasión.  
      No hay mapa, solo tu instinto.  
      ¿Cuál eliges?</p>

      <button class="opcion17" data-respuesta="luz"
        style="margin-top:25px;display:block;width:80%;padding:12px;border:none;background:#66ccff;color:#111;
               border-radius:8px;cursor:pointer;font-weight:bold;margin:auto;margin-bottom:15px;transition:0.3s;">
        El Camino de la Luz ✨
      </button>
      <button class="opcion17" data-respuesta="oscuridad"
        style="display:block;width:80%;padding:12px;border:none;background:#66ccff;color:#111;
               border-radius:8px;cursor:pointer;font-weight:bold;margin:auto;margin-bottom:15px;transition:0.3s;">
        El Camino de la Oscuridad 🌑
      </button>
      <button class="opcion17" data-respuesta="propio"
        style="display:block;width:80%;padding:12px;border:none;background:#66ccff;color:#111;
               border-radius:8px;cursor:pointer;font-weight:bold;margin:auto;margin-bottom:15px;transition:0.3s;">
        Mi propio camino 🌠
      </button>

      <p id="resultadoDia17" style="margin-top:30px;font-weight:bold;"></p>

      <img src="assets/img/camino_estrellas.jpg" alt="La Decisión del Camino" 
        style="margin-top:30px;width:270px;height:auto;
               animation:destello 4s ease-in-out infinite;
               opacity:0.95;filter:drop-shadow(0 0 20px #66ccff);">

      <div style="height:80px;"></div>
    </div>

    <style>
      @keyframes destello {
        0% { filter: drop-shadow(0 0 5px #66ccff); }
        50% { filter: drop-shadow(0 0 25px #aee4ff); }
        100% { filter: drop-shadow(0 0 5px #66ccff); }
      }
    </style>
  `
},
{
  id: 18,
  titulo: "Decimoséptimo Desafío 🌠 El Vuelo de las Estrellas",
  tipo: "acertijo",
  recompensa: "Alas",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #000016 0%, #000000 80%);
      border: 2px solid #66ccff;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 40px rgba(102,204,255,0.3);
      max-width: 600px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
    ">
      <h2 style="color:#66ccff; margin-bottom:25px;">Decimoséptimo Desafío 🌠</h2>
      <p>“No todos los vuelos se hacen con motores, ni todas las alas se ven.”</p>
      <p><em>– Antiguo proverbio galáctico</em></p>
      <hr style="margin:25px 0; border:none; border-top:1px solid rgba(255,255,255,0.3);">
      <p><strong>Acertijo:</strong> Nace en la oscuridad pero brilla sin calor.  
      Atraviesa el vacío sin hacer ruido.  
      No tiene cuerpo, pero guía a quienes se atreven a volar.  
      ¿Qué es?</p>

      <input id="respuestaDia18" type="text" placeholder="Escribe tu respuesta..." 
        style="width:80%;padding:10px;border-radius:8px;border:none;
               font-size:1rem;text-align:center;margin-top:20px;">
      <button id="btnDia18" 
        style="margin-top:20px;padding:10px 25px;border:none;
               background:#66ccff;color:#111;border-radius:8px;
               cursor:pointer;font-weight:bold;transition:0.3s;">
        Comprobar
      </button>

      <p id="resultadoDia18" style="margin-top:25px;font-weight:bold;"></p>

      <img src="assets/img/alas_estelares.jpg" alt="El Vuelo de las Estrellas" 
        style="margin-top:30px;width:260px;height:auto;
               animation:flotarLuz 4s ease-in-out infinite;
               opacity:0.95;filter:drop-shadow(0 0 20px #66ccff);">

      <div style="height:80px;"></div>
    </div>

    <style>
      @keyframes flotarLuz {
        0% { transform: translateY(0); filter: drop-shadow(0 0 5px #66ccff); }
        50% { transform: translateY(-10px); filter: drop-shadow(0 0 25px #99e1ff); }
        100% { transform: translateY(0); filter: drop-shadow(0 0 5px #66ccff); }
      }
    </style>
  `
},
{

  id: 19,
  titulo: "Decimoctavo Desafío 🎮 Entrenamiento Jedi",
  tipo: "juego",
  recompensa: "Magia",
  contenido: `
    <div id="juegoJedi" style="
      background: radial-gradient(circle at top, #000010 0%, #000 80%);
      border: 2px solid #00bfff;
      border-radius: 20px;
      padding: 20px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 40px rgba(0,191,255,0.3);
      max-width: 700px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
      position: relative;
      overflow: hidden;
      height: 500px;
    ">
      <h2 style="color:#00bfff;">Decimoctavo Desafío 🎮</h2>
      <p>Usa las <strong>flechas</strong> para moverte y <strong>ESPACIO</strong> para disparar a los orbes antes de que te alcancen.</p>
      <canvas id="canvasJedi" width="650" height="400" 
        style="background:#000;margin-top:20px;border:1px solid #00bfff;border-radius:8px;"></canvas>
      <p id="resultadoDia19" style="margin-top:15px;font-weight:bold;"></p>
    </div>
  `
},{
  id: 20,
  titulo: "Decimonoveno Desafío 💫 El Lado del Corazón",
  tipo: "texto",
  recompensa: "Amor",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #000011 0%, #000 80%);
      border: 2px solid #ff77aa;
      border-radius: 20px;
      padding: 60px 40px;
      text-align: justify;
      color: #fff;
      box-shadow: 0 0 40px rgba(255, 119, 170, 0.4);
      max-width: 700px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
      line-height: 1.8;
    ">
      <h2 style="text-align:center;color:#ff77aa;margin-bottom:25px;">Decimonoveno Desafío 💫</h2>
      <p>“El miedo lleva a la ira, la ira al odio… y el odio al sufrimiento.  
      Pero el amor conduce al equilibrio.”</p>
      <p><em>– Maestro Yoda</em></p>
      <hr style="margin:25px 0;border:none;border-top:1px solid rgba(255,255,255,0.3);">

      <p>Los maestros Jedi dicen que el apego nubla la mente,  
      pero los más sabios saben que el corazón no es un enemigo de la Fuerza.  
      Sentir no te aleja del camino… te recuerda por qué lo sigues.</p>

      <p>El amor no es debilidad; es el vínculo invisible que mantiene unida la galaxia,  
      lo que hace que incluso la oscuridad más densa contenga una chispa de luz.</p>

      <p>Y entre esas chispas, hay una que guía mi propio equilibrio,  
      una que brilla con una fuerza que ni mil soles podrían igualar.</p>

      <p>Tu palabra clave es <strong>AMOR</strong>.</p>

      <p style="text-align:right;margin-top:40px;"><em>– Registro de un aprendiz Jedi</em></p>
      <div style="height:60px;"></div>
    </div>
  `
},
{
  id: 21,
  titulo: "Vigésimo Desafío ⚡ Usa la Fuerza",
  tipo: "juego",
  recompensa: "Fuerza",
  contenido: `
    <div id="fuerzaGame" style="
      background: radial-gradient(circle at top, #000022 0%, #000 80%);
      border: 2px solid #00bfff;
      border-radius: 20px;
      padding: 20px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 40px rgba(0,191,255,0.3);
      max-width: 700px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
      position: relative;
      overflow: hidden;
      height: 500px;
    ">
      <h2 style="color:#00bfff;">Vigésimo Desafío ⚡</h2>
      <p>Usa el poder de la <strong>Fuerza</strong> para repeler los orbes antes de que lleguen al centro.</p>
      <canvas id="canvasFuerza" width="650" height="400"
        style="background:#000;margin-top:20px;border:1px solid #00bfff;border-radius:8px;"></canvas>
      <p id="resultadoDia21" style="margin-top:15px;font-weight:bold;"></p>
    </div>
  `
},
{
  id: 22,
  titulo: "Vigésimo Primer Desafío 🌌 Visiones del Lado Luminoso",
  tipo: "elección",
  recompensa: "Imaginación",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #000018 0%, #000 80%);
      border: 2px solid #6a5acd;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 40px rgba(106,90,205,0.3);
      max-width: 650px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
      line-height: 1.8;
    ">
      <h2 style="color:#a991ff; margin-bottom:25px;">Vigésimo Primer Desafío 🌌</h2>
      <p>“Tus ojos pueden engañarte. No confíes en ellos.”</p>
      <p><em>– Obi-Wan Kenobi</em></p>
      <hr style="margin:25px 0;border:none;border-top:1px solid rgba(255,255,255,0.3);">

      <p>En una meditación profunda, la Fuerza te muestra tres visiones.  
      Solo una revela el camino hacia la verdadera sabiduría.  
      ¿Cuál eliges?</p>

      <button class="opcion22" data-respuesta="sable"
        style="margin-top:25px;display:block;width:80%;padding:12px;border:none;background:#6a5acd;color:#fff;
               border-radius:8px;cursor:pointer;font-weight:bold;margin:auto;margin-bottom:15px;transition:0.3s;">
        🗡️ Una espada brillante cortando la oscuridad.
      </button>

      <button class="opcion22" data-respuesta="mente"
        style="display:block;width:80%;padding:12px;border:none;background:#6a5acd;color:#fff;
               border-radius:8px;cursor:pointer;font-weight:bold;margin:auto;margin-bottom:15px;transition:0.3s;">
        🧘‍♀️ Una mente en calma flotando entre estrellas.
      </button>

      <button class="opcion22" data-respuesta="poder"
        style="display:block;width:80%;padding:12px;border:none;background:#6a5acd;color:#fff;
               border-radius:8px;cursor:pointer;font-weight:bold;margin:auto;margin-bottom:15px;transition:0.3s;">
        ⚡ Una tormenta galáctica de poder puro.
      </button>

      <p id="resultadoDia22" style="margin-top:30px;font-weight:bold;"></p>

      <img src="assets/img/vision_fuerza.webp" alt="Visiones de la Fuerza" 
        style="margin-top:30px;width:270px;height:auto;
               animation:brilloVision 4s ease-in-out infinite;
               opacity:0.95;filter:drop-shadow(0 0 20px #6a5acd);">

      <div style="height:80px;"></div>
    </div>

    <style>
      @keyframes brilloVision {
        0% { transform: scale(1); filter: drop-shadow(0 0 5px #6a5acd); }
        50% { transform: scale(1.05); filter: drop-shadow(0 0 25px #a991ff); }
        100% { transform: scale(1); filter: drop-shadow(0 0 5px #6a5acd); }
      }
    </style>
  `
},
{
  id: 23,
  titulo: "Vigésimo Segundo Desafío ⚔️ El Salto Rebelde",
  tipo: "elección",
  recompensa: "Osadía",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #000008 0%, #000 80%);
      border: 2px solid #ff4444;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 40px rgba(255,68,68,0.3);
      max-width: 650px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
      line-height: 1.8;
    ">
      <h2 style="color:#ff6666; margin-bottom:25px;">Vigésimo Segundo Desafío ⚔️</h2>
      <p>“Los cobardes buscan órdenes. Los valientes crean el camino.”</p>
      <p><em>– General Leia Organa</em></p>
      <hr style="margin:25px 0;border:none;border-top:1px solid rgba(255,255,255,0.3);">

      <p>La base rebelde está a punto de caer.  
      Los cazas enemigos se acercan y el hiperespacio aún no está listo.  
      Solo queda una oportunidad…</p>
      <p>¿Qué harías?</p>

      <button class="opcion23" data-respuesta="arriesgar"
        style="margin-top:25px;display:block;width:80%;padding:12px;border:none;background:#ff4444;color:#fff;
               border-radius:8px;cursor:pointer;font-weight:bold;margin:auto;margin-bottom:15px;transition:0.3s;">
        🚀 Tomar el control de la nave y lanzarte directo al vacío.
      </button>

      <button class="opcion23" data-respuesta="esperar"
        style="display:block;width:80%;padding:12px;border:none;background:#ff4444;color:#fff;
               border-radius:8px;cursor:pointer;font-weight:bold;margin:auto;margin-bottom:15px;transition:0.3s;">
        🛡️ Esperar órdenes del mando.
      </button>

      <button class="opcion23" data-respuesta="ocultar"
        style="display:block;width:80%;padding:12px;border:none;background:#ff4444;color:#fff;
               border-radius:8px;cursor:pointer;font-weight:bold;margin:auto;margin-bottom:15px;transition:0.3s;">
        🛰️ Ocultarte y esperar a que pase el peligro.
      </button>

      <p id="resultadoDia23" style="margin-top:30px;font-weight:bold;"></p>

      <img src="assets/img/rebelde.jpg" alt="El Salto Rebelde" 
        style="margin-top:30px;width:270px;height:auto;
               animation:destelloRebelde 4s ease-in-out infinite;
               opacity:0.95;filter:drop-shadow(0 0 20px #ff4444);">

      <div style="height:80px;"></div>
    </div>

    <style>
      @keyframes destelloRebelde {
        0% { transform: scale(1); filter: drop-shadow(0 0 5px #ff4444); }
        50% { transform: scale(1.05); filter: drop-shadow(0 0 25px #ffaaaa); }
        100% { transform: scale(1); filter: drop-shadow(0 0 5px #ff4444); }
      }
    </style>
  `
},
{
  id: 24,
  titulo: "Vigésimo Tercer Desafío 🌠 El Portal Final",
  tipo: "final",
  recompensa: "Sueño + Alma",
  contenido: `
    <div style="
      background: radial-gradient(circle at top, #000015 0%, #000 80%);
      border: 2px solid #ffd700;
      border-radius: 20px;
      padding: 60px 40px;
      text-align: center;
      color: #fff;
      box-shadow: 0 0 40px rgba(255,215,0,0.4);
      max-width: 700px;
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
      line-height: 1.8;
    ">
      <h2 style="color:#ffd700; margin-bottom:25px;">Vigésimo Tercer Desafío 🌠</h2>
      <p>Has llegado al final del viaje.  
      Has cruzado tres mundos, enfrentado magia, fuego y estrellas.  
      Y solo te quedan las dos últimas piezas...</p>

      <p style="margin-top:30px;font-size:1.3rem;">
        Tu penúltima palabra es <strong>SUEÑO</strong> 🌙  
        <br>
        Y la última, la que las une todas, es <strong>ALMA</strong> 💫
      </p>

      <hr style="margin:30px 0;border:none;border-top:1px solid rgba(255,255,255,0.3);">
      <p>Reúne todas tus recompensas y forma la frase secreta.  
      Escribe el hechizo completo para abrir el último portal y descubrir el regalo final.</p>

      <input id="claveFinal" type="text" placeholder="Escribe la frase completa aquí..." 
        style="width:80%;padding:10px;border-radius:8px;border:none;
               font-size:1rem;text-align:center;margin-top:20px;">
      <button id="btnFinal" 
        style="margin-top:20px;padding:10px 25px;border:none;
               background:#ffd700;color:#111;border-radius:8px;
               cursor:pointer;font-weight:bold;transition:0.3s;">
        Desbloquear Portal ✨
      </button>

      <p id="resultadoDia24" style="margin-top:25px;font-weight:bold;"></p>
      <div id="enlaceDescarga" style="margin-top:30px; display:none;">
        <a href="assets/video/regalo_final.mp4" download 
           style="background:#ffd700;color:#000;padding:12px 30px;
                  border-radius:10px;font-weight:bold;text-decoration:none;
                  box-shadow:0 0 15px rgba(255,215,0,0.6);">
          Descargar regalo final 🎁
        </a>
      </div>

      <div style="height:60px;"></div>
    </div>
  `
}

];

// 🌙 Mundo feérico: El duende vigilante y el ciclo mágico

// Estado del bosque mágico
const estado = {
  noches: 0,
  aburrimientoHadas: 0,
  caos: 0
};

// 🔮 Oráculo lunar: la luna se llena en la noche 5
function oraculoLunar() {
  return estado.noches >= 5;
}

// 🧚 Coro de hadas: se aburren cuando pasan más de 2 noches
function coroHadas() {
  return estado.aburrimientoHadas > 2;
}

// 💥 Hechizo de caos: se activa cuando el número de noches es múltiplo de 7
function hechizoCaos() {
  return estado.noches !== 0 && estado.noches % 7 === 0;
}

// ✨ Acción al pasar una noche
function pasarNoche() {
  estado.noches++;
  estado.aburrimientoHadas++;
  estado.caos++; // Podrías usarlo para otras reglas mágicas si quieres

  console.log(
    `🌙 Noche ${estado.noches}: el duende sigue vigilando el bosque encantado...`
  );
}

// 🔁 Condición para continuar el ciclo
function continuarVigilando() {
  const lunaLlena = oraculoLunar();
  const hadasAburridas = coroHadas();
  const caosActivado = hechizoCaos();

  // El ciclo sigue solo si ninguna magia ha detenido la vigilancia
  return !lunaLlena && !hadasAburridas && !caosActivado;
}

// 🧝‍♂️ Bucle principal: el ciclo mágico de vigilancia
while (continuarVigilando()) {
  pasarNoche();
}

// ✅ Mensajes finales según qué magia detuvo el ciclo
if (oraculoLunar()) {
  console.log("🌕 Final: La luna está llena. El ritual puede comenzar.");
} else if (coroHadas()) {
  console.log(
    "🧚 Final: El coro de hadas se aburrió y detuvo todo con una canción brillante."
  );
} else if (hechizoCaos()) {
  console.log(
    "💥 Final: Un hechizo de caos explotó y rompió el ciclo inesperadamente."
  );
} else {
  console.log(
    "✨ Final: La vigilancia terminó, pero ninguna magia fuerte se manifestó."
  );
}; 

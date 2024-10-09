// Seleção de elementos
const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
const audio = new Audio(); // Reutilizando a mesma instância de Audio

// Função para tocar uma nota
const playTune = (key) => {
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  if (!clickedKey) return; // Evitar erro se a tecla não existir
  
  audio.src = `src/tunes/${key}.wav`;
  audio.play();

  // Adiciona a classe "active" para animação
  clickedKey.classList.add("active");
  
  // Remove a classe "active" após 150ms
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

// Inicialização do mapeamento de teclas
pianoKeys.forEach((key) => {
  mapedKeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});

// Evento para pressionar teclas no teclado físico
document.addEventListener("keydown", (e) => {
  if (mapedKeys.includes(e.key)) {
    playTune(e.key);
  }
});

// Função para ajustar o volume
const handleVolume = (e) => {
  audio.volume = e.target.value; // Controla o volume do áudio
};

// Função para mostrar ou esconder as teclas
const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

// Event listeners
volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHideKeys);

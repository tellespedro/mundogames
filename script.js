const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.classList.add('show');
        }
    });
});

const cores = [
    '#FF5733', // Laranja
    '#FFC300', // Amarelo
    '#4CAF50', // Verde
    '#00BCD4', // Azul claro
    '#2196F3', // Azul
    '#9C27B0', // Roxo
    '#E91E63', // Rosa
];

cards.forEach(card => {
    const randomIndex = Math.floor(Math.random() * cores.length);
    card.style.backgroundColor = cores[randomIndex];
});
// ... (código anterior) ...

const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const starCount = 200; // Número de estrelas
const stars = [];

// Classe para representar uma estrela
class Star {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1; // Tamanho aleatório
    this.speed = Math.random() * 0.5 + 0.1; // Velocidade aleatória
    this.opacity = Math.random() * 0.5 + 0.5; // Opacidade aleatória
  }

  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Cria as estrelas
for (let i = 0; i < starCount; i++) {
  stars.push(new Star());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Atualiza e desenha as estrelas
  stars.forEach(star => {
    star.update();
    star.draw();
  });

  requestAnimationFrame(animate);
}

animate();

const shuffleButton = document.getElementById('shuffleButton');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffleButton.addEventListener('click', () => {
  const cardsArray = Array.from(cards);
  const shuffledCards = shuffleArray(cardsArray);

  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = '';

  shuffledCards.forEach(card => {
    gridContainer.appendChild(card);
  });
});

// ... (código anterior) ...
// ... (código anterior) ...

shuffleButton.addEventListener('click', () => {
  const cardsArray = Array.from(cards);
  const shuffledCards = shuffleArray(cardsArray);

  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = '';

  // Cria o elemento temporário
  const tempContainer = document.createElement('div');

  // Adiciona os cards ao elemento temporário
  shuffledCards.forEach(card => {
    tempContainer.appendChild(card);
  });

  // Adiciona o elemento temporário à grid-container
  gridContainer.appendChild(tempContainer);
});

// ... (código anterior) ...

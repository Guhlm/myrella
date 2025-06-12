const fotosArray = [
  "foto6.JPEG",
  "foto1.JPEG",
  "foto2.JPEG",
  "foto1.JPEG",
  "foto4.JPEG",
  "foto5.JPEG",
  "foto5.JPEG",
  "foto3.JPEG",
  "foto4.JPEG",
  "foto2.JPEG",
  "foto6.JPEG",
  "foto3.JPEG",
];

let gameBoard = document.querySelector(".game-board");
let firstCard = null;
let secondCard = null;
let lockBoard = false;


function embaralharFotos() {
  fotosArray.sort(() => Math.random() - 0.5);
}

function criarTabuleiro() {
  gameBoard.innerHTML = "";
  fotosArray.forEach((image) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.dataset.image = image;

    let imgElement = document.createElement("img");
    imgElement.src = `src/${image}`;

    card.appendChild(imgElement);
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  });
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  let img = this.querySelector("img");
  img.style.display = "block";
  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    // Desabilita clique nas cartas combinadas
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      firstCard.querySelector("img").style.display = "none";
      secondCard.querySelector("img").style.display = "none";
      resetBoard();
    }, 1000);
  }
}

function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];

  const allFlipped = document.querySelectorAll(".card.flipped").length;
  if (allFlipped === fotosArray.length) {
    setTimeout(() => {
      alert("Parabéns! Você encontrou todos os pares! 💖");
      embaralharFotos();
      criarTabuleiro();
    }, 300);
  }
}

// Inicialização do jogo
embaralharFotos();
criarTabuleiro();

const imagens = ["./src/foto1.JPEG", "./src/foto2.JPEG", "./src/foto3.JPEG",
   "./src/foto4.JPEG", "./src/foto5.JPEG", "./src/foto6.JPEG"];

let indiceAtual = 0;

const foto = document.getElementById("foto");
const botaoAnterior = document.getElementById("botao-anterior");
const botaoProximo = document.getElementById("botao-proximo");

function atualizarCarrossel() {
  foto.src = imagens[indiceAtual];
}

botaoAnterior.addEventListener("click", () => {
  indiceAtual = indiceAtual > 0 ? indiceAtual - 1 : imagens.length - 1;
  atualizarCarrossel();
});

botaoProximo.addEventListener("click", () => {
  indiceAtual = indiceAtual < imagens.length - 1 ? indiceAtual + 1 : 0;
  atualizarCarrossel();
});

// Inicializar com a primeira imagem
atualizarCarrossel();

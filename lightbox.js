const imagens = {
  ...imagensVenda,
  ...imagensAluguel
};

let currentImovel = "";
let currentImageIndex = 0;

function abrirLightbox(imovel, index) {
  currentImovel = imovel;
  currentImageIndex = index;
  mostrarImagem();
  document.getElementById("lightbox").style.display = "flex";
}

function fecharLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function alterarImagem(n) {
  const total = imagens[currentImovel].length;
  currentImageIndex = (currentImageIndex + n + total) % total;
  mostrarImagem();
}

function mostrarImagem() {
  const lightboxImagem = document.getElementById("lightbox-imagem");
  lightboxImagem.src = imagens[currentImovel][currentImageIndex];
}

document.addEventListener("DOMContentLoaded", function () {
  const fecharBtn = document.querySelector(".fechar");
  if (fecharBtn) {
    fecharBtn.addEventListener("click", fecharLightbox);
  }

  const inputsData = document.querySelectorAll('.data-aluguel');
  const hoje = new Date().toISOString().split('T')[0];
  inputsData.forEach(input => {
    input.setAttribute('min', hoje);
  });
});


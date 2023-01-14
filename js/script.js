// ativar links do menu
const links = document.querySelectorAll(`.header-menu a`);

function ativatLink(link) {
  const url = window.location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add(`ativo`);
  }
}
links.forEach(ativatLink);

//
//ativar itens do orcamento
const parametros = new URLSearchParams(window.location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

//
//perguntas frequentes
const perguntas = document.querySelectorAll(`.perguntas button`);

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute(`aria-controls`);
  const resposta = document.getElementById(controls);

  if (resposta) {
    resposta.classList.toggle(`ativa`);
    const ativa = resposta.classList.contains(`ativa`); // retorna boolean
    pergunta.setAttribute(`aria-expanded`, ativa);
  }
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener(`click`, ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

//
// galeria de bicicletas
const galeria = document.querySelectorAll(`.bicicleta-imagens img`);
const galeriaContainer = document.querySelector(`.bicicleta-imagens`);

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = window.matchMedia(`(min-width: 1000px)`).matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function evetosGaleria(img) {
  img.addEventListener(`click`, trocarImagem);
}

galeria.forEach(evetosGaleria);

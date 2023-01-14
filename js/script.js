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
    console.log(elemento);
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
    const ativa = resposta.classList.contains(`ativa`);
    pergunta.setAttribute(`aria-expanded`, ativa);
  }

  console.log(resposta);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener(`click`, ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

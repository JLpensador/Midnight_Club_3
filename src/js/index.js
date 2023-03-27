const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoescarrossel.forEach((botao, indice) => {
botao.addEventListener('click',() => {
const imagemAtual = document.querySelector('.ativa');
const botaoAtual = document.querySelector('.selecionado')

botaoAtual.classList.remove('selecionado');
imagemAtual.classList.remove('ativa');

imagens[indice].classList.add('ativa');
botoescarrossel[indice].classList.add('selecionado');
})
})
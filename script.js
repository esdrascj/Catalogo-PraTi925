const botoesCategorias = document.querySelectorAll('.categoria');
const produtos = document.querySelectorAll('.produto');
const sliderContainer = document.querySelector('.slider-container');
const sliderImages = document.querySelectorAll('.slider-container img');
const sliderPrevButton = document.querySelector('#slider-prev');
const sliderNextButton = document.querySelector('#slider-next');

let currentIndex = 0;
let slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  if (currentIndex === sliderImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  moveSlider();
}

function prevSlide() {
  if (currentIndex === 0) {
    currentIndex = sliderImages.length - 1;
  } else {
    currentIndex--;
  }
  moveSlider();
}

function moveSlider() {
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

sliderPrevButton.addEventListener('click', prevSlide);
sliderNextButton.addEventListener('click', nextSlide);


botoesCategorias.forEach(botao => {
  botao.addEventListener('click', () => {
    // Remover classe active de todos os botões de categoria
    botoesCategorias.forEach(botao => botao.classList.remove('active'));
    // Adicionar classe active ao botão de categoria clicado
    botao.classList.add('active');

    const categoriaSelecionada = botao.getAttribute('data-categoria');
    produtos.forEach(produto => {
      const categoriasProduto = produto.getAttribute('data-categoria').split(' ');
      // Se a categoria selecionada for 'todas' ou se o produto pertencer à categoria selecionada, exibir o produto
      if (categoriaSelecionada === 'todas' || categoriasProduto.includes(categoriaSelecionada)) {
        produto.style.display = 'inline-block';
      } else {
        produto.style.display = 'none';
      }
    });
  });
});



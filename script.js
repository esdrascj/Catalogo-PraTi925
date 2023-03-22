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



const produtos = require('../repositories/produtos');
const { response } = require('./response');

const cadastrandoProduto = async (ctx) => {
	const { nome, valor, qtde } = ctx.request.body;
	if (!nome || !valor || !qtde) {
		return response(ctx, 400, { mensagem: 'Pedido mal formatado' });
	}
	const produto = await produtos.getProduct(nome);
	console.log(produto);
	if (produto.length > 0) {
		return response(ctx, 400, { mensagem: 'Usuario ja existe' });
	}

	const sucesso = await produtos.registerProduct(nome, valor, qtde);
	if (sucesso) {
		return response(ctx, 200, { mensagem: 'Produto Cadastrado' });
	}
};

module.exports = {
	cadastrandoProduto,
};

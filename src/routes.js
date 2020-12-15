const Router = require('koa-router');
const router = new Router();
const cadastro = require('./controllers/cadastros');

router.post('/api/produtos', cadastro.cadastrandoProduto);
module.exports = router;

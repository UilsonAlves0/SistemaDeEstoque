const database = require('../utils/database');

const registerProduct = async (name, amount, qtd) => {
	if (!name || !amount || !qtd) {
		return null;
	}
	const date = new Date();
	const query = `INSERT INTO products (name,amount,quantity,creation_date) VALUES($1,$2,$3,$4) RETURNING *`;
	const result = await database.query({
		text: query,
		values: [name, amount, qtd, date],
	});

	return result.rows;
};

const getProduct = async (name) => {
	if (!name) {
		return null;
	}
	const query = `SELECT * FROM products WHERE name = $1`;
	const result = await database.query({
		text: query,
		values: [name],
	});
	return result.rows;
};

module.exports = { registerProduct, getProduct };

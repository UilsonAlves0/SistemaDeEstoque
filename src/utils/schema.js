const database = require('./database');

const schema = {
	1: `CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        amount INTEGER NOT NULL,
        quantity INTEGER NOT null,
        creation_date DATE NOT NULL,
        lastSale INTEGER DEFAULT 0
    )`,
};

const drop = async (tableName) => {
	if (tableName) {
		await database.query(`DROP TABLE ${tableName}`);
		console.log('Tabela dropada!');
	}
};

const up = async (number = null) => {
	if (!number) {
		for (const value in schema) {
			await database.query({ text: schema[value] });
		}
	} else {
		await database.query({ text: schema[number] });
	}
};
up(1)
	.then(() => console.log('Ok'))
	.catch((error) => console.log('Migration negada: ' + error));

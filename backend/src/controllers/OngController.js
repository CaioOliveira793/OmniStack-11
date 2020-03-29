const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
	async create(req, res) {
		const { name, email, whatsapp, city, uf } = req.body;

		const id = generateUniqueId();

		try {
			await connection('ongs').insert({
				id, name, email, whatsapp, city, uf
			});

			return res.status(201).json({ id });
			
		} catch (err) {
			console.log(err);
			return res.status(500).json();
		}
	},

	async index(req, res) {
		try {
			const ongs = await connection('ongs').select('*');

			return res.json({ ongs });
			
		} catch (err) {
			console.log(err);
			return res.status(500).json();
		}
	}
}
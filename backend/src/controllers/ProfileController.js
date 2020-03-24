const connection = require('../database/connection');

module.exports = {
	async index(req, res) {
		const ong_id = req.headers.authorization;

		try {
			const incidents = await connection('incidents')
				.where('ong_id', ong_id)
				.select('*');

			return res.json({ incidents });
		} catch (err) {
			console.log(err);
			return res.status(500).json();
		}
	}
}
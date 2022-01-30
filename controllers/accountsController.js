const accountsModel = require('../models/accountsModel.js');

const read_all_accounts = async (req, res) => {
	const accounts = await accountsModel.read_all_accounts();
	console.log('model_result: ', accounts);

	return res.json(accounts);
}

module.exports = {
	read_all_accounts,
}

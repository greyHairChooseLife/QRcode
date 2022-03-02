const accountsModel = require('../models/accountsModel.js');

const read_all_accounts = async (req, res) => {
	const result = await accountsModel.read_all_accounts();

	return res.json(result);
}

const create_account = (req, res) => {
	const result = accountsModel.create_account(req.body.data);

	return res.json(result);
}

const update_account = (req, res) => {
	const {new_name, target} = req.body;
	const result = accountsModel.update_account(new_name, target);

	return res.json(result);
}

const delete_account = (req, res) => {
	const { target } = req.body;
	const result = accountsModel.delete_account(target);

	return res.json(result);
}

module.exports = {
	create_account,
	read_all_accounts,
	update_account,
	delete_account,
}

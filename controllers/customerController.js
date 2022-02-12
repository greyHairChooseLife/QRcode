const customerModel = require('../models/customerModel.js');

const readItem = async (req, res) => {
	const { account_id, item_code } = req.query;
	const result = await customerModel.readItem(account_id, item_code);

	return res.send(result);
}

module.exports = {
	readItem,
}

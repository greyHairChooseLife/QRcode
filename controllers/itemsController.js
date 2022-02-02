const itemsModel = require('../models/itemsModel.js');

const read_all_items = async (req, res) => {
	const items = await itemsModel.read_all_items();
	console.log('model_result: ', items);

	return res.json(items);
}

const control_item = async (req, res) => {
	const items = await itemsModel.control_item(req.query.account_id);
	console.log('model_result: ', items);

	return res.json(items);
}

module.exports = {
	read_all_items,
	control_item,
}

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

const create_item = async (req, res) => {
	const items = req.body.item;
	const result = [];
	for(var i=0; i<items.length; i++){
		let create_result = await itemsModel.create_item(req.query.account_id, items[i]);
		result.push(create_result);
	}

	return res.json(result);
}

const update_item = async (req, res) => {
	const items = await itemsModel.update_item(req.query.account_id, req.body.item);
	console.log('model_result: ', items);

	return res.json(items);
}

module.exports = {
	read_all_items,
	control_item,
	create_item,
	update_item,
}

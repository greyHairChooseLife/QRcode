const itemsModel = require('../models/itemsModel.js');

const read_all_items = async (req, res) => {
	const items = await itemsModel.read_all_items();

	return res.json(items);
}

const control_item = async (req, res) => {
	const items = await itemsModel.control_item(req.query.account_id);
	for(var i=0; i<items.length; i++){			//db에 저장된 size는 null이 될 수 있다. 근데 client에서 xlsx file Read할 때 빈 칸을 undefined로 읽어온다. 그러니까 차라리 문자열'undified'로 양쪽 모두 통일 시켜서 비교 할 수 있도록 하는것
		if(items[i].size === null)
			items[i].size = 'undefined'
	}
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
	const items = req.body.item;
	const result = [];
	for(var i=0; i<items.length; i++){
		let update_result = await itemsModel.update_item(req.query.account_id, items[i]);
		result.push(update_result);
	}
	return res.json(result);
}

const delete_item = async (req, res) => {
	const items = await itemsModel.delete_item(req.query.account_id, req.body.item);
	console.log('model_result: ', items);

	return res.json(items);
}

module.exports = {
	read_all_items,
	control_item,
	create_item,
	update_item,
	delete_item,
}

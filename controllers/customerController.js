const customerModel = require('../models/customerModel.js');

const readItem = async (req, res) => {
	const { account_id, item_code } = req.query;
	const result = await customerModel.readItem(account_id, item_code);
	console.log(result[0]);
	let obj = result[0];

	obj.price = obj.purchase_cost * 1.3;	//make profit
	const priceString = obj.price.toString().split('');		//FROM integer number TO price type
	let count = 0;
	for(var i=priceString.length -1; i>0; i--){
		if(++count%3 === 0){
			priceString.splice(i, 0, ',');
		}
	}
	let temp = '';
	for(var i=0; i<priceString.length; i++){
		temp += priceString[i];
	}
	obj.price = temp;
	delete obj.purchase_cost;

	return res.render('pricetag', obj);
}

module.exports = {
	readItem,
}

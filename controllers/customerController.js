const customerModel = require('../models/customerModel.js');
const cookie = require('cookie');

const readItem = async (req, res) => {
	const { account_id, item_code } = req.params;
	const result = await customerModel.readItem(account_id, item_code);
	let obj = result[0];

	obj.item_code = item_code;
	obj.account_id = account_id;
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

	obj.registered_date = obj.registered_date.toLocaleDateString();		//date format change

	const cookies = cookie.parse(req.headers.cookie);

	if(cookies.bestCustomer === undefined){
		obj.customerId = null;
	}else{
		obj.customerId = cookies.bestCustomer;
	}
	
	console.log(obj);

	return res.render('pricetag', obj);
}

const putIntoBasket = (req, res) => {
	const { account_id, item_code, createCustomerId, readCustomerId, quantity } = req.body;
	if(createCustomerId !== ''){	//this value exist means create cookie
		res.cookie('bestCustomer', createCustomerId, {
		});
	}
	return res.redirect(`http://localhost:5000/customer/basket/${createCustomerId}`);
}
const readBasket = (req, res) => {
	res.send('hi');
}

module.exports = {
	readItem,
	putIntoBasket,
	readBasket,
}

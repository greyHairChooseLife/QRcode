const customerModel = require('../models/customerModel.js');

const getVisitorList = async (req, res) => {
	const result = await customerModel.visitorList();

	const obj = {
		visitorList: result,
	}
	
	res.render('getVisitorList', obj);
}
const searchVisitor = async (req, res) => {
	const customerId = req.body.customerId;
	const result = await customerModel.readBasket(customerId);

	const obj = {
		customerId: customerId,
		inCart: result,
	}
	console.log(obj);
	
	res.send('fine');
	//res.render('searchVisitor', obj);
}

const putIntoBasket = (req, res) => {
	const { account_id, item_code, createCustomerId, readCustomerId, quantity } = req.body;
	let redirectId;		//to deal with both cases
	if(createCustomerId !== undefined){		// if there was no cookie, this variable has value. so to generate cookie
		redirectId = createCustomerId;
		res.cookie('bestCustomer', createCustomerId, {
			maxAge: 1000*60*60*12,
		});		// generate cookie
		console.log('cookie created as: ', createCustomerId);
	}else if(readCustomerId !== undefined){
		redirectId = readCustomerId;
		console.log('cookie discovered as: ', readCustomerId);
	}
	const obj = {
		account_id: account_id,
		item_code: item_code,
		customerId: redirectId,
		quantity: quantity,
	}
	//console.log(account_id, item_code, quantity);
	customerModel.putIntoBasket(obj);
	return res.redirect(`http://localhost:5000/customer/basket/${redirectId}`);
}

const readBasket = async (req, res) => {
	const customerId = req.params.customerId;
	const result = await customerModel.readBasket(customerId);
	console.log(result);
	const obj = {
		customerId: customerId,
		inCart: result,
	}
	
	res.render('customerCart', obj);
}

module.exports = {
	getVisitorList,
	searchVisitor,
}

const customerModel = require('../models/customerModel.js');

const getVisitorList = async (req, res) => {
	const result = await customerModel.visitorList();

	const obj = {
		visitorList: result,
	}
	
	res.render('getVisitorList', obj);
}
const readVisitor = async (req, res) => {
	const customerId = req.body.customerId;
	const result = await customerModel.readBasket(customerId);

	const obj = {
		customerId: customerId,
		inCart: result,
	}
	console.log(obj);
	
	res.render('readVisitor', obj);
}

module.exports = {
	getVisitorList,
	readVisitor,
}

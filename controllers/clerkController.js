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
	const result = await customerModel.checkMyCart(customerId);
	for(var i=0; i<result.length; i++){				//중복된 물건이면(바코드가 같음) 수량 합쳐서 하나의 요소로 만듦
		for(var j=i+1; j<result.length; j++){
			if(result[i].barcode === result[j].barcode){
				result[i].quantity += result[j].quantity;
				result.splice(j, 1);
			}
		}
	}
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

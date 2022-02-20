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

	if(cookies.bestCustomer === undefined || cookies.bestCustomer === ''){		//쿠키가 maxAge를 넘으면 그냥 사라지는게 아니다, value값이 삭제 될 뿐이다. 그래서 조건이 [쿠키가 존재하지 않을 때], [쿠키의 value가 비어있을 때] 두 가지다.
		obj.customerId = null;
	}else{
		obj.customerId = cookies.bestCustomer;
	}

	return res.render('pricetag', obj);
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
	
	res.render('customerCart', obj);
}

module.exports = {
	readItem,
	putIntoBasket,		//redirect to readBasket
	readBasket,
}

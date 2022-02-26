const db = require('../config/db.js').promise();

const readItem = async (account_id, item_code) => {
	const [result] = await db.query(`SELECT name, registered_date, purchase_cost, size, barcode FROM items WHERE account_id=? AND item_code=?`, [account_id, item_code]);
	if(result == undefined){
		return null;
	}else{
		return result;
	}
}

const putIntoCart = async (obj) => {
	const { account_id, item_code, customerId, quantity, barcode } = obj;
	const [result] = await db.query(`INSERT INTO customerBasket (mobile, item_code, account_id, quantity, created_date, barcode) VALUES(?,?,?,?,NOW(), ?)`, [customerId, item_code, account_id, quantity, barcode]);
	if(result == undefined){
		return null;
	}else{
		return result;
	}
}

const updateCart = async (customerId, barcode, quantity) => {
	const [result] = await db.query(`UPDATE customerBasket SET quantity=${quantity} WHERE mobile=${customerId} AND barcode=${barcode} AND created_date >= date_add(NOW(), interval -12 hour)`);
	if(result == undefined){
		return null;
	}else{
		return result;
	}
}

const deleteCart = async (customerId, barcode) => {
	const [result] = await db.query(`DELETE FROM customerBasket WHERE mobile=${customerId} AND barcode=${barcode} AND created_date >= date_add(NOW(), interval -12 hour)`);
	if(result == undefined){
		return null;
	}else{
		return result;
	}
}

const checkMyCart = async (customerId) => {
	const [result] = await db.query(`SELECT items.name, items.size, items.purchase_cost , items.barcode, cb.quantity FROM items JOIN customerBasket AS cb ON items.item_code=cb.item_code AND items.account_id=cb.account_id WHERE mobile=${customerId} AND created_date >= date_add(NOW(), interval -12 hour)`);		//현재시간 ~ 12시간 전 까지만 불러오면 아침 9시든 저녁9시든 전날과 겹치지 않으면서 당일 장바구니에 담은 것은 모두 검색된다.
	if(result == undefined){
		return null;
	}else{
		return result;
	}
}

const visitorList = async () => {
	const [result] = await db.query(`SELECT DISTINCT mobile FROM customerBasket WHERE created_date >= date_add(NOW(), interval -12 hour)`);
	if(result === undefined){
		return null;
	}else{
		return result;
	}
}

module.exports = {
	readItem,
	putIntoCart,
	updateCart,
	deleteCart,
	checkMyCart,
	visitorList,
};

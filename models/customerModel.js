const db = require('../config/db.js').promise();

const readItem = async (account_id, item_code) => {
	const [result] = await db.query(`SELECT name, registered_date, purchase_cost, size FROM items WHERE account_id=? AND code=?`, [account_id, item_code]);
	if(result == undefined){
		return null;
	}else{
		return result;
	}
}

const putIntoBasket = async (obj) => {
	const { account_id, item_code, customerId, quantity } = obj;
	const [result] = await db.query(`INSERT INTO customerBasket (mobile, item_code, account_id, quantity, created_date) VALUES(?,?,?,?,NOW())`, [customerId, item_code, account_id, quantity]);
	if(result == undefined){
		return null;
	}else{
		return result;
	}
}

const readBasket = async (customerId) => {
	const [result] = await db.query(`SELECT items.name, cb.quantity FROM items JOIN customerBasket AS cb ON items.code=cb.item_code AND items.account_id=cb.account_id WHERE mobile=${customerId} AND created_date >= date_add(NOW(), interval -12 hour)`);		//현재시간 ~ 12시간 전 까지만 불러오면 아침 9시든 저녁9시든 전날과 겹치지 않으면서 당일 장바구니에 담은 것은 모두 검색된다.
	if(result == undefined){
		return null;
	}else{
		return result;
	}
}

module.exports = {
	readItem,
	putIntoBasket,
	readBasket,

};

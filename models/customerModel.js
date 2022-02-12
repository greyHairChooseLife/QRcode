const db = require('../config/db.js').promise();

const readItem = async (account_id, item_code) => {
	const [result] = await db.query(`SELECT name, registered_date, purchase_cost, size FROM items WHERE account_id=? AND code=?`, [account_id, item_code]);
	if(result == undefined){
		return null;
	}else{
		return result;
	}
}

module.exports = {
	readItem,
};

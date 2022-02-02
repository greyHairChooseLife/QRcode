const db = require('../config/db.js').promise();

//const create_accounts = (account_info) => {
//	db.query(`INSERT INTO accounts (name, registered_date, number, email, address, website) VALUES(?,?,?,?,?,?)`, [account_info.name, account_info.registered_date, account_info.number, account_info.email, account_info.address, account_info.website]);
//	return;
//}

const read_all_items = async () => {
	const [result] = await db.query(`SELECT name, registered_date, purchase_cost, size FROM items`);
	if(result == undefined){
		return null;
	}else{
		return result;
	}
}

const control_item = async (account_id) => {
	const [result] = await db.query(`SELECT code, name, registered_date, purchase_cost, size FROM items WHERE account_id=?`, [account_id]);
	if(result == undefined){
		return null;
	}else{
		return result;
	}
}

//const update_accounts = async (new_account_info, acc_id) => {
//	const name = new_account_info.name;
//	const number = new_account_info.number;
//	const email = new_account_info.email;
//	const address = new_account_info.address;
//	const website = new_account_info.website;
//
//	await db.query(`UPDATE accounts SET name='${name}', number='${number}', email='${email}', address='${address}', website='${website}' WHERE id=?`, [acc_id]);
//	return;
//}
//const delete_accounts = async (account_info) => {
//
//	//매칭되는 items 데이터 있는 경우엔 삭제 불가능하도록
//
//	await db.query(`DELETE from accounts WHERE id=?`, [account_info.acc_id]);
//	return;
//}

module.exports = {
//	create_accounts,	//create
	read_all_items,		//read
	control_item,		//read by account_id to control items
//	update_accounts,	//update
//	delete_accounts,	//delete
};

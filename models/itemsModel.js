const db = require('../config/db.js').promise();

//const create_accounts = (account_info) => {
//	db.query(`INSERT INTO accounts (name, registered_date, number, email, address, website) VALUES(?,?,?,?,?,?)`, [account_info.name, account_info.registered_date, account_info.number, account_info.email, account_info.address, account_info.website]);
//	return;
//}

const read_all_items = async () => {
	const [result] = await db.query(`SELECT items.name as itemName, items.registered_date, items.purchase_cost, items.size, items.barcode, accounts.name as accountName FROM items LEFT JOIN accounts ON items.account_id = accounts.id`);
	if(result == undefined){
		return null;
	}else{
		return result;
	}
}

const control_item = async (account_id) => {
	const [result] = await db.query(`SELECT item_code, name, registered_date, purchase_cost, size, barcode FROM items WHERE account_id=?`, [account_id]);
	if(result == undefined){
		return null;
	}else{
		return result;
	}
}

const create_item = async (account_id, item) => {
	const [result] = await db.query(`INSERT INTO items (item_code, name, registered_date, purchase_cost, account_id, size, barcode) VALUES(?,?,now(),?,?,?,?)`, [item.item_code, item.name, item.purchase_cost, account_id, item.size, item.barcode]);
	if(result == undefined){
		return null;
	}else{
		return result;
	}
}

const update_item = async (account_id, item) => {
	const [result] = await db.query(`UPDATE items SET name='${item.name}', registered_date=now(), purchase_cost=${item.purchase_cost}, size='${item.size}', barcode='${item.barcode}' WHERE account_id=? AND item_code=?`, [account_id, item.item_code]);
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
const delete_item = async (account_info) => {

	await db.query(`DELETE from accounts WHERE id=?`, [account_info.acc_id]);
	return;
}

module.exports = {
	read_all_items,		//read every items.
	control_item,		//read by account_id to control items.
	create_item,		//create with xlsx parse if there is no legacy.
	update_item,		//update with xlsx parse if there is a legacy.
	delete_item,		//delete with xlsx parse if there is a request.
//	delete_accounts,	//delete
};

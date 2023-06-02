var connect = require("../database/connectPG")

async function post(body) {
    try {
        const idResult = await connect.query(`SELECT id FROM accounts WHERE users = '${body.users}'`)
        const categoryResult = await connect.query(`SELECT category_id FROM category WHERE category_name = '${body.category_name}'`)
        const id = idResult.rows[0].id;
        const category = categoryResult.rows[0].category_id;
        await connect.query(`INSERT INTO inventory(inventory_name, price, quantity, user_id,category_id)
        VALUES('${body.inventory_name}','${body.price}','${body.quantity}','${id}','${category}')`)
        return { status: true, result: body };
    } catch (error) {
        return { status: false, message: "error", error };
    }
}
async function removeInventory(body) {
    try {
        const idResult = await connect.query(`SELECT id FROM accounts WHERE users = '${body.users}'`)
        const inventoryIdResult = await connect.query(`SELECT inventory_id FROM inventory WHERE inventory_name = '${body.inventory_name}'`)
        const id = idResult.rows[0].id;
        const inventoryId = inventoryIdResult.rows[0].inventory_id;
        const result = await connect.query(
        `DELETE FROM inventory
        WHERE inventory_id = '${inventoryId}'
        AND user_id = '${id}'
        RETURNING *`)
        return { status: true, result: result.rows[0] };
    } catch (error) {
        return { status: false, message: "error", error };
    }
}
// async function put(body) {
//     try {
        
//     } catch (error) {
        
//     }
// }
module.exports = { post, removeInventory }
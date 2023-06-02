var connect = require("../database/connectPG")

async function getAllOrder() {
    try {
        const result = await connect.query(
            'SELECT accounts.users, inventory.inventory_name, inventory.price, inventory.quantity, category.category_name FROM ((accounts INNER JOIN inventory ON accounts.id = inventory.user_id) INNER JOIN category ON category.category_id = inventory.category_id);'
        )
        return { status: true, result: result.rows };
    } catch (error) {
        return { status: false, message: "Postgresql error" };
    }
}
module.exports = { getAllOrder };
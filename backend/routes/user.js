var express = require('express');
var router = express.Router();
var { post, removeInventory } = require("../function/user")

router.post('/', async function (req,res) {
    try {
        const output = await post(req.body);
        res.send(output)
    } catch (error) {
        res.send("post fail")
    }
})
router.delete('/', async function (req,res) {
    try {
        const output = await removeInventory(req.body);
        res.send(output)
    } catch (error) {
        res.send("delete fail")
    }
})
// router.put('/', async function (req,res) {
//     try {
//         const output = await 
//     } catch (error) {
        
//     }
// })
module.exports = router
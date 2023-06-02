var express = require('express');
var router = express.Router();
var { getAllOrder } = require("../function/account")

router.get('/getall', async function (req,res,next) {
    try {
        const output = await getAllOrder(req);
        console.log(output)
        res.send(output)
    } catch (error) {

        res.send("fail")
    }
})
module.exports = router
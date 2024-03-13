const express = require("express")

const router = express.Router()
const crypto = require('crypto')

router.route('/').get((req,res) => {
    console.log("get about request")
    res.send("get about request")
})


router.route('/:id')
    .get((req, res) => {
        const id = req.params.id
        const randomChars = crypto.randomBytes(4).toString('hex');
        const newId = id + '-' + randomChars;
        console.log(newI)
        res.send("this is my secred id: "+newI)
    })
module.exports = router
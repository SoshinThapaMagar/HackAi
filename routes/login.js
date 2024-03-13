const express = require("express")

const router = express.Router()

router.route('/')
    .get((req,res) => {
        console.log("get login request")
        res.send("Get login")
    })
    .post((req,res) => {
        console.log("get post request")
        res.send("Post request")
    })

module.exports = router
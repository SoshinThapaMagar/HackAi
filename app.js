const express = require("express")
const about = require('./routes/about')
const login = require('./routes/login')

const port = 3000
const app = express()

app.get('/', (req,res) => {
    console.log("index page")
    res.send('index')
})
app.use("/about", about)
app.use("/login", login)

app.listen(port, () => {
    console.log('Server is listening on port '+port)
})

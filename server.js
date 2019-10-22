const express = require("express")
const app = express()
const port = 3000
app.listen(port, () => {
    console.log("Server running port " + port)
})
app.use("/", express.static(__dirname + "/public"))
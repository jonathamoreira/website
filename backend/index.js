var express = require("express")
var app = express()
var router = require("./routes/routes")
var cors = require('cors')

app.use(cors());
 
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/", router);

app.listen(9393,() => {
    console.log("Servidor rodando")
});
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan")

const app = express();

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("this the / page")
})
app.get('/status',(req,res)=> {
    res.send("hello world")
})

app.post('/register', (req,res) => {
    res.send({
        message : `Hello ${req.body.email}, your are registered`

    })
})

app.listen(process.env.PORT || 3000)
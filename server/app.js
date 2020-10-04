const express = require('express')
const app = express() ;
const cors = require('cors')
app.use(cors())
app.use(express.json())

const router = require('./routes/routes')


app.use('/',router)




 

app.listen(3002,() => console.log('Listening on port 3002...'))
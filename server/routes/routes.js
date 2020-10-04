const express = require('express')
const router = express.Router()
let data = require('../data')


demands = []
router.get('/',(req,res) => {
    res.send(data.desData)
})
router.get('/creditDetails',(req,res) => {
    res.send(data.data)
})

router.post('/demand' ,(req,res)=>{
    const newDemand = req.body ;
    newDemand.id = demands.length +1
    demands.push(newDemand)
    res.send(newDemand);
})

module.exports = router
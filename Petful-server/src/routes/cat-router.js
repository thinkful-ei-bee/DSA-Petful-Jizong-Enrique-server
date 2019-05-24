const express = require('express')
const catRouter= express.Router()
const jsonBodyParser= express.json()
const catData= require('../AnimalData/cat')



catRouter
    .get('/', (req,res) =>{
        
        let cats=catData;

        return res.status(200).json(cats)
        

   
    })


module.exports=catRouter
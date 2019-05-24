const express = require('express')
const dogRouter= express.Router()
const jsonBodyParser= express.json()
const dogData= require('../AnimalData/dog')


dogRouter
    .get('/', (req,res) =>{

        let dogs = dogData[0]
        console.log(dogs)
        // return res.status(200).json(dogs)
        return res.status(200).send('dog endpoint')
    
    })


module.exports= dogRouter
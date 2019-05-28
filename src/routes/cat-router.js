const express = require('express')
const catRouter= express.Router()
const jsonBodyParser= express.json()
const catData= require('../AnimalData/cat')
const catsQueue = require('../queues/cats-queue')


catRouter
    .get('/', (req,res) =>{
        
       let cat = catsQueue.peek()
        return res.status(200).json(cat)
    })

   

    .delete('/', (req,res)=>{

         let cat = catsQueue.dequeue();
          console.log(cat)

          return res.status(202).json(cat)

        
    })


module.exports=catRouter
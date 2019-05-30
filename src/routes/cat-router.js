const express = require('express')
const catRouter= express.Router()
const jsonBodyParser= express.json()
const catData= require('../AnimalData/cat')
const catsQueue = require('../queues/cats-queue')


catRouter
    .get('/', (req,res) =>{
        if(!catsQueue.peek()){            
            return 
        }
       let cat = catsQueue.peek()
        return res.status(200).json(cat)
    })

   

    .delete('/', (req,res)=>{
        console.log(catsQueue.peek())
        if(catsQueue.peek()){            
            
            let cat = catsQueue.dequeue();                    
            return res.status(202).json(cat)      
        }
           
    })


module.exports=catRouter
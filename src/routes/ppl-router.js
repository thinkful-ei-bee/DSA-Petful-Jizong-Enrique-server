const express = require('express')
const pplRouter= express.Router()

const pplQueue=require('../queues/ppl-queue')

pplRouter
    .get('/', (req,res) =>{
        let person = pplQueue.peek()
        return res.status(200).json(person)    
        })
    .delete('/', (req,res)=>{
      let person = pplQueue.dequeue();       
       return res.status(202).json(person)       
    })

module.exports= pplRouter
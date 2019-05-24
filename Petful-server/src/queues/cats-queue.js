const Queue = require('./queue')
const cats = require('../AnimalData/cat')

let catsQueue = new Queue();

cats.forEach(i=> catsQueue.enqueue(i))



module.exports= catsQueue
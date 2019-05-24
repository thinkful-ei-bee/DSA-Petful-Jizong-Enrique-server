const Queue = require('./queue')
const dogs = require('../AnimalData/dog')

let dogsQueue = new Queue();

dogs.forEach(i=> dogsQueue.enqueue(i))


module.exports=dogsQueue
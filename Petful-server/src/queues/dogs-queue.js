const Queue = require('./queue')
const dogs = require('../AnimalData/dog')

let dogsQueue = new Queue();

dogs.forEach(i=> dogsQueue.enqueue(i))
console.log(dogsQueue.peek(),'ttest queue inside queue')
console.log(dogsQueue.dequeue(),'test inside queue')

module.exports=dogsQueue
const Queue = require('./queue')
const ppl = require('../AnimalData/ppl')

let pplQueue = new Queue();

ppl.forEach(i=> pplQueue.enqueue(i))

module.exports=pplQueue
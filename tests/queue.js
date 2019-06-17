const Queue = require('../src/queue')

const q1 = Queue();
console.log(`Queue empty? ${q1.isEmpty()}`)
console.log(`Size of queue: ${q1.size()}`)
q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
q1.enqueue(4)
q1.print()

console.log(`Front of queue: ${q1.front()}`)
console.log(`Size of queue: ${q1.size()}`)
console.log(`Dequeue q1: ${q1.dequeue()}`)
q1.print()
console.log(`Front of queue: ${q1.front()}`)
console.log(`Size of queue: ${q1.size()}`)
console.log(`Queue empty? ${q1.isEmpty()}`)

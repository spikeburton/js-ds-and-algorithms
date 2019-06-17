const mySet = require('../src/set')

const set1 = mySet()
const set2 = mySet()

set1.add(1)
set1.add(2)
set1.add(3)
set1.add(4)
set1.add(5)

console.log(`Set1: ${set1.values()}, size: ${set1.size()}`);
set1.remove(3)
console.log(`Set1 after remove(3): ${set1.values()}, size: ${set1.size()}`);

set2.add(4)
set2.add(5)
set2.add(6)
set2.add(7)

console.log(`Set2: ${set2.values()}, size: ${set2.size()}`);
console.log(`Union of set1 and set2: ${set1.union(set2).values()}`)
console.log(`Intersection of set1 and set2: ${set1.intersection(set2).values()}`)
console.log(`Difference of set1 and set2: ${set1.difference(set2).values()}`)

const set3 = mySet()
set3.add(1)
set3.add(2)
console.log(`Set3: ${set3.values()} is a subset of ${set1.values()}: ${set3.subset(set1)}`)
console.log(`Set3: ${set3.values()} is a subset of ${set2.values()}: ${set3.subset(set2)}`)

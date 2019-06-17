const { hash, HashTable } = require('../src/HashTable')

console.log('Hash "spike": ', hash('spike', 4))
console.log('Hash "cody": ', hash('cody', 4))
console.log('Hash "ralph": ', hash('ralph', 4))
console.log('Hash "cheryl": ', hash('cheryl', 4))
console.log('Hash "brittany": ', hash('brittany', 4))

const ht = HashTable();
ht.add('spike','person')
ht.add('cody','person')
ht.add('ralph','person')
ht.add('cheryl', 'person')
ht.add('brittany', 'person')
console.log('Lookup "spike": ', ht.lookup('spike'))
ht.print()

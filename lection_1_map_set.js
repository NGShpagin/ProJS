let map = new Map();

map.set('1', 'str1') // строка в качестве ключа
map.set(1, 'num1') //
map.set(true, 'bool')

console.log(map)

console.log(map.get(1)); // num1
console.log(map.get('1')); // str1
console.log(map.size); // 3

let map2 = new Map();
map2.set('1', 'We')
    .set(1, 'likes')
    .set(true, 'JS')

console.log(map2)

let reciepMap = new Map([
    ['apple', 500],
    ['berry', 300],
    ['tomato', 100]
])

console.log(reciepMap)

for (const item of reciepMap.keys()) {
    console.log(item)
}

for (const item of reciepMap.values()) {
    console.log(item)
}

reciepMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`)
})


let buddies = [
    'Murka',
    'Nik',
    'Tuzik',
    'Bobik',
    'Murka',
    'Nik',
    'Tuzik',
    'Bobik',
]

let uniqueBuddies = new Set(buddies)
console.log(uniqueBuddies)

let arr = Array.from(uniqueBuddies)
console.log(arr)
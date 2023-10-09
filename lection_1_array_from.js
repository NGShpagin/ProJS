// ---- Array.from ----
let pseudo = {
    0: 'first',
    1: 'second',
    2: 'new elem',
    length: 4
}

let pseudo2 = 'Hello world'

let array = Array.from(pseudo);
let array2 = Array.from(pseudo2)
console.log(array)
console.log(array2)
console.log(array.pop())
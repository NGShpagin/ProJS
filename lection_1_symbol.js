// Пример 1
/*
const symbol = Symbol(); // объявление

const dogID = Symbol('dog') // значение уникально, даже если мы создадим несколько симоволов с одинаковым описанием

const dog1 = Symbol('dog');
const dog2 = Symbol('dog');
console.log(dog1 === dog2) // false
 */

// Пример 2
/*
const dogID = Symbol('dog')
// alert(dogID)
console.log(dogID) // Symbol('dog')
console.log(dogID.description) // dog

 */

// Пример 3
/*
let id = Symbol('dogID')
let buddy = {
    [id]: 'Жучка'
}

console.log(buddy[id]) // Жучка

buddy[id] = "бобик" // Идентификаторы создаются уникальными всегда

console.log(buddy[id]) // Жучка
 */

// Пример 4
/*
let buddy = {name: "Тузик"}
buddy.id = 'our id'
buddy.id = 'their id'

let buddies = {
    [Symbol('Жучка')]: 'Жучка',
    [Symbol('Таракашка')]: 'Таракашка',
    [Symbol('Мурка')]: 'Мурка',
    elephant: 'Слон',
}

console.log(buddies)

let newBuddies = {}
Object.assign(newBuddies, buddies)

buddies.cat = 'Барсик'

console.log(newBuddies)
 */

// ---- Symbol.for ----
/*
// читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for("id") // если символа не существует, он будет создан

// читаем его снова и записываем в другую переменную (возможно, из другого места)
let idAgain = Symbol.for("id")

// Проверяем, один ли это и тот же символ
alert(id === idAgain) // true

 */

// ---- Symbol.keyFor ----
/*
// получаем символ по имени
let sym = Symbol.for("name")
let sym2 = Symbol.for("id")

// получаем имя по символу
console.log(Symbol.keyFor(sym)) // name
console.log(Symbol.keyFor(sym2)) // id

 */
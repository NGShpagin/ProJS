const string = 'Hello'
console.log(string[2]); // l
console.log(string.length); // 5

for (let str of string) {
    console.log(str)
}

let range = {
    from: 1,
    to: 10
}

// 1. Вызов for..of сначала вызывает эту функцию

// range[Symbol.iterator] = function () {
//     // она возвращает объект итератора
//     // 2. Далее, for(..of..) рабоатет только с этим итератором, запрашиывая у него новые значения
//     return {
//         current: this.from,
//         last: this.to,
//
//         // 3. next() вызывается на каждой итерации цикла for(..of..)
//         next() {
//             // 4. Он должен вернуть значение в виде объекта {done: ..., value: ...}
//             return this.current <= this.last ? {done: false, value: this.current++} : {done: true}
//         }
//     }
// }
//
// for (let number of range) {
//     console.log(number)
// }

// -------

// можно было и вместе, но тогда this будет общим, но не рекомендуется
let range2 = {
    from: 1,
    to: 6,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        return this.current <= this.to ? {done: false, value: this.current++} : {done: true}
    }
}

for (let number of range2) {
    console.log(number)
}



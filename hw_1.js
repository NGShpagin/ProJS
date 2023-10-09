// Задание 1
// 1. Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать.
// Каждая итерация должна возвращать следующий альбом из коллекции.
// 2. Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator.
// Каждый альбом имеет следующую структуру:
// {
//     title: "Название альбома",
//         artist: "Исполнитель",
//     year: "Год выпуска"
// }
// 3. Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// 4. Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате:
// Название альбома - Исполнитель (Год выпуска)

let musicCollection = [
    {
        title: 'AlbumName 1',
        artist: 'Author 1',
        year: '2023'
    },
    {
        title: 'AlbumName 2',
        artist: 'Author 2',
        year: '2019'
    },
    {
        title: 'AlbumName 3',
        artist: 'Author 3',
        year: '2002'
    },
    {
        title: 'AlbumName 4',
        artist: 'Author 4',
        year: '1997'
    },
]

musicCollection[Symbol.iterator] = function () {
    let num = 0;
    return {
        current: 0,
        last: this.length - 1,

        next() {
            return this.current <= this.last ? {done: false, value: musicCollection[this.current++]} : {done: true}
        }
    }
}

for (const album of musicCollection) {
    console.log(`Название альбома: ${album.title}, Исполнитель: ${album.artist}`)
}

// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. 
// Клиенты приходят и делают заказы на разные блюда.
// Необходимо создать систему управления этими заказами, которая позволит:
// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.
// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. 
// В качестве ключей для клиентов используйте объекты.
// Повара и их специализации:
//     Виктор - специализация: Пицца.
//     Ольга - специализация: Суши.
//     Дмитрий - специализация: Десерты.
// Блюда и их повара:
//     Пицца "Маргарита" - повар: Виктор.
//     Пицца "Пепперони" - повар: Виктор.
//     Суши "Филадельфия" - повар: Ольга.
//     Суши "Калифорния" - повар: Ольга.
//     Тирамису - повар: Дмитрий.
//     Чизкейк - повар: Дмитрий.
// Заказы:
//     Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
//     Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
//     Клиент Ирина заказала: Чизкейк.

const dishes = new Map()
const orders = new Map()
const cooks = [
    {cook: 'Виктор', speciality: 'Пицца'},
    {cook: 'Ольга', speciality: 'Суши'},
    {cook: 'Дмитрий', speciality: 'Десерты'},
]

const takeOrder = function (client, dishes) {
    orders.set(client, [dishes])
}

const cookOrder = function (dish, cook) {
    if (dishes.get(cook)) {
        const newDishes = [dishes.get(cook)]
        newDishes.push(dish)
        dishes.set(cook, newDishes)
    } else dishes.set(cook, dish)
}

const getDishCook = function (cook) {
    const cooker = cooks.filter(item => item.cook === cook)[0]
    return `Повар: ${cooker.cook} (Специализация: ${cooker.speciality}),
    Готовит: ${[...dishes.get(cook)]}`
}

takeOrder('Алексей', ['Пицца "Пепперони"', 'Тирамису'])
takeOrder('Мария', ['Суши "Калифорния"', 'Пицца "Маргарита"'])
takeOrder('Ирина', ['Чизкейк'])

cookOrder('Пицца "Маргарита"', 'Виктор')
cookOrder('Пицца "Пепперони"', 'Виктор')
cookOrder('Суши "Филадельфия"', 'Ольга')
cookOrder('Суши "Калифорния"', 'Ольга')
cookOrder('Тирамису', 'Дмитрий')
cookOrder('Чизкейк', 'Дмитрий')

console.log(getDishCook('Виктор'))
console.log(getDishCook('Ольга'))
console.log(getDishCook('Дмитрий'))
// Задание 1
// Создать механизм для безопасного добавлнния метаданных к объектам книг с использованием Symbol.
// 1. Создать уникальные символы для метаданных: Отзывы, Рейтинг, Теги
// 2. Реализовать функции addMetadata (добавление метаданных) и getMetadata (получение метаданных)
// 3. Создать объект книги, добавить метаданные и вывести их на консоль

const reviewSymbol = Symbol('Отзывы');
const ratingSymbol = Symbol('Рейтинг');
const tagsSymbol = Symbol('Теги');

// Функция для добавления метаданных к объектам
function addMetadata(book, metadataType, data) {
// Добавить код
    if (book[metadataType]) {
        book[metadataType].push(data);
    } else {
        book[metadataType] = [data];
    }
}

// Функция для извлечения метаданных из объекта
function getMetadata(book, metadataType) {
    return book[metadataType];
}

// Создание объекта книги и добавление метаданных
const book = {
    title: "1984",
    author: "George Orwell"
};

addMetadata(book, reviewSymbol, "Отличная книга о дистопии!");
addMetadata(book, ratingSymbol, 5);
addMetadata(book, tagsSymbol, "dystopia");

// Вывод метаданных для книги
console.log(getMetadata(book, reviewSymbol)); // ["Отличная книга о дистопии!"]
console.log(getMetadata(book, ratingSymbol)); // [5]
console.log(getMetadata(book, tagsSymbol)); // ["dystopia"]
console.log(book)

// Задание 2
// Используя Symbol.iterator, создайте объект "Библиотека", который можно итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
// 1. Создайте объект library, который содержит массив книг и имеет свойство-символ Symbol.iterator.
// 2. Реализуйте кастомный итератор для объекта library. Итератор должен перебирать книги по порядку.
// 3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на консоль.

// Массив книг
const books = [
    {title: "1984", author: "George Orwell"},
    {title: "Brave New World", author: "Aldous Huxley"},
    {title: "Fahrenheit 451", author: "Ray Bradbury"}
];

books[Symbol.iterator] = function () {
    return {
        current: 0,
        last: books.length,

        next() {
            return this.current < this.last ? {done: false, value: books[this.current++]} : {done: true}
        }
    }
}

for (let book of books) {
    console.log(book)
}

// Задание 3
// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными массивами, но похожи на них.
// Однако у таких коллекций нет методов массива, и здесь на помощь приходит Array.from.
// В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними.
// Дан код html
// <div>Element 1</div>
// <div data-active="true">Element 2</div>
// <div>Element 3</div>
// <div data-active="true">Element 4</div>
// Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и фильтрует только те из них,
// у которых есть атрибут data-active.
// Выведите результат на консоль.

const filterDivEls = function (selector) {
    const divEls = document.querySelectorAll(selector)
    const divArray = Array.from(divEls)
    console.log(divArray)
    console.log(divArray.filter(divEl => divEl.hasAttribute('data-active')));
    return divArray.filter(divEl => divEl.attributes['data-active'])
}

console.log(filterDivEls('div'))

// Задание 4
// Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить,
// кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.
// Map будет использоваться для хранения соответствия между уроком и преподавателем.
// Set будет использоваться для хранения уникальных уроков, которые посетил каждый студент.
// const lessons = new Map();
// 1. Map: урок => преподаватель ("Математика", "Смирнов"), ("История", "Иванова")
// 2. Map: студент => Set уроков
// Проверка:
// console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); // Смирнов
// console.log(`Уроки Ивана: тут вывод уроков ивана`); //

const lessons = new Map();
lessons.set("Математика", "Смирнов")
lessons.set("История", "Иванова")

const studentLessons = new Set(lessons.keys())
const student = new Map()
student.set('Иван', studentLessons)

console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`);
console.log(`Уроки ивана: ${[...student.get('Иван')]}`)
// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const collections = [
    {title: "Название альбома", artist: "Исполнитель", year: "Год выпуска" },
    {title: "Название альбома2", artist: "Исполнитель2", year: "Год выпуска2" },
    {title: "Название альбома3", artist: "Исполнитель3", year: "Год выпуска3" }
];

const musicCollection = {
    collections: [...collections],
    [Symbol.iterator] : function (){
        let index = 0;
        return{
            next: () => {
                if ( index < this.collections.length) {
                    return { value: this.collections[index++], done: false};
                } else {
                    return {done: true};
                }
            }
        }
    }
};

for (const collection of musicCollection){
    console.log(`${collection.title} - ${collection.artist} (${collection.year})`)
}
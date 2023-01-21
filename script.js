console.log('1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).')
for (let i = 20; i <= 30; i += 0.5) {
    console.log(i)
}
console.log('2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.')
let oneDollar = 27;
let result = 0;
for (let i = 10; i <= 100; i += 10) {
    result = oneDollar * i;
    console.log(result)
}

console.log('3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.')

let num = 100;

for (let i = 1; i <= num; i++) {
    if (i * i <= num) {
        console.log(i)
    }
}

console.log('4. Дане ціле число. З*ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе). Використовуємо пятіфан')
function simpleNumber(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

const answer = simpleNumber(5);
console.log(answer)

console.log('5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна). Використовуємо 9')
let number = 9;
while (number % 3 === 0) {
    number /= 3
}
if (number === 1) {
    console.log('Можна одержати шляхом зведення числа у ступінь')
} else {
    console.log('Не можна одержати шляхом зведення числа у ступінь')
}
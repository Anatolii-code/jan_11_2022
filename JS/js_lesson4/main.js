// 1) - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function pramokutnyk(a,b) {
    return a*b;
}
document.write(pramokutnyk(5, 6));
// 2) - створити функцію яка обчислює та повертає площу кола з радіусом r
function kolo(r){
    return 3.14 * r * r;
}
console.log(kolo(2));
//3) - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylindr(h,rad) {
    return h*2*rad;
}
document.write(" " + cylindr(10,20));
//4) - створити функцію яка приймає масив та виводить кожен його елемент
let tab = [123, 54353, 12313, true, false, false];
function readfun(arr) {
    for (const item of arr) {
        console.log(item);
    }
}
readfun(tab);
//5) - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//ne pracuje


function makep(message) {
    document.write(`<h1>${message}</h1>`);
}
makep('hello');

//6) - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function licreator (item) {

    document.write('<ul>');

    document.write(`<li> ${item}</li>`);
    document.write(`<li> ${item}</li>`);
    document.write(`<li> ${item}</li>`);

    document.write('</ul>');
}
licreator('item1')
//7) -створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function licreator2 (value,n) {
    for (let i = 0; i < n; i++){

        document.write('<ul>');
        document.write(`<li> ${value}</li>`);
        document.write('</ul>');
    }
}
licreator2('item1',4);
//8) - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arraycreator (...value1) {
    console.log(value1);
}
arraycreator(1,3,4,true,434,"srara");

//9)- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id: 1, name: 'yura', age:22 },
    {id: 2, name: 'roma', age:24 },
    {id: 3, name: 'jane', age:25 },
]

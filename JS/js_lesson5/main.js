// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника
let pramokutnyk = (a,b) => {return a*b;}
console.log(pramokutnyk(20,10));
// - створити функцію яка обчислює та повертає площу кола
let skolo = (r) => {return r*r*Math.PI;}
console.log(skolo(20));
// - створити функцію яка обчислює та повертає площу циліндру
let scylindr = (r,h) => {return r+r*h;}
console.log(scylindr(20,10));
// - створити функцію яка приймає масив та виводить кожен його елемент
let arrreader = (arr) => {
    for (const tabElement of arr) {
        console.log(tabElement);
    }
}
let tab = [123, 54353, 12313, true, false, false];
arrreader(tab);
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let makep = (message) => {
    document.write(`<>${message}</>`);
}
makep('hello');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let licreator = (item) => {

    document.write('<ul>');

    document.write(`<li> ${item}</li>`);
    document.write(`<li> ${item}</li>`);
    document.write(`<li> ${item}</li>`);

    document.write('</ul>');
}
licreator('item1')
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let licreator2 =  (value,n) => {
    for (let i = 0; i < n; i++){
        document.write('<ul>');
        document.write(`<li> ${value}</li>`);
        document.write('</ul>');
    }
}
licreator2('item1',4);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createlist=(arr) =>{
    document.write('<ul>');
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write('/<ul>');
}
createlist(tab);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'yura', age:22 },
    {id: 2, name: 'roma', age:24 },
    {id: 3, name: 'jane', age:25 }
]
let newarray = (arr) => {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id}.${arrElement.name} - ${arrElement.age}</div>`);
    }
}
newarray(users);
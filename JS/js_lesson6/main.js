//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
let arr = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (const item of arr) {
    console.log(item + ' zajmaje ' + item.length);
}
//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
for (const item of arr) {
    console.log(item.toUpperCase());
}
//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
for (const item of arr) {
    console.log(item.toLowerCase());
}
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.replaceAll(" ", ''));
//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Каждый охотник желает знать';
//let arr = stringToarray(str);
//document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let str1 = 'Каждый охотник желает знать';
function stringToarray(str1){
    str1.split(' ');
}
let arr1 = stringToarray(str1);
console.log(arr1); // ['Каждый', 'охотник', 'желает', 'знать']
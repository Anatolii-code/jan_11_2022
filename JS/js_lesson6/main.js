// //- Знайти та вивести довижину настипних стрінгових значень
// //'hello world', 'lorem ipsum', 'javascript is cool'
// let arr = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (const item of arr) {
//     console.log(item + ' zajmaje ' + item.length);
// }
// //- Перевести до великого регістру наступні стрінгові значення
// //'hello world', 'lorem ipsum', 'javascript is cool'
// for (const item of arr) {
//     console.log(item.toUpperCase());
// }
// //- Перевести до нижнього регістру настипні стрінгові значення
// //'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// for (const item of arr) {
//     console.log(item.toLowerCase());
// }
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//let str = ' dirty string   '
//console.log(str.replaceAll(" ", ''));
//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Каждый охотник желает знать';
//let arr = stringToarray(str);
//document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// let  stringToarray = (infostr) => {
//     let infostr1 = infostr.split(' ');
//     return infostr1;
// }
// let arr = stringToarray(str);
// console.log(arr);

//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.

// let str = 'Каждый охотник желает знать';
// let delete_characters =(strarr,n)  =>{
//         return strarr.substr(0, n);
// }
// document.writeln(delete_characters(str, 7)); // Каждый
//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.

// let str = "html JavaScript PHP";
// let insert_dash = (str) =>{
//     return str.replaceAll(" ", '-').toUpperCase();
// }
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//let str = "html JavaScript PHP";
// let lowerUp = (str) =>{
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// document.writeln(lowerUp(str));
//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
const str = 'i have learned something new today';
let firstLatter = (str) => {
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    return str2;
}
console.log(firstLatter(str));
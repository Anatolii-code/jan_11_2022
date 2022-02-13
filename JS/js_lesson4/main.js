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
    return h*rad*rad;
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
let text = "sdfsfd"
function makep() {
    document.write('<h1>${text}</h1>');
}
//makep('hello');
makep();
//6) - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий



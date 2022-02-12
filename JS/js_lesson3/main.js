// 1)
// let arrNum =  [ 1, 2, 3, 4, 5]
// document.write(arrNum);

//2)
// let arrSt =  [ 'l3', 'qwe', 'asd', 'zcx', 'fhg'];
// document.write(arrSt);
// console.log(arrSt);

// //3)
// let arrBool =  [ true, false, true, true, false,
//                  'l3', 'qwe', 'asd', 'zcx', 'fhg',
//                  1, 2, 3, 4, 5];
// document.write(arrBool);

// //4)
// let arrBool =  [ true, false, true, true, false,
//                  'l3', 'qwe', 'asd', 'zcx', 'fhg',
//                  1, 2, 3, 4, 5];
// document.write(arrBool);

// //5)
// let arrVoid =  [];
// arrVoid[0] = true;
// arrVoid[1] = 1;
// arrVoid[2] = 2;
// arrVoid[3] = 'qweqwe';
// arrVoid[4] = 'qweqwe';
// arrVoid[5] = '123';
//
// document.write(arrVoid);

//6)
// let arrVoid =  [];
// arrVoid[0] = true;
// arrVoid[1] = 1;
// arrVoid[2] = 2;
// arrVoid[3] = 'qweqwe';
// arrVoid[4] = 'qweqwe';
// arrVoid[5] = '123';
// //
// document.write(arrVoid);

// //7/8)
// document.write('<ol class="arrVoidClass">')
// for (let i = 0; i<10 ; i++ ) {
//
//     document.write(i);
//     document.write('<li>${arrVoid}</li>');
//
// }
// document.write('</ol>');

// //9)- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i<20){
//     document.write('<h1>Lorem ipsum dolor.</h1>');
//     i++;
// }

// //10) За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині. + index
// let i = 0;
// while (i<20){
//     document.write(i);
//     document.write('<h1>Lorem ipsum dolor.</h1>');
//     i++;
// }

// // 11)
// let arrNum =  [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10];
// console.log(arrNum);

// //12)
// let arrSt =  [ 'l3', 'qwe', 'asd', 'zcx', 'fhg','l3', 'qwe', 'asd', 'zcx', 'fhg'];
// console.log(arrSt)

// //13)
// let arrAll =  [ 'l3', true, 'asd', 1, 2,'l3', false, 'asd', true, 'fhg'];
// // console.log(arrAll);
// let i=0;
// while (i<arrAll.length) {
//     let a = typeof arrAll[i];
//     if (a === 'string') {
//         console.log(a + '  ' +arrAll[i]);
//     }
//     i++
// }

// //14)
// let arrAll =  [ 'l3', true, 'asd', 1, 2,'l3', false, 'asd', true, 'fhg'];
// // console.log(arrAll);
// let i=0;
// while (i<arrAll.length) {
//     let a = typeof arrAll[i];
//     if (a === 'number') {
//         console.log(a + '  ' +arrAll[i]);
//     }
//     i++
// }

// //15)
// let arrAll =  [ 'l3', true, 'asd', 1, 2,'l3', false, 'asd', true, 'fhg'];
// // console.log(arrAll);
// let i=0;
// while (i<arrAll.length) {
//     let a = typeof arrAll[i];
//     if (a === 'boolean') {
//         console.log(a + '  ' +arrAll[i]);
//     }
//     i++
// }

// // dod)
let arrVoid =  [];
arrVoid[0] = true;
arrVoid[1] = 1;
arrVoid[2] = 2;
arrVoid[3] = 'qweqwe';
arrVoid[4] = 'qweqwee';
arrVoid[5] = '123';
arrVoid[6] = 'lorem2';
arrVoid[7] = 5;
arrVoid[8] = 6
arrVoid[9] = false;

// //16)
// for(let i = 0; i<arrVoid.length; i++) {
//     console.log(arrVoid[i]);
// }

// //17)
// for(let i = 0; i<arrVoid.length; i++) {
//     console.log(i);
//     document.write(i);
// }

// //18)
// for(let i = 0; i<100; i++) {
//     console.log(i);
//     document.write(i);
// }

// //19
// for(let i = 0; i<100; i=i+2) {
//     console.log(i);
//     document.write(i);
// }

// //20  parni
// for(let i = 0; i<100; i++) {
//     if (i%2===0) {
//         console.log(i);
//         document.write(i);
//     }
// }

// //21 Neparni

// for(let i = 0; i<100; i++) {
//     if (i%2===0) {
//     }
//     else {
//         console.log(i);
//         document.write(i);
//     }
// }
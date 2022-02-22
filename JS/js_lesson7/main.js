// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

//function user(id, name, surname , email, phone) {
//    let obj = {id: id , name: name, surname:surname , email:email, phone:phone}
//
//    return { // createUser
//        getId: function () {
//            return obj.id;
//        },
//        getName: function () {
//            return obj.name;
//        },
//        getSurname: function () {
//            return obj.surname;
//        },
//        getEmail: function () {
//            return obj.email;
//        },
//        getPhone: function () {
//            return obj.phone;
//        },
//    };
//
//}
//let createUser = user(1,'qwe','asd','gfdg',123);
//console.log(createUser);
//console.log(createUser.getId());

function User(id, name, surname , email, phone) {
    this.id = id;
    this['name'] = name;
    this['surname'] = surname;
    this.email = email;
    this.phone = phone;
}
let userarray =[];

for (let i = 0; i < 10; i++) {
    userarray[i] = new User(i+1,'qwe','asd','gfdg',123);
}
console.log(userarray);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
let parni = userarray.filter(User => User.id %2 == 0);
console.log(parni);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
let sort = userarray.sort(function (current, next) {
    return current.id - next.id;
})
console.log(sort);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client (id, name, surname , email, phone, order) {
    this.id = id;
    this['name'] = name;
    this['surname'] = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clientarray = [];
for (let i = 0; i < 10; i++) {
    clientarray[i] =  new Client(1+i,'qwe','asd','gfdg',123,['qweqe',12123,true,'rwer']);
}
console.log(clientarray);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
 let sortCLients = clientarray.sort((a, b) => a.order.length - b.order.length);
 console.log(sortCLients)
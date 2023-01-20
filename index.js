
// function checkAge(age)  {
//   (age > 18) ? true : confirm("Родители разрешили?");
// }

//  checkAge(19);

//  function pow(x, n) {
//   return Math.pow(x, n);
//  }
//  let powNumber = pow(2, 3)
//  console.log(powNumber);

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   (yes) => alert("Вы согласились."),
//   (no) => alert("Вы отменили выполнение."),
// )

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b- a);

// alert( arr ); // 8, 5, 2, 1, -10



// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// alert(names); // Вася, Петя, Маша


let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
    fullName : `${user.name} ${user.surname}`,
    id : user.id
}))
/* ... ваш код ... *//*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//   }

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
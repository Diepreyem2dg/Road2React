// // // alert ('hell0 world')

// // console.log('This are the emoloyees paid above 100K');

// // const array = [2, 3, 4];
// // console.log(array);
// const employee = [
//     {
//         name : 'Ugo',
//         salary : 40,
//     },
//     {
//         name : 'Ugo',
//         salary : 40,
//     },
//     {
//         name : 'Ugo',
//         salary : 40,
//     },
//     {
//         name : 'Ugo',
//         salary : 40,
//     },
//     {
//         name : 'Preye',
//         salary : 200,
//     },
//     {
//         name : 'Gideon',
//         salary : 1000,
//     },
//     {
//         name : 'Eno',
//         salary : 120,
//     },
//     {
//         name : 'Nonso',
//         salary : 80,
//     },
// ]

// //All the staff dem.
// const staff1 = {
//     name: 'Preye',
//     lastname: 'Moses',
//     team: 'dev',
//     age: 24,
//     gender: 'male',
//     salary: 600000
// };
// const staff2 = {
//     name: 'Ugo',
//     lastname: 'Chukwu',
//     team: 'dev',
//     age: 27,
//     gender: 'male',
//     salary: 195000
// };
// const staff3 = {
//     name: 'Giddy',
//     lastname: 'Ani',
//     team: 'Pen Test',
//     age: 28,
//     gender: 'male',
//     salary: 290000
// };
// const staff4 = {
//     name: 'Shola',
//     lastname: 'Ade',
//     team: 'GRC',
//     age: 24,
//     gender: 'female',
//     salary: 60000
// };

// // console.log(staff);

// // 
// if (staff1.salary > 100000){
//     console.log(person.salary);
// }

// // function division(val){
// //     if(val % 2 == 0){
// //         console.log('This number is divisible by 2');
// //         return val;
// //     } else {
// //         console.log('This is not an even nuber');
// //     }
// // };

// // const num1 = division(4);
// // const num2 = division(8) ;
// // const numbers = [num1, num2];
// // // division(80);

// // console.log(numbers);

// employee.filter(employee.salary > 30)

// function addition(num1, num2){
//     return num1 + num2;
// };

// const var1 = addition(8, 9);
// const var2 = addition(5, 5);

// // console.log(addition(10, 50))

// const values = [var1, var2];
// console.log(values);

// function calc(num1, num2, num3){
//     return (num1 + num2) * num3
// }

// const val1 = calc(2, 5, 8);
// const val2 = calc(5, 8, 0);
// const val3 = calc(2, 2, 2);
// const values = [val1, val2, val3];

// console.log(values);

// const value = 2 > 7;
// const value2 = false;
// if (value){
//     console.log('Hello world');
// }
// else{
//     console.log('Hello people');
// }

// const name = 'bob';
// const age = 24;

// if (name === 'bob'){
//     console.log('Hello there user!');
// } else {
//     console.log('Wrong values!');
// };

// if (name !== 'bob' && age !== 22){
//     console.log('Hello there user!');
// } else {
//     console.log('ERROR!!');
// }

// if (name !== 'bob' || age !== 23){
//     console.log('Hello there user!');
// } else {
//     console.log('ERROR!!');
// }

// const dice = 5;

// switch (dice){
//     case 1: 
//         console.log('You got a One');
//         break;
//     case 2: 
//         console.log('You got a two');
//         break;
//     case 3: 
//         console.log('You got a three');
//         break;
//     case 5:
//         console.log('You got a five');
//         break;
//     default: 
//         console.log('You have\'nt rolled the dice');
// }

//WHILE LOOP
// let amount = 10;

// while(amount > 0){
//     console.log('I have ' + amount + " dollars, and I'm going to the market");
//     amount--;
// }

// //DO WHILE LOOP
// let money = 0;

// do {
//     console.log('You have ' + money + ' dollars');
//     money++;
// } while (money <= 10);

//FOR LOOP

// let i;
// for(i = 0; i < 10; i++){
//     console.log('And the number is ' + i );
// }

// for (let number = 11; number >= 0; number--){
//     console.log('You won' + number + ' dollars');
// }

//METHODS (I THINK ARE ON THE INTERNET)

// let text = 'preye'
// let result = text.length;

// console.log(result);
// console.log(text.length);


// let i;
// for(i>=0; i<10; )




// Mini-project1 (FULL NAME): *Applying Arrays with FOR loop*
// const names = ['Diepreye', 'Nengi', 'Ella', 'Chibu'];
// const lastname = 'Moses-Gombo';
// let newArray = [];

// // for loop
// for(let i = 0; i < names.length; i++){
//     console.log(i);
//     console.log(names[i]);
//     // newArray.push(names[i]);
//     newArray.push(`${names[i]} ${lastname}`);
// }

// console.log(names);
// console.log(newArray);


// //Mini-project1 (STAFF THAT ARE SINGLE AND READY TO MINGLE): *Applying Arrays with FOR loop*
// const femaleStaff = ['Eno', 'Amaka', 'Godslove', 'Shola', 'Elizabeth', 'Daniella'];
// const maleStaff = ['Ugo', 'Wale', 'Seyi', 'Gideon', 'Diepreye', 'Miracle'];
// let mingle = [];

// //for loop
// for(i = 0; i < femaleStaff.length; i++){
//     for(i = 0; i < maleStaff.length; i++){
//         mingle.push(`${femaleStaff[i]} ${maleStaff[i]}`);
//     }
// }
// console.log(mingle);



// //A WHOLE DIFFERENT EXERCISE
// const snacks = [20, 40, 100, 30];
// const food = [10, 40, 50];

// function calculateTotal(arr){
//     let total = 0;
//     for(let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     if(total > 100){
//         console.log(`Whoa! You are spending way too much`);
//         return total;
//     }
//     console.log(`You are good, total is less than 100`);
//     return total;
// }

// const snacksTotal = calculateTotal(snacks);
// const foodTotal = calculateTotal(food);
// const randomTotal = calculateTotal([30, 40, 50, 80]);

// console.log({
//     snacks: snacksTotal,
//     food: foodTotal,
//     random: randomTotal,
// });



// //Other exercises from the class


// const globalnumber = 5;

// function add(num1, num2){
//     const result = num1 + num2 + globalnumber;
//     return result;
// }

// console.log(add(4, 3));


// function morning(name){
//     return `Good morining ${name.toUpperCase()}`;
// }

// function greet(name, morning){
//     const myname = 'Diepreye';
//     console.log(`${morning(name)}, my name is ${myname}`);
// }

// greet('Daniella', morning);
// greet('God\'s love', morning);

function morning(name){
   return `Good morning ${name.toUpperCase()}`;
}
function afternoon(name){
    return `Good morning ${name.repeat(3)}`;
 }

function greet(name, cb){
    const myname = 'Diepreye';
    console.log(`${cb(name)}, my name is ${myname}`);
}

greet('Bola', morning);
greet('Tola', afternoon);
//home tasks after second lesson
const out = document.querySelector('.out');
// out.innerHTML += '';


//Task 1:
//Ремонт


// let l = +prompt('Введите данные L','');
// let w = +prompt('Введите данные W','');
// let h = +prompt('Введите данные H','');

// if (l >= 1000 || w >= 1000 || h >= 1000) {
//     alert(`L или W или H, не могут быть длинее 1000, обновите страницу и повторите ввод.`);
// } else {
// const s = h*(2*(w+l));
// const paint = 16;
// let quantityOfPaint = Math.ceil(s/paint);

// out.innerHTML += quantityOfPaint + ' банок краски.';
// }


// Task 4: ------------------------------------------------

// Task 4.1 ------------------------------------------------

// let age = +prompt('Укажите ваш возраст','');

// switch (true) {

//     case (age <= 12):
//         out.innerHTML += 'Вы ребенок!';
//         break;
//     case (age <= 18):
//         out.innerHTML += 'Вы подросток!';
//         break;
//     case (age <= 60):
//         out.innerHTML += 'Вы взрослый!';
//         break;
//     case (age > 60):
//         out.innerHTML += 'Вы пенсионер!';
//         break;

//     default: {
//         out.innerHTML += "Что-то не так!";
//     }
// }

// Task 4.2 ------------------------------------------------

// let symb = +prompt('Введите число от 0 до 9','1');

// switch (symb) {

//     case 1:
//         out.innerHTML += 'Shift + 1 выдаст символ: !';
//         break;
//     case 2:
//         out.innerHTML += 'Shift + 2 выдаст символ: @';
//         break;
//     case 3:
//         out.innerHTML += 'Shift + 3 выдаст символ: #';
//         break;
//     case 4:
//         out.innerHTML += 'Shift + 4 выдаст символ: $';
//         break;
//     case 5:
//         out.innerHTML += 'Shift + 5 выдаст символ: %';
//         break;
//     case 6:
//         out.innerHTML += 'Shift + 6 выдаст символ: ^';
//         break;
//     case 7:
//         out.innerHTML += 'Shift + 7 выдаст символ: &';
//         break;
//     case 8:
//         out.innerHTML += 'Shift + 8 выдаст символ: *';
//         break;
//     case 9:
//         out.innerHTML += 'Shift + 9 выдаст символ: (';
//         break;
//     case 0:
//         out.innerHTML += 'Shift + 0 выдаст символ: )';
//         break;


//     default: {
//         out.innerHTML += "Что-то не так!";
//     }
// }

// Task 4.3 ------------------------------------------------

// let digit = +prompt('Укажите трех значное число','123');
// let numC = digit % 10; //3
// let numB = (digit - numC) / 10 % 10; //123-3=120/10=12%10=2
// let numA = ((digit - numC) - numB * 10) / 100;  //123-3-2*10=100/100=1

// if ( numA == numB || numB == numC || numC == numA ) {
//     out.innerHTML += "У вас есть повторяющееся числа!";
// } else {
//     out.innerHTML += "У вас нет повторяющихся чисел!";
// };

// Task 4.4 ------------------------------------------------
// let year = +prompt('Укажите год','2020');

// if (year % 400 == 0){
//     out.innerHTML += "Год высокосныный!";
// } else if (year % 4 == 0 && year % 100 !== 0) {
//     out.innerHTML += "Год высокосныный!";
// } else out.innerHTML += "Год не высокосныный!";


// Task 4.5 ------------------------------------------------
// let palindrom = String(prompt("Введите пятизначное число", '12345'));

// let num0000X = String(palindrom % 10);
// let num000X0 = String(((palindrom - num0000X) / 10) % 10);
// let num00X00 = String(((palindrom - num0000X - num000X0*10) / 100) % 10);
// let num0X000 = String(((palindrom - num0000X - num000X0*10 - num00X00*100) / 1000) % 10);
// let numX0000 = String((palindrom - num0000X - num000X0*10 - num00X00*100 - num0X000*1000) / 10000);

// let palindrom2 = String(num0000X + num000X0 + num00X00 + num0X000 + numX0000);
// if (palindrom === palindrom2) {
//     out.innerHTML +="Введенное Вами число - палиндром!";
// } else out.innerHTML +="Введенное Вами число - НЕ палиндром";

// Task 4.6 ------------------------------------------------
// let USD = +prompt('Укажите сумму в долларах','100');
// let currency = +prompt(`Укажите пару валют для обмена:
// 1 - UDS to EUR;
// 2 - USD to UAH;
// 3 - USD to AZN.`, '');

// const usdToEur = .91;
// const usdToUah = 24.6;
// const usdToAzn = 1.7;

// switch (currency){
//     case 1:
//         { 
//             out.innerHTML += "За сумму " + USD + " USD вы можете получить " + (USD*usdToEur) + " EUR"; 
//         }
//     case 2:
//         { 
//             out.innerHTML += "За сумму " + USD + " USD вы можете получить " + (USD*usdToUah) + " UAH"; 
//         }
//     case 3:
//         { 
//             out.innerHTML += "За сумму " + USD + " USD вы можете получить " + (USD*usdToAzn) + " AZN"; 
//         }
// }

// Task 4.7 ------------------------------------------------

// Task 4.8 ------------------------------------------------

// Task 4.9 ------------------------------------------------

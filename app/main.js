//1. Запросите у пользователя его имя и выведите в ответ:
//«Привет, его имя!».
//-------------------------------------------
// let userName = String(prompt('What is your name?'));
// alert("Hello, " + userName + "!"); 
//-------------------------------------------


//-------------------------------------------
// 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. 
// Текущий год укажите в коде как константу.
//-------------------------------------------
// let yearOfBirth = Number(prompt('Enter you year of birth, please'));
// const currentYear = 2020;
// let age = currentYear - yearOfBirth;
// alert('Your age is: ' + age);
//-------------------------------------------


//-------------------------------------------
// 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
//-------------------------------------------
// let sideOfSquare = Number(prompt('Enter square length in cm, please.'));
// alert("Square area is," + sideOfSquare ** 2 + "!"); 
//-------------------------------------------


//-------------------------------------------
// 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.
//-------------------------------------------
// const PI = 3.14;
// let radius = Number(prompt("Enter a circle radius, please."));
// let square = PI * radius ** 2;
// alert(square);
//-------------------------------------------

//-------------------------------------------
// 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. 
// Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
//-------------------------------------------
// let distance = Number(prompt("Enter a distance in km, please."));
// let timeInHours = Number(prompt("How many hours do you want to get there?"));
// let speed = distance / timeInHours;
// alert("You have to drive at " + speed + " km/h to be on time.");
//-------------------------------------------

//-------------------------------------------
// 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. 
// Курс валюты храните в константе.
//-------------------------------------------
// const rateEuroToDollar = .92;
// let USD = Number(prompt("Enter amount of dollars, please."));
// alert(USD + '$ is ' + (Math.round((USD*rateEuroToDollar)*100)/100) + '€');
//-------------------------------------------

//-------------------------------------------
// 7. Пользователь указывает объем флешки в Гб. 
// Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку
//-------------------------------------------
// const sizeOfFileInMb = 820;
// let sizeOfUsbInGb = Number(prompt("How much Gb is on the USB flash drive?"));
// let sizeOfUsbInMb = sizeOfUsbInGb * 1024;
// let countFilesOnUsb = (sizeOfUsbInMb - sizeOfUsbInMb % sizeOfFileInMb) / sizeOfFileInMb;
// alert("Amount of files on USB drive is: " + countFilesOnUsb);
//-------------------------------------------

//-------------------------------------------
// 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. 
// Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.
//-------------------------------------------
// let userMoney = Number(prompt("How much money you have?"));
// let chocoPrice = Number(prompt("What is price of chocolate?"));
// let change = userMoney % chocoPrice;
// let amountOfChoco = (userMoney - change) / chocoPrice;

// alert("You could buy " + amountOfChoco + " chocolates." 
// + "\nYour change is: " + change + );
//-------------------------------------------

//-------------------------------------------
// 9. Запросите у пользователя трехзначное число и выведите его задом наперед. 
// Для решения задачи вам понадобится оператор % (остаток от деления).
//-------------------------------------------
// let num = Number(prompt('Please enter a 3 digits number', 123));
// let firstDig = num  % 10;
// num = (num - firstDig) / 10;
// let secondDig = num % 10;
// let thirdDig = (num - secondDig) / 10;
// alert(String(firstDig) + secondDig + thirdDig);
//-------------------------------------------

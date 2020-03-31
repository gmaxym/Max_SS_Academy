let salaryInput = document.getElementById('salaryInput');

let resultDay = document.getElementById('resultDay');
let resultHour = document.getElementById('resultHour');
let resultMinute = document.getElementById('resultMinute');
let inputChecker = salaryInput;

let checkInput = () => {
    let regExp = /[^(0-9\.)]/ig;
    salaryInput.value = salaryInput.value.replace(regExp,'');
};

inputChecker.addEventListener('input', checkInput);
salaryInput.addEventListener("input", calculation);

function calculation() {
let salary = salaryInput.value;
let costPerDay = (salary * 12 / 365).toFixed(2) + currency.value;
let costPerHour = (salary * 12 / 365 / 24).toFixed(2) + currency.value;
let costPerMinute = (salary * 12 / 365 / 24 / 60).toFixed(2) + currency.value;

resultDay.innerHTML = "Your day cost : " + costPerDay;
resultHour.innerHTML = "Your hour cost : " + costPerHour;
resultMinute.innerHTML = "Your minute cost : " + costPerMinute;
};

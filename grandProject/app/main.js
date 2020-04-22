// C a l c u l a t o r - - - - - - - - - - - - - - - - - - - -
let salaryInput = document.getElementById('salaryInput');

let resultDay = document.getElementById('resultDay');
let resultHour = document.getElementById('resultHour');
let resultMinute = document.getElementById('resultMinute');

let inputChecker = salaryInput;
let formula;
let inputValue4Timer;

let priceFromStart = document.getElementById('price');
priceFromStart.innerHTML = "0.00" + currency.value;

let checkInput = () => {
	let regExp = /[^(0-9\.,)]/ig;
	salaryInput.value = salaryInput.value.replace(regExp, '');
};

inputChecker.addEventListener('input', checkInput);
salaryInput.addEventListener("input", calculation);
salaryInput.addEventListener("input", getInputValue);
currency.addEventListener("change", calculation);

function calculation() {
	let salary = salaryInput.value;
	var res = (salaryInput.value * 12 / 365 / 24 / 60 / 60);
	let costPerDay = (res * 86400).toFixed(2) + currency.value;
	let costPerHour = (res * 3600).toFixed(2) + currency.value;
	let costPerMinute = (res * 60).toFixed(2) + currency.value;
	
	resultDay.innerHTML = "Your day cost : " + costPerDay;
	resultHour.innerHTML = "Your hour cost : " + costPerHour;
	resultMinute.innerHTML = "Your minute cost : " + costPerMinute;
	formula = res;
	priceFromStart.innerHTML = "0.00" + currency.value;
};

function showTimerBox() {
	let hideInput = document.getElementById('salaryInput');
	let timerDiv = document.getElementById('hiddenBox');
	let saveBoxDiv = document.getElementById('hiddenBox2');
	
	if (hideInput.value != "") {
		timerDiv.style.display = 'block';
		saveBoxDiv.style.display = 'block';
	} else {
		timerDiv.style.display = 'none';
		saveBoxDiv.style.display = 'none';
	}
}

function getInputValue() {
	let res = (salaryInput.value * 12 / 365 / 24 / 60 / 60);
	inputValue4Timer = res;
}
// T I M E R  - - - - - - - - - - - - - - - - - - - -
let timerOnHTML = document.getElementById('timer');
let toggleBtnOnHTML = document.getElementById('toggle');
let resetBtnOnHTML = document.getElementById('reset');

let watch = new Stopwatch(timer);

let forTimerInput = salaryInput;
let formulaInput = forTimerInput.value;

toggleBtnOnHTML.addEventListener('click', function() {
	if (watch.isOn) {
		watch.stop();
		toggleBtnOnHTML.innerHTML = 'Start';
	} else {
		watch.start();
		toggleBtnOnHTML.innerHTML = 'Stop';
	}
});

resetBtnOnHTML.addEventListener('click', function() {
	watch.reset();
});

function Stopwatch(elem) {
	let time = 0;
	let interval;
	let offset;
	let pricePerSecond = document.getElementById('price');
	currency.addEventListener("change", update);

	function update() {
		let priceTimeInSecondsCost = inputValue4Timer; //taken from salary input!!!
		// console.log(inputValue4Timer + ' inputValue4Timer');
		if (this.isOn) {
			time += delta();
		}

		priceTimeInSeconds = time / 1000 * priceTimeInSecondsCost;
		pricePerSecond.innerHTML = priceTimeInSeconds.toFixed(2) + currency.value; //out to page cost per second
		let formattedTime = timeFormatted(time);
		// console.log(formattedTime);
		elem.innerHTML = formattedTime;
	};

	function delta() {
		let now = Date.now();
		let timePassed = now - offset;
		offset = now;
		return timePassed;
	};

	function timeFormatted(timeInMilliseconds) {
		let timeInFunc = new Date(timeInMilliseconds);
		// let hours =  timeInFunc.getHours().toString(); //output "3"
		let minutes = timeInFunc.getMinutes().toString();
		let seconds = timeInFunc.getSeconds().toString();
		let hours = Math.floor(minutes / 60).toString();
		
		if (hours.length < 2) {
			hours = '0' + hours;
		}
		if (minutes.length < 2) {
			minutes = '0' + minutes;
		}
		if (seconds.length < 2) {
			seconds = '0' + seconds;
		}
		
		return hours + ':' + minutes + ':' + seconds;
	};
	
	this.isOn = false;
	this.start = function() {
		if (!this.isOn) {
			interval = setInterval(update.bind(this), 1000);
			offset = Date.now();
      this.isOn = true;
      
		}
	};
	
	this.stop = function() {
		if (this.isOn) {
			clearInterval(interval);
			interval = null;
			this.isOn = false;
		}
	};
	
	this.reset = function() {
		if (!this.isOn) {
			time = 0;
			timerOnHTML.innerHTML = '00:00:00'
			pricePerSecond.innerHTML = '0.00' + currency.value;
		}
	}
};
// S A V E - - - - - - - - - - - - - - - - - - - -
let today = new Date();
let mn = today.getMinutes();
let hh = today.getHours();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();

if (dd < 10) {
	dd = '0' + dd
};
if (mm < 10) {
	mm = '0' + mm
};
if (hh < 10) {
	hh = '0' + dd
};
if (mn < 10) {
	mn = '' + mm
};

today = yyyy + '-' + mm + '-' + dd + ' ' + hh + ":" + mn;

function saveFormAsTextFile() {
	let textToSave = 
		'---\n' + 
		'Date: ' + today + '\n' + 
		'---\n' + 'Your month salary: ' + document.getElementById(
			'salaryInput').value + currency.value + '\n' + 
		'---\n' + document.getElementById('resultDay').innerHTML +
		'\n' + document.getElementById('resultHour').innerHTML + '\n' + 
		document.getElementById(
			'resultMinute').innerHTML + '\n' + '---\n' + 
		document.getElementById('costOfWasting').innerHTML +
		'\n' + 
		'Cost: ' + document.getElementById('price').innerHTML + '\n' + 'Timer: ' + document.getElementById(
			'timer').innerHTML + '\n' + 
		'---';
	
  let textToSaveAsBlob = new Blob([textToSave], {type: "text/plain"});
  
	let textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
	let fileNameToSaveAs = document.getElementById("filename").value;
	let downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.href = textToSaveAsURL;
	downloadLink.onclick = destroyClickedElement;
	document.body.appendChild(downloadLink);
	
	downloadLink.click();
}

function destroyClickedElement(event) {
	document.body.removeChild(event.target)
};

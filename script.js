let btn = document.getElementById('btn')
btn.addEventListener('click', function () {
	alert('Hi')
})

console.log('Hi')

//  ПОЧАТКОВІ ДАНІ
let features = ['multiplayer', 'story mode', 'open world', 'achievements']
let costs = [5000, 3000, 8000, 1000]
let bugs = [45, 10, 28, 5]

//  Етап 1 QA
let i = 0
while (i < bugs.length) {
	if (bugs[i] > 30) {
		features.splice(i, 1);
		costs.splice(i, 1);
		bugs.splice(i, 1);
	} else {
		i++;
	}
}

//Етап 2 Збір даних та жорстка валідація
let studioName;
do {
	studioName = prompt('Введи назву своєї студії');
	if (studioName === null) studioName = '';
} while (studioName.trim() === '' || !isNaN(studioName));

let gameName;
do {
	gameName = prompt('Введи назву своєї гри');
	if (gameName === null) gameName = '';
} while (gameName.trim() === '' || !isNaN(gameName));

let budget;
do {
	budget = prompt('Введи стартовий бюджет (у доларах):');
	if (budget === null) budget = '';
} while (budget.trim() === '' || isNaN(budget) || Number(budget) <= 0);
budget = Number(budget);

let months;
do {
	months = prompt('Скільки місяців буде тривати розробка?');
	if (months === null) months = '';
} while (months.trim() === '' || isNaN(months) || Number(months) <= 0);
months = Number(months);

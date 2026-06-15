let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
//  ПОЧАТКОВІ ДАНІ
let features = ['multiplayer', 'story mode', 'open world', 'achievements']
let costs = [5000, 3000, 8000, 1000]
let bugs = [45, 10, 28, 5]

//  Етап 1 QA
//*
for(let i = bugs.length - 1; i >= 0; i--){
	if (bugs[i] > 30) {
		features.splice(i, 1);
		costs.splice(i, 1);
		bugs.splice(i, 1);
}
}
// let i = 0
// while (i < bugs.length) {
// 	if (bugs[i] > 30) {
// 		features.splice(i, 1);
// 		costs.splice(i, 1);
// 		bugs.splice(i, 1);
// 	} else {
// 		i++;
// 	}
// }

//Етап 2 Збір даних та жорстка валідація
let studioName;
do {
	studioName = prompt('Введи назву своєї студії');
	if (studioName === null) studioName = '';
} while (studioName.trim() === '' || !isNaN(studioName));
//*
console.log(studioName)

let gameName;
do {
	gameName = prompt('Введи назву своєї гри');
	if (gameName === null) gameName = '';
} while (gameName.trim() === '' || !isNaN(gameName));
//*
console.log(gameName)

let budget;
do {
	budget = prompt('Введи стартовий бюджет (у доларах):');
	if (budget === null) budget = '';
} while (budget.trim() === '' || isNaN(budget) || Number(budget) <= 0);
budget = Number(budget);
//*
console.log(budget)

let months;
do {
	months = prompt('Скільки місяців буде тривати розробка?');
	if (months === null) months = '';
} while (months.trim() === '' || isNaN(months) || Number(months) <= 0);
months = Number(months);
//*
console.log(months)



//Етап 3
let gameEditionType;

do{
    gameEditionType = prompt("Оберіть тип видання гри (standard/deluxe)")
    if(gameEditionType === null){
        gameEditionType = '';
    } else {gameEditionType = gameEditionType.toLowerCase().trim()}
} while(gameEditionType !== "deluxe" && gameEditionType !== "standard");

switch(gameEditionType){
    case "deluxe":
        let additionalFeatures = ["dlc expansion","exclusive skins","ray tracing"];
        features = features.concat(additionalFeatures);

        let additionalCosts = [4000, 1500, 6000];
        costs = costs.concat(additionalCosts);

        let additionalBugs = [15, 2, 29];
        bugs = bugs.concat(additionalBugs);

        console.log(gameEditionType);
        break;
    default:
        console.log(gameEditionType)

}

//Етап 4 Кранч та вирізання фіч 
let featureFound = false;
while (featureFound === false) {
    let featuresList = features.join(", ");
    let answer = prompt("Видавництво вимагає вирізати фічу" + featuresList);
    if (answer === null || answer.trim() === "") {
        alert("Ви нічого не вводили. Сробуйте ще раз!");
        continue;
    }
let lowerCaseFeatures = [];
for (let i = 0; i < features.length; i++) {
    lowerCaseFeatures.push(features[i].toLowerCase());
}
let answerLower = answer.toLowerCase();
let foundIndex = lowerCaseFeatures.indexOf(answerLower);
if (foundIndex !== -1) {
    features.splice(foundIndex, 1);
    costs.splice(foundIndex, 1);
    bugs.splice(foundIndex, 1);

    alert("Фічу успішно видалено!");
    featureFound = true;
} else { alert("Такої фічі не знайдено! Спробуйте ще раз")}; //*
}




//Етап 5
let totalCost = 0;
for(let i = 0; i < costs.length; i++){
    totalCost = totalCost + costs[i]
} console.log(totalCost)

if(months > 12){
    totalCost = totalCost * 1.15;
} else if (months < 6){
    totalCost = totalCost * 0.9
} 

if(budget >= totalCost){
    let x = "";
   for(let i = 0; i < features.length; i++){
    x = x + `• Фіча: ${features[i]} | Ціна: ${costs[i]}$ | Багів: ${bugs[i]} \n`;
   } alert(`🚀 Реліз у Steam успішний!\n\nСтудія "${studioName}" випустила гру "${gameName}"!\n\n${x}\n💰 Фінальна вартість розробки: ${totalCost}$`);
} else { alert(`Банкрутство! Студії "${studioName}" Не вистачило ${totalCost - budget}$ для завершення гри "${gameName}"`)}

})
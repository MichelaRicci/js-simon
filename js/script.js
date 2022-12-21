console.log('JS OK');

// Recupero elementi in pagina 

const daysDisplay = document.getElementById('days');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

// Data attesa

const countDownDate = new Date("Dec 25, 2022");
const msConutDownDate = countDownDate.getTime();



// Unità di misura 

const msSeconds = 1000;
const msMinutes = msSeconds * 60;
const msHours = msMinutes * 60;
const msDays = msHours * 24;


// Funzione per il conto alla rovescia 

const countDown = () => {

// Data odierna e ora attuale

const now = new Date();
const msNow = now.getTime();


// Lasso di tempo fra la data corrente e quella attesa 

const msDistance = msConutDownDate - msNow;

console.log(msDistance);


// Calcoli 

const daysTo = Math.floor(msDistance / msDays);
const hoursTo = Math.floor((msDistance % msDays) / msHours);
const minutesTo = Math.floor((msDistance % msHours) / msMinutes);
const secondsTo = Math.floor((msDistance % msMinutes) / msSeconds);




// Stampo in pagina 

daysDisplay.innerText = daysTo;
hoursDisplay.innerText = hoursTo;
minutesDisplay.innerText = minutesTo;
secondsDisplay.innerText = secondsTo;


}


setInterval(countDown, msSeconds);
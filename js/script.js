console.log('JS OK');

// Recupero elementi in pagina 

const daysDisplay = document.getElementById('days');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

// Lasso di tempo fra la data corrente e quella attesa

const countDownDate = new Date("Dec 25, 2022 00:00:00");


// Update countdown

setInterval(() => {

    // Data odierna e ora attuale

    const now = new Date().getTime();


    //Distanza tra ora e data attesa 

    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);



})
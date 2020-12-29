let secondsNeedle = document.getElementById("secondes");
let minutesNeedle = document.getElementById("minutes");
let hoursNeedle = document.getElementById("heures");

setInterval(function(){
    //On récupére la date actuelle
    let dateNow = new Date();
    //On récupére les secondes/minutes/heures de la date actuelle
    let seconds = dateNow.getSeconds();
    let minutes = dateNow.getMinutes();
    let hours = dateNow.getHours();

    //Les secondes actuelles sont tournés à 360 deg dans l'horloge, toutes les 60s, + 10 pour que l'aiguille soit plus exacte
    let secTime = ((seconds / 60) * 360 + 10);
    secondsNeedle.style.transform = "rotate(" + (secTime)+"deg)";

    //Les minutes actuelles sont tournés à 360 deg dans l'horloge, toutes les 60s en fonction des secondes
    let minTime = ((minutes / 60) * 360) + ((seconds / 60));
    minutesNeedle.style.transform = "rotate(" + (minTime)+"deg)";

    let hourTime = ((hours / 12) * 360) + ((minutes / 60 ) * 30);
    hoursNeedle.style.transform = "rotate(" + (hourTime)+"deg)";

    //L'heure actuelle
    document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
    //La date actuelle
    document.getElementById("date").innerHTML = new Date().toLocaleDateString();
}
,1000);




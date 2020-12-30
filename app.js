let secondsNeedle = document.getElementById("secondes");
let minutesNeedle = document.getElementById("minutes");
let hoursNeedle = document.getElementById("heures");

//Fonctionnement des aiguilles toutes les 1000 millisecondes
setInterval(function(){
    //On récupére la date actuelle
    let dateNow = new Date();
    //On récupére les secondes/minutes/heures de la date actuelle
    let seconds = dateNow.getSeconds();
    let minutes = dateNow.getMinutes();
    let hours = dateNow.getHours();

    //L'aiguille des secondes tournent à 360 deg dans l'horloge, toutes les 60s
    let secondsTime = ((seconds / 60) * 360);
    secondsNeedle.style.transform = "rotate(" + (secondsTime) + "deg)";

    //l'aiguille des minutes tournent à 360 deg dans l'horloge, toutes les 60 minutes en fonction des secondes et avance a chaque fois qu'1min passe
    let minutesTime = ((minutes / 60) * 360) + ((seconds / 60));
    minutesNeedle.style.transform = "rotate(" + (minutesTime) + "deg)";

    //l'aiguille des heures tournent à 360 deg dans l'horloge, toutes les 12heures en fonction des minutes et avance a chaque fois qu'1h passe
    let hoursTime = ((hours / 12) * 360) + ((minutes / 60 ));
    hoursNeedle.style.transform = "rotate(" + (hoursTime) + "deg)";

    //L'heure actuelle
    document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
    //La date actuelle
    document.getElementById("date").innerHTML = new Date().toLocaleDateString();
}
,1000);
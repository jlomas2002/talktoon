function initialise(){
    if (typeof(Storage) !== "undefined") {
    } else {
        window.alter("Local storage is not supported");
    }
    
    var attemptNum =  localStorage.getItem("numAttempt"); 
    var lastAttempt = localStorage.getItem("lastAttempt");

    if (attemptNum === null && lastAttempt === null){
        document.getElementById("lastAttempt").innerHTML = "Previous Attempt: Unknown";
        document.getElementById("numAttempt").innerHTML = "Number of Attempts: Unknown";
    }

    else{
        document.getElementById("lastAttempt").innerHTML = "Previous Attempt: "+ lastAttempt;
        document.getElementById("numAttempt").innerHTML = "Number of Attempts: "+ attemptNum;
    }
}


function calculateScore(){

    var attemptNum =  localStorage.getItem("numAttempt"); 

    attemptNum++;
    document.getElementById("numAttempt").innerHTML = "Number of Attempts: "+ attemptNum;

    var score = 0;

    if(document.getElementById('shearer').checked == true) {   
        score++;
    }
    
    if(document.getElementById('james').checked == true) {   
        score++;
    }
    
    if(document.getElementById('tiote').checked == true) {   
        score++;
    }

    if(document.getElementById('dummett').checked == true) {   
        score++;
    }

    if(document.getElementById('straw').checked == true) {   
        score++;
    }

    if(document.getElementById('52').checked == true) {   
        score++;
    }

    if(document.getElementById('92').checked == true) {   
        score++;
    }

    if(document.getElementById('benf').checked == true) {   
        score++;
    }

    if(document.getElementById('mark').checked == true) {   
        score++;
    }

    if(document.getElementById('hoff').checked == true) {   
        score++;
    }

if (score == 10){
    alert("10/10 \n You are a Newcastle Ultra!");
}

if (score >= 7 && score <= 9){
    alert(score + "/10 \n You are a true fan!");
}

if (score >= 4 && score <= 6){
    alert(score + "/10 \n Decent knowledge, but could be better.");
}
if (score >= 1 && score <= 3){
    alert(score + "/10 \n Poor knowledge, do better next time.");
}
if (score == 0){
    alert(score + "/10 \n You must be a Mackem...");
}


localStorage.setItem("lastAttempt", score);
localStorage.setItem("numAttempt", attemptNum);

var lastAttempt = localStorage.getItem("lastAttempt");
document.getElementById("lastAttempt").innerHTML = "Previous Attempt: "+ lastAttempt;

}
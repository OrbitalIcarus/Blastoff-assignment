function countDownTimer(){
    console.log("countDownTimer() started");
    var currTime = 50;
    document.getElementById("countDis").innerHTML = currTime + " sec";

    // 45 sec
    setTimeout(function(){
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 5000);

    // 40 sec
    setTimeout(function(){
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 10000);

    // 35 Sec
    setTimeout(function(){
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 15000);

    // 30 sec
    setTimeout(function(){
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 20000);

    // 25 sec
    setTimeout(function(){
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 25000);

    // 20 sec
    setTimeout(function(){
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 30000);

    // 15 sec
    setTimeout(function(){
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 35000);

    // 10 sec
    setTimeout(function(){
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 40000);

    // 5 sec
    setTimeout(function(){
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 45000);

    // Blastoff
    setTimeout(function(){
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = "BLASTOFF";
    }, 50000);
}
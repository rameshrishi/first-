window.onload=function(){
    var tens=00;
    var seconds=00;
    var appendtens=document.getElementById("tens");
    var appendseconds=document.getElementById("seconds");
    var buttonstart=document.getElementById("button-start");
    var buttonstop=document.getElementById("button-stop");
    var buttonreset=document.getElementById("button-reset");
    var interval;

    buttonstart.onclick=function(){
        clearInterval(interval);
        interval=setInterval(startTimer,10);
    }
    buttonstop.onclick=function(){
        clearInterval(interval);
    }

    buttonreset.onclick=function(){
        clearInterval(interval);
        tens="00";
        seconds="00";
        appendtens.innerHTML=tens;
        appendseconds.innerHTML=seconds;
    }

    function startTimer(){
        tens++;
        if(tens<=9){
            appendtens.innerHTML="0"+tens;
        }
        if(tens>9){
            appendtens.innerHTML=tens;
        }

        if(tens>90){
            console.log("seconds");
            seconds++;
            appendseconds.innerHTML="0"+seconds;
            tens=0;
            appendtens.innerHTML="0"+0;
        }
        if(seconds>90){
            appendseconds.innerHTML=seconds;
        }
    }
}
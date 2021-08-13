let session_seconds = "00";
let session_minutes = 25;


let click_sound = new Audio("click.mp3");
let bell = new Audio("bell.mp3");

function template(){
    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;
}

function start_time(){
    click_sound.play();

    session_minutes = 24;
    session_seconds = 59;

    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;

    let minutes_interval = setInterval(minutesTimer, 60000);
    let seconds_interval = setInterval(secondsTimer, 1000);

    function minutesTimer(){
        session_minutes = session_minutes - 1;
        document.getElementById("minutes").innerHTML = session_minutes;
    }

    function secondsTimer(){
        session_seconds = session_seconds - 1;
        document.getElementById("seconds").innerHTML = session_seconds;


        if(session_seconds <= 0){
            if(session_minutes <= 0){
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                document.getElementById("done").innerHTML = "Sessão concluída !! tire uma pausa";

                document.getElementById("done").classList.add("show_message");


                bell.play();
            }


            session_seconds = 60;
        }
    }
}
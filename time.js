let second = 0;
let minute =0;
let hour = 0;
function time(){
    second++;
    if (second <60){
    document.getElementById('time1').innerHTML =second;
    }
    else if (second >59){
        second=0;
        document.getElementById('time1').innerHTML =second;
    }
}
function time1(){
    minute++;
    if (minute<60){
    document.getElementById('time2').innerHTML =minute;
    }
    else if (minute >59){
        minute=0;
        document.getElementById('time1').innerHTML =minute;
    }
}
document.addEventListener('DOMContentLoaded', function (){
    setInterval(time, 1000);
    setInterval(time1, 60000);
});

let dicountButton= document.getElementById('button');
let message =document.getElementById('message');
let message1 =document.getElementById('message1');
let message2 =document.getElementById('message2');
let message3 =document.getElementById('message3');
let ponddd = 1;
function showMessage(){
    if (ponddd ===1 ){
    message.innerHTML = '1.PLC Siemens and PLC Mitsubishi' ;
    message1.innerHTML = '2.Internet of Things' ;
    message2.innerHTML = '3.Control Valve and Actuator' ;
    message3.innerHTML = '4.Instrumentation System' ;
    document.getElementById('button').innerHTML = 'close';
    }
    else if  (ponddd>1){
        message.innerHTML = '' ;
        message1.innerHTML = '' ;
        message2.innerHTML = '' ;
        message3.innerHTML = '' ; 
        ponddd=0;
        document.getElementById('button').innerHTML = 'กดดู';
    }
    ponddd = ponddd+1;
}
dicountButton.addEventListener('click', showMessage);
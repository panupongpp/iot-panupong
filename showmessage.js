let dicountButton= document.getElementById('button');
let message =document.getElementById('message');
let message1 =document.getElementById('message1');
let message2 =document.getElementById('message2');
let message3 =document.getElementById('message3');
function showMessage(){
    message.innerHTML = '1.PLC' ;
    message1.innerHTML = '2.' ;
    message2.innerHTML = '3.' ;
    message3.innerHTML = '4.' ;


}
dicountButton.addEventListener('click', showMessage);
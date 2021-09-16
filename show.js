//let dicountButton1= document.getElementById('show');
function hello (){
    if(show.innerHTML === 'Hello!'){
        show.innerHTML = 'GoodBye';
    }
        else if (show.innerHTML === 'GoodBye'){
            show.innerHTML = 'Bye';
        }
        else if (show.innerHTML === 'Bye'){
            show.innerHTML = 'Bye1';
        }
        else if (show.innerHTML === 'Bye1'){
            show.innerHTML = 'Bye2';
        }
    else {
        show.innerHTML = 'Hello!';
    }
}
//dicountButton1.addEventListener('click', hello);
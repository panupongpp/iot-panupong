//let dicountButton1= document.getElementById('show');
function Hobbies (){
    if(show.innerHTML === '1.Music'){
        show.innerHTML = '2.Exercise';
    }
        else if (show.innerHTML === '2.Exercise'){
            show.innerHTML = '3.Movies';
        }
        else if (show.innerHTML === '3.Movies'){
            show.innerHTML = '4.Investment';
        }
        else if (show.innerHTML === '4.Investment'){
            show.innerHTML = '5.Travel';
        }
    else {
        show.innerHTML = '1.Music';
    }
}
//dicountButton1.addEventListener('click', hello);
//let name =prompt("What your name")
document.addEventListener('DOMContentLoaded',() => {
   const submit = document.querySelector('#submit');
    submit.disabled = true;
    document.querySelector('#task').onkeyup = function (){
        if(document.querySelector('#task').value.length > 0 ){
            submit.disabled = false;
        }
        else{
            submit.disabled = true;
        }
    }
    document.querySelector('form').onsubmit = function (){
        const task = document.querySelector('#task').value;
        const li = document.createElement('li');
        li.innerHTML = task;
        document.querySelector('#tasks').append(li);
        document.querySelector('#task').value ='';
        submit.disabled=true;
        return false;
    }
    });

    function task(){
        let task = localStorage.getItem('task');
        document.getElementById('task').innerHTML = task;
        localStorage.setItem('task', task);
    }


let pp = document.getElementsByClassName('box');
let pp1 = document.getElementsByClassName('top-header');
let pp2 = document.getElementsByClassName('footer');
let pp3 = document.querySelectorAll('h1');
let pp4 = document.querySelectorAll('body');
let pp5 = document.querySelectorAll('p');
let pp6 = document.querySelectorAll('dt');
let change1 =  document.getElementById('groun3');
let change2 =  document.getElementById('groun5');
let change3 = document.querySelector('h1');
document.getElementById('groun').onchange = function() {
for (let i=0;i<pp.length;i++){
    pp[i].style.background= this.value
    }
}
document.getElementById('groun1').onchange = function() {
    for (let i=0;i<pp1.length;i++){
        pp1[i].style.background= this.value
        document.getElementById('groun1').style.background= this.value
    }
}
document.getElementById('groun2').onchange = function() {
    for (let i=0;i<pp2.length;i++){
        pp2[i].style.background= this.value
        document.getElementById('groun2').style.background= this.value
    }
}
document.getElementById('groun3').onchange = function() {
    for (let i=0;i<pp3.length;i++){
        pp3[i].style.color= this.value
        document.getElementById('groun3').style.background= this.value
        if(change1.style.backgroundColor === "black"){
            change1.style.color = "white";
            change3.style.color = "white";
        }
    }
}
document.getElementById('groun4').onchange = function() {
    for (let i=0;i<pp4.length;i++){
        pp4[i].style.background= this.value
        document.getElementById('groun4').style.background= this.value
    }
}
document.getElementById('groun5').onchange = function() {
    for (let i=0;i<pp5.length;i++){
        pp5[i].style.color= this.value
        document.getElementById('groun5').style.background= this.value
        if(change2.style.backgroundColor === "black"){
            change2.style.color = "white";
        }
    }
    for (let i=0;i<pp6.length;i++){
        pp6[i].style.color= this.value
    }
}


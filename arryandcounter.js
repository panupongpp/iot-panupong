let counter = 1;
const arry1 =["OK","basketball","badminton","table tennis","Weight Training","ride a bike"]
function count123(){
    if (counter >4) {
        counter=1;
     }
     else {
        counter++;  
     }
    document.getElementById('arry').innerHTML = counter;
    document.getElementById('arrycounter').innerHTML = arry1[counter];
}
document.addEventListener('DOMContentLoaded',() => {
    let zxc123 =  document.getElementById('select1');
    document.querySelector('select').onchange = function() {
        document.getElementById('arrycounter').style.color= this.value
        document.getElementById('arry').style.color= this.value
        document.querySelector('select').style.background= this.value
        if(zxc123.style.backgroundColor === "black"){
            zxc123.style.color = "white";
        }
    }
});

let counter = 1;
const arry1 =["OK","OK1","OK2"]
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
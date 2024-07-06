
let i = 0;

function add(){
    i++;
    document.getElementById("content").innerHTML = i;
}

function sub(){
    i--;
    document.getElementById("content").innerHTML = i;
}
function reset(){
    i=0;
    document.getElementById("content").innerHTML = i;
}
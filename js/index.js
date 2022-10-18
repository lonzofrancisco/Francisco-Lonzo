//maquina de escribir

var text = document.getElementById("maquina");
var str = text.innerHTML;

text.innerHTML = str.charAt(0);

const speed = 80;
var i = 0;

function maquina() {
    if (i < str.length) {
        text.innerHTML += str.charAt(i+1);
        i++;
        setTimeout(maquina, speed)

    }else{
        
        text.innerHTML = "F";
        i = 0
        setTimeout(maquina, speed);
    }
}

setTimeout(maquina,speed);


function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
    
}
const listadeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < listadeTeclas.length){
    listadeTeclas[contador].onclick = function(){
        tocaSom("som_tecla_aplausos");
    }
    contador = contador + 1;
    console.log(contador);
}



window.addEventListener("DOMContentLoaded",(e)=>{
    let Brojo = document.getElementById("rojo");
    let Bazul = document.getElementById("azul");
    let Bverde = document.getElementById("verde");
    let rojo = 255;//este será el valor por defecto al abrir la pagina
    let azul = 255;
    let verde = 255;
    let fondo = document.querySelector("body");
    let borrar = document.querySelector("button");

    Brojo.addEventListener("change", (e)=>{
        rojo=Brojo.value;
        if (rojo<=128){
            rojo=128;
            Brojo.value=128;
        }
        fondo.style.backgroundColor=`rgb(${rojo},${verde},${azul})`;
        });

    Bazul.addEventListener("change", (e)=>{
        azul=Bazul.value;
        if (azul<=128){
            azul=128;
            Bazul.value=128;
        }
        fondo.style.backgroundColor=`rgb(${rojo},${verde},${azul})`;
    });

    Bverde.addEventListener("change", (e)=>{
        verde=Bverde.value;
        if (verde<=128){
            verde=128;
            Bverde.value=128;
        }
        fondo.style.backgroundColor=`rgb(${rojo},${verde},${azul})`;
    });

    borrar.addEventListener("click",(e)=>{
        Brojo.value=255;
        Bazul.value=255;
        Bverde.value=255;
        fondo.style.backgroundColor=`rgb(${Brojo.value},${Bverde.value},${Bazul.value})`;
    });
});
const body = document.querySelector("body")
const sol = document.getElementById("sol");
const lua = document.getElementById("lua");
const boxhora = document.getElementById("hora");
const boxminutos = document.getElementById("minutos");
const boxsegundos = document.getElementById("segundos");
const estrelas = document.querySelectorAll(".estrela")

const largura = window.innerWidth;
const altura = window.innerHeight;

const altura2 = altura/24;
const largura2 = largura/24;

let ultimaHora = "dia"
function buscarhora(){
    const datatempo = new Date(
        new Date().toLocaleString("pt-BR",{
            timeZone:"America/Sao_Paulo",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }));
    const hora = datatempo.getHours();
    const minutos = datatempo.getMinutes();
    const segundos = datatempo.getSeconds();

    if (hora >= 20 || hora <= 5){
        body.className = "noite";
        sol.style.display = "none";
        lua.style.display = "flex"
        if (ultimaHora == "dia"){
            estrelas.forEach(estrela  => {
            estrela.style.top = Math.floor(Math.random() * 100) + "%";
            estrela.style.left = Math.floor(Math.random() * 100) + "%";
        });
        ultimaHora = "noite";
        }
    }else{
        body.className = "dia";
        sol.style.display = "flex";
        lua.style.display = "none"
        estrelas.forEach(estrela  => {
            estrela.style.display = "none";
        });
        ultimaHora = "dia";
    }

    boxhora.textContent = hora;
    boxminutos.textContent = minutos;
    boxsegundos.textContent = segundos;

    if (hora > 12){
        sol.style.bottom =  ((12 - (hora - 12)) * altura2) * 1.5 +"px";
        sol.style.left = (hora * largura2) -20 + "px";
    }else{
        sol.style.bottom =  (hora *altura2) * 1.5 +"px";
        sol.style.left = (hora * largura2) -20 + "px";
    }

    lua.style.bottom =  (hora *altura2) -20 +"px";
    lua.style.left = ((hora * largura2) -20) - (largura/2) + "px";
    if (hora > 0) {
        lua.style.bottom =  ((12 - (hora - 12)) * altura2) * 1.5 +"px";
        lua.style.left = (hora * largura2) -20 + "px";
    }

    
};




setInterval(buscarhora, 1000);

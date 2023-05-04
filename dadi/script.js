/* Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/
const button= document.getElementById("button");
let risultato;

button.addEventListener('click',
    function () {
        const dadoUser= Math.floor(Math.random() * 6) + 1;
        console.log(dadoUser);
        
        const dadoPc= Math.floor(Math.random() * 6) + 1;
        console.log(dadoPc);
        

        document.getElementById("user").innerHTML = `${dadoUser}`;
        document.getElementById("pc").innerHTML = `${dadoPc}`;


        if(dadoUser === dadoPc){
            console.log("pareggio");
            risultato= "pareggio"
        }else if(dadoUser < dadoPc){
            console.log("Vince Pc");
            risultato= "Vince Pc"
        }else if(dadoUser > dadoPc){
            console.log("Vince user");
            risultato= "Vince User"
        }

        document.getElementById("risultato").innerHTML = `${risultato}`;
    }
)

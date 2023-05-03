// Creiamo la lista email
const ListaEmail = ["fabiobianchi@gmail.com", "mariorossi@gmail.com", "paperino@gmail.com", "goku@supersaiyan.com"];
let esito = "negativo";
let messaggioEsito;


    // Creiamo l'input per l'email
    const button= document.getElementById("button");
    button.addEventListener("click", calcola)

    // Creiamo la funzione che ci permette di prendere i dati al click del bottone invia
    function calcola() {
        const email= document.getElementById("email").value;
        console.log(email);

        // Creiamo il loop
        for (let i = 0; i < ListaEmail.length; i++){
            
            const valoreEmail=ListaEmail[i];
            
            // Verifichiamo se l'email è presente nella nostra lista 
            if(email === ListaEmail[i]){
                console.log("si");
                esito= "positivo";
            }
        }        

        //Settiamo le condizioni in base al risultato dell'esito
        if(esito === "positivo"){
            messaggioEsito= "La tua e-mail è in lista, puoi entrare"
            esito="negativo"
        }else if(esito ==="negativo" ){
            console.log("no");
            messaggioEsito= "Ci dispiace non è in lista"
        }

        console.log(messaggioEsito);
        document.getElementById("esito").innerHTML= messaggioEsito;
    }







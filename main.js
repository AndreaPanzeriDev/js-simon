/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

let arrayNumber = [];

let guessNumber = [];

let second = 30 * 1000; //change the five with the seconds that you want


//max number that you can display 
const max_n = 100;
//max number the player have to memorize
const guess_n = 5;
//inizio game
function Play(){
    //clean the previus number
    document.getElementById("numberOutput").innerHTML = ' ';
    randomNumber();

}



function randomNumber(){
    for(let i = 0; i < guess_n; i++){
        let number = Math.round(Math.random() * max_n);
        if(arrayNumber.includes(number)){
            i--;
        }else{
            arrayNumber.push(number);
            document.getElementById("numberOutput").append(number + ' ');
        }
    }
    console.log(arrayNumber);
    
}


function displayNumber(){

}
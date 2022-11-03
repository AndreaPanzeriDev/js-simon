/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

let arrayNumber = [];

let guessNumber = [];

let seconds= 10 * 1000; //change the five with the seconds that you want


//max number that you can display 
const max_n = 100;
//max number the player have to memorize
const guess_n = 5;

//diplay number
let display_number = document.getElementById("numberOutput");



//inizio game
function Play(){
    //clean the previus number
    display_number.innerHTML = ' ';
    randomNumber();
    setTimeout(cleanAsk, seconds);

}



function randomNumber(){
    //generate guess_n random number
    for(let i = 0; i < guess_n; i++){
        let number = Math.round(Math.random() * max_n);
        //check if the number is already in the array
        if(arrayNumber.includes(number)){
            i--;
        }else{
            //push the number into the array
            arrayNumber.push(number);
            //display the number on the html page
            display_number.append(number + ' ');
        }
    }
    console.log(arrayNumber);
    
}


function cleanAsk(){
    //clena
    display_number.innerHTML = ' ';
    //ask the number
    for(let i=1; i<guess_n + 1; i++){
        let input = parseInt(prompt("Inserisci il " + i + "° numero"))
        guessNumber.push(input);
    }
    console.log(guessNumber);
    
}
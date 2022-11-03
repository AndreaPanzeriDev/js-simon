/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

let arrayNumber = [];

let guessNumber = [];

let seconds = 10; //change the five with the seconds that you want
let rseconds = seconds * 1000;

//max number that you can display 
const max_n = 100;
//max number the player have to memorize
const guess_n = 5;

//diplay number
let display_number = document.getElementById("numberOutput");

//set c
let c = seconds;



//inizio game
function Play() {
    c == seconds;
    //clean the previus number
    display_number.innerHTML = ' ';
    arrayNumber = [];
    guessNumber = [];
    randomNumber();
    setInterval(countDown, 1000);
    setTimeout(clean, rseconds);
    //create another setTimout and put +1 second because the cicle for is to fast (FASTT BOYYYYYYYYYY)
    setTimeout(Ask, rseconds + 1000);
}



function randomNumber() {
    //generate guess_n random number
    for (let i = 0; i < guess_n; i++) {
        let number = Math.round(Math.random() * max_n);
        //check if the number is already in the array
        if (arrayNumber.includes(number)) {
            i--;
        } else {
            //push the number into the array
            arrayNumber.push(number);
            //display the number on the html page
            display_number.append(number + ' ');
        }
    }
    console.log(arrayNumber);

}


function clean() {
    display_number.innerHTML = ' ';

}


function Ask() {
    //ask
    for (let i = 0; i < guess_n; i++) {
        let input = parseInt(prompt("Inserisci il " + (i + 1) + "° numero"))
        guessNumber.push(input);
    }
    console.log(guessNumber);
    Check();
}

//create a countdown
function countDown() {
    let output = document.getElementById("countdown");
    output.innerHTML = ' ';
    console.log(c);
    output.innerHTML = c;
    c--;
}


function Check(){
    let count = 0;
    for(let i=0; i < guess_n; i++){
        if(arrayNumber[i] == guessNumber[i]){
            count++;
        }
    }
    alert("Hai inserito " + count + " risposte giuste. \nI numeri da inserire erano: " +  arrayNumber + "\nMentre i numeri che hai inserito sono: " + guessNumber);
}
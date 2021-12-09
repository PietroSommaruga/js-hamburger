// dichiaro la variabile del bottone da schiacciare
const button = document.querySelector(".fa-bars");

// dichiaro la variabile di apertura per modificare il css
const apri = document.querySelector(".hamburger-menu");

// modifico il css del menu per l'apertura
button.addEventListener('click', function() {
   apri.style.display ="block";
});

// dichiaro la variabile di chiusura per modificare il css 
const chiudi = document.querySelector(".close");

// modifico il css del menu per la chiusura
chiudi.addEventListener('click',function() {
    apri.style.display="none";
});
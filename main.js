// creo una classe nell'ancora che contiene il pulsante a forma di hamburger
const hamburgerButton = document.querySelector(".header-right > a");
hamburgerButton.classList.add("hamburger-button");
console.log(hamburgerButton);
const hamburgerMenu = document.querySelector(".hamburger-menu");
console.log(hamburgerMenu);


// abilito la funzione per cliccare sul pulsante
hamburgerButton.addEventListener("click", function(){

    // al click si attiva la classe active alll'interno dell'hamburger-menu
    hamburgerMenu.classList.add("active");
})

const closeButton = document.querySelector(".close");

// al click della X si disabilita la classe active

closeButton.addEventListener("click", function(){
    hamburgerMenu.classList.remove("active");
})
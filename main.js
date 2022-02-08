// creo una classe nell'ancora che contiene il pulsante a forma di hamburger
const hamburgerButton = document.querySelector(".header-right > a");
hamburgerButton.classList.add("button");
console.log(hamburgerButton);


// abilito la funzione per cliccare sul pulsante
hamburgerButton.addEventListener("click", function(){
    // al click si attiva la classe active alll'interno dell'hamburger-menu
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    hamburgerMenu.classList.add("active");
    console.log(hamburgerMenu);
})
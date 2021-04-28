let sectionMe__button = document.querySelector(".sectionMe__button");

let jsPhotoLego = document.querySelector(".jsPhotoCptAmeryka");

let jsPhotoCptAmeryka = document.querySelector(".jsPhotoLego");

sectionMe__button.addEventListener("click", () => {
    jsPhotoLego.classList.toggle("sectionMe__hidden");
    jsPhotoCptAmeryka.classList.toggle("sectionMe__hidden");
});


let sectionKontakt__contactButtonNumber = document.querySelector(".sectionKontakt__contactButtonNumber");

let sectionKontakt__phoneNumber = document.querySelector(".sectionKontakt__phoneNumber");

sectionKontakt__contactButtonNumber.addEventListener("click", () =>{sectionKontakt__phoneNumber.classList.toggle("sectionMe__hidden");
sectionKontakt__contactButtonNumber.innerText = sectionKontakt__phoneNumber.classList.contains("hidden")
? "Kontakt"
: "UsuN Kontakt";
});
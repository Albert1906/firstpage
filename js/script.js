{

    const onChangePictureClick = () => {
        jsPhotoLego.classList.toggle("sectionMe__hidden");
        jsPhotoCptAmeryka.classList.toggle("sectionMe__hidden");
        sectionMe__button.addEventListener("click", onChangePictureClick);
    };

    const sectionMe__button = document.querySelector(".sectionMe__button");
    const jsPhotoLego = document.querySelector(".jsPhotoCptAmeryka");
    const jsPhotoCptAmeryka = document.querySelector(".jsPhotoLego");
    onChangePictureClick(jsPhotoCptAmeryka, jsPhotoLego);




    const showContactButton = () => {
        const sectionKontakt__phoneNumber = document.querySelector(
            ".sectionKontakt__phoneNumber"
        );
        sectionKontakt__phoneNumber.classList.toggle("sectionMe__hidden");
        sectionKontakt__contactButtonNumber.innerText = sectionKontakt__phoneNumber.classList.contains(
            "sectionMe__hidden"
        )
            ? "Kontakt"
            : "UsuN Kontakt";
    };
    const init = () => {
        let sectionKontakt__contactButtonNumber = document.querySelector(
            ".sectionKontakt__contactButtonNumber");

        sectionKontakt__contactButtonNumber.addEventListener("click", showContactButton);



    };
    init();





}

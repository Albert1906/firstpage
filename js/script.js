{

    const showContactButton = () => {
        const sectionContact__phoneNumber = document.querySelector(
            ".sectionContact__phoneNumber"
        );
        sectionContact__phoneNumber.classList.toggle("sectionMe__hidden");
        sectionContact__contactButtonNumber.innerText = sectionContact__phoneNumber.classList.contains(
            "sectionMe__hidden"
        )
            ? "Kontakt"
            : "UsuN Kontakt";

    };
    const init = () => {
        const onChangePictureClick = () => {
            PhotoLego.classList.toggle("sectionMe__hidden");
            PhotoCptAmeryka.classList.toggle("sectionMe__hidden");
            sectionMe__button.addEventListener("click", onChangePictureClick);
        };

        const sectionMe__button = document.querySelector(".sectionMe__button");
        const PhotoLego = document.querySelector(".jsPhotoCptAmeryka");
        const PhotoCptAmeryka = document.querySelector(".jsPhotoLego");
        onChangePictureClick(PhotoCptAmeryka, PhotoLego);


        const sectionContact__contactButtonNumber = document.querySelector(
            ".sectionContact__contactButtonNumber");

        sectionContact__contactButtonNumber.addEventListener("click", showContactButton);



    };
    init();





}

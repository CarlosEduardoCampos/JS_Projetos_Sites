const menuOpenButton = document.querySelector("#menu_open_button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});
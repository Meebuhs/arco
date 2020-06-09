document.addEventListener("DOMContentLoaded", function() {
    let openButton = document.getElementsByClassName("open-button");
    openButton[0].addEventListener("click", function(event) {
        let cover = document.getElementById("cover"),
            anchor = event.currentTarget;

        let listener = function() {
            window.location = anchor.href;
            cover.removeEventListener("animationend", listener);
        };
        cover.addEventListener("animationend", listener);
            
        event.preventDefault();
        cover.classList.add("slide");
    });
});
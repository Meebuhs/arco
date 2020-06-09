function fadeInPage() {
        if (!window.AnimationEvent) { return; }
        
        let fader = document.getElementById('fader');
        fader.classList.add('fade-out');
    }

document.addEventListener("DOMContentLoaded", function() {
    if (!window.AnimationEvent) { return; }

    let links = document.getElementsByClassName("fade-onclick");
    for (let i = 0; i < links.length; i += 1) {
        links[i].addEventListener("click", function(event) {
            let fader = document.getElementById("fader"),
                anchor = event.currentTarget;
            
            let listener = function() {
                window.location = anchor.href;
                fader.removeEventListener("animationend", listener);
            };
            fader.addEventListener("animationend", listener);
            
            event.preventDefault();
            fader.classList.add("fade-in");
        });
    }
});
    
window.addEventListener("pageshow", function (event) {
    if (!event.persisted) {
        return;
    }
    var fader = document.getElementById("fader");
    fader.classList.remove("fade-in");
});
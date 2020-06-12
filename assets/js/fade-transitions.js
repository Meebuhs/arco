function fadeInPage() {
        if (!window.AnimationEvent) { return; }
        
        let contentFader = document.getElementById('content-fader');
        let sidebarFader = document.getElementById('sidebar-fader');

        contentFader.classList.add('fade-out');
        sidebarFader.classList.add('fade-out');
    }

document.addEventListener("DOMContentLoaded", function() {
    if (!window.AnimationEvent) { return; }

    let links = document.getElementsByClassName("fade-onclick");
    for (let i = 0; i < links.length; i += 1) {
        links[i].addEventListener("click", function(event) {
            let contentFader = document.getElementById("content-fader"),
                sidebarFader = document.getElementById("sidebar-fader"),
                anchor = event.currentTarget;
            
            let listener = function() {
                window.location = anchor.href;
                contentFader.removeEventListener("animationend", listener);
                sidebarFader.removeEventListener("animationend", listener);
            };
            contentFader.addEventListener("animationend", listener);
            sidebarFader.addEventListener("animationend", listener);
            
            event.preventDefault();
            contentFader.classList.add("fade-in");
            sidebarFader.classList.add("fade-in");
        });
    }
});
    
// Remove class in case of page being cached, add class for page navigation through means other than links (eg refresh, back/forward)
window.addEventListener("pageshow", function (event) {
    if (!event.persisted) {
        return;
    }
    let contentFader = document.getElementById("content-fader");
    let sidebarFader = document.getElementById("sidebar-fader");

    contentFader.classList.remove("fade-in");
    sidebarFader.classList.remove("fade-in");

    contentFader.classList.add("fade-out");
    sidebarFader.classList.add("fade-out");
});
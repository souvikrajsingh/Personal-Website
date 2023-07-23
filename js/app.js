const header = document.querySelector('header');

// sticky navbar 
function stickyNavbar(){
    header.classList.toggle("scrolled" , window.pageYOffset > 0);
}

stickyNavbar();


window.addEventListener("scroll", stickyNavbar);


// scroll bar animation using scrollReveal.js, added to the showcase-info class
// from site https://scrollrevealjs.org/guide/hello-world.html

let sr=  ScrollReveal({
    duration:2500,
    distance: "60px",

});

sr.reveal(".showcase-info",{delay:500});
sr.reveal(".showcase-image",{origin: "top", delay:700});




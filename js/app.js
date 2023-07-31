const header = document.querySelector('header');

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll", () => {
    skillsCounter();
});


/* ----------Sticky Navbar ---------*/


function stickyNavbar(){
    header.classList.toggle("scrolled" , window.pageYOffset > 0);
}

stickyNavbar();


window.addEventListener("scroll", stickyNavbar);


// scroll bar animation using scrollReveal.js, added to the showcase-info class
// from site https://scrollrevealjs.org/guide/hello-world.html

/* ---------- Reveal Animation ---------*/

let sr=  ScrollReveal({
    duration:2500,
    distance: "60px",

});

sr.reveal(".showcase-info",{delay:500});
sr.reveal(".showcase-image",{origin: "top", delay:700});


/* ---------- Reveal Animation ---------*/

function hasReached(element) {
    let topPosition = element.getBoundingClientRect().top;
    
    if(window.innerHeight >= topPosition + element.offsetHeight) return true;
    return false;
}

function skillsCounter() {
    if(!hasReached(first_skill)) return ;
   progress_bars.forEach(p => p.computedStyleMap.animation = "progress 2s ease-in-out ");
}
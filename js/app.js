const header = document.querySelector('header');

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");


const links  = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    activeLink();
   if(!skillsPlayed) skillsCounter();
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


/* ---------- Skill Progress Bar Animation ---------*/

function hasReached(element) {
    let topPosition = element.getBoundingClientRect().top;
    
    if(window.innerHeight >= topPosition + element.offsetHeight) return true;
    return false;
}


function updateCount(num , maxNum){
    let currentNum = +num.innerText;
   
    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num , maxNum);
        }, 10);
    }
}

let skillsPlayed = false;



function skillsCounter() {
    if (!hasReached(first_skill)) return;

    skillsPlayed = true;

    sk_counters.forEach((counter, i) => {
        let target = +counter.dataset.target;
        let strokeValue = 427 - 427 * (target / 100);

        progress_bars[i].style.setProperty("--target" , strokeValue);

        setTimeout(() => {
            updateCount(counter , target);
        }, 400);
    });

    progress_bars.forEach((p) => (p.style.animation = "progress 2s ease-in-out forwards"));
}

/* ---------- Change Active Link  on Scroll  ---------*/

function activeLink() {
    let sections = document.querySelectorAll("section[id]");
    let passedSections = Array.from(sections).map((sct, i) => {
        return {
            y: sct.getBoundingClientRect().top - header.offsetHeight,
            id: i,
        };
    });

    let currSectionID = passedSections.find(sct => sct.y <= 0).id;

    links.forEach(l => l.classList.remove("active"));
    links[currSectionID].classList.add("active");
}

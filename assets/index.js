// import jump.js library
import jump from './node_modules/jump.js/dist/jump.module.js'

// sal.js function call
sal()

// event listener for Button and selector
const navBtn = document.querySelector(".nav-btn");
const contactMe = document.querySelector(".contact-me");
navBtn.addEventListener("click", ()=>{
    navBtn.classList.toggle("openNav");
    contactMe.classList.toggle("showContact");
});

const knownContainer = document.querySelector(".known");
const extra = document.querySelector(".extra");
const height = knownContainer.offsetHeight;
extra.style.height = `${height}px`;


const projects = document.querySelector(".projects-link");
const home = document.querySelector(".home-link");
const about = document.querySelector(".about-link");
const contact = document.querySelector(".contact-link");
const mobileContact = document.querySelector(".contact__btn");



// jump.js animation listener 
projects.addEventListener("click", ()=>{
    jump('.worked-projects', {
        duration:  3000,
    });
});
home.addEventListener("click", ()=>{
    jump('.showcase-content ', {
        duration:  500,
    });
});
about.addEventListener("click", ()=>{
    jump('.about-me', {
        duration:2000
    });
});
contact.addEventListener("click", ()=>{
    jump('.contact', {
        duration:4000
    });
});
mobileContact.addEventListener("click", ()=>{
    jump('.contact__me', {
        duration:4000
    });
});



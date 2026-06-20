const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute("data-target");
const count = +counter.innerText;

const increment = target / 100;

if(count < target){

counter.innerText =
Math.ceil(count + increment);

setTimeout(updateCounter,20);

}else{

counter.innerText = target + "+";

}

};

updateCounter();

});
/* About js */
window.addEventListener("load", () => {

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const target = parseInt(counter.dataset.target);

let count = 0;

const updateCounter = () => {

const increment = target / 80;

if(count < target){

count += increment;

counter.innerText = Math.ceil(count);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target + "+";

}

};

updateCounter();

});

});
//* why Choose us *//
const cards = document.querySelectorAll(".choose-card");

window.addEventListener("scroll", () => {

cards.forEach(card => {

const cardTop = card.getBoundingClientRect().top;

if(cardTop < window.innerHeight - 100){

card.classList.add("show");

}

});

});
//* servises *//

const serviceCards =
document.querySelectorAll(".service-card");

window.addEventListener("scroll",()=>{

serviceCards.forEach(card=>{

const cardTop =
card.getBoundingClientRect().top;

if(cardTop < window.innerHeight - 100){

card.classList.add("show");

}

});

});

//* Transformation  section *//
const transformCards =
document.querySelectorAll(".transform-card");

window.addEventListener("scroll",()=>{

transformCards.forEach(card=>{

const cardTop =
card.getBoundingClientRect().top;

if(cardTop < window.innerHeight - 100){

card.classList.add("show");

}

});

});
//*Card Scrol -----------------*//
const testimonialCards =
document.querySelectorAll(".testimonial-card");

window.addEventListener("scroll",()=>{

testimonialCards.forEach(card=>{

const cardTop =
card.getBoundingClientRect().top;

if(cardTop < window.innerHeight - 100){

card.classList.add("show");

}

});

});
//* Faq section -------------------------------*//
const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const question =
item.querySelector(".faq-question");

question.addEventListener("click", () => {

item.classList.toggle("active");

});

});
//* Velidestion ------------------------------//
const contactForm =
document.querySelector(".contact-form form");

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Message Sent Successfully!");

contactForm.reset();

});

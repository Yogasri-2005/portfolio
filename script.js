// ======================
// DARK MODE
// ======================

const themeIcon = document.getElementById("themeIcon");

function toggleMode(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeIcon.textContent="☀️";
localStorage.setItem("theme","dark");

}else{

themeIcon.textContent="🌙";
localStorage.setItem("theme","light");

}

}

// Load Saved Theme

window.onload=()=>{

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

if(themeIcon){
themeIcon.textContent="☀️";
}

}

};


// ======================
// CARD GLOW EFFECT
// ======================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.setProperty("--x",x+"px");

card.style.setProperty("--y",y+"px");

});

});


// ======================
// SCROLL ANIMATION
// ======================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

document.querySelectorAll("section,.card,.project-card,.contact-card").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="all .8s ease";

observer.observe(el);

});


// ======================
// SMOOTH NAVIGATION
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// ======================
// HERO IMAGE HOVER
// ======================

const profile=document.querySelector(".profile-wrapper img");

if(profile){

profile.addEventListener("mouseover",()=>{

profile.style.transform="scale(1.08) rotate(2deg)";

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform="scale(1) rotate(0deg)";

});

}


// ======================
// PROJECT CARD EFFECT
// ======================

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// ======================
// CONTACT CARD EFFECT
// ======================

document.querySelectorAll(".contact-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});
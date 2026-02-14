document.addEventListener("DOMContentLoaded", function(){

/* =========================
   TYPING EFFECT (SINGLE)
========================= */

const typingEl = document.getElementById("typing");
const typingText = "You are my forever, my always ❤️";
let index = 0;

function typeEffect(){
  if(!typingEl) return;
  if(index < typingText.length){
    typingEl.innerHTML += typingText.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}
typeEffect();


/* DAYS SINCE WE MET */

const loveCounter = document.getElementById("loveCounter");

if(loveCounter){

  const meetDate = new Date("June 10, 2025 00:00:00").getTime();

  setInterval(() => {

    const now = new Date().getTime();
    const difference = now - meetDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    loveCounter.innerHTML =
      `💖 It's been <span class="highlight">${days}</span> days, 
       <span class="highlight">${hours}</span> hours and 
       <span class="highlight">${minutes}</span> minutes 
       since I met the most beautiful soul in my life ✨
       💫 Since June 10, 2025,
my world has never been the same.
It has been <span class="highlight">${days}</span> days of loving you ❤️`
;

  }, 1000);
}



/* =========================
   MUSIC WITH FADE
========================= */

const bgMusic = document.getElementById("bgMusic");

window.toggleMusic = function(){
  if(!bgMusic) return;

  if(bgMusic.paused){
    bgMusic.volume = 0;
    bgMusic.play();
    let fadeIn = setInterval(()=>{
      if(bgMusic.volume < 1){
        bgMusic.volume += 0.05;
      } else {
        clearInterval(fadeIn);
      }
    },200);
  } else {
    let fadeOut = setInterval(()=>{
      if(bgMusic.volume > 0.05){
        bgMusic.volume -= 0.05;
      } else {
        bgMusic.pause();
        clearInterval(fadeOut);
      }
    },200);
  }
};


/* =========================
   AI MESSAGE GENERATOR
========================= */

window.generateLove = function(){
  const messages = [
    "You are my forever 💍",
    "My heart beats only for you ❤️",
    "You are my light in darkness ✨",
    "I choose you every single day 💕",
    "You are my destiny 🌹"
  ];
  const random = Math.floor(Math.random()*messages.length);
  const el = document.getElementById("aiLoveText");
  if(el) el.innerText = messages[random];
};


/* =========================
   FIREWORKS
========================= */

const fwCanvas = document.getElementById("fireworks");
if(fwCanvas){
  const fwCtx = fwCanvas.getContext("2d");
  fwCanvas.width = window.innerWidth;
  fwCanvas.height = window.innerHeight;

  let particles = [];

  window.proposal = function(){
    const ans = document.getElementById("answer");
    if(ans) ans.innerText = "She said YES 💍✨, Love You Chella Kundi❤️";

    const voice = document.getElementById("voiceMessage");
    if(voice) voice.play();

    particles = [];
    for(let i=0;i<150;i++){
      particles.push({
        x:fwCanvas.width/2,
        y:fwCanvas.height/2,
        angle:Math.random()*2*Math.PI,
        speed:Math.random()*7+2
      });
    }
    animateFireworks();
  }

  function animateFireworks(){
    fwCtx.clearRect(0,0,fwCanvas.width,fwCanvas.height);
    particles.forEach(p=>{
      p.x += Math.cos(p.angle)*p.speed;
      p.y += Math.sin(p.angle)*p.speed;
      fwCtx.fillStyle="pink";
      fwCtx.beginPath();
      fwCtx.arc(p.x,p.y,3,0,Math.PI*2);
      fwCtx.fill();
    });
    requestAnimationFrame(animateFireworks);
  }
}


/* =========================
   FLOATING HEARTS
========================= */

const heartCanvas = document.getElementById("heartCanvas");
if(heartCanvas){
  const ctx = heartCanvas.getContext("2d");
  heartCanvas.width = window.innerWidth;
  heartCanvas.height = window.innerHeight;

  let hearts = [];

  for(let i=0;i<50;i++){
    hearts.push({
      x:Math.random()*heartCanvas.width,
      y:Math.random()*heartCanvas.height,
      size:Math.random()*20+10,
      speed:Math.random()*1+0.5
    });
  }

  function drawHearts(){
    ctx.clearRect(0,0,heartCanvas.width,heartCanvas.height);
    hearts.forEach(h=>{
      ctx.fillStyle="rgba(255,0,150,0.6)";
      ctx.beginPath();
      ctx.arc(h.x,h.y,h.size/2,0,Math.PI*2);
      ctx.fill();
      h.y -= h.speed;
      if(h.y < 0) h.y = heartCanvas.height;
    });
    requestAnimationFrame(drawHearts);
  }
  drawHearts();
}


/* =========================
   GALAXY BACKGROUND
========================= */

const galaxy = document.getElementById("galaxy");
if(galaxy){
  const gctx = galaxy.getContext("2d");
  galaxy.width = window.innerWidth;
  galaxy.height = window.innerHeight;

  let stars = [];
  for(let i=0;i<300;i++){
    stars.push({
      x:Math.random()*galaxy.width,
      y:Math.random()*galaxy.height,
      radius:Math.random()*2,
      speed:Math.random()*0.5
    });
  }

  function drawGalaxy(){
    gctx.clearRect(0,0,galaxy.width,galaxy.height);
    gctx.fillStyle="white";
    stars.forEach(s=>{
      gctx.beginPath();
      gctx.arc(s.x,s.y,s.radius,0,Math.PI*2);
      gctx.fill();
      s.y += s.speed;
      if(s.y > galaxy.height) s.y = 0;
    });
    requestAnimationFrame(drawGalaxy);
  }
  drawGalaxy();
}


/* =========================
   PARALLAX
========================= */

window.addEventListener("scroll",()=>{
  const el = document.querySelector(".parallax");
  if(el){
    const scroll = window.scrollY;
    el.style.transform = `translateY(${scroll*0.2}px)`;
  }
});


/* =========================
   SCROLL REVEAL
========================= */

window.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});


/* =========================
   HEART CURSOR TRAIL
========================= */

document.addEventListener("mousemove",function(e){
  const heart = document.createElement("div");
  heart.innerHTML="❤️";
  heart.style.position="fixed";
  heart.style.left=e.clientX+"px";
  heart.style.top=e.clientY+"px";
  heart.style.pointerEvents="none";
  heart.style.animation="fadeOut 1s forwards";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),1000);
});

});

gsap.registerPlugin(ScrollTrigger);

// INTRO CLICK
document.getElementById("intro").addEventListener("click", () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").classList.remove("hidden");

  gsap.from(".hero *", {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2
  });
});

// SCROLL ANIMATION
gsap.utils.toArray("section").forEach((sec) => {
  gsap.from(sec, {
    scrollTrigger: {
      trigger: sec,
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    duration: 1
  });
});

// PARTICLES
const container = document.querySelector(".particles");

for (let i = 0; i < 30; i++) {
  let span = document.createElement("span");
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = (5 + Math.random() * 10) + "s";
  container.appendChild(span);
}

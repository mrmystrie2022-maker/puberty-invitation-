gsap.registerPlugin(ScrollTrigger);

// Intro click
document.getElementById("intro").addEventListener("click", () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").classList.remove("hidden");

  gsap.from("section", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3
  });
});

gsap.from(".hero h1", {
  opacity: 0,
  y: 50,
  duration: 1.2
});

gsap.from(".hero p", {
  opacity: 0,
  y: 30,
  delay: 0.3,
  duration: 1
});

// Scroll animations
gsap.utils.toArray("section").forEach((sec) => {
  gsap.from(sec, {
    scrollTrigger: {
      trigger: sec,
      start: "top 80%",
    },
    opacity: 0,
    y: 60,
    duration: 1
  });
});
const particleContainer = document.querySelector(".particles");

for (let i = 0; i < 25; i++) {
  let span = document.createElement("span");
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = (5 + Math.random() * 10) + "s";
  span.style.width = span.style.height = (4 + Math.random() * 6) + "px";
  particleContainer.appendChild(span);
}

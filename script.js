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

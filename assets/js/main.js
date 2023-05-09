/*=============== INTRO ===============*/
// Access the intro section
const intro = document.getElementById("intro");

/*===== TOGGLE LINK =====*/
// Validate whether the intro section exists
if (intro) {
  // Loop through all links
  intro.querySelectorAll(".intro__heading").forEach((heading) => {
    // Listen for a mouse hover event
    heading.addEventListener("mouseover", () => {
      // Toggle the active class on all links
      intro.querySelector(".link--active").classList.remove("link--active");
      heading.querySelector(".link").classList.add("link--active");
    });
  });
}

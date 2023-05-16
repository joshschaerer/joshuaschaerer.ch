/*=============== GENERAL ===============*/
// Access the body element
const body = document.body;

// Check the motion preference
const prefersReducedMotion =
  !window.matchMedia("(prefers-reduced-motion: reduce)") ||
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/*=============== HEADER ===============*/
// Access the header element
const header = document.getElementById("header");

/*===== TOGGLE PAGE ANIMATION =====*/
// Validate whether the header element exists
// and the motion preference is not reduced
if (header && !prefersReducedMotion) {
  // Animation before leaving the page
  header.querySelectorAll(".nav__link").forEach((link) => {
    // Listen for a mouse click event
    link.addEventListener("click", (e) => {
      // Toggle the animation
      body.classList.add("unload-animation");
      // Prevent the default link behavior
      e.preventDefault();
      // Provide a short delay to allow the animations to complete
      setTimeout(() => {
        window.location.href = link.href;
      }, 1000);
    });
  });
}

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

/*===== TOGGLE PAGE ANIMATION =====*/
// Validate whether the intro section exists
// and the motion preference is not reduced
if (intro && !prefersReducedMotion) {
  // Animation before leaving the page
  intro.querySelectorAll(".intro__heading").forEach((heading) => {
    // Listen for a mouse click event
    heading.addEventListener("click", (e) => {
      // Toggle the animation
      body.classList.add("unload-animation");
      // Prevent the default link behavior
      e.preventDefault();
      // Provide a short delay to allow the animations to complete
      setTimeout(() => {
        window.location.href = heading.querySelector(".link").href;
      }, 1000);
    });
  });
}

/*=============== ANIMATIONS ===============*/
// Validate whether the motion preference is not reduced
if (!prefersReducedMotion) {
  // Access all elements to be animated on scroll
  const animations = document.querySelectorAll(".scroll-animation");
  // Create an observer to listen for intersections
  const observer = new IntersectionObserver(
    (entries) => {
      // Loop through all entries
      entries.forEach((entry) => {
        // Validate whether the entry is intersecting
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add("animation--active");
        }
      });
    },
    { threshold: 0.2 }
  );
  // Loop through all elements to be animated on scroll
  animations.forEach((animation) => {
    // Observe the element
    observer.observe(animation);
  });
}

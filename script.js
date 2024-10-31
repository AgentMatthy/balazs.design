const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.style.visibility = "hidden";
    // Check if the element is visible
    if (entry.isIntersecting) {
      // Get the animation class from the data attribute
      const animationClass = entry.target.dataset.animation;
      entry.target.style.visibility = "visible";

      // Add the specified animation class to the element
      if (animationClass) {
        entry.target.classList.add(animationClass);
      } else {
        console.warn("No animation class specified for", entry.target);
      }

      // Stop observing the target once the animation has started
      observer.unobserve(entry.target);
    }
  });
});

// Select the elements you want to observe
const animatedElements = document.querySelectorAll("[data-animation]");
animatedElements.forEach((element) => {
  observer.observe(element);
});

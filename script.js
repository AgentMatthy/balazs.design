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
      }

      // Stop observing the target once the animation has started
      // observer.unobserve(entry.target);
    } else {
      const animationClass = entry.target.dataset.animation;
      entry.target.style.visibility = "hidden";

      if (animationClass) {
        entry.target.classList.remove(animationClass);
      }
    }
  });
});

// Select the elements you want to observe
const animatedElements = document.querySelectorAll("[data-animation]");
animatedElements.forEach((element) => {
  observer.observe(element);
});

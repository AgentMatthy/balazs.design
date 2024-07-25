const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // When the element is visible
      if (entry.isIntersecting) {
        // Add the animation class to the element
        entry.target.classList.add('fadeup');
      }
    });
  });
  
  // Select the elements you want to observe
  const animatedElements = document.querySelectorAll('.aov');
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
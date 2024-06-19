document.addEventListener('DOMContentLoaded', function() {
  const imgWrapper = document.querySelector('.img-wrapper');
  const purpleCircle = document.querySelector('.purple-circle');
  const blueCircle = document.querySelector('.blue-circle');
  const redRectangle = document.querySelector('.red-rectangle');
  const rightContainer = document.querySelector('.right');
  const rightRect = rightContainer.getBoundingClientRect(); // Calculate this once

  // Function to position elements initially
  function positionElements() {
      const imgRect = imgWrapper.getBoundingClientRect();

      // Calculate initial positions for circles and rectangle
      const purpleCircleLeft = imgRect.left - rightRect.left + 90; // 50px to the right of the img wrapper
      const purpleCircleTop = imgRect.top - rightRect.top + 110; // 50px below the img wrapper
      purpleCircle.style.left = `${purpleCircleLeft}px`;
      purpleCircle.style.top = `${purpleCircleTop}px`;

      const blueCircleLeft = imgRect.left - rightRect.left + 0; // 70px to the right of the img wrapper
      const blueCircleTop = imgRect.top - rightRect.top + 230; // 70px below the img wrapper
      blueCircle.style.left = `${blueCircleLeft}px`;
      blueCircle.style.top = `${blueCircleTop}px`;

      const redRectangleLeft = imgRect.left - rightRect.left + 0; // 90px to the right of the img wrapper
      const redRectangleTop = imgRect.top - rightRect.top + 0; // 90px below the img wrapper
      redRectangle.style.left = `${redRectangleLeft}px`;
      redRectangle.style.top = `${redRectangleTop}px`;
  }

  // Call the positionElements function initially and on window resize
  positionElements();
  window.addEventListener('resize', positionElements);

  // Event listener for mouseenter on red rectangle
  redRectangle.addEventListener('mouseenter', function() {
      const imgRect = imgWrapper.getBoundingClientRect();

      // Adjust positions for purple and blue circles on mouseenter
      const purpleCircleLeft = imgRect.left - rightRect.left + 0; // New position for purple circle
      const blueCircleLeft = imgRect.left - rightRect.left + 90; // New position for blue circle
      const purpleCircleTop = imgRect.top - rightRect.top + 230; // 50px below the img wrapper
      const blueCircleTop = imgRect.top - rightRect.top + 110; // 70px below the img wrapper
    
      // Apply new positions with transition class
      purpleCircle.classList.add('circle-transition');
      purpleCircle.style.left = `${purpleCircleLeft}px`;
      purpleCircle.classList.add('circle-transition');
      purpleCircle.style.top = `${purpleCircleTop}px`;

      blueCircle.classList.add('circle-transition');
      blueCircle.style.left = `${blueCircleLeft}px`;
      blueCircle.classList.add('circle-transition');
      blueCircle.style.top = `${blueCircleTop}px`;
  });

  // Event listener for mouseleave on red rectangle
  redRectangle.addEventListener('mouseleave', function() {
      const imgRect = imgWrapper.getBoundingClientRect();

      // Reset positions of purple and blue circles to their original values
      const purpleCircleLeft = imgRect.left - rightRect.left + 90; // Original position for purple circle
      const blueCircleLeft = imgRect.left - rightRect.left + 0; // Original position for blue circle
      const purpleCircleTop = imgRect.top - rightRect.top + 110; // 50px below the img wrapper
      const blueCircleTop = imgRect.top - rightRect.top + 230; // 70px below the img wrapper

      // Apply original positions with transition class
      purpleCircle.classList.add('circle-transition');
      purpleCircle.style.left = `${purpleCircleLeft}px`;
      purpleCircle.classList.add('circle-transition');
      purpleCircle.style.top = `${purpleCircleTop}px`;

      blueCircle.classList.add('circle-transition');
      blueCircle.style.left = `${blueCircleLeft}px`;
      blueCircle.classList.add('circle-transition');
      blueCircle.style.top = `${blueCircleTop}px`;

      // Remove transition class after a delay (to allow transition to complete)
      setTimeout(function() {
          purpleCircle.classList.remove('circle-transition');
          blueCircle.classList.remove('circle-transition');
      }, 300); // Adjust timing to match your CSS transition duration
  });

  // Event listener for contact button click
  contactButton.addEventListener('click', function() {
    contactSpot.scrollIntoView({ behavior: 'smooth' });
  });
});
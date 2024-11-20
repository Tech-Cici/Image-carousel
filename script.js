document.querySelectorAll('.album button').forEach((button, albumIndex) => {
    button.addEventListener('click', () => {
      const album = document.querySelectorAll('.album')[albumIndex];
      const images = Array.from(album.querySelectorAll('img')).map(img => img.src);
  
      createCarousel(images);
    });
  });
  
  function createCarousel(images) {
    // Create the carousel container
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');
  
    // Carousel HTML
    carousel.innerHTML = `
      <button class="carousel-close">X</button>
      <button class="carousel-prev">&lt;</button>
      <img class="carousel-image" src="${images[0]}" alt="Carousel Image">
      <button class="carousel-next">&gt;</button>
    `;
  
    // Add styles to carousel
    Object.assign(carousel.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '1000',
    });
  
    // Add event listeners to buttons
    let currentIndex = 0;
    const imageElement = carousel.querySelector('.carousel-image');
  
    const updateImage = () => {
      imageElement.src = images[currentIndex];
    };
  
    carousel.querySelector('.carousel-next').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    });
  
    carousel.querySelector('.carousel-prev').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
    });
  
    carousel.querySelector('.carousel-close').addEventListener('click', () => {
      carousel.remove();
    });
  
    // Append carousel to the document
    document.body.appendChild(carousel);
  }
  const backgroundContainer = document.createElement('div');
  backgroundContainer.classList.add('background-dots');
  document.body.appendChild(backgroundContainer);
  
  const numberOfDots = 50; // Adjust for more or fewer dots
  for (let i = 0; i < numberOfDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
  
    // Randomize starting position and animation delay
    dot.style.left = `${Math.random() * 100}vw`;
    dot.style.animationDelay = `${Math.random() * 5}s`;
    dot.style.animationDuration = `${Math.random() * 5 + 4}s`;
    dot.style.width = `${Math.random() * 10 + 10}px`;
    dot.style.height = dot.style.width; // Make it a perfect circle
  
    backgroundContainer.appendChild(dot);
  }
    
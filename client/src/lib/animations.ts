export const initScrollAnimation = () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const checkScroll = () => {
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.85) {
        element.classList.add('active');
      }
    });
  };
  
  // Initial check
  checkScroll();
  
  // Check on scroll
  window.addEventListener('scroll', checkScroll);
  
  // Return cleanup function
  return () => window.removeEventListener('scroll', checkScroll);
};

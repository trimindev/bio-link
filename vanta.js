// Vanta Background
window.addEventListener('DOMContentLoaded', () => {
  VANTA.NET({
    el: '#vanta',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: 0x0,
    points: 10.0,
    spacing: 15.0,
    showDots: false,

    color: 0xa4ff, //edit here
  });

  // ease out
  setTimeout(() => {
    const main = document.querySelector('main');
    main.style.opacity = 1;
    main.style.filter = 'blur(0px)';
  }, 500);
});

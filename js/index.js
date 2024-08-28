document.getElementById('download-btn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'public/MyResume.pdf'; // Rezyume fayl manzili
    link.download = 'MyResume.pdf'; // Yuklab olinadigan fayl nomi
    link.click();
  });
  

// JavaScript code to toggle the navbar
document.addEventListener('DOMContentLoaded', function() {
  const toggler = document.getElementById('navbar-togglerr');
  const navItems = document.querySelector('.nav-items');

  if (toggler && navItems) {
    toggler.addEventListener('click', function() {
      navItems.classList.toggle('active');
    });
  } else {
    console.error('Toggler or navItems element not found.');
  }
});



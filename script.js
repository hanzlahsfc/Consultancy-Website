// Mobile menu toggle
document.querySelector('.mobile-toggle').addEventListener('click', function () {
  document.querySelector('.main-nav').classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.main-nav a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.querySelector('.main-nav').classList.remove('open');
  });
});

// Sticky header background change on scroll
window.addEventListener('scroll', function () {
  var header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.style.background = '#fff';
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
  } else {
    header.style.background = 'rgba(255,255,255,0.95)';
    header.style.boxShadow = 'none';
  }
});

// Active nav link highlight on scroll
var sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', function () {
  var scrollY = window.scrollY + 100;
  sections.forEach(function (section) {
    var top = section.offsetTop;
    var height = section.offsetHeight;
    var id = section.getAttribute('id');
    var link = document.querySelector('.main-nav a[href="#' + id + '"]');
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
});

// Simple form submission handler
var form = document.querySelector('.contact-form form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
  });
}

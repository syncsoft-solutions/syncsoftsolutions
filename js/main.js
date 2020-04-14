/** Smooth scroll links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const sectionElement = document.querySelector(this.getAttribute('href'))
    const yCoordinate = sectionElement.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -68;

    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: 'smooth'
    });
  });
});

/** Burger menu implementation */
var burger = document.querySelector('.navbar-burger')
var menu = document.querySelector('.navbar-menu');
burger.addEventListener('click', () => {
  burger.classList.toggle('is-active');
  menu.classList.toggle('is-active');
});


/**  hide/show navbar when scrolling */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-4.25rem";
//   }
//   prevScrollpos = currentScrollPos;
// }

// Set the current year to the footer.
let currYear = (new Date()).getFullYear()
document.getElementById('cprightYear').innerText = currYear
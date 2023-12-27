/*==================== toggle icon navbar ====================*/

let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});
/*==================== scroll sections active link ====================*/
// Corrected the variable name 'sections' to use querySelectorAll to select all sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        // Get the top position of the window
        let top = window.scrollY;
        // Get the offset of the current section minus 150 pixels
        let offset = sec.offsetTop - 150;
        // Get the height of the current section
        let height = sec.offsetHeight;
        // Get the id of the current section
        let id = sec.getAttribute('id');

        // Check if the top position is within the range of the current section
        if (top > offset && top < offset + height) {
            // Use navlinks instead of links (typo)
            navlinks.forEach(link => {
                // Use classList instead of classlist (typo)
                link.classList.remove('active');
            });

            // Use querySelector instead of document.querySelector
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
        }
    });

/*==================== sticky navbar ====================*/

let header=document.querySelector('header');
header.classList.toggle('sticky' ,window.scrollY>100);


/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');




};


/*==================== scroll reveal ====================*/

// Initialize ScrollReveal with options
// Initialize ScrollReveal with common options
// Initialize ScrollReveal with options
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });
  
  // Chain the reveal method for each element
  ScrollReveal().reveal('.home-img, .services-container', { origin: 'bottom' })
                .reveal('.portfolio-box', { origin: 'bottom' })
                .reveal('.contact form', { origin: 'bottom' });
  

/*==================== scroll sections active link ====================*/

  



/*==================== typed js ====================*/


// ------------------------------------login.js------------------------------

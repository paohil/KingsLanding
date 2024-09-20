const navLinks = document.querySelector('.nav-links');
const burger = document.createElement('div');
burger.classList.add('burger');
document.querySelector('header').appendChild(burger);

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

burger.innerHTML = `
  <span></span>
  <span></span>
  <span></span>
`;

const burgerStyles = `
  .burger {
    cursor: pointer;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
  }

  .burger span {
    background-color: #fff;
    height: 3px;
    width: 100%;
  }

  @media (max-width: 768px) {
    .burger {
      display: flex;
    }
  }

  .nav-links.active {
    display: flex;
  }
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = burgerStyles;
document.head.appendChild(styleSheet);


const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

nextButton.addEventListener('click', () => {
    index++;
    if (index >= slides.children.length) {
        index = 0; // Reset to first item
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
});

prevButton.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = slides.children.length - 1; // Go to last item
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
});


const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(nav => nav.classList.remove('active')); // Remove active class from all links
        link.classList.add('active'); // Add active class to the clicked link
    });
});

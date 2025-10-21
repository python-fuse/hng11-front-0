const pageToRoute = {
  Home: "/index.html",
  "About Me": "/about.html",
  "Contact Us": "/contact.html",
};

function highlightCurrentPage() {
  // Grab the the links in header>nav>ul>li and highlight current page
  let navLinks = document.querySelectorAll("header>nav>ul>li a");
  const currentPage = window.location.pathname;

  navLinks.forEach((link) => {
    if (pageToRoute[link.innerHTML] === currentPage) {
      link.classList.add("active-link");
    }
  });
}

highlightCurrentPage();

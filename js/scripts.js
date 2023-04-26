function scrollSection() {
  const section = document.querySelectorAll('.nav-item a[href^="#"]')

  function transitionToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href')
    const links = document.querySelector(href)
    links.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  section.forEach((link) => {
    link.addEventListener('click', transitionToSection)
  })
}
scrollSection()

function scrollButton() {
  const button = document.querySelectorAll('.carousel-caption a[href^="#"]')

  function transitionButton(event) {
    event.preventDefault()

    const link = event.currentTarget.getAttribute('href')
    const btns = document.querySelector(link)
    btns.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  button.forEach((btn) => {
    btn.addEventListener('click', transitionButton)
  })
}
scrollButton()

function topPage() {
  var btn = document.querySelector("#back-to-top");
  
  btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
  })
}
topPage()

function hideNav() {
  $(".nav-link").on("click", function(){
    $('.navbar-collapse').collapse('hide');
  });
}
hideNav()

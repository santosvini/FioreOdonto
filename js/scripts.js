function scroll() {
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
scroll()


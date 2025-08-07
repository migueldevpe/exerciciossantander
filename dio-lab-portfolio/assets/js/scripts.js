const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

function changeTheme(){
  const currentTheme = rootHtml.getAttribute("data-theme");

  currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")

  toggleTheme.classList.toggle("bi-sun")
  toggleTheme.classList.toggle("bi-moon-stars")
}

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const isActive = accordionItem.classList.contains("active");

    // Marca que foi clicado manualmente
    accordionItem.classList.add("user-clicked");

    if (isActive) {
      accordionItem.classList.add("closing");
      accordionItem.classList.remove("active");

      // Remove "closing" depois da animação
      setTimeout(() => {
        accordionItem.classList.remove("closing");
      }, 600); // igual à duração do @keyframes
    } else {
      accordionItem.classList.add("active");
    }
  });
});

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  })
})
document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      if (storedTheme != themeStylesheet.href) {
        loadTheme();
      }
    }

    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', loadTheme)
})


function loadTheme() {

  const themeStylesheet = document.getElementById('theme');

  if (themeStylesheet.href.includes('light')) {
      // if it's light -> go dark
      themeStylesheet.href = 'static/css/dark-theme.css';
      navbar = document.getElementById("navbar");
      navbar.classList.remove("navbar-light");
      navbar.classList.add("navbar-dark");

  } else {
      // if it's dark -> go light
      themeStylesheet.href = 'static/css/light-theme.css';
      navbar = document.getElementById("navbar");
      navbar.classList.add("navbar-light");
      navbar.classList.remove("navbar-dark");
  }
  // save the preference to localStorage
  localStorage.setItem('theme',themeStylesheet.href)

}

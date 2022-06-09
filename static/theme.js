document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');

    // load correct theme when DOM loads
    if (storedTheme) {
      if (storedTheme != themeStylesheet.href) {
        loadTheme();
      }
    }

    // if toggle clicked, change theme
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', loadTheme)

    // if stylesheet dark, turn toggle on
    const toggle = document.getElementById("theme-toggle");
    (themeStylesheet.href.includes('light')) ? toggle.checked = false : toggle.checked = true;

})


function loadTheme() {

  const themeStylesheet = document.getElementById('theme');

  if (themeStylesheet.href.includes('light')) {
      // if it's light -> go dark
      themeStylesheet.href = 'static/css/dark-theme.css';
      navbar = document.getElementById("navbar");
      navbar.classList.remove("navbar-light");
      navbar.classList.add("navbar-dark");

      localStorage.setItem('dark-mode', true)

  } else {
      // if it's dark -> go light
      themeStylesheet.href = 'static/css/light-theme.css';
      navbar = document.getElementById("navbar");
      navbar.classList.add("navbar-light");
      navbar.classList.remove("navbar-dark");

      localStorage.setItem('dark-mode', false)
  }
  
  // save the preference to localStorage
  localStorage.setItem('theme',themeStylesheet.href)

}

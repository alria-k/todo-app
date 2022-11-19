let changeThemeBtn = document.querySelectorAll(".theme-icon");

changeThemeBtn.forEach((e) => {
  e.addEventListener("click", function () {
    applyTheme(this.dataset.theme);
  });
});

function applyTheme(themeData) {
  let cssTheme = `./style/${themeData}-theme.min.css`;
  document.querySelector('[title="theme"]').setAttribute("href", cssTheme);
}

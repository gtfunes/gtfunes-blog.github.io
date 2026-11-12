(function () {
  var button = document.querySelector(".theme-toggle");

  if (!button) {
    return;
  }

  function updateButton(theme) {
    button.setAttribute("aria-pressed", theme === "dark");
    button.setAttribute("aria-label", "Switch to " + (theme === "dark" ? "light" : "dark") + " theme");
  }

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    updateButton(theme);
  }

  updateButton(document.documentElement.dataset.theme);

  button.addEventListener("click", function () {
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });
}());

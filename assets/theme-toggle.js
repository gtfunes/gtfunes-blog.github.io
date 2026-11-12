(function () {
  var button = document.querySelector(".theme-toggle");
  var themeColor = document.querySelector('meta[name="theme-color"]');

  if (!button) {
    return;
  }

  function updateButton(theme) {
    button.setAttribute("aria-pressed", theme === "dark");
    button.setAttribute("aria-label", "Switch to " + (theme === "dark" ? "light" : "dark") + " theme");
    themeColor.setAttribute("content", theme === "dark" ? "#171717" : "#fdfdfd");
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

// Show loader on link click
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      if (link.target === "_blank") return;
      document.getElementById("loaderPopup").style.display = "flex";
    });
  });
});


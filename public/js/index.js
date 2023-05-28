function toggleNav() {
    const button = document.querySelector(".burger-button");
    const target = document.querySelector("nav ul");
    if (button) {
      button.addEventListener(
        "click",
        function (e) {
          button.classList.toggle("is-active");
          target.classList.toggle("is-opened");
          e.preventDefault();
        },
        false
      );
    }
  }
  toggleNav();
(function() {
  const card = document.querySelectorAll(".card-overlay");
  const backText = document.querySelectorAll(".card-overlay--text");

  card.forEach((cards) => {
    cards.addEventListener("click", (event) => {
      event.target.classList.toggle("opacity--zero");
    });
  });

  const icons = document.querySelectorAll(".contact-info--appear");
  const discordHeader = document.querySelector(".discord");
  const zoomHeader = document.querySelector(".zoom");
  const mainHeader = document.querySelector(".header--main");

  window.onscroll = () => { displayNameAgain() };

  function displayNameAgain() {
    if (document.querySelector("header").scrollTop > 100) {
      removeDisplaytoSiblings();
      mainHeader.classList.remove("display--none");
    }
  }

  function removeDisplaytoSiblings() {
    document.querySelectorAll(".all-headers").forEach(sibling => {
      sibling.classList.add("display--none");
    });

    icons.forEach(sibling => {
      sibling.classList.remove("icon--active");
    });
  }

  function addRemoveIconShadow(icon) {
    removeDisplaytoSiblings();
  }


  icons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      addRemoveIconShadow(event.target)
      event.target.classList.toggle("icon--active");

      if (event.target.name === "logo-discord") {
        discordHeader.classList.remove("display--none");
      }
      if (event.target.name === "videocam") {
        zoomHeader.classList.remove("display--none");
      }
    });
  });


})();

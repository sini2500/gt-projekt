const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");
const overlayMenu = document.querySelector(".overlay");

// Öppna / stäng overlay när hamburgare klickas
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("active");
      navbarMenu.classList.toggle("active");
   });
}

// Stäng overlay när länk klickas
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("active");
      navbarMenu.classList.remove("active");
   });
});

// Ta bort active om fönstret växer med overlay öppen
window.addEventListener("resize", () => {
   if (window.innerWidth >= 768) {
      if (navbarMenu.classList.contains("active")) {
         navbarMenu.classList.remove("active");
         overlayMenu.classList.remove("active");
      }
   }
});

/* produktsida - bildbyte */

const mainImage = document.getElementById("mainImage");
const mainSource = document.querySelector(".main-image source");
const thumbnails = document.querySelectorAll(".thumbnail-list picture");

thumbnails.forEach(picture => {
  picture.addEventListener("click", () => {
    const source = picture.querySelector("source");
    const img = picture.querySelector("img");

    mainSource.srcset = source.srcset;
    mainImage.src = img.src;
  });
});
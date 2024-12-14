const backToTopButton = document.getElementById("backToTopButton");

const showBackToTopButtonOnScroll = () => {
  if (scrollY > 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
};

window.addEventListener("scroll", showBackToTopButtonOnScroll);
showBackToTopButtonOnScroll();

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

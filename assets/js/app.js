const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");
menuicon.addEventListener("click", () => {
  menulist.classList.toggle("show");
  document.body.classList.toggle("overflow-hidden");
  menuicon.classList.toggle("show");
});
// Large Screen NavBar
const listItems = document.querySelector(".list-items");
const searchBar = document.querySelector(".search-bar");
const searchImg = document.querySelector(".search");
const closeImg = document.querySelector(".close");

searchImg.addEventListener("click", () => {
  searchImg.style.display = "none";
  listItems.style.display = "none";
  searchBar.style.display = "block";
  closeImg.style.display = "block";
});
closeImg.addEventListener("click", () => {
  searchImg.style.display = "block";
  listItems.style.display = "flex";
  searchBar.style.display = "none";
  closeImg.style.display = "none";
});

// Mobile Navbar
const mobile = document.querySelector(".mobile");
const mobileMenu = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector(".menu");
const closeIcon = document.querySelector(".closeMenu");
const mobileSearch = document.querySelector(".mobile-search");
const mobileClose = document.querySelector(".mobile-close");
const mobileSearchBar = document.querySelector(".mobile-search-bar");

menuIcon.addEventListener("click", () => {
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
  mobileMenu.style.display = "block";
});
closeIcon.addEventListener("click", () => {
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
  mobileMenu.style.display = "none";
});
mobileSearch.addEventListener("click", () => {
  mobileSearch.style.display = "none";
  mobileClose.style.display = "block";
  mobileSearchBar.style.display = "block";
});
mobileClose.addEventListener("click", () => {
  mobileSearch.style.display = "block";
  mobileClose.style.display = "none";
  mobileSearchBar.style.display = "none";
});

// Search Book
const keyword = document.querySelector(".keyword");
const keywordImg = document.querySelector(".keyword img");
const keywordList = document.querySelector(".keyword-list");
const keywordLink = document.querySelectorAll(".keyword-list-items");

keyword.addEventListener("click", () => {
  keywordImg.classList.toggle("active");
  keywordList.classList.toggle("showList");
});
keywordLink.forEach((list) => {
  list.addEventListener("click", () => {
    keyword.textContent = list.textContent;
    keywordList.classList.remove("showList");
  });
});
document.addEventListener("click", (event) => {
  if (!keyword.contains(event.target)) {
    keywordImg.classList.remove("active");
    keywordList.classList.remove("showList");
  }
});

// Image Scroll
const leftArrow = document.querySelector(".left-arr");
const rightArrow = document.querySelector(".right-arr");
const iconOne = document.querySelector(".stream-icon:nth-child(1)");
const cardOne = document.querySelector(".cardOne");
const left = document.querySelector(".arrow-img:nth-child(1)");
const right = document.querySelector(".arrow-img:nth-child(2)");

rightArrow.addEventListener("click", () => {
  iconOne.style.margin = "0 0 0 -198px";
  rightArrow.style.visibility = "hidden";
  leftArrow.style.visibility = "visible";
});
leftArrow.addEventListener("click", () => {
  iconOne.style.margin = "0 0 0 0";
  rightArrow.style.visibility = "visible";
  leftArrow.style.visibility = "hidden";
});
left.addEventListener("click", () => {
  cardOne.style.margin = "0 0 0 0";
});
right.addEventListener("click", () => {
  cardOne.style.margin = "0 0 0 -330px";
});

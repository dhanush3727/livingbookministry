// NavBar
const hamBurgerMenu = document.querySelector(".menu");
const searchItem = document.querySelector(".search-item");
const listItems = document.querySelector(".list-items");

hamBurgerMenu.addEventListener("click", () => {
  searchItem.classList.toggle("show");
  listItems.classList.toggle("show");
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

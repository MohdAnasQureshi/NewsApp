var x = window.matchMedia("(max-width:800px)");

if (x.matches) {
  const menuBtn = document.getElementsByClassName("sidebarBtn")[0];
  const menuBox = document.getElementsByClassName("dropdown-box")[0];
  const card = document.getElementsByClassName("card")[0];
  const main = document.getElementsByTagName("main")[0];

  window.onload = () => {
    main.style.filter = "opacity(0.3)";

    function mainFunc() {
      menuBox.style.display = "none";
      main.style.filter = "opacity(1)";
      menuBtn.style.backgroundColor = "white";
    }
    main.addEventListener("click", mainFunc);
  };

  function menuFunc() {
    if (menuBox.style.display === "none") {
      menuBox.style.display = "block";
      menuBtn.style.backgroundColor = "rgb(220, 220, 240)";
      main.style.filter = "opacity(0.3)";
    } else {
      menuBox.style.display = "none";
      menuBtn.style.backgroundColor = "white";
      main.style.filter = "opacity(1)";
    }
  }

  menuBtn.addEventListener("click", menuFunc);
} else {
 
}
const darkMode = document.getElementsByClassName("dark")[0];
const lightMode = document.getElementsByClassName("light")[0];
const nav = document.getElementsByTagName("nav")[0];
const logoText = document.getElementsByClassName("logoText")[0];
const main = document.getElementsByTagName("main")[0];
const card = document.getElementsByClassName("card");
const cardArray = Array.from(card);
const newsContent = document.getElementsByClassName("news-content");
const newsContentArray = Array.from(newsContent);
const aside = document.getElementsByTagName("aside")[0];
const loadMore = document.getElementsByClassName("loadMore")[0];
const categoryText = document.getElementsByClassName("categoryText")[0];

function darkModeFunc() {
  lightMode.style.backgroundColor = "white";
  nav.style.backgroundColor = "black";
  darkMode.style.backgroundColor = "rgb(255, 227, 255)";
  logoText.style.color = "white";
  main.style.backgroundColor = "rgb(226, 226, 226)";
  categoryText.style.backgroundColor = "rgb(70, 70, 70)";
  loadMore.innerHTML = `<style>.loadMore:hover {background-color : rgb(70, 70, 70); color : white; box-shadow: 0 0 7px  rgb(70, 70, 70)}</style>
  Load More`;
  cardArray.forEach((card) => {
    card.style.backgroundColor = "rgb(70, 70, 70)";
  });
  newsContentArray.forEach((newsContent) => {
    newsContent.style.color = "white";
  });

  aside.style.backgroundColor = "rgb(70, 70, 70)";
}
function lightModeFunc() {
  darkMode.style.backgroundColor = "white";
  nav.style.backgroundColor = "white";
  lightMode.style.backgroundColor = "rgb(255, 227, 255)";
  logoText.style.color = "rgb(58, 0, 112)";
  main.style.backgroundColor = "white";
  categoryText.style.backgroundColor = "rgb(92, 92, 92)";
  loadMore.innerHTML = `<style>.loadMore:hover {background-color : rgb(226, 226, 226)}</style>
  Load More`;
  cardArray.forEach((card) => {
    card.style.backgroundColor = "white";
  });
  newsContentArray.forEach((newsContent) => {
    newsContent.style.color = "black";
  });

  aside.style.backgroundColor = "rgb(92, 92, 92)";
}

darkMode.addEventListener("click", darkModeFunc);
lightMode.addEventListener("click", lightModeFunc);


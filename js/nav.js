const hamburger = document.querySelector(".hamburger");
const toggleOpen = document.querySelector(".toggle-bg"); // = toggleOpen
const navigation = document.querySelector(".nav-bar");

// document.querySelector(".toggle-bg").style.visibility = "visible"; = toggleOpen
// document.querySelector(".toggle-bg").style.visibility = "hidden"; = toggleOpen

//---------- Hamburger open -----------
hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("uil-bars")) {
    hamburger.classList.replace("uil-bars", "uil-times");
    toggleOpen.style.visibility = "visible";
    navigation.style.position = "sticky";

    //------ Hamburger close --------
  } else {
    hamburger.classList.replace("uil-times", "uil-bars");
    toggleOpen.style.visibility = "hidden";
  }
});

//For Drop Down toggle

const toggleList = document.querySelector(".toggle-list"),
  toggleItem = document.querySelector(".toggle-item"),
  toggleLink = document.querySelector(".toggle-link");

toggleList.addEventListener("click", () => {});

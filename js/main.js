const tabs = document.getElementsByClassName("tab-menu__item");
const contents = document.getElementsByClassName("tab-content__item");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function () {

    for (let j = 0; j < tabs.length; j++){
    tabs[j].classList.remove("action")
    }
    for (let j = 0; j < tabs.length; j++){
    contents[j].classList.remove("show")
    }
    
    tabs[i].classList.add("action")
    contents[i].classList.add("show")
  });
}

import "./style/style.scss";

const contentDiv = document.querySelector("#content");
const slogan = "Crispy, Every Bite Taste";

import { addHero } from "@/modules/addHero";
import { addAbout } from "@/modules/addAbout";
import { addMenu } from "@/modules/addMenu";

const navTab = document.querySelector("header nav");

navTab.addEventListener("click", (event) => {
  const target = event.target;

  if (!target.dataset.tab) return;

  const currentTab = target.dataset.tab;

  contentDiv.replaceChildren();

  Array.from(navTab.querySelectorAll("ul li button")).forEach((btn) =>
    btn.classList.remove("active"),
  );

  target.classList.add("active");

  switch (currentTab) {
    case "hero":
      addHero(contentDiv, slogan);
      break;
    case "about":
      addAbout(contentDiv);
      break;
    case "menu":
      addMenu(contentDiv, slogan);
      break;
  }
});

const firstOpen = () => {
  contentDiv.replaceChildren();

  addHero(contentDiv, slogan);
  addMenu(contentDiv, slogan);
  addAbout(contentDiv);
};


firstOpen();
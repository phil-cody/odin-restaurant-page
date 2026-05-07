import orderImg from "@/assets/img/order.svg";

export const addHero = (contentDiv, slogan) => {
  const hero = document.createElement("section");
  hero.classList.add("hero");
  contentDiv.appendChild(hero);

  const container = document.createElement("div");
  container.classList.add("container");
  console.log(container);
  hero.appendChild(container);

  const heroText = document.createElement("div");
  heroText.classList.add("hero__text");
  container.appendChild(heroText);

  const heroSlogan = document.createElement("p");
  heroSlogan.classList.add("slogan");
  heroSlogan.textContent = slogan;
  heroText.appendChild(heroSlogan);

  const heroTitle = document.createElement("h1");
  heroTitle.classList.add("title");
  heroTitle.textContent = "Hot spicy chicken burger";
  heroText.appendChild(heroTitle);

  const heroSubtitle = document.createElement("p");
  heroSubtitle.classList.add("subtitle");
  heroSubtitle.textContent = "Limited offer/";
  heroText.appendChild(heroSubtitle);

  const heroSpan = document.createElement("span");
  heroSpan.textContent = "$5";
  heroSubtitle.appendChild(heroSpan);

  const orderBtn = document.createElement("button");
  orderBtn.classList.add("order-btn", "btn");
  heroText.appendChild(orderBtn);

  const orderBtnImg = document.createElement("img");
  orderBtnImg.setAttribute("src", orderImg);
  orderBtnImg.setAttribute("alt", "Order Now");
  orderBtn.appendChild(orderBtnImg);

  const orderBtnText = document.createElement("p");
  orderBtnText.textContent = "Order Now";
  orderBtn.appendChild(orderBtnText);
};

export const x = 3;
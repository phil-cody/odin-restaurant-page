import orderImg from "./assets/img/order.svg";
import aboutImg from "./assets/img/images.webp";
import noteImageOnline from './assets/img/online.svg';
import noteImageHealthy from './assets/img/healthy.svg';
import pizzaImg from './assets/img/pizza.png';
import pastaImg from './assets/img/pasta.png';
import burgerImg from './assets/img/burger.png';
import frenchFryImg from './assets/img/french-fry.png';

const contentDiv = document.querySelector("#content");
const slogan = "Crispy, Every Bite Taste";

const foodItemsArray = [
  {
    src: pizzaImg,
    name: 'Pizza',
    price: '$4',
  },
  {
    src: pastaImg,
    name: 'Pasta',
    price: '$5',
  },
  {
    src: burgerImg,
    name: 'Burger',
    price: '$7',
  },
  {
    src: frenchFryImg,
    name: 'French Fries',
    price: '$2.95',
  }
];

const addHero = () => {
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

const addAbout = () => {
  const about = document.createElement("section");
  about.classList.add("about");
  contentDiv.appendChild(about);

  const container = document.createElement("div");
  container.classList.add("container");
  about.appendChild(container);

  const aboutTitle = document.createElement("h2");
  aboutTitle.textContent = "Perfect Place For An Exeptional Experience";
  container.appendChild(aboutTitle);

  const aboutContent = document.createElement("div");
  aboutContent.classList.add("about__content");
  container.appendChild(aboutContent);

  const aboutImage = document.createElement("img");
  aboutImage.setAttribute("src", aboutImg);
  aboutImage.classList.add("about__image");
  aboutContent.appendChild(aboutImage);

  const aboutText = document.createElement("p");
  aboutText.classList.add("about__text");
  aboutText.textContent =
    "Nisl quam nestibulum ac quam nec odio elementu sceisue the aucan ligula. Orci varius natoque pena culus mus nellentesque ha um ac quam nec odio aibulum ac quam nec odio elrbine.";
  aboutContent.appendChild(aboutText);

  const aboutNote = document.createElement('div');
  aboutNote.classList.add('about__note');
  aboutContent.appendChild(aboutNote);

  const noteImage = document.createElement('div');
  noteImage.classList.add('note__img');
  aboutNote.appendChild(noteImage);

  const noteImg = document.createElement('img');
  noteImg.setAttribute('src', noteImageOnline);
  noteImage.appendChild(noteImg);

  const noteText = document.createElement('div');
  noteText.classList.add('note__text');
  aboutNote.appendChild(noteText);

  const noteTitle = document.createElement('h3');
  noteTitle.textContent = 'Online Food Ordering';
  noteText.appendChild(noteTitle);

  const noteDescription = document.createElement('p');
  noteDescription.textContent = 'Easy Food delivery from the best restaurants.';
  noteText.appendChild(noteDescription);

  const aboutNoteSecond = aboutNote.cloneNode(true);
  aboutContent.appendChild(aboutNoteSecond);

  aboutNoteSecond.querySelector('img').setAttribute('src', noteImageHealthy);

  aboutNoteSecond.querySelector('h3').textContent = '100% Healthy Food';

  aboutNoteSecond.querySelector('p').textContent = 'Eating a wide variety of nutritious Healthy foods';
};

const addMenu = () => {
  const menu = document.createElement('section');
  menu.classList.add('menu');
  contentDiv.appendChild(menu);

  const container = document.createElement("div");
  container.classList.add("container");
  menu.appendChild(container);

  const menuSlogan = document.createElement('p');
  menuSlogan.textContent = slogan;
  container.appendChild(menuSlogan);

  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "Popular Food Items";
  container.appendChild(menuTitle);

  const menuCards = document.createElement('div');
  menuCards.classList.add('menu__cards');
  container.appendChild(menuCards);

  foodItemsArray.forEach(food => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu__item');
    menuCards.appendChild(menuItem);

    const itemImg = document.createElement('img');
    itemImg.setAttribute('src', food.src);
    itemImg.setAttribute('alt', food.name);
    itemImg.classList.add('item__img');
    menuItem.appendChild(itemImg);

    const itemName = document.createElement('h4');
    itemName.textContent = food.name;
    menuItem.appendChild(itemName);

    const itemHrLine = document.createElement('hr');
    menuItem.appendChild(itemHrLine);

    const itemPrice = document.createElement('p');
    itemPrice.textContent = food.price;
    menuItem.appendChild(itemPrice);
  });
}

addHero();
addAbout();
addMenu();
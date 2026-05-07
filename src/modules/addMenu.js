import pizzaImg from '@/assets/img/pizza.png';
import pastaImg from '@/assets/img/pasta.png';
import burgerImg from '@/assets/img/burger.png';
import frenchFryImg from '@/assets/img/french-fry.png';

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

export const addMenu = (contentDiv, slogan) => {
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
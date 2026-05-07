import aboutImg from "@/assets/img/images.webp";
import noteImageOnline from '@/assets/img/online.svg';
import noteImageHealthy from '@/assets/img/healthy.svg';

export const addAbout = (contentDiv) => {
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
import { contacts } from "./data.js";
console.log(contacts);
const contactsList = document.querySelector('.contact__list')
const openModal = document.querySelector(".new__contact");
// const closeModal = document.querySelector(".close__modal");
const modal = document.querySelector(".modal");

openModal.addEventListener("click", () => {
  modal.showModal();
});
// closeModal.addEventListener("click", () => {
//   modal.close();
// });
modal.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target === modal) modal.close();
});
console.log(contactsList);
 
function renderContact(arr) {
  arr.forEach((e)=>{
  const contact = document.createElement("div");
  contact.innerHTML = `<li id="${e.id}" class="contact__data">
              <img
                class="contact__photo"
                src="./pictures/Avatar.png"
                alt="avatar"
              />
              <div class="data__wrapper">
                <div class="initials">
                  <p class="${e.name} name">${e.name}</p>
                  <p class="${e.surname} surname">${e.surname}</p>
                </div>
                <p class="${e.about} about">${e.about}</p>
              </div>
              <p class="${e.gender} gender">${e.gender}</p>
              <p class="${e.phone} phone">${e.phone}</p>
              <p class="${e.mail} mail"><a class="${e.mail} data__mail" href="mailto:${e.mail}">${e.mail}</a></p>
            </li>`;
  contactsList.append(contact);
  })
} console.log(renderContact);
renderContact(contacts)
//функция подсветки: перебор через contacts.forEche -> adventListener(click, el)style.backgroundColor=''
//сортировка по гендеру: если value== то filter value==
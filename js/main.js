import { Pet } from "./pet.js";

const petForm = document.getElementById("petForm");
const petsList = document.getElementById("petsList");

let pets = [];

const addPet = (name, petWeight, feature) => {
  const newPet = new Pet(name, petWeight, feature);
  pets.push(newPet);
  updatePetsList();
};

const updatePetsList = () => {
  petsList.innerHTML = "";

  pets.forEach((pet, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            ${pet.detail()} 
            <button class="remove" data-index="${index}">Remover</button>
        `;
    petsList.appendChild(listItem);
  });

  const buttonsRemove = document.querySelectorAll(".remove");
  buttonsRemove.forEach((botao) => {
    botao.addEventListener("click", removePet);
  });
};

const removePet = (event) => {
  const index = event.target.dataset.index;
  pets.splice(index, 1);
  updatePetsList();
};

petForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const petWeight = document.getElementById("petWeight").value;
  const feature = document.getElementById("feature").value;

  addPet(name, petWeight, feature);

  petForm.reset();
});

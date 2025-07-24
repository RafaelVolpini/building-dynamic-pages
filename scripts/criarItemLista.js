import atualizarData from "./dataController.js";
const inputItem = document.getElementById("input-item");
let count = 0;


export function criarItemLista () {
    if (inputItem.value === "") {
        alert("Por favor, adicione um item valido à lista.");
        return;
    }
    const itemLista = document.createElement("li");
    const containerLista = document.createElement("div")
    const inputCheckbox = document.createElement("input");
    const nomeItem = document.createElement("p");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + count++;
    containerLista.classList.add("lista-item-container");
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function () {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
            nomeItem.style.color = "var(--cor-secundaria)";
        }
        else {
            nomeItem.style.textDecoration = "none";
            nomeItem.style.color = "var(--preto)";
        }

    })

    let Data = atualizarData();
    containerLista.appendChild(inputCheckbox);
    containerLista.appendChild(nomeItem);
    itemLista.appendChild(containerLista);
    itemLista.appendChild(Data)
    return itemLista; 
}
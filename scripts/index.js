import { criarItemLista } from "./criarItemLista.js";
import verificarListaVazia from "./tratamentListaNula.js";
    
const BtnSalvar = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const input = document.getElementById("input-item");

BtnSalvar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemLista = criarItemLista();
    listaDeCompras.appendChild(itemLista);
    verificarListaVazia(listaDeCompras);
    limparInput();
})

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        const itemLista = criarItemLista();
        listaDeCompras.appendChild(itemLista);
        console.log(itemLista);
        verificarListaVazia(listaDeCompras);
        limparInput();
    }
})

function limparInput() {
    input.value = "";
}
verificarListaVazia(listaDeCompras);
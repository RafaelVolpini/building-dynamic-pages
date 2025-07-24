export default function atualizarData () 
{
    const diaAtual = new Date().toLocaleDateString("pt-BR",
        {
            weekday: "long"
        });
    const dataAtual = new Date().toLocaleDateString("pt-BR");
    const horaAtual = new Date().toLocaleTimeString("pt-BR",
        {
            hour: "2-digit",
            minute: "2-digit"
        });

    const Data = document.createElement("p");
    Data.classList.add("texto-data");
    Data.innerText = `${diaAtual} (${dataAtual}) às ${horaAtual}`;
    return Data;
}
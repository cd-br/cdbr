async function baixarDados() {
  const status = document.getElementById("status");
  status.innerText = "Baixando dados...";
  try {
    const response = await fetch("dados/itens.json"); // ajuste se o caminho for diferente
    const data = await response.json();
    status.innerText = "Dados pré-carregados com sucesso!";
    console.log("Dados baixados:", data);
  } catch (err) {
    status.innerText = "Erro ao baixar dados: " + err;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("baixarDados").addEventListener("click", baixarDados);
});

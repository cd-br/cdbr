<!-- widget-preload.html -->
<button id="baixarDados">Baixar dados e pré-carregar</button>
<div id="status"></div>

<script>
async function salvarNoIndexedDB(chave, conteudo) {
  return new Promise((resolve, reject) => {
    const dbRequest = indexedDB.open("CDbrDB", 1);
    dbRequest.onupgradeneeded = event => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("dados")) {
        db.createObjectStore("dados", { keyPath: "id" });
      }
    };
    dbRequest.onsuccess = event => {
      const db = event.target.result;
      const tx = db.transaction("dados", "readwrite");
      const store = tx.objectStore("dados");
      store.put({ id: chave, conteudo });
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    };
    dbRequest.onerror = () => reject(dbRequest.error);
  });
}

async function lerDoIndexedDB(chave) {
  return new Promise((resolve, reject) => {
    const dbRequest = indexedDB.open("CDbrDB", 1);
    dbRequest.onsuccess = event => {
      const db = event.target.result;
      const tx = db.transaction("dados", "readonly");
      const store = tx.objectStore("dados");
      const getReq = store.get(chave);
      getReq.onsuccess = () => resolve(getReq.result ? getReq.result.conteudo : null);
      getReq.onerror = () => reject(getReq.error);
    };
  });
}

async function baixarDados() {
  document.getElementById("status").innerText = "Baixando dados...";
  try {
    // Exemplo: substitua pelos arquivos reais
    const response = await fetch("dados/itens.json");
    const data = await response.json();

    await salvarNoIndexedDB("itens", data);
    document.getElementById("status").innerText = "Dados pré-carregados com sucesso!";
  } catch (err) {
    document.getElementById("status").innerText = "Erro ao baixar dados: " + err;
  }
}

async function carregarDados() {
  const dadosLocais = await lerDoIndexedDB("itens");
  if (dadosLocais) {
    document.getElementById("status").innerText = "Carregando dados do cache local...";
    console.log("Dados carregados do IndexedDB:", dadosLocais);
    return dadosLocais;
  } else {
    document.getElementById("status").innerText = "Carregando dados online...";
    const response = await fetch("dados/itens.json");
    const data = await response.json();
    return data;
  }
}

document.getElementById("baixarDados").addEventListener("click", baixarDados);

// Exemplo de uso automático ao abrir a página
carregarDados().then(dados => {
  // Aqui você pode integrar os dados no site
  console.log("Dados disponíveis:", dados);
});
</script>

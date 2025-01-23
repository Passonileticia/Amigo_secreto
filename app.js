let elemAmigo = document.getElementById("nome-amigo"); // input
let elemListaAmigos = document.getElementById("lista-amigos"); // lista de amigos
let elemListaSorteio = document.getElementById("lista-sorteio"); // resultado do sorteio

let amigos = [];

function adicionar() {
  // Adiciona participante na lista de amigos desde que o campo não esteja vazio ou já adicionado
  const amigo = elemAmigo.value;
  if (amigo && !amigos.includes(amigo.toUpperCase())) {
    amigos.push(amigo.toUpperCase());
    elemListaAmigos.textContent = amigos.join(", ");
    elemAmigo.value = "";
  }
}

function sortear() {
  if (amigos.length > 0) {
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    elemListaSorteio.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
  } else {
    elemListaSorteio.innerHTML = "Adicione nomes antes de sortear.";
  }
}

function reiniciar() {
  amigos.length = 0;
  elemListaSorteio.innerHTML = "";
  elemAmigo.value = "";
  elemListaAmigos.textContent = "";
}

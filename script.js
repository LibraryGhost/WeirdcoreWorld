document.addEventListener("mousemove", function(e) {
  const estrela = document.createElement("div");
  estrela.className = "estrela";

  // posição da estrela
  estrela.style.left = e.pageX + "px";
  estrela.style.top = e.pageY + "px";

  // tamanho aleatório
  const size = Math.random() * 8 + 5; 
  estrela.style.width = size + "2px";
  estrela.style.height = size + "2px";

  // cor (azul, laranja e roxo)
  const cores = ["blue", "orange", "purple"];
  estrela.style.background = cores[Math.floor(Math.random() * cores.length)];

  // animação suave
  estrela.style.setProperty("--y", e.pageY + "px");

  document.body.appendChild(estrela);

  // remover depois da animação
  setTimeout(() => {
    estrela.remove();
  }, 1000);
});
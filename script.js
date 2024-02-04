function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  const alt = document.querySelector("#profile alt")
  if (html.classList.contains("light")) {
    //setAttribute serve para modificar um atributo.
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Fábio de óculos escuro e camisa da atletica esquadrão, fazendo sinal com os dedos."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Fábio Henrique de barba e com carros ao fundo."
    )
  }


  // O toggle faz esse comando sozinho. Lembrando que o if ele verifica se contem light no html, se tiver ele ira removelo e se não tiver ira adcionar
}

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

 let currentYear = 2020

 function showInfo(year) {
   // Esconde todas as informações
   let infoElements = document.querySelectorAll("#infoContainer p")
   infoElements.forEach(function (element) {
     element.style.display = "none"
   })

   // Mostra a informação do ano clicado
   let infoElement = document.getElementById("info" + year)
   if (infoElement) {
     infoElement.style.display = "block"
   }

   // Atualiza a largura da linha
   let line = document.querySelector(".line")
   let bullet = document.querySelector(
     '.bullet[onclick="showInfo(' + year + ')"]'
   )
   line.style.width = bullet.style.left

   // Remove a classe 'active' de todas as bolinhas
   let bullets = document.querySelectorAll(".bullet")
   bullets.forEach(function (bullet) {
     bullet.classList.remove("active")
   })

   // Adiciona a classe 'active' na bolinha clicada
   bullet.classList.add("active")
 }

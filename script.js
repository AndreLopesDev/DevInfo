function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")


  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de André em ensaio fotográfico de Personal Trainer, de camisa preta, sem óculos e fundo branco. Mais proximal está a câmera do fotógrafo registrando o momento.")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de André em ensaio fotográfico de Personal Trainer, de camisa preta, com óculos e fundo branco.")
  }
}

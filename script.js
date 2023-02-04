function toggleMode() {
  const html = document.documentElement

  html.classList.toggle('light-theme')

  // Trocar a imagem de acordo com o tema
  const img = document.querySelector('#profile img')

  if (html.classList.contains('light-theme')) {
    img.src = './assets/avatar-light.png'
  } else {  
    img.src = "./assets/avatar.png"
  }
}

function toggleMode() {
 const html = document.documentElement
 html.classList.toggle('light')

 const img = document.querySelector("#profile img")

 if(html.classList.contains('light')) {
  img.setAttribute('src', './assets/avatar-light.png')
 } else {
  img.setAttribute('src', './assets/avatar.png')
 }

 if(html.classList.contains('light')) {
  img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos escuros e jaqueta preta e fundo estilo degradê roxo e azul')
 } else {
  img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos e jaqueta preta e fundo estilo degradê roxo e azul')
 }
}

/* if (html.classList.contains("light")) {
   html.classList.remove("light")
 } else {
   html.classList.add("light")
 } - pode ser substituido por: html.classList.toggle('light')*/
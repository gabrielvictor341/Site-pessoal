function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  const footer = document.querySelector("footer a")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-day.png")
  } else {
    img.setAttribute("src", "./assets/avatar-night.png")
  }
}

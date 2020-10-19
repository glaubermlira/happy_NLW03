// VARIAVEL DESABILITA CONTROLES DE ZOOM DO MAPA
const options = {
  dragging: false,
  tuchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}


// VARIAVEL CRIAR O MAPA
const map = L.map('mapid', options).setView([-8.0549771,-34.9091087], 15);

// INSERINDO O MAPA
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

// CRIAR ICONE POPUP
const icon = L.icon({
  iconUrl:"./public/images/map-marker.svg",
  iconSize: [58,68],
  iconAnchor: [29,68],
  popupAnchor: [170,2]
})


// ADICIONANDO POPUP
L.marker([-8.0549771,-34.9091087], {icon})
    .addTo(map)
    // .bindPopup(popup)
    // .openPopup();


// FUNCTION IMAGE GALLERY
function selectImage (event){
  // pecorrer todos os botões
  const button = event.currentTarget

  // remover as classes .active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach((button) => {
    button.classList.remove("active")
  });

  // selecionar a imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")
  // atualizar o container de imagem
  imageContainer.src = image.src
  // adicionar a classe .active para este botão
  button.classList.add("active")

}
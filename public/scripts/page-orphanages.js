// VARIAVEL CRIAR O MAPA
const map = L.map('mapid').setView([-8.0549771,-34.9091087], 15);

// INSERINDO O MAPA
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// CRIAR ICONE POPUP
const icon = L.icon({
  iconUrl:"./public/images/map-marker.svg",
  iconSize: [58,68],
  iconAnchor: [29,68],
  popupAnchor: [170,2]
})

// CREATE POPUP OVERLAY
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240
}).setContent('Lar do Nenen <a href="orphanage.html?id=1 class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>')


// ADICIONANDO POPUP
L.marker([-8.0549771,-34.9091087], {icon})
    .addTo(map)
    .bindPopup(popup)
    // .openPopup();
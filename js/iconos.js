/* ICONOS */
var iconoComun = L.Icon.extend({
    options: {
        shadowUrl: 'img/marker-shadow.png',
        iconSize:     [25, 41],
        shadowSize:   [41, 41],
        iconAnchor:   [12, 41],
        popupAnchor:  [1, -34]
    }
});

var iconoVerde = new iconoComun({iconUrl: 'img/marker-icon-2x-green.png'}),
    iconoRojo = new iconoComun({iconUrl: 'img/marker-icon-2x-red.png'}),
    iconoNegro = new iconoComun({iconUrl: 'img/marker-icon-2x-black.png'}),
    iconoAzul = new iconoComun({iconUrl: 'img/marker-icon-2x-blue.png'}),
    iconoDorado = new iconoComun({iconUrl: 'img/marker-icon-2x-gold.png'}),
    iconoNaranja= new iconoComun({iconUrl: 'img/marker-icon-2x-orange.png'}),
    iconoGris = new iconoComun({iconUrl: 'img/marker-icon-2x-grey.png'}),
    iconoVioleta = new iconoComun({iconUrl: 'img/marker-icon-2x-violet.png'}),
    iconoAmarillo = new iconoComun({iconUrl: 'img/marker-icon-2x-yellow.png'}),
    iconoSTV = new iconoComun({ iconUrl: 'img/pegman_3.png' });


function crearIconoSTV(feature, latlng) {
    return L.marker(latlng, {icon: iconoSTV })
}
var asignarIconoUnivec = {
        pointToLayer: crearIconoSTV
}    

function crearIconoVerde (feature, latlng) {
    return L.marker(latlng, { icon: iconoVerde })
}

    var asignarIconoVerde = {
  pointToLayer: crearIconoVerde
}

function crearIconoRojo (feature, latlng) {
    return L.marker(latlng, { icon: iconoRojo })
}

var asignarIconoRojo = {
  pointToLayer: crearIconoRojo
}

    function crearIconoNegro (feature, latlng) {
    return L.marker(latlng, { icon: iconoNegro })
}
var asignarIconoNegro = {
  pointToLayer: crearIconoNegro
}

    function crearIconoAzul (feature, latlng) {
    return L.marker(latlng, { icon: iconoAzul })
}
var asignarIconoAzul= {
  pointToLayer: crearIconoAzul
}

    function crearIconoDorado (feature, latlng) {
    return L.marker(latlng, { icon: iconoDorado })
}
var asignarIconoDorado = {
  pointToLayer: crearIconoDorado
}

    function crearIconoNaranja (feature, latlng) {
    return L.marker(latlng, { icon: iconoNaranja})
}
var asignarIconoNaranja = {
  pointToLayer: crearIconoNaranja
}

    function crearIconoGris (feature, latlng) {
    return L.marker(latlng, { icon: iconoGris  })
}
var asignarIconoGris  = {
  pointToLayer: crearIconoGris 
}

    function crearIconoVioleta (feature, latlng) {
    return L.marker(latlng, { icon: iconoVioleta })
}
var asignarIconoVioleta = {
  pointToLayer: crearIconoVioleta
}

    function crearIconoAmarillo (feature, latlng) {
    return L.marker(latlng, { icon: iconoAmarillo })
}
var asignarIconoAmarillo = {
  pointToLayer: crearIconoAmarillo
}
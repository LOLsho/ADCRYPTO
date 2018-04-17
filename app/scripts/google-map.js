import { styles } from './map-style'
// import { google } from 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAm2yqV04hc0wgj2YbMtJagZemmtEvADzY&callback=initMap'

const placeId = 'office'

const places = {
  office: {
    center: {
      lat: 55.7826688,
      lng: 37.7178341
    },
    marker: {
      lat: 55.7826688,
      lng: 37.7178341,
      icon: '/assets/images/logos/map-marker-gray.svg'
    },
    zoom: 17,
    style: styles
  }
}

const place = places[placeId]
// console.log(place)

function initMap () {
  let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  })
  console.log('MAP - ', map)
}

// console.log(initMap)

let element = document.querySelector('#googleSrc');
element.innerHTML = '<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAm2yqV04hc0wgj2YbMtJagZemmtEvADzY&callback=initMap"></script>';

// office: {
//   center: {
//     lat: 55.7826688,
//       lng: 37.7178341
//   },
//   marker: {
//     lat: 55.7826688,
//       lng: 37.7178341,
//       icon: '/assets/images/logos/map-marker-gray.svg'
//   },
//   zoom: 17,
//     style: styles
// }

import { styles } from './map-style';
import * as marker from '../images/svg/map-marker-gray.svg';

export class MyMap {
  constructor(){
    this['element'] = document.getElementById('map');
    console.log(this.element);
    this['styles'] = styles;
    this['place'] = {
      center: {
        lat: 55.7826688,
        lng: 37.7178341
      },
      marker: {
        lat: 55.7826688,
        lng: 37.7178341,
        icon: marker
      },
      zoom: 17,
      styles: styles
    };
    this.initMap();

  }

  initMap() {
    this['map'] = new google.maps.Map(this.element,{
      zoom: this.place.zoom,
      center: new google.maps.LatLng(this.place.center.lat, this.place.center.lng),
      scrollwheel: false,
      panControl: false,
      mapTypeControl: false,
      zoomControl: true,
      streetViewControl: false,
      scaleControl: true,
      styles: this.place.styles,
      zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_TOP
      }
    }
    );

    this['marker_instance'] = new google.maps.Marker({
      position: new google.maps.LatLng (this.place.marker.lat, this.place.marker.lng),
      map: this.map,
      icon: {
        url: this.place.marker.icon
      }
    });

    console.log(this.marker_instance);
  }


}


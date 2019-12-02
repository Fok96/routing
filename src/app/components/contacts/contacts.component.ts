import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public  mapStyle:any = "[]";

  public center = {
    lat: 38.4318639,
    lng: 24.2517075
  }
  public mapZoom: number = 6;
  public departments = [

    {
      title: "Iek Delta thes ",
      coordinates: {
        lat: 40.6355369,
        lng: 22.9396068
      }
    },
    {

      title: "Iek Delta iwanninwn ",
      coordinates: {
        lat: 39.6674711,
        lng: 20.8524265
      }
    },


    {
      title: "Iek Delta Patras ",
      coordinates: {
        lat: 38.249665,
        lng: 21.7338435
      }
    }
  ];

  
  constructor() { }

  public makeItLost(){
    this.mapStyle =[
      {
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              },
              {
                  "color": "#f49f53"
              }
          ]
      },
      {
          "featureType": "landscape",
          "stylers": [
              {
                  "color": "#f9ddc5"
              },
              {
                  "lightness": -7
              }
          ]
      },
      {
          "featureType": "road",
          "stylers": [
              {
                  "color": "#813033"
              },
              {
                  "lightness": 43
              }
          ]
      },
      {
          "featureType": "poi.business",
          "stylers": [
              {
                  "color": "#645c20"
              },
              {
                  "lightness": 38
              }
          ]
      },
      {
          "featureType": "water",
          "stylers": [
              {
                  "color": "#1994bf"
              },
              {
                  "saturation": -69
              },
              {
                  "gamma": 0.99
              },
              {
                  "lightness": 43
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#f19f53"
              },
              {
                  "weight": 1.3
              },
              {
                  "visibility": "on"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "poi.business"
      },
      {
          "featureType": "poi.park",
          "stylers": [
              {
                  "color": "#645c20"
              },
              {
                  "lightness": 39
              }
          ]
      },
      {
          "featureType": "poi.school",
          "stylers": [
              {
                  "color": "#a95521"
              },
              {
                  "lightness": 35
              }
          ]
      },
      {},
      {
          "featureType": "poi.medical",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#813033"
              },
              {
                  "lightness": 38
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {
          "elementType": "labels"
      },
      {
          "featureType": "poi.sports_complex",
          "stylers": [
              {
                  "color": "#9e5916"
              },
              {
                  "lightness": 32
              }
          ]
      },
      {},
      {
          "featureType": "poi.government",
          "stylers": [
              {
                  "color": "#9e5916"
              },
              {
                  "lightness": 46
              }
          ]
      },
      {
          "featureType": "transit.station",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit.line",
          "stylers": [
              {
                  "color": "#813033"
              },
              {
                  "lightness": 22
              }
          ]
      },
      {
          "featureType": "transit",
          "stylers": [
              {
                  "lightness": 38
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#f19f53"
              },
              {
                  "lightness": -10
              }
          ]
      },
      {},
      {},
      {}
  ]}

public makeItAssasin(){
    this.mapStyle=[
      {
          "featureType": "all",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              },
              {
                  "saturation": "-100"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "saturation": 36
              },
              {
                  "color": "#000000"
              },
              {
                  "lightness": 40
              },
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "off"
              },
              {
                  "color": "#000000"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 17
              },
              {
                  "weight": 1.2
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#4d6059"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#4d6059"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#4d6059"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "lightness": 21
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#4d6059"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#4d6059"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#7f8d89"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#7f8d89"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#7f8d89"
              },
              {
                  "lightness": 17
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#7f8d89"
              },
              {
                  "lightness": 29
              },
              {
                  "weight": 0.2
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 18
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#7f8d89"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#7f8d89"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#7f8d89"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#7f8d89"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 19
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#2b3638"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#2b3638"
              },
              {
                  "lightness": 17
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#24282b"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#24282b"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      }
  ]}
  

  ngOnInit() {
  }

}

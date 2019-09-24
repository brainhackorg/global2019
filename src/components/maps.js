import React, { Component } from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'
 
const places = [
    ['Brainhack NYC',
    'http://events.brainhack.org/global2017/locations.html#NYC',
    [-73.9706305,40.7611302]],
    
    ['Brainhack Ann Arbor ',
    'http://events.brainhack.org/global2017/locations#annarbor',
    [-83.7371794,42.2783714]],
    
    ['Brainhack Birmingham',
    'http://events.brainhack.org/global2017/locations#birmingham',
    [-86.80474,33.5059629]],
    
    ['Brainhack Bloomington',
    'http://events.brainhack.org/global2017/locations#bloomington',
    [-86.5142548,39.1703786]],
    
    ['Brainhack Boston',
    'http://events.brainhack.org/global2017/locations#boston',
    [-71.09416,42.360091]],
    
    ['Brainhack Hanover',
    'http://events.brainhack.org/global2017/locations#hanover',
    [-72.2886934,43.7044406]],
    
    ['Brainhack Montreal',
    'http://events.brainhack.org/global2017/locations#montreal',
    [-73.6137592,45.5056156]],
    
    ['Brainhack Albuquerque',
    'http://events.brainhack.org/global2017/locations#albuquerque',
    [-106.6197812,35.0843187]],
    
    ['Brainhack San Francisco',
    'http://events.brainhack.org/global2017/locations#sanfrancisco',
    [-122.4576067,37.7631667]],
    
    ['Brainhack Seattle',
    'http://events.brainhack.org/global2017/locations#seattle',
    [-122.3035199,47.6553351]],
    
    ['Brainhack Toronto',
    'https://events.brainhack.org/global2017/locations#toronto',
    [-79.3956564,43.6628917]],
    
    ['Brainhack Salt Lake City',
    'http://events.brainhack.org/global2017/locations#saltlakecity',
    [-111.8421021,40.7649368]],
    
    ['Brainhack DC',
    'http://events.brainhack.org/global2017/locations#dc',
    [-77.0368707,38.9071923]],
    
    ['Brainhack Madison',
    'http://events.brainhack.org/global2017/locations#madison',
    [-89.4124875,43.076592]],
    
    ['Brainhack St. Louis',
    'http://events.brainhack.org/global2017/locations#stlouis',
    [-90.1994042,38.6270025]],
    
    ['Brainhack Eugene',
    'http://events.brainhack.org/global2017/locations#eugene',
    [-123.079933,44.040095]],
    
    ['Brainhack Queretaro',
    'http://events.brainhack.org/global2017/locations#queretaro',
    [-100.4455411,20.7004533]],
    
    ['Brainhack Miami',
    'http://events.brainhack.org/global2017/locations#miami',
    [-80.3739487,25.7565756]],
    
    ['Brainhack Durham',
    'http://events.brainhack.org/global2017/locations#durham',
    [-78.9382286,36.0014258]],
    
    ['Brainhack Iowa City',
    'http://events.brainhack.org/global2017/locations#iowacity',
    [-91.5548998,41.6626963]],
    
    ['Brainhack Urbana',
    'https://events.brainhack.org/global2017/locations#urbana',
    [-88.2275024,40.115768]],
    
    ['Brainhack London',
    'http://events.brainhack.org/global2017/locations#albuquerque',
    [-81.2737336,43.0095971]],
    
    ['Brainhack Beijing',
    'http://events.brainhack.org/global2017/locations.html#beijing',
    [116.407395,39.904211]],
    
    ['Brainhack Singapore',
    'http://events.brainhack.org/global2017/locations#singapore',
    [103.7763939,1.2966426]],
    
    ['Brainhack Wako',
    'http://events.brainhack.org/global2017/locations#Wako',
    [139.6128256,35.7790283]],
    
    ['Brainhack Cambridge',
    'http://events.brainhack.org/global2017/locations.html#cambridge',
    [0.11778819999995,52.2016671]],
    
    ['Brainhack Leipzig',
    'http://events.brainhack.org/global2017/locations.html#leipzig',
    [12.3730747,51.3396955]],
    
    ['Brainhack Stockholm',
    'http://events.brainhack.org/global2017/locations#stockholm',
    [18.0685808000001,59.3293235]],
    
    ['Brainhack Paris',
    'http://events.brainhack.org/global2017/locations.html#paris',
    [2.35222190000002,48.856614]],
    
    ['Brainhack Warwick',
    'http://events.brainhack.org/global2017/locations#warwick',
    [-1.56147039999996,52.3792525]],
    
    ['Brainhack Bilbao',
    'http://events.brainhack.org/global2017/locations#bilboa',
    [-2.93498520000003,43.2630126]],
    
    ['Brainhack Zurich',
    'http://events.brainhack.org/global2017/locations#zurich',
    [8.5487875,47.4132133]],
    
    ['Brainhack York',
    'http://events.brainhack.org/global2017/locations#york',
    [-1.04804369999999,53.9497927]],
    
    ['Brainhack Munich',
    'http://events.brainhack.org/global2017/locations#munich',
    [11.582443,48.150942]],
    
    ['Brainhack Amsterdam',
    'http://events.brainhack.org/global2017/locations.html#amsterdam',
    [4.95704799999999,52.292364]],
    ['Brainhack Porto Alegre',
    'http://events.brainhack.org/global2017/locations.html#porto-alegre',
    [-51.1729978,-30.0592964]],
    
    ['Brainhack Valparaíso',
    'http://events.brainhacorg/global2017/locations#Valparaíso',
    [-71.6173783,-33.0440351]]
    ]
    
const silver = [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ]


class MapContainer extends Component {

  state = {
    center: null,
  }

  fetchPlaces = (mapProps, map) => {
    const { google } = mapProps

    var styledMapType = new google.maps.StyledMapType(silver)

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    const bounds = new google.maps.LatLngBounds();

    for (let p of places) {
        let loc = new google.maps.LatLng(p[2][1], p[2][0]);
        bounds.extend(loc)
    }
    
    map.fitBounds(bounds)
    map.panToBounds(bounds)

    const infos = []

    places.map((p) => {
      var info = new google.maps.InfoWindow({
        content: `<a href="${p[1]}">${p[0]}</a>`
      })

      infos.push(info)

      let marker = new google.maps.Marker({
        position: {
          lat: p[2][1],
          lng: p[2][0],
        },
        map: map,
        icon: {
          url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAADOElEQVRIie3W208UZxzG8e/MLAwwwuIucnJZbUHTpCWkSWNIbKKmNx5iRKy09h+wKa3eypVt7OGiMZ6p8d54IMV46YWn6IXHeEisIgJZWSjuAgu7KyyzO/P2ApagzA4z1KRJ45NMJjP5zfuZ95153xn4jyJZnRRC2F2zHvgU+GDmuA94AFzLiUjzGY+z+5vNl8B2oGFC1wMARfn5YeAh4Af+dNqQ0x6vA448Cr9suNXTQ2h0mERqCoDiApUVvjIaa2tpCAQfAXuB628gFj12ArfGU5PH269e5uaLbjKGgaaq5HumB0vPZHg9NUWeorC2bhWtG76guKDwO+CPfwO3hGOj5/Zf7CQ0OkLQ58ejKPNGRJIk0oZB/+gIK/1l/Nq8k/Likm+AM4uBq17rU4N7z55mMBYj6PdjmKZV+WwUWSY0MkxteQUHd36N6skLAv1WsGzTzqGOe3fojUaocYACGKZJ0OfnyUCYjvt3AQ7nqs0FV8RTk19d7+qissSL6QDNxhSCKm8pV57+RTKVagYq3cCbHof7iSbjaKrqGM1GU1UiiTiPB/oBNrqB6wdiMUz7hcQ2phAMxGIAn7iBvalMGhbvgoAJXQcodQNPqB5PjnfeYSSyc33CDdxd7V2KbDENnLsS1aWlAF1u4Ev1gQA+bQmTad01OplO49M06pfXAFxyAz9fWqTd/rxuNYNjYyiy3XR/M4osMzQ+xtq6Vfg07Qbwwg0MsGfXmkZW+Msc44os8yo+TmWJl11rGgH25Kq1a+1OcUHBz/u3NlGYl8er+LgtrsgyI8kkhmnStnkr3sKiH5n+XFrGydfpZG80srutswPdyFBR4p23fGbRtGHw07ZmGgI1p4Dds4jLtTqbbz9cVt7+W3ML+R4PQ2/1XJFloskEGdPgwDR6ci6aK25+fY71DUe/39d5Hj0z3XOAaCKBEIIDTTv4uHp5O9A6D1nkj8DcHO2NRn9ou9CBYRpIkoRpCn5p2sFHVdWWaC7YMkIIu+1YTyQithw9KDYe/l08G/pbCCFO2F3jOAvACCGOP3wZEvdDfUII0b5QveUo5IId5MLMfvtChe/iGc/NZzP7e4uB3+f/n38A7DidRvt58mcAAAAASUVORK5CYII=',
          size: new google.maps.Size(30, 30),
        },
      })

      marker.addListener('click', function() {
        infos.map((inf) => inf.close())
        info.open(map, marker)
      })
    })
  }

  render() {
    return (
      <Map style={{
      }} containerStyle={{
        width: '100%',
        height: '400px',
        position: 'relative',
      }} google={this.props.google} zoom={3} mapTypeControl={false} streetViewControl={false} onReady={this.fetchPlaces}>
      </Map>
    )
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDHfXzTVc_WHtzH9ljHRj7OdebFy5LR0Ho'
})(MapContainer)
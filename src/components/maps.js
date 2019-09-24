import React, { Component } from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'
import { StaticQuery, graphql } from 'gatsby'

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

  fetchPlaces = (places) => (mapProps, map) => {
    const { google } = mapProps

    var styledMapType = new google.maps.StyledMapType(silver)

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    const bounds = new google.maps.LatLngBounds();

    for (let p of places) {
        let loc = new google.maps.LatLng(p.frontmatter.position.lat, p.frontmatter.position.lng);
        bounds.extend(loc)
    }
    
    map.fitBounds(bounds)
    map.panToBounds(bounds)

    const infos = []

    places.map((p) => {
      var info = new google.maps.InfoWindow({
        content: `<a href="/global2019/locations#location-${p.id}">${p.frontmatter.title}</a>`
      })

      infos.push(info)

      let marker = new google.maps.Marker({
        position: {
          lat: p.frontmatter.position.lat,
          lng: p.frontmatter.position.lng,
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

      return p
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/sites/"}}) {
              edges {
                node {
                  id
                  fileAbsolutePath
                  frontmatter {
                    title
                    organizers
                    address
                    website
                    dates
                    position {
                      lat
                      lng
                    }
                  }
                }
              }
            }
          }
        `}
        render={ ({ allMarkdownRemark: { edges } }) => (
          <Map 
            containerStyle={{
              width: '100%',
              height: '400px',
              position: 'relative',
            }}
            google={this.props.google}
            zoom={3}
            mapTypeControl={false}
            streetViewControl={false}
            onReady={this.fetchPlaces(edges.map(e => e.node))}
          />
      )} />
    )
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDHfXzTVc_WHtzH9ljHRj7OdebFy5LR0Ho'
})(MapContainer)
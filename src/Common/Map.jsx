import mapboxgl from "mapbox-gl";
import React from 'react';

mapboxgl.accessToken =
  "pk.eyJ1IjoiY3BzYSIsImEiOiJjazFxNGphdGMweWg5M21rNnp1eGtsdWFxIn0.E-t71uFWh4N2kwdwaYbcCw";

class Map extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [11.3017053, 44.7367734],
      zoom: 14
    })


      const markerElement = document.createElement('div')
      markerElement.className = "marker"
      return new mapboxgl.Marker(markerElement)
        .setLngLat([11.3017053, 44.7367734])
        .addTo(this.map)

  }

  render() {
    return (
      <div>
        <div className='map' ref={mapDiv => this.mapDiv = mapDiv}></div>
      </div>
    )
  }
}

export default Map
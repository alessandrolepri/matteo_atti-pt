import mapboxgl from "mapbox-gl";
import React from 'react';

mapboxgl.accessToken = process.env.MAPBOX_GL;

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
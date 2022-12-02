import React, { useRef, useEffect, useState } from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "./Map.css";

mapboxgl.accessToken = 'pk.eyJ1IjoieWF5bmVyIiwiYSI6ImNsYjY5YXp6ZzAycWwzc3BranZtNzJjMjkifQ.3Gqov8CRvDTXwaGDkiSFOQ';

const Map = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const { center } = props;
  const [lng, setLng] = useState(center.lng);
  const [lat, setLat] = useState(center.lat);
  const [zoom, setZoom] = useState(props.zoom);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [lng, lat],
    zoom: zoom
    });
    });


  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  return (
    <>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div
        ref={mapContainer}
        className={`map ${props.className}`}
        style={props.style}
        id="map"
      >
        
      </div>
    </>
  );
};

export default Map;

import React, { useRef, useEffect, useState } from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
import "./Map.css";

const Map = (props) => {
  const { center } = props;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(center.lng);
  const [lat, setLat] = useState(center.lat);
  const [zoom, setZoom] = useState(props.zoom);

  mapboxgl.accessToken =
    "pk.eyJ1IjoieWF5bmVyIiwiYSI6ImNsYjY5YXp6ZzAycWwzc3BranZtNzJjMjkifQ.3Gqov8CRvDTXwaGDkiSFOQ";
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: center,
      zoom: zoom,
    });
  }, [center, zoom]);

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
      ></div>
    </>
  );
};

export default Map;

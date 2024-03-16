import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  // MARKERS
  const markers = [
    {
      geocode: [51.55, -0.09],
      popUp: "Pop up for marker 1",
    },
    {
      geocode: [51.5, -0.1],
      popUp: "Pop up for marker 2",
    },
    {
      geocode: [51.49, -0.08],
      popUp: "Pop up for marker 3",
    },
  ];

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "400px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* MARKERS */}
      {markers.map((marker) => (
        <Marker position={marker.geocode}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;

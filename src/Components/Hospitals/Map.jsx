import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import userIcon from "../../images/u-location.png";
import hospitalIcon from "../../images/h-location.png";

const mapContainerStyle = {
  minHeight: "100vh",
  height: "100%",
  width: "100%",
};

export default function Map({ hospitals, center }) {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBwj3AABMp5Sw9qpkfR1ByoBdrF1djZzFQ">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} icon={userIcon} />
        {hospitals && hospitals.length
          ? hospitals.map((hospital) => (
              <Marker
                key={hospital._id}
                position={{
                  lat: hospital.location.coordinates[1],
                  lng: hospital.location.coordinates[0],
                }}
                icon={hospitalIcon}
              />
            ))
          : ""}
      </GoogleMap>
    </LoadScript>
  );
}

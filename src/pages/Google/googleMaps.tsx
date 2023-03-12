import React from "react";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import "./GoogleMaps.css";




const GoogleMaps = () => {
    const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBQBz5N_CtUNoxv4PeE5rHVfdYM4jl5F5M"
    })

    const containerStyle = {
    width: '100%',
    height: '50%'
    };

    const center = {
    lat: -6.1684,
    lng: -38.4902
    };

  return (
    <div className="map">
        { isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        
      >
       <Marker position={center} /> 
    
      </GoogleMap>
  ) : <></>}
    </div>
  )
}

export default GoogleMaps;

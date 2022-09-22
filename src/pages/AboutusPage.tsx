import React, { useRef, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  Autocomplete,
 
} from "@react-google-maps/api";
import Layout from "../Layout/Layout";

type Position = {
  lat: number;
  lng: number;
}


const center = { lat: 21.215284608632743, lng: 72.85702453927374 };
const libraries: ("places" | "drawing" | "geometry" | "localContext" | "visualization")[] = ['places'];

function AboutusPage() {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [position, setPosition] = useState<Position>(center);
  
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA8yt4N3hU5FZOiZ2LrG6jqZK-fBPCsn50",
    libraries,
  });

  const locationInputRef = useRef<HTMLInputElement>(null);

  const addMarker = async() => {
    console.log(locationInputRef.current?.value);
    // eslint-disable-next-line no-undef
    const geocoder = new google.maps.Geocoder();
    const result = await geocoder.geocode({
      address: locationInputRef.current?.value
    });
    console.log(result.results[0].geometry.location.lat(), result.results[0].geometry.location.lng());
    setPosition({
      lat:result.results[0].geometry.location.lat(),
      lng:result.results[0].geometry.location.lng()
    });
    map?.panTo({
      lat:result.results[0].geometry.location.lat(),
      lng:result.results[0].geometry.location.lng()
    })
    
  };

  if (!isLoaded) {
    return (
      <Layout>
        <p>Loading......</p>
      </Layout>
    );
  }

  const locationHandler = (e: any) => {
    console.log("Lat:", e.latLng.lat(), "Lng:", e.latLng.lng());
    setPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  return (
    <Layout>
      <GoogleMap
        onClick={locationHandler}
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "1000px", height: "600px", margin: "2%" }}
        onLoad={(map) => setMap(map)}
      >
        <MarkerF position={position} />
        
      </GoogleMap>
      <label>Location To Add Marker</label>
      <Autocomplete onPlaceChanged={addMarker}>
        <input type="text" ref={locationInputRef}></input>
      </Autocomplete>
    </Layout>
  );
}

export default AboutusPage;

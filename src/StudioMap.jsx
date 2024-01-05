import React from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import MAPTILER_API_KEY from "../config";
import { useState, useEffect } from "react";
import axios from "axios";

const maptilerProvider = maptiler(MAPTILER_API_KEY, "dataviz");

export function StudioMap() {
  //Center coordinates based off user's location provided at login
  const [center, setCenter] = useState([]);

  //Renders yoga studios near user's given location
  const [yogaStudios, setYogaStudios] = useState([]);

  // CALLS GOOGLE API RESPONSE FROM BACK END
  const handleIndexYoga = () => {
    axios.get("http://localhost:3000/yoga.json").then((response) => {
      const studios = response.data.map((studio) => ({
        lat: studio.geometry.location.lat,
        lng: studio.geometry.location.lng,
        name: studio.name,
        address: studio.formatted_address,
        id: studio.place_id, // re-format place ID into web url
      }));

      setYogaStudios(studios);
      setCenter([studios[0].lat, studios[0].lng]);
    });
  };
  //CALLS FUNCTION
  useEffect(handleIndexYoga, []);

  return (
    // DEFAULT MAP MARKER LOCATION POSITION

    <div>
      {/* /* ensures the center info loads BEOFRE the content   */}
      {center.length > 0 ? (
        <Map provider={maptilerProvider} dprs={[1, 2]} height={600} defaultCenter={center} defaultZoom={13}>
          {yogaStudios.map((studio, index) => (
            // MARKERS FOR STUDIOS ON MAP HERE
            <Marker
              key={index}
              anchor={[studio.lat, studio.lng]}
              color="orange"
              payload={index}
              onClick={({ event, anchor, payload }) => {
                console.log(`Clicked marker for ${yogaStudios[payload].name}`);
              }}
            />
          ))}
          <ZoomControl />
        </Map>
      ) : (
        <> </>
      )}
    </div>
  );
}

import React from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import MAPTILER_API_KEY from "../config";
import { useState, useEffect } from "react";
import axios from "axios";

const maptilerProvider = maptiler(MAPTILER_API_KEY, "dataviz");

export function StudioMap() {
  const [studioInfo, setStudioInfo] = useState([]);
  const [center, setCenter] = useState([]);

  // CALLS GOOGLE API RESPONSE FROM BACK END
  const handleIndexYoga = () => {
    console.log("handleIndexYoga");
    axios.get("http://localhost:3000/yoga.json").then((response) => {
      console.log([response.data[0].geometry.location.lat, response.data[0].geometry.location.lng]);
      setStudioInfo(response.data);
      setCenter([response.data[0].geometry.location.lat, response.data[0].geometry.location.lng]);
    });
  };

  //CALLS FUNCTION
  useEffect(handleIndexYoga, []);

  return (
    // DEFAULT MAP MARKER LOCATION POSITION
    <div>
      {/* ensures the center info loads BEOFRE the content  */}
      {center.length > 0 ? (
        <Map provider={maptilerProvider} dprs={[1, 2]} height={600} defaultCenter={center} defaultZoom={13}>
          <Marker anchor={center} />
          <ZoomControl />

          {/* MARKERS FOR STUDIOS ON MAP HERE */}
          <Marker
            anchor={center}
            color="orange"
            payload={1}
            onClick={({ event, anchor, payload }) => {
              console.log("Clicked marker nr: ", payload);
            }}
          />
        </Map>
      ) : (
        <> </>
      )}
    </div>
  );
}

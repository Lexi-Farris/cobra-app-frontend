import React from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import MAPTILER_API_KEY from "../config";

const maptilerProvider = maptiler(MAPTILER_API_KEY, "dataviz");

export function StudioMap() {
  return (
    // DEFAULT MAP MARKER LOCATION POSITION
    <Map provider={maptilerProvider} dprs={[1, 2]} height={600} defaultCenter={[30.266666, -97.73333]} defaultZoom={13}>
      <Marker width={50} anchor={[30.266666, -97.73333]} />
      <ZoomControl />

      {/* MARKERS FOR STUDIOS ON MAP HERE */}
      <Marker
        anchor={[30.275969, -97.793083]}
        color="orange"
        payload={1}
        onClick={({ event, anchor, payload }) => {
          console.log("Clicked marker nr: ", payload);
        }}
      />
    </Map>
  );
}

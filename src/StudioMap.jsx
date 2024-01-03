import React from "react";
import { Map, Marker } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";

const maptilerProvider = maptiler("MY_API_KEY", "streets");

export function StudioMap() {
  return (
    <Map provider={maptilerProvider} dprs={[1, 2]} height={600} defaultCenter={[30.266666, -97.73333]} defaultZoom={15}>
      <Marker width={50} anchor={[30.266666, -97.73333]} />
    </Map>
  );
}

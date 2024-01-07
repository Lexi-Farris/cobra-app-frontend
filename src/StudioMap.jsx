import React, { useState, useEffect } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import axios from "axios";
import { Modal } from "./Modal";
import MAPTILER_API_KEY from "../config";

const maptilerProvider = maptiler(MAPTILER_API_KEY, "dataviz");

export function StudioMap() {
  const [popUpVisable, setpopUpVisible] = useState(false);
  const [popUpContent, setPopUpContent] = useState({});
  //Center coordinates based off user's location provided at login
  const [center, setCenter] = useState([]);

  //Renders yoga studios near user's given location
  const [yogaStudios, setYogaStudios] = useState([]);

  //CALLS FUNCTION
  useEffect(() => {
    // CALLS GOOGLE API RESPONSE FROM BACK END
    const handleIndexYoga = async () => {
      try {
        const response = await axios.get("http://localhost:3000/yoga.json");
        const studios = response.data.map((studio) => {
          return {
            lat: studio.geometry.location.lat,
            lng: studio.geometry.location.lng,
            name: studio.name,
            address: studio.formatted_address,
            website: studio.url,
            id: studio.place_id, // re-format place ID into web url
          };
        });
        setYogaStudios(studios);
        setCenter([studios[0].lat, studios[0].lng]);
      } catch (error) {
        console.error("Error fetching yoga studios:", error);
      }
    };

    handleIndexYoga();
  }, []);

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
              name={studio.name}
              payload={index}
              onClick={() => {
                setpopUpVisible(true);
                setPopUpContent({ name: studio.name, address: studio.address, url: studio.url });
              }}
            />
          ))}
          <Modal show={popUpVisable} onClose={() => setpopUpVisible(false)}>
            <div>
              <p> {popUpContent.name}</p>
              <p> {popUpContent.address} </p>
              <p> {popUpContent.url} </p>
            </div>
          </Modal>
          <ZoomControl />
        </Map>
      ) : (
        <> </>
      )}
    </div>
  );
}

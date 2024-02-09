import React, { useState, useEffect } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import axios from "axios";
import { Modal } from "./Modal";
import MAPTILER_API_KEY from "../config";

const maptilerProvider = maptiler(MAPTILER_API_KEY, "dataviz");

export function StudioMap() {
  const [popUpVisible, setpopUpVisible] = useState(false);
  const [popUpContent, setPopUpContent] = useState({});
  //Center coordinates based off user's location provided at login
  const [center, setCenter] = useState([]);
  const [savedStudios, setSavedStudios] = useState([]);
  const [user, setUser] = useState({});

  //Renders yoga studios near user's given location
  const [yogaStudios, setYogaStudios] = useState([]);

  //Save studio
  const handleSaveStudio = (studio) => {
    axios
      .post(`https://cobra-pose-app.onrender.com/saved.json`, {
        studio: {
          studio_id: studio.id,
          name: studio.name,
          address: studio.address,
          website: studio.website,
        },
      })
      .then((response) => {
        setSavedStudios([...savedStudios, studio]);
      })
      .catch((error) => {
        console.error("Error saving studio:", error);
      });
  };

  // Removed saved studio
  const handleRemoveStudio = (studioId) => {
    axios
      .delete(`https://cobra-pose-app.onrender.com//api/v1/saved/${studioId}`)
      .then(() => {
        const updatedStudios = savedStudios.filter((studio) => studio.id !== studioId);
        setSavedStudios(updatedStudios);
      })
      .catch((error) => {
        console.error("Error removing studio:", error);
      });
  };

  //CALLS FUNCTION
  useEffect(() => {
    // CALLS GOOGLE API RESPONSE FROM BACK END
    const handleIndexYoga = () => {
      axios
        .get("https://cobra-pose-app.onrender.com//yoga.json")
        .then((response) => {
          console.log(response);
          const studios = response.data.map((studio) => ({
            lat: studio.geometry.location.lat,
            lng: studio.geometry.location.lng,
            name: studio.name,
            address: studio.formatted_address,
            id: studio.place_id,
            website: `https://www.google.com/maps/place/?q=place_id:${studio.place_id}`,
          }));
          setYogaStudios(studios);
          setCenter([studios[0].lat, studios[0].lng]);
        })
        .catch((error) => {
          console.error("Error fetching yoga studios:", error);
        });
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
                setPopUpContent({ name: studio.name, address: studio.address, website: studio.website });
              }}
            />
          ))}
          <Modal show={popUpVisible} onClose={() => setpopUpVisible(false)}>
            <div>
              <button style={{ color: "orange" }} onClick={() => handleSaveStudio(popUpContent)}>
                {" "}
                &#x2764; Save Studio{" "}
              </button>
              <br></br>
              <p style={{ fontWeight: "bold" }}> {popUpContent.name}</p>
              <p> {popUpContent.address} </p>
              <p style={{ color: "blue" }}>
                <a href={popUpContent.website} target="_blank" rel="noopener noreferrer">
                  Website
                </a>
              </p>
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

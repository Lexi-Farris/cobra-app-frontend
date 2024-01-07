import React, { useEffect, useState } from "react";
import axios from "axios";

const SavedStudiosPage = ({ onRemoveStudio }) => {
  const [savedStudios, setSavedStudios] = useState([]);

  useEffect(() => {
    const fetchSavedStudios = async () => {
      try {
        const response = await axios.get("http://localhost:3000/saved");
        setSavedStudios(response.data);
      } catch (error) {
        console.error("Error fetching saved studios:", error);
      }
    };

    fetchSavedStudios();
  }, []);


export function SavedStudios(props) {
  return (
    <div>
      <h2>Saved Studios</h2>
      {props.savedStudios.map((studio) => (
        <div key={studio.id}>
          <p>{studio.name}</p>
          <button onClick={() => props.onRemoveSavedStudio(studio.id)}>Remove from Saved</button>
        </div>
      ))}
    </div>
  );
}

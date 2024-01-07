import React from "react";

const SavedStudiosPage = ({ savedStudios, onRemovesavedStudio }) => (
  <div>
    <h2>Saved Studios</h2>
    {savedStudios.map((studio) => (
      <div key={studio.id}>
        <p>{studio.name}</p>
        <button onClick={() => onRemovesavedStudio(studio.id)}>Remove from Saved</button>
      </div>
    ))}
  </div>
);

export default SavedStudiosPage;

export function SavedStudios(props) {
  console.log(props);
  return (
    <div className="relative overflow-hidden bg-cover bg-no-repeat  opacity-40 ">
      <h2 style={{ fontWeight: "bold" }}>Saved Studios</h2>
      <img
        src="https://images.squarespace-cdn.com/content/v1/5f3b180bebcf7a5e8e8685a9/1b927512-184d-4759-a730-0d2b0e696d1a/Victoria+Web-29.jpg"
        alt="Studio Image"
        style={{ maxWidth: "100%", height: "auto" }}
      />

      {props.savedStudios.map((studio) => (
        <div key={studio.id}>
          <p>{studio.name}</p>
          <button onClick={() => props.onRemoveSavedStudio(studio.id)}>Remove from Saved</button>
        </div>
      ))}
    </div>
  );
}

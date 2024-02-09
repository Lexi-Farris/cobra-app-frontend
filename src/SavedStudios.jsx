export function SavedStudios(props) {
  console.log(props);
  return (
    <div>
      <h1 className="text-3xl p-3 z-3" style={{ fontWeight: "bold" }}>
        Saved Studios
      </h1>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat bg-blue-500 opacity-25 z-1 "
        style={{
          backgroundPosition: "100%",
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/5f3b180bebcf7a5e8e8685a9/1b927512-184d-4759-a730-0d2b0e696d1a/Victoria+Web-29.jpg')",
          height: "900px",
        }}
      >
        {props.savedStudios.map((studio) => (
          <div z-10 key={studio.id}>
            <p>{studio.name}</p>
            <p>{studio.address} </p>
            <button onClick={() => props.onRemoveSavedStudio(studio.id)}>Remove from Saved</button>
          </div>
        ))}
      </div>
    </div>
  );
}

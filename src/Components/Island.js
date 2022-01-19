import React from "react";

export default function Island({ island, setIsland, counters }) {
  return (
    <div className="Island" onClick={() => setIsland(island)}>
      <h3>{island.name}</h3>
      {/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
      <p>Visitors {counters[island.id]}</p>
      <p>Visitors 0</p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}

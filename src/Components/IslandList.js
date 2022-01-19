import { useState } from "react";
import islands from "../data/islands";
import Island from "./Island";

export default function IslandList({ setIsland, counters }) {
  const [query, setQuery] = useState("");
  console.log(`inside IslandList ${counters}`);
  let islandsArray = islands
    .filter((island) => island.name.toLowerCase().includes(query.toLowerCase()))
    .map((island) => (
      <Island island={island} setIsland={setIsland} counters={counters} />
    ));
  return (
    <div>
      <input
        className="search"
        placeholder="Search for an island"
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="islandList">{islandsArray}</div>
    </div>
  );
}

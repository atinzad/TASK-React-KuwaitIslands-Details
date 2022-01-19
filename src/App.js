import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import islands from "./data/islands";

function App() {
  let bobyanIsland = {
    id: 2,
    name: "Boubyan",
    img: "http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg",
  };

  const vistorsCounter = {};
  islands.forEach((island) => (vistorsCounter[island.id] = 0));
  const [counters, setCounters] = useState(vistorsCounter);
  const [island, setIsland] = useState(bobyanIsland);

  const updateCounters = (islandID) => {
    let tempCounter = { ...counters };
    tempCounter[islandID] = tempCounter[islandID] + 1;
    setCounters(tempCounter);
  };

  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList setIsland={setIsland} counters={counters} />
        <IslandForm island={island} updateCounters={updateCounters} />
      </div>
    </div>
  );
}

export default App;

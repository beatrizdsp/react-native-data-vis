

import React,{ useState, useEffect } from "react";
import MeteoriteCard from "./MeteoriteCard";
import NextMeteorite from "./NextMeteorite";
import PreviousMeteorite from "./PreviousMeteorite";
import SearchMeteorite from "./SearchMeteorite";

const MeteoriteList = () => {
  const [meteorites, setMeteorites] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredMeteorites, setFilteredMeteorites] = useState([]);

  useEffect(() => {
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
      .then((res) => res.json())
      .then((data) => {
        setMeteorites(data);
        setIsLoading(false);
        setFilteredMeteorites(data);
      })
      .catch((error) => {
        console.error("Error fetching meteorites:", error);
        setIsLoading(false);
      });
  }, []);

  const currentMeteorite = filteredMeteorites[currentIndex];

  const handleNextClick = () => {
    const newIndex = Math.min(currentIndex + 1, filteredMeteorites.length - 1);
    setCurrentIndex(newIndex);
  };

  const handlePreviousClick = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
  };

  const handleSearch = (searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = meteorites.filter((meteorite) =>
      meteorite.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredMeteorites(filtered);
    setCurrentIndex(0);
  };

  return (
    <div>
      <SearchMeteorite onSearch={handleSearch} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <MeteoriteCard meteorite={currentMeteorite} />
          <div className="BothButtons">
            <PreviousMeteorite onPreviousClick={handlePreviousClick} />
            <NextMeteorite
              totalMeteorites={filteredMeteorites.length}
              onNextClick={handleNextClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MeteoriteList;
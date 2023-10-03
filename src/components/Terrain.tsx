import React, { useState, useEffect } from "react";
import Tippy from "@tippyjs/react";

interface TerrainProps {
  x: number;
  y: number;
  imageIndex: number;
  overlayImageIndex?: number;
  cityName?: string | undefined;
  health?: number;
  turn: number;
}

// Weighted random index selection for terrain tile images
// Used to initialize the map that will be stored in PDA
export function weightedRandomTile() {
  const weightedIndices = [1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 5, 6, 7, 8, 8, 8];
  const randomIndex = Math.floor(Math.random() * weightedIndices.length);
  return weightedIndices[randomIndex];
}

// Mapping of tile indices to their type
export const TileType = {
  0: "Empty",
  1: "Iron",
  2: "Forest",
  3: "Plains",
  4: "Plains",
  5: "Rocks",
  6: "Field",
  7: "Plains",
  8: "Plains",
  9: "Plains",
  10: "Village",
  11: "Stone Quarry",
  12: "Farm",
  13: "Iron Mine",
  14: "Lumber Mill",
  15: "NPC Village",
};

const yieldTypes: { [key: string]: string } = {
  "Lumber Mill": "wood",
  "Stone Quarry": "stone",
  "Farm": "food",
  "Iron Mine": "iron",
};

const Terrain: React.FC<TerrainProps> = ({ x, y, imageIndex, overlayImageIndex, cityName, health, turn }) => {
  const [nextTurn, setNextTurn] = useState(false);

  useEffect(() => {
    setNextTurn(true);
    setTimeout(() => {
      setNextTurn(false);
    }, 2000);
  }, [turn]);

  const tileType = TileType[imageIndex as keyof typeof TileType];
  const overlayTileType = TileType[overlayImageIndex as keyof typeof TileType];
  const imageUrl = `/terrain/Layer ${imageIndex}.png`;
  const overlayImageUrl = overlayImageIndex !== undefined ? `/terrain/Layer ${overlayImageIndex}.png` : "";

  return (
    <div>
      {overlayImageIndex !== undefined && (
        <>
          {yieldTypes[overlayTileType] && nextTurn && (
            <div className="yield-effect">
              +2{" "}
              <img
                src={`/icons/${yieldTypes[overlayTileType]}.png`}
                alt={yieldTypes[overlayTileType]}
                className="yield-icon"
              />
            </div>
          )}
          <Tippy content={`${overlayTileType}`}>
            <img
              src={overlayImageUrl}
              className={`terrain-overlay ${tileType.toLowerCase()}`}
              alt={`${tileType}-overlay`}
              draggable="false"
            />
          </Tippy>
        </>
      )}
      {imageIndex !== null && (
        <>
          {cityName ? (
            <div className="city-header primary-border-with-box-shadow">
              {cityName}
              <div className="city-health-bar">
                <div className="city-health-bar-fill" style={{ width: `${health}%` }} />
              </div>
            </div>
          ) : null}
          <img src={imageUrl} className={`terrain ${tileType.toLowerCase()}`} alt={tileType} draggable="false" />
        </>
      )}
    </div>
  );
};

export default Terrain;

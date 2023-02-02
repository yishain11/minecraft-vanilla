import { config, typeToImgMap } from "./config/config.mjs";

const grid = document.getElementById("grid");

for (let index = 0; index < config.numOfRows; index++) {
  for (let j = 0; j < config.numOfCols; j++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    grid.append(tile);
  }
}
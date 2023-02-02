import { config, typeToImgMap } from "./config/config.mjs";
import { random } from './modules/functions.mjs';
const grid = document.getElementById("grid");

for (let index = 0; index < config.numOfRows; index++) {
  for (let j = 0; j < config.numOfCols; j++) {
    const tile = document.createElement('div');
    const num = random();
    if (num < 3) {
      tile.classList.add('ground');
    } else if (num < 6) {
      tile.classList.add('tree');
    } else {
      tile.classList.add('sky');
    }
    grid.append(tile);
  }
}

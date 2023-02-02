import { config, typeToImgMap, toolToType } from "./config/config.mjs";
import { random } from './modules/functions.mjs';

const grid = document.getElementById("grid");
const shovelBtn = document.getElementById('shovel');
const axeBtn = document.getElementById('axe');
const body = document.getElementsByTagName('body')[0];

let currentTool;

genTitles();


shovelBtn.addEventListener('click', () => {
  body.style.cursor = 'url("' + '/assets/cursor/shovel.png' + '"), default';
  currentTool = 'shovel';
});

axeBtn.addEventListener('click', () => {
  body.style.cursor = 'url("' + '/assets/cursor/axe.png' + '"), default';
  currentTool = 'axe';
});

function clickHandler(e) {
  const tile = e.target;
  const tileType = tile.classList;
  if (currentTool === 'axe' && tileType.contains('tree')) {
    tile.classList.remove('tree');
    tile.classList.add('sky');
  } else if (currentTool === 'shovel' && tileType.contains('ground')) {
    tile.classList.remove('ground');
    tile.classList.add('sky');
  }
}

function genTitles() {
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
      tile.addEventListener('click', clickHandler)
      grid.append(tile);
    }
  }
}


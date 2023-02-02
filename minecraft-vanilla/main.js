import { config } from "./config/config.mjs";
import { random } from './modules/functions.mjs';

const grid = document.getElementById("grid");
const body = document.getElementsByTagName('body')[0];

const shovelBtn = document.getElementById('shovel');
const axeBtn = document.getElementById('axe');
const restartBtn = document.getElementById('restart')

const treeCounter = document.getElementById('treeCounter');
const groundCounter = document.getElementById('groundCounter');

const treeImg = document.getElementById('treeImg');
const groundImg = document.getElementById('groundImg')


let currentTool;

loadGame();

function loadGame() {
  genTitles();
  genListeners();
}

function genListeners() {
  addInitialListener(shovelBtn, 'shovel');
  addInitialListener(axeBtn, 'axe');
  addInitialListener(treeImg, 'treeInventory');
  addInitialListener(groundImg, 'groundInventory');
  restartBtn.addEventListener('click', loadGame);
}



function addInitialListener(el, type) {
  switch (type) {
    case 'axe':
      el.addEventListener('click', () => {
        body.style.cursor = 'url("' + '/assets/cursor/axe.png' + '"), default';
        currentTool = 'axe';
      });
      break;
    case 'shovel':
      el.addEventListener('click', () => {
        body.style.cursor = 'url("' + '/assets/cursor/shovel.png' + '"), default';
        currentTool = 'shovel';
      });
      break;

    case 'treeInventory':
      el.addEventListener('click', () => {
        body.style.cursor = 'url("' + '/assets/inventoryCursor/tree_basic.png' + '"), default';
      });
      break;
    case 'groundInventory':
      el.addEventListener('click', () => {
        body.style.cursor = 'url("' + '/assets/inventoryCursor/ground_middle.png' + '"), default';
      });
      break;

  }
}

function clickHandler(e) {
  const tile = e.target;
  const tileType = tile.classList;
  if (currentTool === 'axe' && tileType.contains('tree')) {
    tile.classList.remove('tree');
    tile.classList.add('sky');
    treeCounter.innerText = parseInt(treeCounter.innerText) + 1
  } else if (currentTool === 'shovel' && tileType.contains('ground')) {
    tile.classList.remove('ground');
    tile.classList.add('sky');
    groundCounter.innerText = parseInt(groundCounter.innerText) + 1
  }
}

function genTitles() {
  grid.innerHTML = '';
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


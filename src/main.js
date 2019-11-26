import {createSiteMenuTemplate} from './components/site-menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createBoardTemplate} from './components/board.js';
import {createEditCardTaskTemplate} from './components/edit-card-task.js';
import {createCardTaskTemplate} from './components/card-task.js';
import {createLoadMoreButtonTemplate} from './components/load-more-button.js';


const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);

render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const siteBoardContainer = document.querySelector(`.board`);
const siteBoardTask = siteBoardContainer.querySelector(`.board__tasks`);

render(siteBoardTask, createEditCardTaskTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(siteBoardTask, createCardTaskTemplate(), `beforeend`);
}

render(siteBoardContainer, createLoadMoreButtonTemplate(), `beforeend`);

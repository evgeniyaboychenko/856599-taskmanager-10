import {createSiteMenuTemplate} from './components/site-menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createBoardTemplate} from './components/board.js';
import {createEditCardTaskTemplate} from './components/edit-card-task.js';
import {createCardTaskTemplate} from './components/card-task.js';
import {createLoadMoreButtonTemplate} from './components/load-more-button.js';

import {generateTaskCard} from './mock/task.js';
import {generateFilters} from './mock/filter.js';

const TASK_COUNT_LOAD = 8;
const MAX_TASK_COUNT = 20;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);

render(siteMainElement, createFilterTemplate(generateFilters()), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const siteBoardContainer = document.querySelector(`.board`);
const siteBoardTask = siteBoardContainer.querySelector(`.board__tasks`);

render(siteBoardTask, createEditCardTaskTemplate(generateTaskCard()), `beforeend`);

for (let i = 0; i < Math.min(TASK_COUNT_LOAD, MAX_TASK_COUNT); i++) {
  render(siteBoardTask, createCardTaskTemplate(generateTaskCard()), `beforeend`);
}

render(siteBoardContainer, createLoadMoreButtonTemplate(), `beforeend`);

const buttonLoadMore = siteMainElement.querySelector(`.load-more`);
let tasksLeft = MAX_TASK_COUNT - TASK_COUNT_LOAD;

const onAutoLoad = () => {
  if (tasksLeft <= 0) {
    buttonLoadMore.classList.add(`visually-hidden`);
    buttonLoadMore.removeEventListener(`click`, onLoadTasksButtonClick);
  }
};
onAutoLoad();
const onLoadTasksButtonClick = () => {
  let counter = Math.min(TASK_COUNT_LOAD, tasksLeft);
  for (let i = 0; i < counter; i++, tasksLeft--) {
    render(siteBoardTask, createCardTaskTemplate(generateTaskCard()), `beforeend`);
  }
  onAutoLoad();
};

buttonLoadMore.addEventListener(`click`, onLoadTasksButtonClick);

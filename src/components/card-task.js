import {MONTHS_NAME} from '../const.js';
import {formatTime} from '../utils.js';

// функция, возвращающие разметку компонента Карточка задачи
export const createCardTaskTemplate = (task) => {

  const createHashtags = (hashtags) => {
    return hashtags.map((tag) => {
      return (
        `<span class="card__hashtag-inner">
           <span class="card__hashtag-name">
             #${tag}
           </span>
        </span>`
      );
    })
      .join(`\n`);
  };

  const {color, description, dueDate, repeatingDays, tags} = task;
  const hashtags = createHashtags(Array.from(tags));

  const getRepeatSign = (days) => {
    return Object.entries(days).some((day) => day[1]);
  };

  const isDataShowing = Boolean(dueDate);
  const dateStr = isDataShowing ? `${dueDate.getDate()} ${MONTHS_NAME[dueDate.getMonth()]}` : ``;
  const timeStr = isDataShowing ? `${formatTime(dueDate)}` : ``;

  const getRepeatClass = getRepeatSign(repeatingDays) ? `card--repeat` : ``;
  const getDeadlineClass = dueDate instanceof Date && dueDate < Date.now() ? `card--deadline` : ``;

  return (
    `<article class="card card--${color} ${getRepeatClass} ${getDeadlineClass}">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn card__btn--archive">
              archive
            </button>
            <button
              type="button"
              class="card__btn card__btn--favorites card__btn--disabled"
            >
              favorites
            </button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <p class="card__text">${description}</p>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
                    <span class="card__date">${dateStr}</span>
                    <span class="card__time">${timeStr}</span>
                  </p>
                </div>
              </div>

              <div class="card__hashtag">
                <div class="card__hashtag-list">
                ${hashtags}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>`
  );
};

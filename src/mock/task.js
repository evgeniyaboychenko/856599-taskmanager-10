import {COLORS} from '../const.js';
import {getRandomNumber} from '../utils.js';
import {generateFlagValue} from '../utils.js';
import {generateRandomArray} from '../utils.js';

const TASK_DESCRIPTION = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`
];

const TAGS = [`homework`, `theory`, `practice`, `intensive`, `keks`];
const MAX_COUNT_TAGS = 3;

const DAYS_REPEAT = {
  mo: generateFlagValue(),
  tu: generateFlagValue(),
  we: generateFlagValue(),
  th: generateFlagValue(),
  fr: generateFlagValue(),
  sa: generateFlagValue(),
  su: generateFlagValue()
};

const DAYS_DEFAULT = {
  mo: false,
  tu: false,
  we: false,
  th: false,
  fr: false,
  sa: false,
  su: false
};

const generateDateDeadline = () => {
  const dateCurrent = new Date();
  const date = new Date();
  if (generateFlagValue()) {
    date.setDate(dateCurrent.getDay() + getRandomNumber(7));
  } else {
    date.setDate(dateCurrent.getDay() - getRandomNumber(7));
  }
  return generateFlagValue() ? date : null;
};

export const generateTaskCard = () => {
  const dueDate = generateDateDeadline();
  return {
    color: COLORS[getRandomNumber(COLORS.length)],
    description: TASK_DESCRIPTION[getRandomNumber(TASK_DESCRIPTION.length)],
    dueDate,
    repeatingDays: dueDate ? DAYS_DEFAULT : DAYS_REPEAT,
    tags: new Set(generateRandomArray(TAGS, MAX_COUNT_TAGS)),
    isFavorite: generateFlagValue(),
    isArchive: generateFlagValue(),
  };
};


// фун-ия возвращающая случайное число
export const getRandomNumber = (number) => {
  return Math.floor(Math.random() * number);
};

export const generateFlagValue = () => {
  return Boolean(getRandomNumber(2));
};

export const generateRandomArray = (array, number) => {
  array = array.slice();
  const deleteCount = array.length - getRandomNumber(number + 1);
  for (let i = 0; i < deleteCount; i++) {
    array.splice(getRandomNumber(array.length), 1);
  }
  return array;
};

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const formatTime = (date) => {
  let hours = date.getHours() % 12;
  hours = hours === 0 ? 12 : hours;
  const minutes = castTimeFormat(date.getMinutes());
  const interval = date.getHours() > 11 ? `pm` : `am`;
  return `${castTimeFormat(hours)}:${minutes} ${interval}`;
};

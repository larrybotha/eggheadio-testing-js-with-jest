import sum from './sum';

function getAdder(a) {
  return b => sum(a, b);
}

export default getAdder;

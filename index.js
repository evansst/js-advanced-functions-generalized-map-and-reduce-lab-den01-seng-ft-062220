function map(array, func, i = 0) {
  array[i] = func(array[i]);
  return array[i + 1] 
    ? map(array, func, i + 1)
    : array;
}

function reduce(array, func, startingValue) {
  array[0] = (startingValue !== undefined) ? func(array[0], startingValue) : array[0];
  return array[1] !== undefined 
    ? reduce(array.slice(1), func, array[0])
    : array[0];
}

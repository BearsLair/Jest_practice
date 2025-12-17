const average = (array) => {
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  return Math.floor(sum / array.length);
};

const analyzeArray = (array) => {
  return {
    average: average(array),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};

export default analyzeArray;

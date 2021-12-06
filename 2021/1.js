// https://adventofcode.com/2021/day/1

function calculateDepthIncrease(values) {
  let increases = 0;

  const reducer = (prev, current, currentIndex, array) => {
    if (array[currentIndex] > array[currentIndex - 1]) {
      increases++;
    }
  };

  values.length && values.reduce(reducer, increases);
  return increases;
}

function slidingDepthIncrease(values) {
  let depthChunks = [];

  values.length &&
    values.reduce((prev, current, currentIndex, array) => {
      if (currentIndex + 3 <= array.length) {
        depthChunks.push(
          array.slice(currentIndex, currentIndex + 3).reduce((a, b) => a + b)
        );
      }
    }, []);

  return calculateDepthIncrease(depthChunks.flat());
}

module.exports = {
  calculateDepthIncrease: calculateDepthIncrease,
  slidingDepthIncrease: slidingDepthIncrease,
};

const sumAll = function (start, end) {
  if (start < 0 || end < 0 || typeof start != "number" || typeof end != "number") {
    return "ERROR";
  }
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  let total = (end * (end + 1)) / 2;
  let startPortion = ((start - 1) * (start - 1 + 1)) / 2;
  return total - startPortion;
};

// Do not edit below this line
module.exports = sumAll;

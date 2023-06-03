const removeFromArray = function (list) {
  const args = Array.prototype.slice.call(arguments, 1);

  if (Array.isArray(list)) {
    for (let i = 0; i <= args.length - 1; i++) {
      let idx = list.indexOf(args[i]);
      if (list[idx] === args[i]) {
        list.splice(idx, 1);
      }
    }
  }

  return list;
};

// Do not edit below this line
module.exports = removeFromArray;

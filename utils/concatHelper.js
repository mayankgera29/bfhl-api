exports.buildConcatString = (alphabets) => {
  let all = alphabets.join("");
  let rev = all.split("").reverse();
  return rev
    .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");
};

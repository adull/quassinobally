export default function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export function getIndexOfHash(hash, array) {
  for(let i = 0; i < array.length; i ++) {
    // console.log("a")
    if(hash === array[i].identifier) {
      return i;
    }
  }
}

export function lengthOfToBox(toBox) {
  if(toBox.type === "letter") {
    return toBox.letterCharArr.length;
  }
  else if(toBox.type === "operand") {
    return toBox.operandCharArr.length;
  }
  else if(toBox.type === "solution") {
    return toBox.solutionCharArr.length;
  }
}

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
  let returnVal = null;
  for(let i = 0; i < array.length; i ++) {
    if(hash === array[i].identifier) {
      return i;
    }
  }
  // console.log(returnVal);
  console.log("not found in index")
  return returnVal;
}

export function getToBoxArr(toBox) {
  if(toBox.type === "letter") {
    return toBox.letterCharArr;
  }
  else if(toBox.type === "operand") {
    return toBox.operandCharArr;
  }
  else if(toBox.type === "solution") {
    return toBox.solutionCharArr;
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

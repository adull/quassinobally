export const ADD_CHAR = 'ADD_CHAR'
export const REMOVE_CHAR = 'REMOVE_CHAR'
export const SUBMIT_ANS = 'SUBMIT_ANS'

export function addChar(char, box) {
  // console.log("in add char")
  return{
    type: ADD_CHAR,
    char,
    box
  }
}

export function removeChar(char, box) {
  console.log("remove char");
  return {
    type: REMOVE_CHAR,
    char,
    box
  }
}

export function submitAns(charArr) {
  console.log("submit answer");
  return {
    type: SUBMIT_ANS,
    charArr
  }
}

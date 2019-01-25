export const ADD_CHAR = 'ADD_CHAR'
export const REMOVE_CHAR = 'REMOVE_CHAR'
export const SUBMIT_ANS = 'SUBMIT_ANS'

export function addChar(char, box) {
  return{
    type: ADD_CHAR,
    char,
    box
  }
}

export function removeChar(char, index, box) {
  return {
    type: REMOVE_CHAR,
    char,
    index,
    box
  }
}

export function submitAns(charArr) {
  return {
    type: SUBMIT_ANS,
    charArr
  }
}

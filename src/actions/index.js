export const ADD_CHAR = 'ADD_CHAR'
export const REMOVE_CHAR = 'REMOVE_CHAR'
export const SUBMIT_ANS = 'SUBMIT_ANS'
export const TOGGLE_GAPS = 'TOGGLE_GAPS'

export function addChar(char, index, box) {
  return{
    type: ADD_CHAR,
    char,
    index,
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

export function toggleGaps() {
  return {
    type: TOGGLE_GAPS
  }
}

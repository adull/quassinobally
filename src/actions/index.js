export const ADD_CHAR = 'ADD_CHAR'
export const REMOVE_CHAR = 'REMOVE_CHAR'
export const SUBMIT_ANS = 'SUBMIT_ANS'
export const TOGGLE_GAPS = 'TOGGLE_GAPS'
export const NEW_PUZZLE = 'NEW_PUZZLE'
// export const TOGGLE_HOME_PAGE = 'TOGGLE_HOME_PAGE'
// export const TOGGLE_GAME_PAGE = 'TOGGLE_GAME_PAGE'
// export const TOGGLE_INSTRUCTIONS_PAGE = 'TOGGLE_INSTRUCTIONS_PAGE'
export const SET_PAGE = 'SET_PAGE'

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

export function submitAns(isCorrectSolution) {
  return {
    type: SUBMIT_ANS,
    isCorrectSolution
  }
}

export function toggleGaps() {
  return {
    type: TOGGLE_GAPS
  }
}

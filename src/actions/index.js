export const ADD_CHAR = 'ADD_CHAR'
export const REMOVE_CHAR = 'REMOVE_CHAR'
export const SUBMIT_ANS = 'SUBMIT_ANS'
export const TOGGLE_GAPS = 'TOGGLE_GAPS'
export const NEW_PUZZLE = 'NEW_PUZZLE'
export const SET_PAGE = 'SET_PAGE'
export const SET_BG_COLOR = 'SET_BG_COLOR'
export const SET_BOX_COLOR = 'SET_BOX_COLOR'
export const SET_BOX_BORDER_WIDTH = 'SET_BOX_BORDER_WIDTH'
export const SET_LETTER_COLOR = 'SET_LETTER_COLOR'
export const SET_BOXBORDER_COLOR = 'SET_BOXBORDER_COLOR'
export const CLOSE_INCORRECT_MODAL = 'CLOSE_INCORRECT_MODAL'
export const SET_HOME_BTN_BG_COLOR = 'SET_HOME_BTN_BG_COLOR'
export const SET_HOME_BTN_COLOR = 'SET_HOME_BTN_COLOR'
export const SET_HOME_BTN_BORDER_COLOR = 'SET_HOME_BTN_BORDER_COLOR'
export const SET_HOME_BTN_BORDER_WIDTH = 'SET_HOME_BTN_BORDER_WIDTH'
export const SUBMIT_INVALID_ANS = 'SUBMIT_INVALID_ANS'
export const SUBMIT_ANS_LACKING_CHARS = 'SUBMIT_ANS_LACKING_CHARS'

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

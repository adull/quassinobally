export function setPage(page, dispatch) {
  dispatch({
    type: 'SET_PAGE',
    page: page
  })
}

export function setBackgroundColor(color, dispatch) {
  dispatch({
    type: 'SET_BG_COLOR',
    color: color
  })
}

export function setBoxColor(color, dispatch) {
  dispatch({
    type: 'SET_BOX_COLOR',
    color: color
  })
}

export function setLetterColor(color, dispatch) {
  dispatch({
    type: 'SET_LETTER_COLOR',
    color: color
  })
}

export function setBoxBorderWidth(width, dispatch) {
  dispatch({
    type: 'SET_BOX_BORDER_WIDTH',
    width: width
  })
}

export function setBoxBorderColor(color, dispatch) {
  dispatch({
    type: 'SET_BOXBORDER_COLOR',
    color: color
  })
}

export function closeIncorrectModal(dispatch) {
  dispatch({
    type: 'CLOSE_INCORRECT_MODAL'
  })
}

export function setHomeBtnBgColor(color, dispatch) {
  dispatch({
    type: 'SET_HOME_BTN_BG_COLOR',
    color: color
  })
}

export function setHomeBtnColor(color, dispatch) {
  dispatch({
    type: 'SET_HOME_BTN_COLOR',
    color: color
  })
}

export function setHomeBtnBorderColor(color, dispatch) {
  dispatch({
    type: 'SET_HOME_BTN_BORDER_COLOR',
    color: color
  })
}

export function setHomeBtnBorderWidth(width, dispatch) {
  dispatch({
    type: 'SET_HOME_BTN_BORDER_WIDTH',
    width: width
  })
}

export function toggleDictionary(dispatch) {
  dispatch({
    type: 'TOGGLE_DICTIONARY'
  })
}

export function setGameBtnBackgroundColor(color, dispatch) {
  dispatch({
    type: 'SET_GAME_BTN_BG_COLOR',
    color: color
  })
}

export function setGameBtnBorderColor(color, dispatch) {
  console.log("set text color")
  dispatch({
    type: 'SET_GAME_BTN_BORDER_COLOR',
    color: color
  })
}

export function setGameBtnTextColor(color, dispatch) {

  dispatch({
    type: 'SET_GAME_BTN_TEXT_COLOR',
    color: color
  })
}

export function setGameBtnBorderWidth(width, dispatch) {
  dispatch({
    type: 'SET_GAME_BTN_BORDER_WIDTH',
    width: width
  })
}

export function setBackHomeBtnBackgroundColor(color, dispatch) {
  dispatch({
    type: 'SET_BACK_HOME_BTN_BG_COLOR',
    color: color
  })
}

export function setBackHomeBtnTextColor(color, dispatch) {
  dispatch({
    type: 'SET_BACK_HOME_BTN_TEXT_COLOR',
    color: color
  })
}

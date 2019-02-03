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

export function setBoxBorderColor(color, dispatch) {
  dispatch({
    type: 'SET_BOXBORDER_COLOR',
    color: color
  })
}

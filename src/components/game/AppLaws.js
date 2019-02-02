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

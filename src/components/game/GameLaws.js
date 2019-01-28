import { createStore } from 'redux'
import reducer from '../../reducers'
import { addChar, removeChar, submitAns } from  '../../actions'


export function canMoveChar(char, toBox) {
  if(char.value.type === "letter") {
    if(toBox.type === "operand") {
      return false;
    }
    else {
      return true;
    }
  }
  else if(char.value.type === "operand") {
    if(toBox.type === "letter") {
      return false;
    }
    else {
      return true;
    }
  }
  else {
    console.log(char.type)
  }
}

export function moveChar(char, index, fromBox, toBox, dispatch) {
  console.log(index)
  if(char.type === "letter") {
    letterMove(char, index, fromBox, toBox, dispatch);
  }
  else if(char.type === "operand") {
    operandMove(char, index, fromBox, toBox, dispatch);
  }
}

function letterMove(char, index, fromBox, toBox, dispatch) {
  dispatch({
    type: 'ADD_CHAR',
    char: char,
    index: index,
    box: toBox
  });
  dispatch({
    type: 'REMOVE_CHAR',
    char: char,
    index: index,
    box: fromBox
  });
}

function operandMove(char, index, fromBox, toBox, dispatch) {
  if(toBox.type === "operand") {
    dispatch({
      type: 'REMOVE_CHAR',
      char: char,
      index: index,
      box: fromBox
    });
  }
  else if(toBox.type === "solution") {
    dispatch({
      type: 'ADD_CHAR',
      char: char,
      index: index,
      box: toBox
    });
  }
}

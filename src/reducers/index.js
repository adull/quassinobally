import { ADD_CHAR, REMOVE_CHAR, SUBMIT_ANS } from '../actions'
import {getCompositeCharArr, getIndexOfHash} from '../functions';

function randomWord() {
  let words = ["this", "man", "child"]
  return words[Math.floor(Math.random() * words.length)];
}

function makeHash() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function makeCharArr(value, type) {
  let charArr = [];
  for(var  i = 0; i < value.length; i ++) {
    charArr.push({
      type: type,
      value: value[i],
      identifier: makeHash()
    })
  }
  return charArr
}

let operands = "+-×÷()";

const initialState = {
  letterCharArr: makeCharArr(randomWord(), 'letter'),
  operandCharArr: makeCharArr(operands, 'operand'),
  solutionCharArr: [],
  answerSubmitted: false
}

function quassinoballyApp(state = initialState, action) {
  switch (action.type) {
    case ADD_CHAR:
      // console.log("ADD_CHAR")
      // console.log(action.index);
      let newChar = {
        type: action.char.type,
        value: action.char.value,
        identifier: makeHash()
      }
      // console.log(newChar);
      if(action.box.type === "letter") {
        return {
          ...state,
          letterCharArr: [
            ...state.letterCharArr.slice(0, action.index + 1),
            newChar,
            ...state.letterCharArr.slice(action.index + 1)
          ]
        }
      }
      else if(action.box.type === "operand") {
        return {
          ...state,
          operandCharArr: [
            ...state.operandCharArr.slice(0, action.index + 1),
            newChar,
            ...state.operandCharArr.slice(action.index + 1)
          ]
        }
      }
      else if(action.box.type === "solution") {
        return {
          ...state,
          solutionCharArr: [
            ...state.solutionCharArr.slice(0, action.index + 1),
            newChar,
            ...state.solutionCharArr.slice(action.index + 1)
          ]
        }
      }
      else {
        // console.log(action)
        // console.log(action.box.type)
      }
    case REMOVE_CHAR:
      let charHash = action.char.identifier;
      if(action.box.type === "letter") {
        let removeIndex = getIndexOfHash(charHash, state.letterCharArr);
        return {
          ...state,
          letterCharArr: [
            ...state.letterCharArr.slice(0, removeIndex),
            ...state.letterCharArr.slice(removeIndex + 1, )
          ]
        }
        return state;
      }
      else if(action.box.type === "solution") {
        let removeIndex = getIndexOfHash(charHash, state.solutionCharArr);
        return {
          ...state,
          solutionCharArr: [
            ...state.solutionCharArr.slice(0, removeIndex),
            ...state.solutionCharArr.slice(removeIndex + 1, )
          ]
        }
        return state;
      }
      else {
        console.log(action.box.type)
      }
      return state;
      // console.log("remove char");
    case SUBMIT_ANS:
      console.log("submit ans");
    default:
      // console.log("default");
      return state
  }
}

export default quassinoballyApp;

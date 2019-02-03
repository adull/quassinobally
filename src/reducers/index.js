import {
  ADD_CHAR, REMOVE_CHAR, SUBMIT_ANS, TOGGLE_GAPS, NEW_PUZZLE,
  SET_PAGE, SET_BG_COLOR, SET_BOX_COLOR, SET_LETTER_COLOR,
  SET_BOXBORDER_COLOR
} from '../actions'
import {getCompositeCharArr, getIndexOfHash} from '../functions';

var randomWords = require('random-words');

function randomWord() {
  let words = ["hat", "man", "has"]
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

// use in prod
let randWord = randomWords({exactly:1, maxLength: 10})[0];

// use in dev
// let randWord = randomWord();

const initialState = {
  letterCharArr: makeCharArr(randWord, 'letter'),
  operandCharArr: makeCharArr(operands, 'operand'),
  solutionCharArr: [],
  noGaps: true,
  answerSubmitted: false,
  correctSubmittedAnswer: false,
  incorrectSubmittedAnswer: false,
  showHome: true,
  showGame: false,
  showInstructions: false,
  showSettings: false,
  backgroundColor: [0,128,256],
  boxColor: [0, 255, 255],
  letterColor: [0, 0, 255],
  boxBorderColor: [0, 0, 255]
}

function quassinoballyApp(state = initialState, action) {
  switch (action.type) {
    case ADD_CHAR:
      let newChar = {
        type: action.char.type,
        value: action.char.value,
        identifier: makeHash()
      }
      if(action.box.type === "letter") {
        return {
          ...state,
          letterCharArr: [
            ...state.letterCharArr.slice(0, action.index),
            newChar,
            ...state.letterCharArr.slice(action.index)
          ]
        }
      }
      else if(action.box.type === "operand") {
        return {
          ...state,
          operandCharArr: [
            ...state.operandCharArr.slice(0, action.index),
            newChar,
            ...state.operandCharArr.slice(action.index)
          ]
        }
      }
      else if(action.box.type === "solution") {
        return {
          ...state,
          solutionCharArr: [
            ...state.solutionCharArr.slice(0, action.index),
            newChar,
            ...state.solutionCharArr.slice(action.index)
          ]
        }
      }
      else {
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
    case SUBMIT_ANS:
      return {
        ...state,
        correctSubmittedAnswer: !state.correctSubmittedAnswer
      }
    case TOGGLE_GAPS:
      return {
        ...state,
        noGaps: !state.noGaps
      }
    case NEW_PUZZLE:
      return {
        ...state,
        letterCharArr: makeCharArr(randomWords({exactly:1, maxLength: 10})[0], 'letter'),
        operandCharArr: makeCharArr(operands, 'operand'),
        solutionCharArr: [],
        noGaps: true,
        answerSubmitted: false,
        correctSubmittedAnswer: false,
        incorrectSubmittedAnswer: false
      }
    case SET_PAGE:
      if(action.page === "home") {
        return {
          ...state,
          showHome: true,
          showGame: false,
          showInstructions: false,
          showSettings: false
        }
      }
      else if(action.page === "game") {
        return {
          ...state,
          showHome: false,
          showGame: true,
          showInstructions: false,
          showSettings: false
        }
      }
      else if(action.page === "instructions") {
        return {
          ...state,
          showHome: false,
          showGame: false,
          showInstructions: true,
          showSettings: false
        }
      }
      else if(action.page === "settings") {
        return {
          ...state,
          showHome: false,
          showGame: false,
          showInstructions: false,
          showSettings: true
        }
      }
    case SET_BG_COLOR:
      return {
        ...state,
        backgroundColor: action.color
      }
    case SET_BOX_COLOR:
      return {
        ...state,
        boxColor: action.color
      }
    case SET_LETTER_COLOR:
      return {
        ...state,
        letterColor: action.color
      }
    case SET_BOXBORDER_COLOR:
      return {
        ...state,
        boxBorderColor: action.color
      }
    default:
      return state
  }
}

export default quassinoballyApp;

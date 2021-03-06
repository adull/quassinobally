import {
  ADD_CHAR, REMOVE_CHAR, SUBMIT_ANS, TOGGLE_GAPS, NEW_PUZZLE,
  SET_PAGE, SET_BG_COLOR, SET_BOX_COLOR, SET_LETTER_COLOR, SET_BOX_BORDER_WIDTH,
  SET_BOXBORDER_COLOR, CLOSE_INCORRECT_MODAL, SET_HOME_BTN_BG_COLOR,
  SET_HOME_BTN_COLOR, SET_HOME_BTN_BORDER_COLOR, SET_HOME_BTN_BORDER_WIDTH,
  TOGGLE_DICTIONARY, HOVERING_OVER, REMOVE_HOVER, SET_GAME_BTN_BG_COLOR,
  SET_GAME_BTN_TEXT_COLOR, SET_GAME_BTN_BORDER_COLOR, SET_GAME_BTN_BORDER_WIDTH,
  SET_BACK_HOME_BTN_BG_COLOR, SET_BACK_HOME_BTN_TEXT_COLOR
} from '../actions'
import {getIndexOfHash} from '../functions';

var randomWords = require('random-words');

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
  currentlyHovering: '',
  noGaps: true,
  answerSubmitted: false,
  reasonIncorrect: '',
  correctSubmittedAnswer: false,
  incorrectSubmittedAnswer: false,
  lackingChars: false,
  invalidAnswer: false,
  showHome: true,
  showGame: false,
  showDictionary: false,
  showInstructions: false,
  showSettings: false,
  backgroundColor: [0,128,255],
  boxColor: [0, 255, 255],
  letterColor: [0, 0, 255],
  boxBorderWidth: 3,
  boxBorderColor: [0, 0, 255],
  homeBtnBgColor: [0, 128, 255],
  homeBtnColor: [255, 255, 255],
  homeBtnBorderColor: [255, 255, 255],
  homeBtnBorderWidth: 2,
  gameBtnBgColor: [0, 128, 255],
  gameBtnTextColor: [255, 255, 255],
  gameBtnBorderColor: [255, 255, 255],
  gameBtnBorderWidth: 2,
  backHomeBtnBgColor: [255, 128, 255],
  backHomeBtnTextColor: [255, 255, 255]
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
        break;
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
      }
      else {
        console.log(action.box.type)
      }
      return state;
    case SUBMIT_ANS:
      return {
        ...state,
        reasonIncorrect: action.reasonIncorrect,
        correctSubmittedAnswer: action.isCorrectSolution,
        incorrectSubmittedAnswer: !action.isCorrectSolution
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
      else {
        break;
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
    case SET_BOX_BORDER_WIDTH:
      return {
        ...state,
        boxBorderWidth: action.width
      }
    case SET_BOXBORDER_COLOR:
      return {
        ...state,
        boxBorderColor: action.color
      }
    case CLOSE_INCORRECT_MODAL:
      return {
        ...state,
        incorrectSubmittedAnswer: false
      }
    case SET_HOME_BTN_BG_COLOR:
      return {
        ...state,
        homeBtnBgColor: action.color
      }
    case SET_HOME_BTN_COLOR:
      return {
        ...state,
        homeBtnColor: action.color
      }
    case SET_HOME_BTN_BORDER_COLOR:
      return {
        ...state,
        homeBtnBorderColor: action.color
      }
    case SET_HOME_BTN_BORDER_WIDTH:
      return {
        ...state,
        homeBtnBorderWidth: action.width
      }
    case TOGGLE_DICTIONARY:
      return {
        ...state,
        showDictionary: !state.showDictionary
      }
    case HOVERING_OVER:
      return {
        ...state,
        currentlyHovering: action.identifier
      }
    case REMOVE_HOVER:
      return {
        ...state,
        currentlyHovering: ''
      }
    case SET_GAME_BTN_BG_COLOR:
      return {
        ...state,
        gameBtnBgColor: action.color
      }
    case SET_GAME_BTN_TEXT_COLOR:
      return {
        ...state,
        gameBtnTextColor: action.color
      }
    case SET_GAME_BTN_BORDER_COLOR:
      return {
        ...state,
        gameBtnBorderColor: action.color

      }
    case SET_GAME_BTN_BORDER_WIDTH:
      return {
        ...state,
        gameBtnBorderWidth: action.width
      }
    case SET_BACK_HOME_BTN_BG_COLOR:
      return {
        ...state,
        backHomeBtnBgColor: action.color

      }
    case SET_BACK_HOME_BTN_TEXT_COLOR:
      return {
        ...state,
        backHomeBtnTextColor: action.color
      }

    default:
      return state
  }
}

export default quassinoballyApp;

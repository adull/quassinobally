import { ADD_CHAR, REMOVE_CHAR, SUBMIT_ANS } from '../actions'

function randomWord() {
  let words = ["shit", "man", "child", "kill"]
  return words[Math.floor(Math.random() * words.length)];
}

let operands = "+-×÷";



const initialState = {
  letterCharArr: randomWord().split(""),
  operandCharArr: operands.split(""),
  solutionCharArr: [],
  answerSubmitted: false
}

function quassinoballyApp(state = initialState, action) {
  // console.log(action)
  switch (action.type) {
    case ADD_CHAR:
      console.log(state)
      if(action.box.type === "letter") {
        return {
          ...state,
          letterCharArr: [...state.letterCharArr, action.char.value]
        }
      }
      else if(action.box.type === "operand") {
        return {
          ...state,
          operandCharArr: [...state.operandCharArr, action.char.value]
        }
      }
      else if(action.box.type === "solution") {
        return {
          ...state,
          solutionCharArr: [...state.solutionCharArr, action.char.value]
        }
      }
      else {
        console.log(action.box.type)
      }
    case REMOVE_CHAR:
      console.log("remove char");
    case SUBMIT_ANS:
      console.log("submit ans");
    default:
      // console.log("default");
      return state
  }
}

export default quassinoballyApp;

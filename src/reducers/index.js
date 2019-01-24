import { ADD_CHAR, REMOVE_CHAR, SUBMIT_ANS } from '../actions'

const initialState = {
  letterCharArr: [],
  operandCharArr: [],
  solutionCharArr: [],
  answerSubmitted: false
}

function quassinoballyApp(state = initialState, action) {
  console.log("ok it starts")
  // console.log(action.type)
  console.log(action)
  switch (action.type) {
    case ADD_CHAR:
      console.log(action.box.type);
      if(action.box.type === "letter") {
        console.log("its a letter")
        let returnVal = Object.assign({}, state, {
          letterCharArr: state.letterCharArr.push(action.char)
        });
        // console.log(returnVal);
        return returnVal;
      }
      else if(action.box.type === "operand") {
        console.log(action.char);
        return Object.assign({}, state, {
          operandCharArr: state.operandCharArr.push(action.char)
        }
      )}
      else if(action.box.type === "solution") {
        let character = action.char;
        let wtf = state.solutionCharArr.push(character);
        let returnVal = Object.assign({}, state, {
          solutionCharArr: state.solutionCharArr.push(character)
        })
        // state.solutionCharArr.push(character);
        console.log(returnVal);
        return returnVal;
      }
      else {
        console.log(action.box.type)
      }
    case REMOVE_CHAR:
      console.log("remove char");
    case SUBMIT_ANS:
      console.log("submit ans");
    default:
      return state
  }
}

export default quassinoballyApp;

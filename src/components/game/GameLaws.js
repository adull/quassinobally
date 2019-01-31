import { createStore } from 'redux'
import reducer from '../../reducers'
import { addChar, removeChar, submitAns } from  '../../actions'

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function checkSolutionValidity(solutionCharArr) {
  let parenthesesArr = [];
  let nonParenthesesArr = [];
  let shitIsWrong = false;
  for(let i = 0; i < solutionCharArr.length; i ++) {
    console.log(solutionCharArr[i])
    let char = solutionCharArr[i].value;
    let type = solutionCharArr[i].type;
    if(char === "(" ) {
      parenthesesArr.push(char);
    }
    else if(char === ")") {
      if(parenthesesArr.length > 0) {
        parenthesesArr.pop();
      }
      else {
        shitIsWrong = true;
      }
    }
    else {
      nonParenthesesArr.push(type);
    }
  }
  if(shitIsWrong === true) {
    return false;
  }
  if(parenthesesArr.length > 0) {
    return false;
  }
  else {
    let shitIsWrongTwo = false;
    for(let j = 0; j < nonParenthesesArr.length; j ++) {
      if( j % 2 === 0) {
        if(nonParenthesesArr[j] != "letter") {
          shitIsWrongTwo = true;
        }
      }
      if( j + 1 % 2 === 0) {
        if(nonParenthesesArr[j] != "operand") {
          shitIsWrongTwo = true;
        }
      }
    }
    console.log(shitIsWrongTwo)
    return !shitIsWrongTwo;
  }
  console.log(parenthesesArr);
  console.log(nonParenthesesArr)

}

function evaluateSolutionArr(charArr) {
  let solutionExpression = "";
  for(let i = 0; i < charArr.length; i ++) {
    let valToAdd = "";
    if(alphabet.includes(charArr[i].value)) {
      valToAdd = alphabet.indexOf(charArr[i].value)+1;
    }
    else {
      valToAdd = charArr[i].value
    }

    solutionExpression += valToAdd
  }
  console.log(solutionExpression)
  let solutionEvaluation = eval(solutionExpression);
  return solutionEvaluation;
}

export function submitAnswer(props) {
  let validity = checkSolutionValidity(props.solutionCharArr);
  if(validity === true) {
    let answerEvaluation = evaluateSolutionArr(props.solutionCharArr)
    if(props.letterCharArr.length > 0) {
      alert("must use all characters");
      return;
    }
    if(answerEvaluation % 27 === 0) {
      alert("worked!")
      return;
    }
    else {
      alert("you got it wrong! your answer evaluates to " + alphabet[answerEvaluation - 1 % 27]);
      return;
    }
  }
  else {
    alert("solution is not valid")
    return;
  }

}

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
  // console.log(index)
  if(char.type === "letter") {
    letterMove(char, index, fromBox, toBox, dispatch);
  }
  else if(char.type === "operand") {
    operandMove(char, index, fromBox, toBox, dispatch);
  }
}

function letterMove(char, index, fromBox, toBox, dispatch) {
  // console.log(index);
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
  else if(toBox.type === "solution" && fromBox.type === "operand") {
    dispatch({
      type: 'ADD_CHAR',
      char: char,
      index: index,
      box: toBox
    });
  }
  else if(toBox.type === "solution" && fromBox.type === "solution") {
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
}

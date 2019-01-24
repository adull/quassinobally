import { createStore } from 'redux'
import reducer from '../../reducers'
import { addChar, removeChar, submitAns } from  '../../actions'


let observer = null;
const store = createStore(reducer);

function emitChange() {
  observer(observer);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  // console.log(o)
  emitChange(observer);
}

function randomWord() {
  let words = ["shit", "dad", "how", "man"]
  return words[Math.floor(Math.random() * words.length)];
}

export function setupGame() {
  setupLetters();
  setupOperands();
}

function setupLetters() {
  let randomWord = randomWord();

}

function setupOperands() {
  let operands = "+-×÷";
}

export function moveChar(character, box) {
  store.dispatch(addChar(character, box));
}


// function canMoveChar(charType, fromBox, toBox) {
//   console.log(charType);
//   console.log(fromBox);
//   console.log(toBox)
//   if(charType === "letter") {
//     if(toBox === "operand") {
//       return false;
//     }
//     else {
//       return true;
//     }
//   }
//   else if(charType === "operand") {
//     if(toBox === "letter") {
//       return false;
//     }
//     else {
//       return true;
//     }
//   }
// }

function moveOperandChar(charID, fromBox, toBox) {
  if(fromBox === "solution" && toBox === "operand") {
    removeChar(charID);
  }
  else if(fromBox === "operand" && toBox === "solution") {
    duplicateChar(charID, fromBox, toBox)
  }
}

function moveLetterChar(charID, fromBox, toBox) {
  addChar(charID, fromBox, toBox);
}


function duplicateChar(charID, fromBox, toBox) {
  console.log("duplicate " + charID + " from " + fromBox + " to " + toBox);
}

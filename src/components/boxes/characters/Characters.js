import React from 'react';
import Character from './Character';
import { observe } from '../../game/GameLaws';


class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      value: props.value,
      characterArr: this.characterArrConstructor(props.type, props.value)
    }
    this.addChar = this.addChar.bind(this);
  }

  characterArrConstructor(type, word) {
    let characterArr = [];
    if(word) {
      for(var i = 0; i < word.length; i ++) {
        characterArr.push(
          <Character key={i} value={word[i]} type={type}/>
        )
      }
    }
    return characterArr;
  }



  addChar(char) {
    console.log(char)
    let characterArr = this.state.characterArr;
    let characterArrLen = characterArr.length;
    let character = <Character key={characterArrLen} value={char.value} type={char.type} />
    console.log(characterArr);
  }

  render() {
    let charToAdd = this.props.charToAdd;
    if(charToAdd != "") {
      // console.log("we got a char to add")
      this.addChar(charToAdd);
    }
    return(
      <div className="characters">
        {this.state.characterArr}
      </div>
    )
  }
}

export default Characters;

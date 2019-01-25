import React from 'react';
// import Character from './Character';
import Character from '../../../containers/Character'
import { observe } from '../../game/GameLaws';


class Characters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let type = this.props.type;
    let value = []
    if(type === "letter") {
      value = this.props.letterCharArr;
    }
    else if(type === "operand") {
      value = this.props.operandCharArr;
    }
    else if(type === "solution") {
      value = this.props.solutionCharArr;
    }
    console.log()
    let characterArr = []
    for(var i = 0; i < value.length; i ++) {
      characterArr.push(
        <Character key={i} value={value[i]} type={type}/>
      )
    }

    return(
      <div className="characters">
        {characterArr}
      </div>
    )
  }
}

export default Characters;

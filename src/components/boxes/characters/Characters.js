import React from 'react';
import Character from '../../../containers/Character'


class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noGaps: false,
    }
  }



  render() {
    // this is wild inefficient but it works will clean up later in
    // getting this logic out of the render function
    let boxType = this.props.boxType;
    let value = [];
    if(boxType === "letter") {
      value = this.props.letterCharArr;
    }
    else if(boxType === "operand") {
      value = this.props.operandCharArr;
    }
    else if(boxType === "solution") {
      value = this.props.solutionCharArr;
    }
    let operandValuesArr = ["+","-","×","÷","(",")"];
    let characterArr = []
    for(var i = 0; i < value.length; i ++) {
      characterArr.push(
        <Character key={i}
                   value={value[i]}
                   currentBox={this.props.currentBox}
                   removeGaps={this.removeGaps}
                   length={value.length}
                   />
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

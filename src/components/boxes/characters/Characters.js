import React from 'react';
import Character from '../../../containers/Character'


class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyOver: ''
    }
    this.isCurrentlyOver = this.isCurrentlyOver.bind(this);
    this.removeGap = this.removeGap.bind(this);
    this.removeAllGaps = this.removeAllGaps.bind(this);
  }

  removeAllGaps() {
    console.log("remove all gaps");
  }

  isCurrentlyOver(item) {
    if(!this.props.isOverNothing) {
      this.setState({
        currentlyOver: item
      })
    }
  }

  removeGap() {
    this.setState({
      currentlyOver: ''
    })
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
                   isCurrentlyOver={this.isCurrentlyOver}
                   currentlyOver={this.state.currentlyOver}
                   removeGap={this.removeGap}
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

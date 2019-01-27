import React from 'react';
import Character from '../../../containers/Character'


class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyOver: ''
    }
    this.isCurrentlyOver = this.isCurrentlyOver.bind(this);
  }

  isCurrentlyOver(item) {
    // console.log(item);
    this.setState({
      currentlyOver: item
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
    let letterType = "";
    let characterArr = []
    // console.log(this.props);
    let arrType = null;
    for(var i = 0; i < value.length; i ++) {
      // if(operandValuesArr.includes(value[i])) {
      //   letterType = "operand";
      //   arrType = this.operandCharArr;
      // }
      // else if(){
      //   letterType = "letter";
      // }
      let isCurrentlyOver =

      characterArr.push(
        <Character key={i}
                   value={value[i]}
                   currentBox={this.props.currentBox}
                   isCurrentlyOver={this.isCurrentlyOver}
                   currentlyOver={this.state.currentlyOver}
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

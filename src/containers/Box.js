import React from 'react';
import Characters from '../components/boxes/characters/Characters';
import { DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';

import { connect } from 'react-redux';
import * as actions from '../actions';

import {arrayIsEqual, lengthOfToBox} from '../functions/index.js';
import * as gameLaws from '../components/game/GameLaws';

const boxTarget = {
  hover(props, monitor, component) {
  },
  drop(props, monitor, component) {
    //returns false if dropped in character
    // this.isOverNothing();
    // console.log(component);
    // component.removeHover()
    let exclusivelyDropped = monitor.isOver({ shallow: true });
    if(exclusivelyDropped) {
      let char = monitor.getItem().props;
      let fromBox = char.currentBox;
      let index = char.value.index;
      let toBox = component.props;
      let dispatch = props.dispatch;

      const hoverBoundingRect = (findDOMNode(
  			component,
  		)).getBoundingClientRect();

      let leftX = hoverBoundingRect.left;
      let rightX = hoverBoundingRect.right;
      let middleX = (leftX + rightX)/2;
      let mouseX = monitor.getClientOffset().x;

      let dropIndex = 0;
      if(mouseX > middleX) {
        dropIndex = lengthOfToBox(toBox);
      }

      if(gameLaws.canMoveChar(char, toBox)) {
        gameLaws.moveChar(char.value, dropIndex, fromBox, toBox, dispatch);
      }
      else {
        console.log("cant move")
      }
    }
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver({shallow: true})
  }
}

class Box extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let boxRed = (parseInt(255 - this.props.boxColor[0])).toString()
    let boxGreen = (parseInt(255 - this.props.boxColor[1])).toString()
    let boxBlue = (parseInt(255 - this.props.boxColor[2])).toString()
    let boxColor = "rgb(" + boxRed + ", " + boxGreen + "," + boxBlue + ")"

    let boxBorderRed = (parseInt(255 - this.props.boxBorderColor[0])).toString()
    let boxBorderGreen = (parseInt(255 - this.props.boxBorderColor[1])).toString()
    let boxBorderBlue = (parseInt(255 - this.props.boxBorderColor[2])).toString()
    let boxBorderColor = "2px solid rgb(" + boxBorderRed + ", " + boxBorderGreen + "," + boxBorderBlue + ")"

    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div className="box" style={{backgroundColor: boxColor, border: boxBorderColor}}>
        <Characters
          boxType={this.props.type}
          letterCharArr={this.props.letterCharArr}
          operandCharArr={this.props.operandCharArr}
          solutionCharArr={this.props.solutionCharArr}
          currentBox={this.props}
        />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state;
}

Box = DropTarget('character', boxTarget, collect)(Box);
export default connect(mapStateToProps)(Box);

import React from 'react';
import Characters from '../components/boxes/characters/Characters';
import { DropTarget } from 'react-dnd';

import { connect } from 'react-redux';
import * as actions from '../actions';

import {arrayIsEqual, lengthOfToBox} from '../functions/index.js';
import * as gameLaws from '../components/game/GameLaws';

const boxTarget = {
  hover(props, monitor, component) {
  },
  drop(props, monitor, component) {
    //returns false if dropped in character
    let exclusivelyDropped = monitor.isOver({ shallow: true });
    if(exclusivelyDropped) {

      let char = monitor.getItem().props;
      let fromBox = char.currentBox;
      let index = char.value.index;
      let toBox = component.props;
      let dispatch = props.dispatch;

      if(gameLaws.canMoveChar(char, toBox)) {
        gameLaws.moveChar(char.value, lengthOfToBox(toBox), fromBox, toBox, dispatch);
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
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div className="box">
        <Characters
          boxType={this.props.type}
          letterCharArr={this.props.letterCharArr}
          operandCharArr={this.props.operandCharArr}
          solutionCharArr={this.props.solutionCharArr}
          currentBox={this.props} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state;
}

Box = DropTarget('character', boxTarget, collect)(Box);
export default connect(mapStateToProps)(Box);

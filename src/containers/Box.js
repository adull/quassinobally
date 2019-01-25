import React from 'react';
import Characters from '../components/boxes/characters/Characters';
import { DropTarget } from 'react-dnd';

import { connect } from 'react-redux';
import * as actions from '../actions';

import arrayIsEqual from '../functions/index.js';
import * as gameLaws from '../components/game/GameLaws';

console.log(gameLaws);

const boxTarget = {
  drop(props, monitor, component) {
    let char = monitor.getItem().props;
    let fromBox = char.currentBox;
    let index = char.value.index;
    let toBox = component.props;
    let dispatch = props.dispatch;
    if(gameLaws.canMoveChar(char, toBox)) {
      console.log(char);
      gameLaws.moveChar(char.value, index, fromBox, toBox, dispatch);
    }
    else {
      console.log("cant move")
    }
  },
  hover(props, monitor, component) {
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

class Box extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props)
  }
  render() {
    // console.log(this.props.solutionCharArr)
    const { connectDropTarget } = this.props;

    let type = ""
    if(this.props.type === "solution") {

    }
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

import React from 'react';
import Characters from '../components/boxes/characters/Characters';
import { DropTarget } from 'react-dnd';

import { connect } from 'react-redux';
import * as actions from '../actions';

import arrayIsEqual from '../functions/index.js';

const boxTarget = {
  // console.log(dispatch);
  drop(props, monitor, component) {
    let char = monitor.getItem().props;
    let box = component.props;
    let dispatch = props.dispatch;
    dispatch({
      type: 'ADD_CHAR',
      char: char,
      box: box
    })
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
    console.log(props)
  }
  render() {
    console.log(this.props.solutionCharArr)
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div className="box">
        <Characters
          type={this.props.type}
          letterCharArr={this.props.letterCharArr}
          operandCharArr={this.props.operandCharArr}
          solutionCharArr={this.props.solutionCharArr} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state;
}

Box = DropTarget('character', boxTarget, collect)(Box);
export default connect(mapStateToProps)(Box);

import React from 'react';
import { DragSource } from 'react-dnd';

import { connect } from 'react-redux';
import * as actions from '../actions';

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const charSource = {
  beginDrag(props) {
    console.log("begin drag")
    return {props};
  },
  endDrag(props) {
    return{props};
  }
};

const mapStateToProps = state => {
  return {
    letterCharArr: state.letterCharArr
  }
}

// const mapDispatchToProps =

function Character({value, type, connectDragSource, isDragging }) {
  return connectDragSource(
    <div className={"character " + type + "-character"}>
      {value}
    </div>
  )
}

Character = DragSource('character', charSource, collect)(Character);
export default connect(mapStateToProps)(Character);

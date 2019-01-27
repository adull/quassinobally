import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom'

import { connect } from 'react-redux';
import * as actions from '../actions';

function collectDrag(connect, monitor) {
  // console.log(connect)
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

function collectDrop(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    // isOver: monitor.isOver()
    isOver: monitor.isOver()
  }
}

const charSourceDrag = {
  beginDrag(props) {
    // console.log("begin drag")
    return {props};
  },
  endDrag(props) {
    return{props};
  }
};

const charSourceDrop = {
  hover(props, monitor, component) {
    let c = component.getDecoratedComponentInstance()
    props.isCurrentlyOver(props.value.identifier)
  },
  drop(props, monitor, component) {
  }
};

const mapStateToProps = state => {
  return state;
}

export class Character extends React.Component {
  constructor(props) {
    super();
    this.state = {
      pushLeft: false
    }
  }
  render(){

    // console.log(this.state)
    console.log(this.props);
    let currentlyOver = this.props.currentlyOver;
    let identifier = this.props.value.identifier;
    const { connectDropTarget, connectDragSource } = this.props;
    let pushLeft = (currentlyOver === identifier) ? "push-left" : ""

    return connectDragSource(connectDropTarget(
      <div className={"character " + this.props.value.type + "-character " + pushLeft}>
        {this.props.value.value}
      </div>
    ))
  }
}



Character = DragSource('character', charSourceDrag, collectDrag)(Character);
Character = DropTarget('character', charSourceDrop, collectDrop)(Character);
export default connect(mapStateToProps)(Character);

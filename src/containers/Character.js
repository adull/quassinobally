import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom'

import { connect } from 'react-redux';
import * as actions from '../actions';

import getIndexOfHash from '../functions';
import * as gameLaws from '../components/game/GameLaws';


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
    // isOver: monitor.isOver()
    isOver: monitor.isOver({shallow: true})
  }
}

const charSourceDrag = {
  beginDrag(props) {
    // console.log("begin drag")
    return {props};
  },
  endDrag(props) {
    // console.log(props);
    props.removeGap();
    return{props};
  }
};

const charSourceDrop = {
  hover(props, monitor, component) {
    let c = component.getDecoratedComponentInstance()
    props.isCurrentlyOver(props.value.identifier)
  },
  drop(props, monitor, component) {
    let dispatch = props.dispatch;
    let hash = props.currentlyOver;
    let boxType = props.currentBox.type;

    let box = monitor.getItem().props;
    let fromBox = box.currentBox.type;
    let toBox = component.props.currentBox;

    let dropIndex = getIndexOfHash(hash, toBox);


    if(gameLaws.canMoveChar(props, toBox)) {
      gameLaws.moveChar(props.value.value, dropIndex, fromBox, toBox, dispatch);
    }
    else {
      console.log("cant move")
    }
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
    // console.log(this.props);
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

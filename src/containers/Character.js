import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom'

import { connect } from 'react-redux';
import * as actions from '../actions';

import * as functions from '../functions';
import * as gameLaws from '../components/game/GameLaws';


function collectDrag(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

function collectDrop(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOverCurrent: monitor.isOver({shallow: true})
  }
}

const charSourceDrag = {
  beginDrag(props) {
    let dispatch = props.dispatch;
    dispatch({
      type: 'TOGGLE_GAPS'
    })
    return {props};
  },
  endDrag(props) {
    let dispatch = props.dispatch;
    dispatch({
      type: 'TOGGLE_GAPS'
    })
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
    let char = monitor.getItem().props.value;
    let dropOnHash = props.currentlyOver;
    let fromBox = monitor.getItem().props.currentBox;
    let toBox = props.currentBox;
    let toBoxArr = functions.getToBoxArr(toBox);
    let dropIndex = functions.getIndexOfHash(dropOnHash, toBoxArr);


    if(gameLaws.canMoveChar(props, toBox)) {
      gameLaws.moveChar(char, dropIndex, fromBox, toBox, dispatch);
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
      type: props.value.type,
      value: props.value.value,
      identifier: props.value.identifier,
      pushLeft: false
    }
  }
  render(){
    let currentlyOver = this.props.currentlyOver;
    let identifier = this.props.value.identifier;
    const { connectDropTarget, connectDragSource } = this.props;
    let pushLeft = (currentlyOver === identifier && !this.props.noGaps) ? "push-left" : ""

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

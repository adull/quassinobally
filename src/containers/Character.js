import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';

import { connect } from 'react-redux';
import * as actions from '../actions';

import * as functions from '../functions';
import * as gameLaws from '../components/game/GameLaws';

import cockSound from '../assets/audio/cock.wav';


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
  beginDrag(props, monitor, component) {
    // console.log(props)
    console.log(component)
    // this.toggleOpacity();
    let cockAudio = new Audio(cockSound);
    cockAudio.play();
    let dispatch = props.dispatch;
    dispatch({
      type: 'TOGGLE_GAPS'
    })
    return {props};
  },
  isDragging(props, monitor, component) {

  },
  endDrag(props) {
    let dispatch = props.dispatch;
    dispatch({
      type: 'TOGGLE_GAPS'
    })
    // props.removeGap();
    return{props};
  }
};

const charSourceDrop = {
  hover(props, monitor, component) {
    let c = component.getDecoratedComponentInstance()
    c.hoveringOver();
  },
  drop(props, monitor, component) {
    // props.isCurrentlyOver('')
    let c = component.getDecoratedComponentInstance()
    c.removeHoverEffect();
    const hoverBoundingRect = (findDOMNode(
			component,
		)).getBoundingClientRect();

    let leftX = hoverBoundingRect.left;
    let rightX = hoverBoundingRect.right;
    let middleX = (leftX + rightX)/2;
    let mouseX = monitor.getClientOffset().x;

    let addToIndex = 0;
    if(mouseX > middleX) {
      addToIndex = 1;
    }

    let dispatch = props.dispatch;
    let char = monitor.getItem().props.value;
    let dropOnHash = props.currentlyHovering;
    let fromBox = monitor.getItem().props.currentBox;
    let toBox = props.currentBox;
    let toBoxArr = functions.getToBoxArr(toBox);
    let dropIndex = functions.getIndexOfHash(dropOnHash, toBoxArr) + addToIndex;

    if(gameLaws.canMoveChar(char, toBox)) {
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
    }
    // this.getItemStyles = this.getItemStyles.bind(this);
  }

  hoveringOver() {
    gameLaws.hoveringOver(this.state.identifier, this.props.dispatch)
  }

  removeHoverEffect() {
    gameLaws.removeHoverEffect(this.props.dispatch);
  }

  render() {
    // const hoverBoundingRect = (findDOMNode(
		// 	this
		// )).getBoundingClientRect();
    // console.log(hoverBoundingRect);
    let identifier = this.props.value.identifier;
    const { connectDropTarget, connectDragSource } = this.props;
    // console.log(this.props)
    let pushLeft = this.state.identifier === this.props.currentlyHovering ? "push-left" : "" ;
    let isDragging = this.props.isDragging ? "dragging" : "" ;

    let red = (parseInt(255 - this.props.letterColor[0])).toString()
    let green = (parseInt(255 - this.props.letterColor[1])).toString()
    let blue = (parseInt(255 - this.props.letterColor[2])).toString()
    let letterColor = "rgb(" + red + ", " + green + "," + blue + ")"

    return connectDragSource(connectDropTarget(
      <div className={"length-" + this.props.length + " character " + this.props.value.type + "-character " + pushLeft + " " + isDragging}
           style={{color: letterColor, fontSize: functions.calcFontSize(this.props.length)}}>
        {this.props.value.value}
      </div>
    ))
  }
}



Character = DragSource('character', charSourceDrag, collectDrag)(Character);
Character = DropTarget('character', charSourceDrop, collectDrop)(Character);
export default connect(mapStateToProps)(Character);

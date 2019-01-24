import React from 'react';
import { DragSource } from 'react-dnd';

function collect(connect, monitor, fuck) {
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

function Character({value, type, connectDragSource, isDragging }) {
  return connectDragSource(
    <div className={"character " + type + "-character"}>
      {value}
    </div>
  )
}


export default DragSource('character', charSource, collect)(Character);

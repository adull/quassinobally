import React from 'react';
import Characters from './characters/Characters';
import { DropTarget } from 'react-dnd';
import { moveChar } from '../game/GameLaws';

const boxTarget = {
  drop(props, monitor, component) {
    let item = monitor.getItem().props;
    let box = props;
    moveChar(item, box);


    // moveChar()

    // let item = monitor.getItem().props;
    //
    // dropChar(item.value, item.type, component);
    // return monitor.getItem();
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
    this.state = {
      type: props.type,
      value: props.value,
      charToAdd: ''
    }
    this.addChar = this.addChar.bind(this);
  }

  addChar(char, charType) {
    char = {
      value: char,
      type: charType
    }
    this.setState({
      charToAdd: char
    })
    // console.log(this.state);
  }

  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div className="box">
        <Characters type={this.state.type} value={this.state.value} charToAdd={this.state.charToAdd} />
      </div>
    )
  }

}

export default DropTarget('character', boxTarget, collect)(Box);

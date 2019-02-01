import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return state;
}

class Modal extends React.Component {
  stopClose(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div className="modal-backdrop">
        <div className={"modal"} onClick={(e) => this.stopClose(e)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps)(Modal);

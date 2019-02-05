import React from 'react'
import ModalButton from '../../containers/ModalButton';

class Dictionary extends React.Component {
  render() {
    if(this.props.show) {
      return (
        <div className="modal-content">
          A = 1 <br />
          B = 2 <br />
          C = 3 <br />
          D = 4 <br />
          E = 5 <br />
          F = 6 <br />
          G = 7 <br />
          H = 8 <br />
          I = 9 <br />
          J = 10 <br />
          K = 11 <br />
          L = 12 <br />
          M = 13 <br />
          N = 14 <br />
          O = 15 <br />
          P = 16 <br />
          Q = 17 <br />
          R = 18 <br />
          S = 19 <br />
          T = 20 <br />
          U = 21 <br />
          V = 22 <br />
          W = 23 <br />
          X = 24 <br />
          Y = 25 <br />
          Z = 26 <br />
          <ModalButton onClick={this.props.closeModal} text="Close" />
        </div>
      )
    }
    else {
      return null;
    }
  }
}

export default Dictionary

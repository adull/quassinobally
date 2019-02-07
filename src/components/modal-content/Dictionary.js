import React from 'react'
import ModalButton from '../../containers/ModalButton';

class Dictionary extends React.Component {
  render() {
    if(this.props.show) {
      return (
        <div className="modal-content dictionary">
          <div className="dictionary-columns">
            <div className="dictionary-column">
              A = 1 <br />
              C = 3 <br />
              E = 5 <br />
              G = 7 <br />
              I = 9 <br />
              K = 11 <br />
              M = 13 <br />
              O = 15 <br />
              Q = 17 <br />
              S = 19 <br />
              U = 21 <br />
              W = 23 <br />
              Y = 25 <br />
            </div>
            <div className="dictionary-column">
              B = 2 <br />
              D = 4 <br />
              F = 6 <br />
              H = 8 <br />
              J = 10 <br />
              L = 12 <br />
              N = 14 <br />
              P = 16 <br />
              R = 18 <br />
              T = 20 <br />
              V = 22 <br />
              X = 24 <br />
              Z = 26 <br />
            </div>
          </div>
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

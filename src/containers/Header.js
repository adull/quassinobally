import React from 'react';
import { connect } from 'react-redux';
import * as appLaws from '../components/game/AppLaws';

function mapStateToProps(state, ownProps) {
  return state;
}

class Header extends React.Component {
  constructor() {
    super();
    this.setPageHome = this.setPageHome.bind(this);
  }

  setPageHome() {
    appLaws.setPage('home', this.props.dispatch)
  }

  render() {
    return(
      <div className="header">
        <div className="header-back-button" onClick={this.setPageHome}>
          <img src={require('../assets/svg/back.svg')} />
          <div className="header-back-button-text">Home</div>
        </div>

      </div>
    )
  }
}

export default connect(mapStateToProps)(Header);

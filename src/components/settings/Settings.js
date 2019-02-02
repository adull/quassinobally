import React from 'react'
import Header from '../../containers/Header';
import ColorPicker from './ColorPicker';
import ColorDisplay from './ColorDisplay';

class Settings extends React.Component {
  constructor() {
    super();
    console.log(this.props)
    this.state = {
      backgroundColor: "cool"
    }
    this.updateBackgroundColor = this.updateBackgroundColor.bind(this);
  }

  updateBackgroundColor(color) {
    this.setState({
      backgroundColor: color
    })
  }

  render() {
    return(
      <div className="page settings-page">
        <Header />
        <div className="settings-modifier">
          <div className="background-color">
            Background Color
          </div>
          <ColorPicker onUpdate={this.updateBackgroundColor}/>
          <ColorDisplay value="background"/>
        </div>
      </div>
    )
  }
}

export default Settings;

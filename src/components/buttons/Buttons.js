import React from 'react';
import Button from './Button';

class Buttons extends React.Component {
  render() {
    return(
      <div className="buttons">
        <Button type="one" />
        <Button type="two" />
        <Button type="three" />
      </div>
    )
  }
}

export default Buttons;

import React from 'react';
import Button from '../../containers/Button';

class Buttons extends React.Component {
  render() {
    return(
      <div className="buttons">
        <Button type="one" />
        <Button type="submit" />
        <Button type="three" />
      </div>
    )
  }
}

export default Buttons;

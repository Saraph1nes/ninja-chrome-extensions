import React, { Component } from 'react';

import './index.less';

class GridContainer extends Component {
  render() {
    return (
      <div className='grid-container'>
        {this.props.children}
      </div>
    );
  }
}

export default GridContainer;
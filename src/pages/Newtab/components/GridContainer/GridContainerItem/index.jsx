import React from 'react';

import './index.less';

const GridContainerItem = (props) => (
  <div
    className={`grid-container-item item-size-${props.size}`}
    draggable={props.draggable}
    onDragStart={props.onDragStart}
    onDragEnd={props.onDragEnd}
  >
    {props.children}
    <div className="grid-container-item-label" title={props.label}>
      {props.label}
    </div>
  </div>
);

GridContainerItem.defaultProps = {
  label: '标签',
  size: 'small',
  jump: '#',
  draggable: false,
  onDragStart: () => {},
  onDragEnd: () => {},
};

export default GridContainerItem;

import React, { useState } from 'react';
import NavPanelModal from '../NavPanelModal';
import ImgIcon from '../ImgIcon';

import { IMG_MAP } from '../../../../../common/constant';

import './index.less';

const Folder = (props) => {
  const { dataset, onClick } = props;
  return (
    <div className="folder" onClick={onClick}>
      <div className="folder-grid-wrapper">
        {dataset
          .filter((item) => !item.children)
          .slice(0, 9)
          .map((item) => (
            <ImgIcon
              className="folder-img-icon"
              key={item.id}
              src={IMG_MAP[item.url.split('/')[2]] || item.img}
              alt={item.title}
            />
            // <img key={item.id} src={IMG_MAP[item.url.split('/')[2]] || item.img} alt="" width={16} height={16} />
          ))}
      </div>
    </div>
  );
};

export default Folder;

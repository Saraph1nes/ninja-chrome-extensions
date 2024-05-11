import React, { useEffect, useState } from 'react';
import GridContainer from '../GridContainer';
import GridContainerItem from '../GridContainer/GridContainerItem';
import Weather from './Weather';

import './index.less';
import Folder from './Folder';
import NavPanelModal from './NavPanelModal';
import { IMG_MAP } from '../../../../common/constant';
import ImgIcon from './ImgIcon';

const NavPanel = (props) => {
  const { dataSet } = props;
  const [dialogData, setDialogData] = useState([]);

  const onDragStart = (e) => {
    console.log('onDragStart', e.target);
  };

  const onDragEnd = (e) => {
    console.log('onDragEnd', e.target);
  };

  const handleDialog = (data) => {
    setDialogData(data);
  };

  return (
    <>
      <div className="nav-panel">
        <div className="nav-panel-container">
          <GridContainer>
            {dataSet.length > 0 &&
              dataSet.map((item) => {
                if (item.type === 'url') {
                  return (
                    <GridContainerItem
                      id={`nav-panel-${item.label}`}
                      key={item.label}
                      className="grid-container-item"
                      label={item.label}
                      size="small"
                    >
                      <ImgIcon
                        className="grid-container-item-img-icon"
                        alt={item.label}
                        src={item.img}
                        onClick={() => {
                          window.open(item.url, '_blank');
                        }}
                      />
                    </GridContainerItem>
                  );
                }
                if (item.type === 'weather') {
                  return (
                    <GridContainerItem
                      key={item.label}
                      className="grid-container-item"
                      label={item.label}
                      size={item.size}
                    >
                      <Weather title={props.label} draggable onDragStart={onDragStart} onDragEnd={onDragEnd} />
                    </GridContainerItem>
                  );
                }
                if (item.type === 'folder') {
                  return (
                    <GridContainerItem
                      key={item.label}
                      className="grid-container-item"
                      label={item.label}
                      size={item.size}
                    >
                      <Folder dataset={item.children} onClick={() => handleDialog(item.children)} />
                    </GridContainerItem>
                  );
                }
                return null;
              })}
          </GridContainer>
        </div>
      </div>
      <NavPanelModal
        visible={dialogData.length > 0}
        onCancel={() => {
          setDialogData([]);
        }}
      >
        {dialogData.length > 0 && (
          <NavPanel
            dataSet={dialogData.map((itm) => {
              return {
                label: itm.title,
                url: itm.url,
                type: 'url',
                img: IMG_MAP[itm.url.split('/')[2]] || `https://api.iowen.cn/favicon/${itm.url.split('/')[2]}.png`,
              };
            })}
          />
        )}
      </NavPanelModal>
    </>
  );
};
export default NavPanel;

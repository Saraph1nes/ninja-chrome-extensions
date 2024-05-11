import React, { useEffect, useState } from 'react';
import NavBar from './Navbar';
import SearchPanel from './SearchPanel';
import NavPanel from './NavPanel';
import { EZR_TOOLS } from '../../../common/constant';
import { setLocalStorageItem } from '../../../common/utils/handleLocalStorage';
import './NewTab.less';

const initContentList = [
  {
    title: 'ninja-weather-天气-medium',
    url: 'edge://newtab',
  },
  {
    title: '百度',
    url: 'https://www.baidu.com',
  },
  {
    title: 'bilibili',
    url: 'https://www.bilibili.com/',
  },
  {
    title: '力扣',
    url: 'https://leetcode.cn/',
  },
];

const NewTab = () => {
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    initData();
  }, []);

  const initBookmark = async () => {
    const createRes = await chrome.bookmarks.create({
      title: 'ninja panel',
    });
    setLocalStorageItem('ninja-panel-id', createRes.id);
    for (const item of initContentList) {
      await chrome.bookmarks.create({
        ...item,
        parentId: createRes.id,
      });
    }
    const ezrFolder = await chrome.bookmarks.create({
      title: '驿氪',
      parentId: createRes.id,
    });
    for (const ezrToolsItm of EZR_TOOLS) {
      await chrome.bookmarks.create({
        title: ezrToolsItm.title,
        url: ezrToolsItm.url,
        parentId: ezrFolder.id,
      });
    }
  };

  const initData = async () => {
    const tree = await getChromeBookmarkTree();
    const res = [
      ...tree.map((item) => {
        if (item?.children) {
          return {
            size: 'small',
            label: item.title,
            type: 'folder',
            children: item.children.map((childItm) => {
              return {
                ...childItm,
                img: `https://api.iowen.cn/favicon/${childItm.url.split('/')[2]}.png`,
              };
            }),
          };
        } else {
          if (item.title.includes('ninja-')) {
            const split = item.title.split('-');
            return {
              size: split[3],
              label: split[2],
              type: split[1],
              url: item.url,
            };
          }
          return {
            size: 'small',
            label: item.title,
            type: 'url',
            url: item.url,
            img: `https://api.iowen.cn/favicon/${item.url.split('/')[2]}.png`,
          };
        }
      }),
    ];
    setDataset(res);
  };

  const getChromeBookmarkTree = async () => {
    // 收藏夹
    let [bookmarkTreeNodes] = await chrome.bookmarks.getTree();
    // 0-收藏夹 1-其他收藏夹 2-移动收藏夹
    // 收藏夹栏内容
    const tree = bookmarkTreeNodes.children[1];
    const findNinja = tree.children.find((item) => item.title === 'ninja panel');
    if (!findNinja) {
      await initBookmark();
      window.location.reload();
      return;
    }
    return findNinja.children;
  };

  return (
    <div className="new-tab">
      <NavBar />
      <SearchPanel />
      <NavPanel dataSet={dataset} />
      {/*<div className='new-tab-header'>*/}
      {/*  <NavBar />*/}
      {/*</div>*/}
      {/*<div className='new-tab-content'>*/}
      {/*  <div className='new-tab-content-header'>*/}
      {/*    <SearchPanel />*/}
      {/*    <QuickNav />*/}
      {/*  </div>*/}
      {/*  <div className='new-tab-content-main'>*/}
      {/*    <MainLeft />*/}
      {/*    <MainCenter />*/}
      {/*    /!*<MainRight />*!/*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<Footer>*/}
      {/*  <div style={{textAlign:'center'}}>驿氪前端 © 2022 Created by EZR</div>*/}
      {/*</Footer>*/}
    </div>
  );
};

export default NewTab;

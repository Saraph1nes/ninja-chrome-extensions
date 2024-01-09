import React, { useState } from 'react';
import { getLocalStorageItem, setLocalStorageItem } from '@/common/utils/handleLocalStorage';
import { SearchOutlined } from '@ant-design/icons';
import { searchSelectorList } from './constant';

import './index.less';

const SearchPanel = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectId, setSelectId] = useState(Number(getLocalStorageItem('selectId')) || 0);
  const [suggestList, setSuggestList] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [inputFocus, setInputFocus] = useState(false);

  const onInput = (e) => {
    setInputFocus(true);
    setSearchInput(e.target.value);
    suggestion(e.target.value);
    if (e.target.value === '') {
      setActiveId('');
    }
  };

  const req = (url, callback) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        callback(xhr.response);
      }
    };
    xhr.open('GET', url, true);
    xhr.send('');
  };

  const suggestion = (val) => {
    req(`http://suggestion.baidu.com/su?wd=${val}&cb=window.baidu.sug`, (resJson) => {
      // console.log(resJson);
      const reg = new RegExp('s:(.*?)}\\);');
      const match = resJson.match(reg)[1];
      const arr = JSON.parse(match);
      setSuggestList(arr);
    });
    // req(`https://api.bing.com/qsonhs.aspx?type=cb&q=${val}`, (resJson)=>{
    //   const res = JSON.parse(resJson).AS.Results || [];
    //   const sug = res.length > 0 ? res[res.length - 1].Suggests : []
    //   setSuggestList(sug)
    // })
  };

  const onChangeSearchChannel = (e) => {
    console.log(e.code);
    // TODO: 组合键预留，实现shift + tab 反向循环
    if (e.code === 'ArrowDown') {
      let newId = activeId ? ++activeId.split('-')[1] : '0';
      if (newId === suggestList.length) {
        newId = 0;
      }
      setActiveId(`item-${newId}`);
      const item = document.querySelector(`#item-${newId}`);
      setSearchInput(item.innerText);
      e.preventDefault();
      return;
    }
    if (e.code === 'ArrowUp') {
      let newId = activeId ? --activeId.split('-')[1] : '0';
      if (newId === -1) {
        newId = suggestList.length - 1;
      }
      setActiveId(`item-${newId}`);
      const item = document.querySelector(`#item-${newId}`);
      setSearchInput(item.innerText);
      e.preventDefault();
      return;
    }
    if (e.code === 'Enter' && e.key !== 'Process') {
      search(searchInput);
      return;
    }
    if (e.code === 'Tab') {
      e.preventDefault();
      let tempId = selectId + 1 === searchSelectorList.length ? 0 : selectId + 1;
      setSelectId(tempId);
      setLocalStorageItem('selectId', tempId);
      return;
    }
    if (e.code === 'Escape') {
      setActiveId('')
      setInputFocus(false)
      return
    }
    setActiveId('')
  };

  const search = (value = '') => {
    setActiveId('');
    setInputFocus(false)
    window.open(`${searchSelectorList[selectId].url}${value}`, '_blank');
  };

  const onSuggestListClick = (item) => {
    setSearchInput(item.target.innerText);
    search(item.target.innerText);
  };

  return (
    <div className="search-wrapper">
      <div
        className={`search-panel ${
          suggestList.length > 0 && searchInput.length > 0 && inputFocus ? 'search-active' : ''
        }`}
      >
        <div className="search-input-area">
          <div
            className="search-select-btn"
            style={{
              background: `url(${
                searchSelectorList.find((item) => item.id === selectId).src
              }) no-repeat center / cover`,
            }}
            // size='large'
            // value={selectId}
            // onChange={(e) => {
            //   setLocalStorageItem('selectId', e);
            //   setSelectId(e);
            // }}
          >
            {/*{searchSelectorList.map((v, i) => {*/}
            {/*  return (*/}
            {/*    <option key={i}*/}
            {/*            value={v.id}*/}
            {/*            label={v.value}>*/}
            {/*      <img alt=''*/}
            {/*           style={{ width: '28px', height: '28px' }}*/}
            {/*           src={v.src}*/}
            {/*           className='search-selector-img' />*/}
            {/*      <span className='options-text'>{v.text}</span>*/}
            {/*    </option>*/}
            {/*  );*/}
            {/*})}*/}
          </div>
          <input
            className={`search-input`}
            placeholder="Tab切换搜索引擎  |  回车搜索"
            autoFocus
            value={searchInput}
            onChange={onInput}
            onKeyDown={onChangeSearchChannel}
            onClick={() => {
              console.log('onfocus');
              setInputFocus(true);
            }}
            onBlur={() => {
              console.log('onblur');
              setInputFocus(false);
            }}
          />
          <div className="search-btn" onClick={() => search(searchInput)}>
            <SearchOutlined className="search-btn-icon" height={30} width={30} />
          </div>
        </div>

        <div
          className={`suggest-panel-wrapper ${
            suggestList.length > 0 && searchInput.length > 0 && inputFocus ? '' : 'hidden'
          }`}
        >
          <ul
            className="suggest-panel"
            onClick={onSuggestListClick}
            onMouseOver={(e) => {
              setActiveId(e.target.id);
            }}
          >
            {suggestList.map((item, index) => (
              <li
                id={`item-${index}`}
                key={item}
                className={`suggest-panel-item ${`item-${index}` === activeId ? 'active' : ''}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;

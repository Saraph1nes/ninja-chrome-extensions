import React, { Component, useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

const Hitokoto = (props) => {
  const hitokotoStore = props.HitokotoStore;

  useEffect(() => {
    fetchHitokoto();
  }, []);

  const fetchHitokoto = async () => {
    await hitokotoStore.getHitokoto();
  };

  return <div title='换一换'
              style={{ cursor: 'pointer' }}
              onClick={fetchHitokoto}>
    {`${hitokotoStore.data.hitokoto} --  ${hitokotoStore.data.from_who || ''} ${hitokotoStore.data.from ? `【${hitokotoStore.data.from}】` : ''}`}
  </div>;
};

export default inject('HitokotoStore')(observer(Hitokoto));
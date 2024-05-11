import React, { useEffect, useState } from 'react';
import { RedoOutlined, LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';

import './index.less';
import { Button, Image } from 'antd';

const CatImg = () => {

  const [imgUrl, setImgUrl] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImg();
  }, []);

  const fetchImg = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('https://api.thecatapi.com/v1/images/search?limit=1');
      if (data[0] && data[0].url) {
        setImgUrl(data[0].url);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='CatImg'>
      <div className='Title'>
        <span>猫猫图</span>
        <Button loading={loading}
                onClick={() => fetchImg()}>换一张</Button>
      </div>
      <div className='content'>
        {
          loading ? <span><LoadingOutlined />猫猫图在路上啦~</span> : <Image loading='eager'
                                                 src={imgUrl} />
        }
      </div>
    </div>
  );
};

export default CatImg;

import axios from 'axios';

/**
 * 查询一言
 */
const getHitokoto = async () => {
  const res = await axios.get('https://v1.hitokoto.cn?c=i&c=k');
  return res.data;
};

export { getHitokoto };

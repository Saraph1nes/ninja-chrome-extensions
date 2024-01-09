import axios from 'axios';
import qs from 'qs';

/**
 * 惊觉社分类接口
 * @param param
 */
const jjsApi = async () => {
  return await axios.get('https://jue.leheavengame.com/api/view/home');
};

/**
 * 掘金文章接口
 * @param param
 */
const juejinApi = async (param) => {
  return await axios.post('https://e.juejin.cn/resources/gold', param);
};

/**
 * 驿氪语雀文章接口
 */
const ezrYuQueApi = async (param) => {
  let res;
  try {
    res = await axios({
      url: `http://192.168.12.213:1000/v1/user/getArticles?${qs.stringify(param)}`,
      method: 'get',
      headers: {
        token: param.token,
      },
    });
    if (res.IsError) {
      throw new Error('错误');
    }
  } catch (e) {
    console.error(e);
  }
  return res;
};

export { juejinApi, ezrYuQueApi, jjsApi };

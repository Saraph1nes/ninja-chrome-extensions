import axios from 'axios';
import qs from 'qs';

/**
 * 登录接口
 * @param phoneNum 手机号
 * @param captcha 验证码
 */
const loginWithPhone = async (param) => {
  const { phoneNum, captcha } = param;
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(param),
    url: 'http://log-ops.ezrpro.cn/api/LoginWithPhone',
  };
  let res = await axios(options);
  if (res.data.status) {
    localStorage.setItem('token', res.data.data.token);
    localStorage.setItem('phone', res.data.data.phone);
  } else {
    throw new Error('失败');
  }
  return res;
};

/**
 * 获取验证码
 * @param phoneNum 手机号
 */
const captcha = (param) => {
  axios.get(`http://log-ops.ezrpro.cn/api/captcha?${qs.stringify(param)}`).then((res) => {
    console.log(res);
  });
};

/**
 * 获取权限
 * @param phoneNum token
 */
const auth = async (param) => {
  return await axios.get(`http://log-ops.ezrpro.cn/api/auth?${qs.stringify(param)}`);
};

export { loginWithPhone, captcha, auth };

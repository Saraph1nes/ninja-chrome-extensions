import { action, observable } from 'mobx';
import { loginWithPhone, captcha, auth } from '@services/login';
import { createContext } from 'react';

class LoginInfoStore {
  @observable isLogin = false;

  @observable token = localStorage.getItem('token');

  @observable userInfos = {};

  @action loginWithPhone = async (param) => {
    let res = await loginWithPhone(param);
    if (res.data.status) {
      localStorage.setItem('token', res.data.data.token);
    }
  };

  @action captcha = async (param) => {
    await captcha(param);
  };

  @action auth = async () => {
    const res = await auth({ token: this.token });
    console.log(res);
    if (res.data.status) {
      this.isLogin = true;
      this.userInfos = res.data.data;
    } else {
      this.isLogin = false;
    }
  };
}

export default createContext(new LoginInfoStore()); //react-hooks中使用

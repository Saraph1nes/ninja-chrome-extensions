import { action, makeObservable } from 'mobx';
import { juejinApi, ezrYuQueApi, jjsApi } from '@services/mainCenter';

class MainCenterStore {
  constructor() {
    makeObservable(this, {
      juejinApi: action.bound,
      ezrYuQueApi: action.bound,
      jjsApi: action.bound,
    });
  }

  jjsApi = async () => {
    return await jjsApi();
  };

  juejinApi = async (param) => {
    return await juejinApi(param);
  };

  ezrYuQueApi = async (param) => {
    return await ezrYuQueApi(param);
  };
}

export default new MainCenterStore(); //react-hooks中使用

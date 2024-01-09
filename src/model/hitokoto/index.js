import { action, observable, makeObservable, runInAction } from 'mobx';
import { getHitokoto } from '@services/hitokoto';

class HitokotoStore {
  constructor() {
    makeObservable(this, {
      data: observable,
      getHitokoto: action.bound,
    });
  }

  data = {};

  getHitokoto = async () => {
    const res = await getHitokoto();
    runInAction(() => {
      this.data = res;
    });
  };
}

export default new HitokotoStore(); // react-hooks中使用

import { observable, action, makeObservable, toJS, decorate } from 'mobx';

class Common {
  constructor() {
    makeObservable(this);
  }
  @observable width = null;
}

export default new Common();

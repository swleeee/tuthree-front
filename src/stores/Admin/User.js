import { observable, action, makeObservable, toJS, decorate } from 'mobx';

class User {
  // constructor() {
  //   makeObservable(this);
  // }
  @observable state = 0;
}

export default new User();

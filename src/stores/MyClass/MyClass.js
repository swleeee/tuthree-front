import { observable, action, makeObservable, toJS, decorate } from 'mobx';

class MyClass {
  constructor() {
    makeObservable(this);
  }
  @observable moreState = 1;
}
export default new MyClass();

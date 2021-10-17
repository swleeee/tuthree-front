import { observable, action, makeObservable, toJS, decorate } from 'mobx';

class MyClass {
  constructor() {
    makeObservable(this);
  }
  @observable moreState = 1;
  @observable state = 1;

  @observable currentDay = 0;
  @observable month = 0;
  @observable year = 0;
  @observable isModalOpen = false;
  @observable chosenDay = 0;
}
export default new MyClass();

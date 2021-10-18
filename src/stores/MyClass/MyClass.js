import { observable, action, makeObservable, toJS, decorate } from 'mobx';

class MyClass {
  constructor() {
    makeObservable(this);
  }
  @observable moreState = 1;
  @observable state = 1;
  @observable detailState = 1;

  @observable currentDay = 0;
  @observable month = 0;
  @observable year = 0;
  @observable isModalOpen = false;
  @observable chosenDay = 0;

  @action onClickNavHandler = (type) => {
    console.info(type);
    switch (type) {
      case 'calendar':
        this.detailState = 1;
        this.state = 2;

        break;
      case 'qa':
        this.detailState = 2;
        this.state = 2;

        break;
      default:
        break;
    }
  };
}
export default new MyClass();

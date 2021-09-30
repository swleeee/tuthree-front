import { observable, action, makeObservable, toJS, decorate } from 'mobx';

class Community {
  constructor() {
    makeObservable(this);
  }
  @observable type = 1;

  @action onClickNavHandler = (type) => {
    console.info(type);
    switch (type) {
      case 'faq':
        this.type = 1;
        break;
      case 'notice':
        this.type = 2;
        break;
      case 'community':
        this.type = 3;
        break;
      default:
        break;
    }
    // this.setState({ g: 3 });
  };
}

export default new Community();

import { observable, action, makeObservable, toJS, decorate } from 'mobx';

class Community {
  constructor() {
    makeObservable(this);
  }
  @observable type = 1;
  @observable state = 1; // 조회 : 1, 글 쓰기 : 2, 글 수정 : 3
  @observable noticeState = '';

  @action onClickNavHandler = (type) => {
    console.info(type);
    switch (type) {
      case 'faq':
        this.type = 1;
        this.state = 1;
        break;
      case 'notice':
        this.type = 2;
        this.state = 1;
        break;
      case 'community':
        this.type = 3;
        this.state = 1;
        break;
      default:
        break;
    }
    // this.setState({ g: 3 });
  };

  @action onSelectHandler = (e, type) => {
    switch (type) {
      case 'noticeState':
        this.noticeState = e.value;
        break;
      default:
        break;
    }
  };
}

export default new Community();

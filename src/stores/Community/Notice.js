import { observable, action, makeObservable, toJS, decorate } from 'mobx';
import * as NoticeAPI from '../../axios/Comuunity/Notice';

class Notice {
  constructor() {
    makeObservable(this);
  }
  @observable type = 1;

  @action onClickNavHandler = (type) => {
    console.info(type);
    switch (type) {
      case 'notice':
        this.type = 1;
        // Auth.idStep = 1;
        break;
      case 'faq':
        this.type = 2;
        // Auth.passwordStep = 1;
        break;
      default:
        break;
    }
  };
  @action init = () => {
    console.info('init');
    const req = {};

    NoticeAPI.getNotice(req)
      .then(async (res) => {
        console.info(res);
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };
}

export default new Notice();

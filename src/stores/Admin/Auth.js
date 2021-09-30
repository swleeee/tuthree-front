import { observable, action, makeObservable, toJS, decorate } from 'mobx';

class Auth {
  constructor() {
    makeObservable(this);
  }
  @observable adminId = '';
  @observable adminPassword = '';

  @action onUserHandler = (e, type) => {
    switch (type) {
      case 'id':
        // console.info(e.target.value);
        this.adminId = e.target.value;
        break;
      case 'password':
        // console.info(e.target.value);
        this.adminPassword = e.target.value;
        break;
      default:
        break;
    }
  };
}

export default new Auth();

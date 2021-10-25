import { observable, action, makeObservable, toJS, decorate } from 'mobx';
import * as AccountAPI from '../../axios/Account/Account';

class Auth {
  // constructor() {
  //   makeObservable(this);
  // }
  @observable adminId = '';
  @observable adminPassword = '';
  @observable token = '';

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

  @action adminLogin = () => {
    const req = {
      data: {
        id: this.adminId,
        pwd: this.adminPassword,
      },
    };
    AccountAPI.adminLogin(req)
      .then((res) => {
        console.info(res);
        if (res.data.success) {
          alert('관리자로 로그인에 성공하였습니다');
          window.location.href = '/admin/main';
          this.token = res.data.headers.authorization;
          console.info(this.token);
        }
      })
      .catch((e) => {
        console.info(e);
        console.info(e.message);
      });
  };
}

export default new Auth();

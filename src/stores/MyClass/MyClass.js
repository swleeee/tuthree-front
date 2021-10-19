import { observable, action, makeObservable, toJS, decorate } from 'mobx';
import Auth from '../Account/Auth';
import * as ClassAPI from '../../axios/Managing/Class';

class MyClass {
  constructor() {
    makeObservable(this);
  }
  @observable moreState = 1;
  @observable state = 1;
  @observable detailState = 1;

  @observable status = 'OPEN'; // OPEN : 현재 수강, CLOSE : 과거 수강

  @observable currentDay = 0;
  @observable month = 0;
  @observable year = 0;
  @observable isModalOpen = false;
  @observable chosenDay = 0;

  @observable classAry = [];
  @observable teacherName = '';
  @observable studentName = '';

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
  @action getClass = async (id) => {
    console.info(id);
    console.info(Auth.Authorization);
    const req = {
      params: {
        status: this.status,
        id: id ? id : 1,
      },
      headers: {
        Authorization: Auth.Authorization,
      },
    };
    await ClassAPI.getClass(req)
      .then(async (res) => {
        console.info(res);
        this.classAry = await res.data.data;
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
    console.info(toJS(this.classAry));
  };
}
export default new MyClass();

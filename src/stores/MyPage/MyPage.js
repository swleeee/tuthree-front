import { observable, action, makeObservable, toJS, decorate } from 'mobx';

class MyPage {
  constructor() {
    makeObservable(this);
  }

  @observable state = 1;
  @observable profileImgAry = [];
  @observable profileImgUrl = '';
  @observable profileImgName = '';
}
export default new MyPage();

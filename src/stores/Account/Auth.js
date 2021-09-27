import { observable, action, makeObservable, toJS, decorate } from 'mobx';

class Auth {
  constructor() {
    makeObservable(this, {
      step: observable,
      getStep: action,
    });
  }
  step = 1;

  getStep = () => {
    console.log(this.step);
  };
}

const authStore = new Auth();
export default authStore;

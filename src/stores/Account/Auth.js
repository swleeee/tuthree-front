import { observable, action, makeObservable, toJS, decorate } from 'mobx';

class Auth {
  constructor() {
    makeObservable(this, {
      step: observable,
      userType: observable,
      domainType: observable,

      signupId: observable,
      signupPassword: observable,
      signupPasswordConfirm: observable,
      signupName: observable,
      signupEmail: observable,
      signupPhone: observable,
      signupCertification: observable,
      signupGender: observable,
      signupBirth: observable,

      getStep: action,
    });
  }
  step = 1;
  userType = 0;
  domainType = 1;

  signupId = '';
  signupPassword = '';
  signupPasswordConfirm = '';
  signupName = '';
  signupEmail = '';
  signupPhone = '';
  signupCertification = '';
  signupGender = 0;
  signupBirth = '';

  getStep = () => {
    console.log(this.step);
  };
}

const authStore = new Auth();
export default authStore;

import { observable, action, makeObservable, toJS, decorate } from 'mobx';

class Auth {
  constructor() {
    makeObservable(this);
    // makeObservable(this, {
    //   step: observable,
    //   userType: observable,
    //   domainType: observable,
    //   signupId: observable,
    //   signupPassword: observable,
    //   signupPasswordConfirm: observable,
    //   signupName: observable,
    //   signupEmail: observable,
    //   signupPhone: observable,
    //   signupCertification: observable,
    //   signupGender: observable,
    //   signupBirth: observable,
    //   locationIndex: observable,
    //   selectedUpperLocation: observable,
    //   selectedLowerLocation: observable,
    //   lowerLocationAry: observable,
    //   temp: observable,
    //   fileAry: observable,
    //   fileName: observable,
    //   introductionValue: observable,
    //   getStep: action,
    // });
  }
  @observable step = 1;
  @observable userType = 0;
  @observable domainType = 1;

  @observable signupId = '';
  @observable signupPassword = '';
  @observable signupPasswordConfirm = '';
  @observable signupName = '';
  @observable signupEmail = '';
  @observable signupPhone = '';
  @observable signupCertification = '';
  @observable signupGender = 0;
  @observable signupBirth = '';
  @observable signupType = 0;

  @observable locationIndex = 0;
  @observable selectedUpperLocation = '';
  @observable selectedLowerLocation = '';
  @observable lowerLocationAry = [];
  @observable temp = '';

  @observable fileAry = [];
  @observable fileName = '';

  @observable introductionValue = '';

  @observable forgottenType = 1;
  @observable certificationType = 1;
  @observable idStep = 1;
  @observable passwordStep = 1;

  getStep = () => {
    console.log(this.step);
  };

  @action setUpperLocation = (e) => {
    console.info(e[0]);
    this.selectedUpperLocation = e.label;
    // this.midCategorySet = e.detail;
    console.info(toJS(e[0]));
    console.info(toJS(this.selectedUpperLocation));
    this.selectedLowerLocation = e.value[0].label;
  };

  @action setLowerLocation = (e) => {
    this.selectedLowerLocation = e.label;
    // this.midCategorySet = e.detail;
    console.info(toJS(e));
    console.info(toJS(this.selectedUpperLocation));
    // this.selectedLowerLocation = e.value[0].label;
  };
}

export default new Auth();

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

      locationIndex: observable,
      selectedUpperLocation: observable,
      selectedLowerLocation: observable,
      lowerLocationAry: observable,
      temp: observable,

      fileAry: observable,
      fileName: observable,

      introductionValue: observable,

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

  locationIndex = 0;
  selectedUpperLocation = '';
  selectedLowerLocation = '';
  lowerLocationAry = [];
  temp = '';

  fileAry = [];
  fileName = '';

  introductionValue = '';

  @observable forgottonType = 1;

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

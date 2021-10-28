import { observable, action, makeObservable, toJS, decorate } from 'mobx';
import * as MyPageAPI from '../../axios/MyPage/MyPage';
import * as ClassAPI from '../../axios/Managing/Class';

import Auth from '../Account/Auth';

class MyPage {
  // constructor() {
  //   makeObservable(this);
  // }

  @observable state = 1;
  @observable profileImgAry = [];
  @observable profileImgUrl = '';
  @observable profileImgName = '';

  @observable userInfoAry = [];
  @observable notificationState = false;
  @observable emailInfo = '';
  @observable phoneInfo = '';
  @observable birthInfo = '';

  @observable tutoringInfoAry = [];
  @observable registrationState = false;
  @observable cost = '';
  @observable costState = '';
  @observable grade = '';
  @observable school = '';
  @observable schoolState = '';
  @observable major = '';
  @observable detailContent = '';

  @observable enrollmentList = [];

  @action onChangeHandler = (e, type = '', idx = '') => {
    switch (type) {
      case 'email_info':
        this.emailInfo = e.target.value;
        console.info(this.emailInfo);
        break;

      case 'phone_info':
        this.phoneInfo = e.target.value;
        console.info(this.phoneInfo);
        break;

      case 'birth_info':
        this.birthInfo = e.value;
        console.info(this.birthInfo);
        break;

      case 'school_info':
        this.school = e.value;
        console.info(this.school);
        break;

      case 'school_state_info':
        this.schoolState = e.value;
        console.info(this.schoolState);
        break;

      case 'major':
        this.major = e.value;
        console.info(this.major);
        break;

      case 'grade':
        this.grade = e.value;
        console.info(this.grade);
        break;
      case 'cost_state':
        this.costState = e.value;
        console.info(this.major);
        break;

      case 'cost':
        this.cost = e.value;
        console.info(this.cost);
        break;

      default:
        break;
    }
  };

  @action getUserInfo = async () => {
    console.info(Auth.token);
    const req = {
      headers: {
        Authorization: Auth.token,
      },
    };

    await MyPageAPI.getUserInfo(req)
      .then(async (res) => {
        console.info(res);

        if (res.data.statusCode === 401) {
          alert('로그인이 만료되었습니다');
          localStorage.removeItem('token');
          window.location.href = '/login';
        } else {
          this.userInfoAry = await res.data.data;
        }
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
    console.info(toJS(this.userInfoAry));
  };

  @action putUserInfo = async () => {
    console.info(Auth.token);

    const formData = new FormData();

    formData.append('email', this.emailInfo);
    formData.append('tel', this.phoneInfo);
    formData.append('birth', this.birthInfo);
    formData.append('notification', this.notificationState ? 'OPEN' : 'CLOSE');
    formData.append('file', this.profileImgAry);

    const req = {
      headers: {
        Authorization: Auth.token,
      },
      data: formData,
    };

    console.info(req.data);
    await MyPageAPI.putUserInfo(req)
      .then(async (res) => {
        console.info(res);

        if (res.data.statusCode === 401) {
          alert('로그인이 만료되었습니다');
          localStorage.removeItem('token');
          window.location.href = '/login';
        } else {
          // this.userInfoAry = await res.data.data;
          alert('회원정보 수정이 완료되었습니다');
          this.getUserInfo();
        }
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
    console.info(toJS(this.userInfoAry));
  };

  @action getTutorInfo = async () => {
    console.info(Auth.token);
    this.tutoringInfoAry = [];
    const req = {
      headers: {
        Authorization: Auth.token,
      },
    };

    await MyPageAPI.getTutorInfo(req)
      .then(async (res) => {
        console.info(res);

        if (res.data.statusCode === 401) {
          alert('로그인이 만료되었습니다');
          localStorage.removeItem('token');
          window.location.href = '/login';
        } else {
          this.tutoringInfoAry = await res.data.data;
        }
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
    console.info(toJS(this.tutoringInfoAry));
  };

  @action putTutorInfo = async () => {
    console.info(Auth.token);
    // const regionList = [];
    // Auth.selected
    const req = {
      headers: {
        Authorization: Auth.token,
      },
      data: {
        regionL: Auth.selectedLocation,
        subjectL: Auth.selectedSubject,
        registration: this.registrationState ? 'OPEN' : 'CLOSE',
        cost: this.costState + ' ' + this.cost,

        school: this.school,
        status: this.schoolState,
        major: this.major,
        detail: this.detailContent,
      },
    };

    console.info(req.data);
    await MyPageAPI.putTutorInfo(req)
      .then(async (res) => {
        console.info(res);

        if (res.data.statusCode === 401) {
          alert('로그인이 만료되었습니다');
          localStorage.removeItem('token');
          window.location.href = '/login';
        } else {
          // this.userInfoAry = await res.data.data;
          // alert('회원정보 수정이 완료되었습니다');
          // this.getUserInfo();
        }
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
    console.info(toJS(this.userInfoAry));
  };

  @action getTuteeInfo = async () => {
    console.info(Auth.token);
    this.tutoringInfoAry = [];
    const req = {
      headers: {
        Authorization: Auth.token,
      },
    };

    await MyPageAPI.getTuteeInfo(req)
      .then(async (res) => {
        console.info(res);

        if (res.data.statusCode === 401) {
          alert('로그인이 만료되었습니다');
          localStorage.removeItem('token');
          window.location.href = '/login';
        } else {
          this.tutoringInfoAry = await res.data.data;
        }
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
    console.info(toJS(this.tutoringInfoAry));
  };

  @action putTuteeInfo = async () => {
    console.info(Auth.token);
    // const regionList = [];
    // Auth.selected
    const req = {
      headers: {
        Authorization: Auth.token,
      },
      data: {
        regionL: Auth.selectedLocation,
        subjectL: Auth.selectedSubject,
        registration: this.registrationState ? 'OPEN' : 'CLOSE',
        cost: this.costState + ' ' + this.cost,

        school: this.grade,

        detail: this.detailContent,
      },
    };

    console.info(req.data);
    await MyPageAPI.putTutorInfo(req)
      .then(async (res) => {
        console.info(res);

        if (res.data.statusCode === 401) {
          alert('로그인이 만료되었습니다');
          localStorage.removeItem('token');
          window.location.href = '/login';
        } else {
          // this.userInfoAry = await res.data.data;
          // alert('회원정보 수정이 완료되었습니다');
          // this.getUserInfo();
        }
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
    console.info(toJS(this.userInfoAry));
  };

  @action getEnrollmentList = async () => {
    console.info(Auth.token);

    const req = {
      headers: {
        Authorization: Auth.token,
      },
    };

    await ClassAPI.getEnrollmentList(req)
      .then(async (res) => {
        console.info(res);

        if (res.data.statusCode === 401) {
          alert('로그인이 만료되었습니다');
          localStorage.removeItem('token');
          window.location.href = '/login';
        } else {
          this.enrollmentList = await res.data.data;
        }
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
    console.info(toJS(this.enrollmentList));
  };
}
export default new MyPage();

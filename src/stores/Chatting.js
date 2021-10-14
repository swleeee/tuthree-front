import { observable, action, makeObservable, toJS, decorate } from 'mobx';
import Auth from './Account/Auth';
import Common from './Common/Common';
import * as MatchingAPI from '../axios/Matching/Matching';

class Chatting {
  constructor() {
    makeObservable(this);
  }
  @observable domainType = 1;

  @observable selectedUpperSubject = '';
  @observable selectedLowerSubject = '';
  @observable selectedSubject = []; // 과목

  @observable startTimeValue = '';
  @observable endTimeValue = '';
  @observable selectedWeekTime = [];
  @observable weekendLabel = '';
  @observable weekendValue = '';
  @observable weekendAry = [
    {
      label: '월요일',
      value: 'mon',
    },
    {
      label: '화요일',
      value: 'tue',
    },
    {
      label: '수요일',
      value: 'wed',
    },
    {
      label: '목요일',
      value: 'thu',
    },
    {
      label: '금요일',
      value: 'fri',
    },
    {
      label: '토요일',
      value: 'sat',
    },
    {
      label: '일요일',
      value: 'sun',
    },
  ];

  @observable budgetTypeAry = [
    {
      label: '시급',
      value: '시급',
    },
    {
      label: '일급',
      value: '일급',
    },
    {
      label: '주급',
      value: '주급',
    },
    {
      label: '월급',
      value: '월급',
    },
  ];

  @observable budget = 0; // 예산
  @observable budgetType = ''; // 예산 유형(시급, 일금, 주급, 월급)

  @observable detailContent = '';

  @observable teacherId = '';
  @observable studentId = '';

  @action setUpperSubject = (e) => {
    console.info(e[0]);
    this.selectedUpperSubject = e.label;
    // this.midCategorySet = e.detail;
    console.info(toJS(e[0]));
    console.info(toJS(this.selectedUpperSubject));
    this.selectedLowerSubject = e.value[0].label;
  };

  @action setLowerSubject = (e) => {
    this.selectedLowerSubject = e.label;
    // this.midCategorySet = e.detail;
    console.info(toJS(e));
    console.info(toJS(this.selectedUpperSubject));
    // this.selectedLowerLocation = e.value[0].label;
  };
  @action handleChange = (e, type) => {
    switch (type) {
      case 'upperSubject':
        this.SubjectIndex = e.id;
        this.setUpperSubject(e);
        this.lowerSubjectAry = [];

        e.value.map((item, idx) => {
          console.info(item);
          this.lowerSubjectAry.push(item);
        });

        break;
      case 'lowerSubject':
        this.setLowerSubject(e);
        this.selectedSubject.push(
          `<${this.selectedUpperSubject}> ${this.selectedLowerSubject}`
        );
        console.info(e.label);

        break;
      case 'budgetType':
        this.budgetType = e.value;
        break;
      case 'weekend':
        this.weekendLabel = e.label;
        this.weekendValue = e.value;
        break;
      case 'budget':
        this.budget = e.value;
        break;
      default:
        break;
    }
  };
  @action setTutoringInfo = async (teacherId = '', studentId = '') => {
    console.info(Auth.token);
    console.info(Auth.loggedUserId);
    console.info(this.detailContent);
    console.info(this.weekendValue);
    const req = {
      data: {
        // subject: {
        //   id: 'tuthree10',
        //   pwd: 'tuthree10',
        // },
        subject: 'math',
        day: this.weekendValue,
        // day: 'mon',
        cost: '월급 200000',
        start: '17:00',
        end: '20:00',
        // detail: 'sdfsdfsdf',
        detail: this.detailContent,
      },
      headers: {
        Authorization: Auth.token,
      },
      params: {
        teacherId: Auth.loggedUserId,
        studentId: 'hYji0pYOZc',
      },
    };
    MatchingAPI.setTutoringInfo(req)
      .then((res) => {
        console.info(res);
        alert(
          '과외 등록이 완료되었습니다. 학생이 최종 수락하기까지 기다려주세요.'
        );
        Common.modalActive = false;
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
        alert('과외 등록을 실패하였습니다. 다시 시도해주세요.');
      });
  };
}

export default new Chatting();

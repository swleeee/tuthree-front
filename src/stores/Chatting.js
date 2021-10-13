import { observable, action, makeObservable, toJS, decorate } from 'mobx';

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
}

export default new Chatting();

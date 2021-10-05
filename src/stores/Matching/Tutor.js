import { observable, action, makeObservable, toJS, decorate } from 'mobx';

class Tutor {
  constructor() {
    makeObservable(this);
  }
  @observable domainType = 1;

  @observable locationIndex = 0;
  @observable selectedUpperLocation = '';
  @observable selectedLowerLocation = '';
  @observable lowerLocationAry = [];
  @observable selectedLocation = []; // 지역

  @observable subjectIndex = 0;
  @observable selectedUpperSubject = '';
  @observable selectedLowerSubject = '';
  @observable lowerSubjectAry = [];
  @observable selectedSubject = []; // 과목

  @observable budgetMark = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 10,
      label: '10만원',
    },
    {
      value: 20,
      label: '20만원',
    },
    {
      value: 30,
      label: '30만원',
    },
    {
      value: 40,
      label: '40만원',
    },
    {
      value: 50,
      label: '50만원',
    },
    {
      value: 60,
      label: '60만원',
    },
    {
      value: 70,
      label: '70만원',
    },
    {
      value: 80,
      label: '80만원',
    },
    {
      value: 90,
      label: '90만원',
    },
    {
      value: 100,
      label: '100만원',
    },
  ];
  @observable budgetValue = [0, 100];

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
      case 'upperLocation':
        console.info('upperLocation');
        this.locationIndex = e.id;
        this.setUpperLocation(e);
        this.lowerLocationAry = [];

        e.value.map((item, idx) => {
          console.info(item);
          this.lowerLocationAry.push(item);
        });
        break;

      case 'lowerLocation':
        console.info('lowerLocation');
        this.setLowerLocation(e);
        console.info(
          `${this.selectedUpperLocation} ${this.selectedLowerLocation}`
        );
        this.selectedLocation.push(
          `${this.selectedUpperLocation} ${this.selectedLowerLocation}`
        );
        console.info(toJS(this.selectedLocation));
        break;

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
      case 'budget':
        // this.budget = e.value;
        console.info(e);
        break;
      case 'schoolState':
        this.schoolState = e.value;
        break;
      case 'grade':
        this.grade = e.value;
        break;
      default:
        break;
    }
  };
}

export default new Tutor();

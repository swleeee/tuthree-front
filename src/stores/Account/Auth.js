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
  @observable selectedLocation = [];

  @observable budgetAry = [
    {
      label: '10만원',
      value: 100000,
    },
    {
      label: '20만원',
      value: 200000,
    },
    {
      label: '30만원',
      value: 300000,
    },
    {
      label: '40만원',
      value: 400000,
    },
    {
      label: '50만원',
      value: 500000,
    },
    {
      label: '60만원',
      value: 600000,
    },
    {
      label: '70만원',
      value: 700000,
    },
    {
      label: '80만원',
      value: 800000,
    },
    {
      label: '90만원',
      value: 900000,
    },
    {
      label: '100만원 이상',
      value: 1000000,
    },
  ];
  @observable stateSchoolAry = [
    {
      label: '재학상태',
      value: '재학상태',
    },
    {
      label: '졸업상태',
      value: '졸업상태',
    },
    {
      label: '휴학상태',
      value: '휴학상태',
    },
  ];

  @observable gradeAry = [
    {
      label: '중1',
      value: 1,
    },
    {
      label: '중2',
      value: 2,
    },
    {
      label: '중3',
      value: 3,
    },
    {
      label: '고1',
      value: 4,
    },
    {
      label: '고2',
      value: 5,
    },
    {
      label: '고3',
      value: 6,
    },
    {
      label: '성인',
      value: 7,
    },
  ];

  @observable subjectAry = [
    {
      id: 0,
      label: '국어',
      value: [
        {
          label: '중등 국어',
          value: 1,
        },
        {
          label: '고등 국어',
          value: 2,
        },
        {
          label: '고등 국어(문학)',
          value: 3,
        },
        {
          label: '고등 국어(문법)',
          value: 4,
        },
        {
          label: '고등 국어(화작문)',
          value: 5,
        },
        {
          label: '고등 국어(비문학)',
          value: 6,
        },
      ],
    },
    {
      id: 1,
      label: '수학',
      value: [
        {
          label: '중등 수학',
          value: 1,
        },
        {
          label: '고등 수학(공통)',
          value: 2,
        },
        {
          label: '고등 수학(문과)',
          value: 3,
        },
        {
          label: '고등 수학(이과)',
          value: 4,
        },
        {
          label: '편입 수학',
          value: 5,
        },
      ],
    },
    {
      id: 2,
      label: '사회',
      value: [
        {
          label: '중등사회',
          value: 1,
        },
        {
          label: '고등사회',
          value: 2,
        },
        {
          label: '세계사',
          value: 3,
        },
        {
          label: '한국사',
          value: 4,
        },

        {
          label: '동아시아사',
          value: 5,
        },
        {
          label: '세계지리',
          value: 6,
        },
        {
          label: '한국지리',
          value: 7,
        },
        {
          label: '윤리와사상',
          value: 8,
        },
        {
          label: '생활과윤리',
          value: 9,
        },

        {
          label: '사회문화',
          value: 10,
        },

        {
          label: '경제',
          value: 11,
        },
        {
          label: '법과정치',
          value: 12,
        },
      ],
    },

    {
      id: 3,
      label: '과학',
      value: [
        {
          label: '중등과학',
          value: 1,
        },
        {
          label: '고등과학',
          value: 2,
        },
        {
          label: '물리I',
          value: 3,
        },
        {
          label: '물리II',
          value: 4,
        },

        {
          label: '화학I',
          value: 5,
        },
        {
          label: '화학II',
          value: 6,
        },
        {
          label: '생명과학I',
          value: 7,
        },
        {
          label: '생명과학II',
          value: 8,
        },
        {
          label: '지구과학I',
          value: 9,
        },

        {
          label: '지구과학II',
          value: 10,
        },
      ],
    },
  ];

  @observable subjectIndex = 0;
  @observable selectedUpperSubject = '';
  @observable selectedLowerSubject = '';
  @observable lowerSubjectAry = [];
  @observable selectedSubject = [];

  @observable budget = 0;
  @observable schoolState = 0;
  @observable grade = '';

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
        this.budget = e.value;
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

export default new Auth();

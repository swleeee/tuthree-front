import { observable, action, makeObservable, toJS, decorate } from 'mobx';
import LocationList from '../../sigungu.json';

class Common {
  constructor() {
    makeObservable(this);
  }
  @observable width = null;
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

  @observable locationAry = [
    {
      id: 0,
      label: '경기도',
      value: [
        {
          label: '안양시',
          value: 1,
        },
        {
          label: '수원시',
          value: 2,
        },
        {
          label: '의왕시',
          value: 3,
        },
      ],
    },
    {
      id: 1,
      label: '강원도',
      value: [
        {
          label: '강릉시',
          value: 1,
        },
        {
          label: '원주시',
          value: 2,
        },
        {
          label: '속초시',
          value: 3,
        },
      ],
    },
    {
      id: 2,
      label: '서울특별시',
      value: [
        {
          label: '강남구',
          value: 1,
        },
        {
          label: '노원구',
          value: 2,
        },
        {
          label: '도봉구',
          value: 3,
        },
        {
          label: '송파구',
          value: 4,
        },
      ],
    },
  ];
}

export default new Common();

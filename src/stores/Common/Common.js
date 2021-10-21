import { observable, action, makeObservable, toJS, decorate } from 'mobx';
import LocationList from '../../sigungu.json';

class Common {
  constructor() {
    makeObservable(this);
  }
  @observable time = '--:--';
  @observable width = null;
  @observable temp = null;
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

  @observable modalActive = false;
  @observable modalState = 1; // 1 : teacher / 2 : student
}

export default new Common();

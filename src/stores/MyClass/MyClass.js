import { observable, action, makeObservable, toJS, decorate } from 'mobx';
import Auth from '../Account/Auth';
import * as ClassAPI from '../../axios/Managing/Class';

class MyClass {
  constructor() {
    makeObservable(this);
  }
  @observable moreState = 1;
  @observable state = 1;
  @observable detailState = 1;

  @observable status = 'OPEN'; // OPEN : 현재 수강, CLOSE : 과거 수강

  @observable currentDay = 0;
  @observable month = 0;
  @observable year = 0;
  @observable isModalOpen = false;
  @observable chosenDay = 0;
  @observable writingTabState = 1;

  @observable classAry = [];
  @observable teacherName = '';
  @observable studentName = '';
  @observable teacherId = '';
  @observable studentId = '';

  @observable scheduleValue = '';
  @observable scheduleAry = [];
  @observable scheduleDetailAry = [];
  @observable selectedDate = '';
  @observable selectedDateMoment = '';

  @observable reportRound = '';
  @observable reportStartTime = '';
  @observable reportEndTime = '';
  @observable reportContent = '';
  @observable totalQuestion = 0;
  @observable questionAry = [];
  @observable choiceState = false;

  @action onClickNavHandler = (type) => {
    console.info(type);
    switch (type) {
      case 'calendar':
        this.detailState = 1;
        this.state = 2;

        break;
      case 'qa':
        this.detailState = 2;
        this.state = 2;

        break;
      default:
        break;
    }
  };

  @action onChangeHandler = (e, type = '', idx = '') => {
    switch (type) {
      case 'schedule':
        // console.info(e.target.value);
        this.scheduleValue = e.target.value;
        console.info(this.scheduleValue);
        break;
      case 'make_question':
        // console.info(e.target.value);
        this.totalQuestion = e.target.value;
        this.questionAry = [];
        for (let i = 0; i < this.totalQuestion; i++) {
          this.questionAry.push({
            number: i + 1,
            type: false,
            auto: true,
            answer: '',
          });
          //   questionAry[i].question = i + 1;
          //   questionAry[i].type = 'num';
          //   questionAry[i].auto = true;
          //   questionAry[i].answer = '';
          //   questionAry[i] = i + 1;
        }
        console.info(this.totalQuestion);
        break;
      case 'make_question_answer':
        // console.info(e.target.value);
        console.info(idx);
        this.questionAry[idx].answer = e.target.value;
        // this.scheduleValue = e.target.value;
        console.info(toJS(this.questionAry));
        break;
      default:
        break;
    }
  };

  @action getClass = async (id) => {
    console.info(id);
    if (!id) {
      window.location.href = '/';
    }
    console.info(Auth.Authorization);
    const req = {
      params: {
        status: this.status,
        id: id ? id : 1,
      },
      headers: {
        Authorization: Auth.Authorization,
      },
    };
    await ClassAPI.getClass(req)
      .then(async (res) => {
        console.info(res);
        this.classAry = await res.data.data;
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
    console.info(toJS(this.classAry));
  };

  @action setSchedule = async () => {
    console.info(this.studentId);
    console.info(this.teacherId);
    const req = {
      params: {
        studentId: this.studentId,
        teacherId: this.teacherId,
      },
      headers: {
        Authorization: Auth.Authorization,
      },
      data: {
        dateAt: this.selectedDate,
        schedule: this.scheduleValue,
      },
    };
    await ClassAPI.setSchedule(req)
      .then(async (res) => {
        console.info(res);
        this.getDetailSchedule();
        this.getCalendar();
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };

  @action getCalendar = async () => {
    console.info(this.studentId);
    console.info(this.teacherId);
    const req = {
      params: {
        studentId: this.studentId,
        teacherId: this.teacherId,
      },
      headers: {
        Authorization: Auth.Authorization,
      },
    };
    ClassAPI.getSchedule(req)
      .then((res) => {
        console.info(res);
        this.scheduleAry = res.data.data;
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
    console.info(toJS(this.scheduleAry));
  };

  @action getDetailSchedule = async () => {
    console.info(this.studentId);
    console.info(this.teacherId);
    console.info(this.selectedDate);

    const req = {
      params: {
        studentId: this.studentId,
        teacherId: this.teacherId,
        date: this.selectedDate,
      },
      headers: {
        Authorization: Auth.Authorization,
      },
    };
    await ClassAPI.getDetailSchedule(req)
      .then((res) => {
        console.info(res);
        this.scheduleDetailAry = res.data.data;
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
    console.info(toJS(this.scheduleDetailAry));
  };
}
export default new MyClass();

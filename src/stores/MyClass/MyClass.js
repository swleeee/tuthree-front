import { observable, action, makeObservable, toJS, decorate } from 'mobx';
import Auth from '../Account/Auth';
import Common from '../Common/Common';
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
  @observable reportStartTime = '--:--';
  @observable reportEndTime = '--:--';
  @observable reportContent = '';
  @observable reportAry = [];
  @observable reportDetailAry = [];
  @observable reportWritingState = 1; // 1 : 작성, 2 : 수정

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

      case 'modify_schedule':
        // console.info(e.target.value);
        this.scheduleValue = e.target.value;
        console.info(this.scheduleValue);
        break;
      case 'set_report':
        // console.info(e.target.value);
        this.reportRound = e.target.value;
        console.info(this.reportRound);
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

  @action putSchedule = async (id) => {
    console.info(this.studentId);
    console.info(this.teacherId);
    console.info(id);
    const req = {
      // params: {
      //   studentId: this.studentId,
      //   teacherId: this.teacherId,
      // },
      headers: {
        Authorization: Auth.Authorization,
      },
      id: id,
      data: {
        dateAt: this.selectedDate,
        schedule: this.scheduleValue,
      },
    };
    await ClassAPI.putSchedule(req)
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

  @action delSchedule = async (id) => {
    console.info(this.studentId);
    console.info(this.teacherId);
    console.info(id);
    const req = {
      // params: {
      //   studentId: this.studentId,
      //   teacherId: this.teacherId,
      // },
      headers: {
        Authorization: Auth.Authorization,
      },
      id: id,
    };
    await ClassAPI.delSchedule(req)
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
        this.scheduleDetailAry.map((item, idx) => {
          item.modify = false;
        });
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
    console.info(toJS(this.scheduleDetailAry));
  };

  @action setReport = async () => {
    console.info(this.studentId);
    console.info(this.teacherId);
    console.info(this.selectedDate);
    console.info(this.reportRound);
    console.info(this.reportStartTime);
    console.info(this.reportEndTime);
    console.info(this.reportContent);
    const req = {
      params: {
        studentId: this.studentId,
        teacherId: this.teacherId,
      },
      headers: {
        Authorization: Auth.Authorization,
      },
      data: {
        date: this.selectedDate,
        number: this.reportRound,
        start: this.reportStartTime,
        end: this.reportEndTime,
        detail: this.reportContent,
      },
    };
    await ClassAPI.setReport(req)
      .then(async (res) => {
        console.info(res);
        alert('수업보고서 작성이 완료되었습니다!');
        this.writingTabState = 1;
        Common.modalActive = false;
        this.getDetailReport();
        this.getCalendar();
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };

  @action putReport = async (id) => {
    console.info(this.studentId);
    console.info(this.teacherId);
    console.info(id);
    const req = {
      // params: {
      //   studentId: this.studentId,
      //   teacherId: this.teacherId,
      // },
      headers: {
        Authorization: Auth.Authorization,
      },
      id: id,
      data: {
        date: this.selectedDate,
        number: this.reportRound,
        start: this.reportStartTime,
        end: this.reportEndTime,
        detail: this.reportContent,
      },
    };
    await ClassAPI.putReport(req)
      .then(async (res) => {
        console.info(res);
        this.reportWritingState = 1;
        this.reportDetailAry = [];
        // this.getDetailReport();
        alert('수업보고서 수정이 완료되었습니다!');
        this.writingTabState = 1;
        Common.modalActive = false;
        this.getCalendar();
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };

  @action delReport = async (id) => {
    console.info(this.studentId);
    console.info(this.teacherId);
    console.info(id);
    const req = {
      // params: {
      //   studentId: this.studentId,
      //   teacherId: this.teacherId,
      // },
      headers: {
        Authorization: Auth.Authorization,
      },
      id: id,
    };
    await ClassAPI.delReport(req)
      .then(async (res) => {
        console.info(res);
        this.reportWritingState = 1;
        this.reportDetailAry = [];
        // this.getDetailReport();
        alert('수업보고서 삭제가 완료되었습니다!');
        this.writingTabState = 1;
        Common.modalActive = false;
        this.getCalendar();
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };

  // @action getCalendar = async () => {
  //   console.info(this.studentId);
  //   console.info(this.teacherId);
  //   const req = {
  //     params: {
  //       studentId: this.studentId,
  //       teacherId: this.teacherId,
  //     },
  //     headers: {
  //       Authorization: Auth.Authorization,
  //     },
  //   };
  //   ClassAPI.getSchedule(req)
  //     .then((res) => {
  //       console.info(res);
  //       this.scheduleAry = res.data.data;
  //     })
  //     .catch((e) => {
  //       console.info(e);
  //       console.info(e.response);
  //     });
  //   console.info(toJS(this.scheduleAry));
  // };

  @action getDetailReport = async () => {
    console.info(this.studentId);
    console.info(this.teacherId);
    console.info(this.selectedDate);
    this.reportDetailAry = [];

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
    await ClassAPI.getDetailReport(req)
      .then((res) => {
        console.info(res);
        this.reportDetailAry = res.data.data;
        // this.reportDetailAry.map((item, idx) => {
        //   item.modify = false;
        // });
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
    console.info(toJS(this.reportDetailAry));
    if (this.reportDetailAry) {
      // if (this.reportDetailAry.length !== 0) {
      console.info('aaaaaaaaaaaaaaaaaaaa');
      this.reportWritingState = 2;
      console.info(this.reportDetailAry[0].number);
      console.info(this.reportDetailAry[0].number.substring(0, 1));
      this.reportRound = this.reportDetailAry[0].number.substring(0, 1);
      this.reportStartTime = this.reportDetailAry[0].start;
      this.reportEndTime = this.reportDetailAry[0].end;
      this.reportContent = this.reportDetailAry[0].detail;
    } else {
      console.info('bbbbbbbbbbbbbbbbbb');
      this.reportWritingState = 1;
      this.reportRound = '';
      this.reportStartTime = '';
      this.reportEndTime = '';
      this.reportContent = '';
    }
    console.info(this.reportWritingState);
  };
}
export default new MyClass();

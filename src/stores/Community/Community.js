import { observable, action, makeObservable, toJS, decorate } from 'mobx';
import * as NoticeAPI from '../../axios/Comuunity/Notice';

class Community {
  constructor() {
    makeObservable(this);
  }
  @observable type = 1;
  @observable state = 1;
  @observable Authorization =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmcmVzaF90b2tlbiIsImlhdCI6MTYzMzE4OTUwOSwiZXhwIjoxNjMzMTkzMTA5LCJ1c2VySWQiOiJhZG1pbjEiLCJHcmFkZSI6ImFkbWluIn0.liWJqCvbLl9Jl_MGKl9ZTeY8qAH_BTWBin2o0xBRHwU';

  @observable noticeList = []; // 공지사항 페이지 당 목록 데이터
  @observable noticeListTotalCount = 0; // 공지사항 전체 개수
  @observable noticeTotalPage = 0; // 공지사항 전체 페이지 수
  @observable noticeCurrentPage = 1; // 공지사항 현재 페이지
  @observable noticeCurrentSet = parseInt((this.noticeCurrentPage - 1) / 5) + 1; // 공지사항 현재 화면에 보일 페이지들 (ex: 1 2 3 4 5 / 6 7 8 9 10 ...)
  @observable noticeDetailList = []; // 공지사항 세부 페이지

  @action onClickNavHandler = (type) => {
    console.info(type);
    switch (type) {
      case 'notice':
        this.type = 1;
        // Auth.idStep = 1;
        break;
      case 'faq':
        this.type = 2;
        // Auth.passwordStep = 1;
        break;
      default:
        break;
    }
  };
  @action getNoticeList = async (id) => {
    console.info('init');
    const req = {
      id: id ? id : 1,
      headers: {
        Authorization: this.Authorization,
      },
    };

    NoticeAPI.getNotice(req)
      .then(async (res) => {
        console.info(res);
        this.noticeList = await res.data.data;
        this.noticeListTotalCount = await res.data.list;
        this.noticeTotalPage = await Math.ceil(this.noticeListTotalCount / 10);
        await this.noticeList.map(async (item, idx) => {
          item.checked = false;
        });
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };
  /* 공지사항 상세 페이지로 이동하는 함수 */
  @action pushToDetail = async (item, idx = 0) => {
    await this.noticeDetailList.push(item);
    console.info(toJS(this.noticeDetailList));
    this.state = 2;
  };
}

export default new Community();

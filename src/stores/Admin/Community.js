import { observable, action, makeObservable, toJS, decorate } from 'mobx';
import * as NoticeAPI from '../../axios/Comuunity/Notice';

class Community {
  constructor() {
    makeObservable(this);
  }
  @observable token =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmcmVzaF90b2tlbiIsImlhdCI6MTYzMzEwNTYxOCwiZXhwIjoxNjMzMTA5MjE4LCJ1c2VySWQiOiJhZG1pbjEiLCJHcmFkZSI6ImFkbWluIn0.KuHs-qPG3gL0jdJzozeAWtf1q3I-w_96YconIIwNE7s';
  @observable type = 1;
  @observable state = 1; // 조회 : 1, 글 쓰기 : 2, 글 수정 : 3
  @observable noticeState = '';

  @observable noticeList = []; // 공지사항 페이지 당 목록 데이터
  @observable noticeListTotalCount = 0; // 공지사항 전체 개수
  @observable noticeTotalPage = 0;
  @observable noticeCurrentPage = 1;
  @observable noticeCurrentSet = parseInt((this.noticeCurrentPage - 1) / 5) + 1;

  @observable checkState = 0;
  @observable checkAry = [];

  @action onClickNavHandler = (type) => {
    console.info(type);
    switch (type) {
      case 'faq':
        this.type = 1;
        this.state = 1;
        break;
      case 'notice':
        this.type = 2;
        this.state = 1;
        break;
      case 'community':
        this.type = 3;
        this.state = 1;
        break;
      default:
        break;
    }
    // this.setState({ g: 3 });
  };

  @action onSelectHandler = (e, type) => {
    switch (type) {
      case 'noticeState':
        this.noticeState = e.value;
        break;
      default:
        break;
    }
  };

  @action getAdminNoticeList = async (id) => {
    const req = {
      id: id ? id : 1,
      headers: {
        token: this.token,
      },
    };

    await NoticeAPI.getAdminNotice(req)
      .then(async (res) => {
        console.info(res);
        this.noticeList = await res.data.data;
        this.noticeListTotalCount = await res.data.list;
        this.noticeTotalPage = await Math.ceil(this.noticeListTotalCount / 10);
        console.info(toJS(this.noticeList));
        console.info(res.data.list);
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };

  @action movePage = async (e) => {
    const newPage = e.target.innerText * 1;
    this.noticeCurrentPage = newPage;
    await this.getAdminNoticeList(this.noticeCurrentPage);
  };
  @action pageNext = async () => {
    if (this.noticeCurrentPage < this.noticeTotalPage) {
      const nextPage = this.noticeCurrentPage + 1;
      this.noticeCurrentPage = nextPage;
      await this.getAdminNoticeList(this.noticeCurrentPage);
    }
  };
  @action pagePrev = async () => {
    if (this.noticeCurrentPage > 1) {
      const newPage = this.noticeCurrentPage - 1;
      this.noticeCurrentPage = newPage;
      await this.getAdminNoticeList(this.noticeCurrentPage);
    }
  };

  @action checkDataHandler = (id) => {
    console.info(id);

    const index = this.checkAry.indexOf(parseInt(id));
    // this.checkAry

    console.info(index);
    if (index === -1) {
      this.checkAry.push(parseInt(id));
    } else {
      this.checkAry.splice(index, 1);
    }
    console.info(toJS(this.checkAry));
    this.checkData(id);
  };
  @action checkData = (id) => {
    console.info(this.checkAry.includes(parseInt(id)));
    console.info(id);

    return this.checkAry.includes(id);
  };
}

export default new Community();

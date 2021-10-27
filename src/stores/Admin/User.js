import { observable, action, makeObservable, toJS, decorate } from 'mobx';
import * as AccountAPI from '../../axios/Account/Account';
import Auth from '../Account/Auth';

class User {
  // constructor() {
  //   makeObservable(this);
  // }
  @observable state = 0;

  @observable userList = []; // 유저 리스트 페이지 당 목록 데이터
  @observable userTotalCount = 0; // 유저 리스트 전체 개수
  @observable userTotalPage = 0; // 유저 리스트 전체 페이지 수
  @observable userCurrentPage = 1; // 유저 리스트 현재 페이지
  @observable userCurrentSet = parseInt((this.noticeCurrentPage - 1) / 5) + 1; // 유저 리스트 현재 화면에 보일 페이지들 (ex: 1 2 3 4 5 / 6 7 8 9 10 ...)
  @observable userDetailList = []; // 유저 리스트 세부 페이지

  @action getUserList = async (page) => {
    const req = {
      params: {
        // grade: this.adminId,
        // userId
        page: page ? page : 1,
      },
      headers: {
        Authorization: Auth.token,
      },
    };
    await AccountAPI.getUserList(req)
      .then(async (res) => {
        console.info(res);
        this.userList = await res.data.data;
        this.userListTotalCount = await res.data.list;
        this.userTotalPage = await Math.ceil(this.userListTotalCount / 10);
        await this.userList.map(async (item, idx) => {
          // item.push({ checked: false });
          console.info(toJS(item));
          item.checked = false;
        });
      })
      .catch((e) => {
        console.info(e);
        console.info(e.message);
      });
  };

  /* 유저 리스트 상세 페이지로 이동하는 함수 */
  @action pushToDetail = async (item, idx = 0, type = '') => {
    const req = {
      id: item.id,
      headers: {
        Authorization: Auth.token,
      },
    };

    await AccountAPI.getDetailUserList(req)
      .then(async (res) => {
        console.info(res);
        this.userDetailList = await res.data.data;
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });

    console.info(toJS(this.noticeDetailList));
    // if (type !== 'modify') {
    //   this.state = 3;
    // }
  };

  /* 유저 리스트 클릭한 페이지로 이동하는 함수 */
  @action movePage = async (e) => {
    const newPage = e.target.innerText * 1;
    this.userCurrentPage = newPage;
    await this.getUserList(this.userCurrentPage);
  };

  /* 유저 리스트 다음 페이지로 이동하는 함수 */
  @action pageNext = async () => {
    if (this.userCurrentPage < this.userTotalPage) {
      const nextPage = this.userCurrentPage + 1;
      this.userCurrentPage = nextPage;
      await this.getUserList(this.userCurrentPage);
    }
  };

  /* 유저 리스트 이전 페이지로 이동하는 함수 */
  @action pagePrev = async () => {
    if (this.userCurrentPage > 1) {
      const newPage = this.userCurrentPage - 1;
      this.userCurrentPage = newPage;
      await this.getUserList(this.userCurrentPage);
    }
  };
}

export default new User();

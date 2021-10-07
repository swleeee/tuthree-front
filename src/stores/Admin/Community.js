import { observable, action, makeObservable, toJS, decorate } from 'mobx';
import * as NoticeAPI from '../../axios/Comuunity/Notice';
import * as FaqAPI from '../../axios/Comuunity/Faq';

class Community {
  constructor() {
    makeObservable(this);
  }
  @observable Authorization =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmcmVzaF90b2tlbiIsImlhdCI6MTYzMzYxMTYwMCwiZXhwIjoxNjMzNjE1MjAwLCJ1c2VySWQiOiJhZG1pbjEiLCJHcmFkZSI6ImFkbWluIn0.AxNJ46S1bTeBIa0G676Lzt9UYmrYia42afHyYpIpl5k';
  @observable type = 1; // FAQ : 1, 공지사항 : 2, 커뮤니티 : 3
  @observable state = 1; // 조회 : 1, 글 쓰기 : 2, 글 수정 : 3

  @observable noticeDelState = 1; // 기본 : 1, 선택 삭제 : 2
  @observable noticeList = []; // 공지사항 페이지 당 목록 데이터
  @observable noticeListTotalCount = 0; // 공지사항 전체 개수
  @observable noticeTotalPage = 0; // 공지사항 전체 페이지 수
  @observable noticeCurrentPage = 1; // 공지사항 현재 페이지
  @observable noticeCurrentSet = parseInt((this.noticeCurrentPage - 1) / 5) + 1; // 공지사항 현재 화면에 보일 페이지들 (ex: 1 2 3 4 5 / 6 7 8 9 10 ...)
  @observable noticeDetailList = []; // 공지사항 세부 페이지

  @observable checkState = 0;
  @observable checkAry = []; // 공지사항 체크박스 선택하면 배열 안에 공지사항 id가 들어감

  @observable noticeTitle = ''; // 공지사항 제목
  @observable noticeContent = ''; // 공지사항 내용
  @observable noticeState = ''; // 공지사항 분류 (중요 / 일반)

  @observable noticeWritingState = 0; // (0 : 글작성 / 1 : 글수정)

  /////////////////////////////////////////////////////////////////////////

  @observable faqDelState = 1; // 기본 : 1, 선택 삭제 : 2
  @observable faqList = []; // FAQ 페이지 당 목록 데이터
  @observable faqListTotalCount = 0; // FAQ 전체 개수
  @observable faqTotalPage = 0; // FAQ 전체 페이지 수
  @observable faqCurrentPage = 1; // FAQ 현재 페이지
  @observable faqCurrentSet = parseInt((this.noticeCurrentPage - 1) / 5) + 1; // FAQ 현재 화면에 보일 페이지들 (ex: 1 2 3 4 5 / 6 7 8 9 10 ...)
  @observable faqDetailList = []; // FAQ 세부 페이지

  @observable checkFaqState = 0;
  @observable checkFaqAry = []; // Faq 체크박스 선택하면 배열 안에 공지사항 id가 들어감

  @observable faqTitle = ''; // FAQ 제목
  @observable faqContent = ''; // FAQ 내용
  @observable faqState = ''; // FAQ 분류 (중요 / 일반)

  @observable faqWritingState = 0; // (0 : 글작성 / 1 : 글수정)

  /* 공지사항 상단 네비게이션 이동 관련 함수 */
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

  /* 공지사항 작성 - 분류 select change 함수 */
  @action onSelectHandler = (e, type) => {
    console.info(toJS(this.noticeDetailList));
    switch (type) {
      case 'noticeState':
        this.noticeState = e.value;
        break;
      case 'faqState':
        this.faqState = e.value;
        break;
      default:
        break;
    }
  };

  /* 공지사항 작성 - 제목 input chagne 함수 */
  @action onInputHandler = (e, type) => {
    console.info(e.value);
    switch (type) {
      case 'noticeTitle':
        this.noticeTitle = e.value;
        break;
      case 'faqTitle':
        this.faqTitle = e.value;
        break;
      default:
        break;
    }
  };

  /* 전체 공지사항 목록 가져오는 함수  */
  @action getAdminNoticeList = async (id) => {
    const req = {
      id: id ? id : 1,
      headers: {
        Authorization: this.Authorization,
      },
    };

    await NoticeAPI.getNotice(req)
      .then(async (res) => {
        console.info(res);
        this.noticeList = await res.data.data;
        this.noticeListTotalCount = await res.data.list;
        this.noticeTotalPage = await Math.ceil(this.noticeListTotalCount / 10);
        await this.noticeList.map(async (item, idx) => {
          // item.push({ checked: false });
          console.info(toJS(item));
          item.checked = false;
        });
        console.info(toJS(this.noticeList));
        console.info(res.data.list);
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
        console.info(e.message);
      });
  };

  /* 공지사항 작성하는 함수 */
  @action setAdminNotice = async () => {
    console.info(this.noticeState);
    console.info('공지사항 작성 버튼 클릭');
    const req = {
      data: {
        adminId: {
          id: 'admin1',
          pwd: 'admin1',
        },
        title: this.noticeTitle,
        content: this.noticeContent,
        type: this.noticeState === '일반' ? 'NORMAL' : 'IMPORTANT',
        secret: 'OPEN',
      },
      headers: {
        Authorization: this.Authorization,
      },
    };

    await NoticeAPI.setAdminNotice(req)
      .then(async (res) => {
        console.info(res);
        this.noticeWritingState = 0;
        this.state = 1;
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };

  /* 공지사항 수정하는 함수 */
  @action putAdminNotice = async (id) => {
    console.info(this.noticeState);
    console.info('공지사항 수정 버튼 클릭');
    const req = {
      id: id,
      data: {
        adminId: {
          id: 'admin1',
          pwd: 'admin1',
        },
        title: this.noticeTitle,
        content: this.noticeContent,
        type: this.noticeState === '일반' ? 'NORMAL' : 'IMPORTANT',
        secret: 'OPEN',
      },
      headers: {
        Authorization: this.Authorization,
      },
    };

    await NoticeAPI.putAdminNotice(req)
      .then(async (res) => {
        console.info(res);
        this.noticeWritingState = 0;
        this.state = 1;
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };

  /* 공지사항 삭제하는 함수 */
  @action delAdminNotice = async (id) => {
    console.info(id);
    console.info(this.noticeDelState);
    const req = {
      id: id,
      headers: {
        Authorization: this.Authorization,
      },
    };

    await NoticeAPI.delAdminNotice(req)
      .then((res) => {
        console.info(res);
        if (this.noticeDelState === 1) {
          this.state = 1;
          this.noticeWritingState = 0;
          this.getAdminNoticeList();
        }
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };

  /* 공지사항 클릭한 페이지로 이동하는 함수 */
  @action movePage = async (e) => {
    const newPage = e.target.innerText * 1;
    this.noticeCurrentPage = newPage;
    await this.getAdminNoticeList(this.noticeCurrentPage);
  };

  /* 공지사항 다음 페이지로 이동하는 함수 */
  @action pageNext = async () => {
    if (this.noticeCurrentPage < this.noticeTotalPage) {
      const nextPage = this.noticeCurrentPage + 1;
      this.noticeCurrentPage = nextPage;
      await this.getAdminNoticeList(this.noticeCurrentPage);
    }
  };

  /* 공지사항 이전 페이지로 이동하는 함수 */
  @action pagePrev = async () => {
    if (this.noticeCurrentPage > 1) {
      const newPage = this.noticeCurrentPage - 1;
      this.noticeCurrentPage = newPage;
      await this.getAdminNoticeList(this.noticeCurrentPage);
    }
  };

  /* 체크 박스 관련 함수 */
  @action checkDataHandler = (type = '', item, id, idx) => {
    console.info(id);
    console.info(item.checked);
    let index = 0;
    switch (type) {
      case 'notice':
        index = this.checkAry.indexOf(parseInt(id));
        // this.checkAry

        console.info(index);
        if (index === -1) {
          this.checkAry.push(parseInt(id));
        } else {
          this.checkAry.splice(index, 1);
        }
        console.info(toJS(this.checkAry));
        // console.info(this.checkData(id));
        this.checkData(type, item, idx);
        break;
      case 'faq':
        index = this.checkFaqAry.indexOf(parseInt(id));
        // this.checkAry

        console.info(index);
        if (index === -1) {
          this.checkFaqAry.push(parseInt(id));
        } else {
          this.checkFaqAry.splice(index, 1);
        }
        console.info(toJS(this.checkFaqAry));
        // console.info(this.checkData(id));
        this.checkData(type, item, idx);
        break;
      default:
        break;
    }
  };

  /*  */
  @action checkData = (type, item, idx) => {
    // console.info(this.checkAry.includes(parseInt(id)));
    // console.info(id);
    switch (type) {
      case 'notice':
        console.info(idx);
        console.info(toJS(this.noticeList[idx]));
        if (this.noticeList[idx].checked) {
          this.noticeList[idx].checked = false;
        } else {
          this.noticeList[idx].checked = true;
        }
        break;
      case 'faq':
        console.info(idx);
        console.info(toJS(this.faqList[idx]));
        if (this.faqList[idx].checked) {
          this.faqList[idx].checked = false;
        } else {
          this.faqList[idx].checked = true;
        }
        break;
      default:
        break;
    }

    // item.checked = !item.checked;

    // return this.checkAry.includes(id);
  };

  /* 선택삭제하는 함수 */
  @action delCheckedData = async (type = '') => {
    switch (type) {
      case 'notice':
        console.info('sdfsdf');
        console.info(this.noticeDelState);
        await Promise.all(
          this.checkAry.map(async (item, idx) => {
            console.info(item);

            await this.delAdminNotice(item);
          })
        );

        console.info(toJS(this.noticeList));
        this.getAdminNoticeList();
        this.state = 1;
        this.noticeWritingState = 0;
        this.noticeDelState = 1;
        break;
      case 'faq':
        console.info('sdfsdf');
        console.info(this.faqDelState);
        await Promise.all(
          this.checkFaqAry.map(async (item, idx) => {
            console.info(item);

            await this.delAdminFaq(item);
          })
        );

        console.info(toJS(this.faqList));
        this.getAdminFaqList();
        this.state = 1;
        this.faqWritingState = 0;
        this.faqDelState = 1;
        break;
      default:
        break;
    }
  };

  /* 공지사항 상세 페이지로 이동하는 함수 */
  @action pushToDetail = async (item, idx = 0, type = '') => {
    const req = {
      id: item.id,
      headers: {
        Authorization: this.Authorization,
      },
    };

    await NoticeAPI.getDetailNotice(req)
      .then(async (res) => {
        console.info(res);
        this.noticeDetailList = await res.data.data;
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });

    // await this.noticeDetailList.push(item);
    console.info(toJS(this.noticeDetailList));
    if (type !== 'modify') {
      this.state = 3;
    }
  };

  /* 전체 FAQ 목록 가져오는 함수  */
  @action getAdminFaqList = async (id) => {
    const req = {
      id: id ? id : 1,
      headers: {
        Authorization: this.Authorization,
      },
    };

    await FaqAPI.getFaq(req)
      .then(async (res) => {
        console.info(res);
        this.faqList = await res.data.data;
        this.faqListTotalCount = await res.data.list;
        this.faqTotalPage = await Math.ceil(this.faqListTotalCount / 10);
        await this.faqList.map(async (item, idx) => {
          item.checked = false;
        });
        console.info(toJS(this.faqList));
        console.info(res.data.list);
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
        console.info(e.message);
      });
  };

  /* FAQ 작성하는 함수 */
  @action setAdminFaq = async () => {
    console.info(this.faqState);
    console.info('FAQ 작성 버튼 클릭');
    let type = '';
    switch (this.faqState) {
      case '사용자 인증':
        type = 'CETIFY';
        break;
      case '수업매칭서비스':
        type = 'MATCHING';
        break;
      case '수업관리서비스':
        type = 'MANAGE';
        break;
      case '기타':
        type = 'ETC';
        break;
      default:
        break;
    }
    const req = {
      data: {
        adminId: {
          id: 'admin2',
          pwd: 'admin2',
        },
        title: this.faqTitle,
        content: this.faqContent,
        type: type,
        secret: 'OPEN',
      },
      headers: {
        Authorization: this.Authorization,
      },
    };

    await FaqAPI.setAdminFaq(req)
      .then(async (res) => {
        console.info(res);
        this.faqWritingState = 0;
        this.state = 1;
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };

  /* FAQ 수정하는 함수 */
  @action putAdminFaq = async (id) => {
    console.info(this.faqState);
    console.info('FAQ 수정 버튼 클릭');
    let type = '';
    switch (this.faqState) {
      case '사용자 인증':
        type = 'CERTIFY';
        break;
      case '수업매칭서비스':
        type = 'MATCHING';
        break;
      case '수업관리서비스':
        type = 'MANAGE';
        break;
      case '기타':
        type = 'ETC';
        break;
      default:
        break;
    }

    const req = {
      id: id,
      data: {
        adminId: {
          id: 'admin1',
          pwd: 'admin1',
        },
        title: this.faqTitle,
        content: this.faqContent,
        type: type,
        secret: 'OPEN',
      },
      headers: {
        Authorization: this.Authorization,
      },
    };

    await FaqAPI.putAdminFaq(req)
      .then(async (res) => {
        console.info(res);
        this.faqWritingState = 0;
        this.state = 1;
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };

  /* FAQ 삭제하는 함수 */
  @action delAdminFaq = async (id) => {
    const req = {
      id: id,
      headers: {
        Authorization: this.Authorization,
      },
    };

    await FaqAPI.delAdminFaq(req)
      .then((res) => {
        console.info(res);
        if (this.faqDelState === 1) {
          this.state = 1;
          this.faqWritingState = 0;
          this.getAdminFaqList();
        }
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };

  /* FAQ 상세 페이지로 이동하는 함수 */
  @action pushToFaqDetail = async (item, idx = 0, type = '') => {
    const req = {
      id: item.id,
      headers: {
        Authorization: this.Authorization,
      },
    };

    await FaqAPI.getDetailFaq(req)
      .then(async (res) => {
        console.info(res);
        this.faqDetailList = await res.data.data;
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });

    console.info(toJS(this.faqDetailList));
    if (type !== 'modify') {
      this.state = 3;
    }
  };

  /* FAQ 클릭한 페이지로 이동하는 함수 */
  @action moveFaqPage = async (e) => {
    const newPage = e.target.innerText * 1;
    this.faqCurrentPage = newPage;
    await this.getAdminFaqList(this.faqCurrentPage);
  };

  /* FAQ 다음 페이지로 이동하는 함수 */
  @action pageFaqNext = async () => {
    if (this.faqCurrentPage < this.faqTotalPage) {
      const nextPage = this.faqCurrentPage + 1;
      this.faqCurrentPage = nextPage;
      await this.getAdminFaqList(this.faqCurrentPage);
    }
  };

  /* FAQ 이전 페이지로 이동하는 함수 */
  @action pageFaqPrev = async () => {
    if (this.faqCurrentPage > 1) {
      const newPage = this.faqCurrentPage - 1;
      this.faqCurrentPage = newPage;
      await this.getAdminFaqList(this.faqCurrentPage);
    }
  };
}

export default new Community();

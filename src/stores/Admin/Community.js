import { observable, action, makeObservable, toJS, decorate } from 'mobx';
import * as NoticeAPI from '../../axios/Comuunity/Notice';
import * as FaqAPI from '../../axios/Comuunity/Faq';
import * as CommunityAPI from '../../axios/Comuunity/Community';

class Community {
  // constructor() {
  //   makeObservable(this);
  // }
  @observable Authorization =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmcmVzaF90b2tlbiIsImlhdCI6MTYzNDA1MjQ2OSwiZXhwIjoxNjM0MDU2MDY5LCJ1c2VySWQiOiJhZG1pbjEiLCJHcmFkZSI6ImFkbWluIn0.rtlc16mICxV0vX8rpneEIzYM-jd4ErIcEZOM07dTSb4';
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

  // =============================================================

  @observable checkCommunityState = 0;
  @observable checkCommunityAry = []; // Community 체크박스 선택하면 배열 안에 공지사항 id가 들어감

  @observable communityState = 1; // 1 : 조회, 2 : 작성, 3 : 세부 조회
  @observable communityList = []; // community 페이지 당 목록 데이터
  @observable communityListTotalCount = 0; // community 전체 개수
  @observable communityTotalPage = 0; // community 전체 페이지 수
  @observable communityCurrentPage = 1; // community 현재 페이지
  @observable communityCurrentSet =
    parseInt((this.communityCurrentPage - 1) / 5) + 1; // community 현재 화면에 보일 페이지들 (ex: 1 2 3 4 5 / 6 7 8 9 10 ...)
  @observable communityDetailList = []; // community 세부 페이지
  @observable communityDetailFileAry = [];
  @observable communityFile = [];
  @observable communityFileAry = [];
  @observable communityFileName = [];
  @observable communityWritingState = 0;
  @observable communitySearchValue = '';
  @observable communitySearchFinalValue = '';
  @observable communityErrorMessage = '';
  @observable communityTitle = '';
  @observable communityContent = '';

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
          id: 'tuthree10',
          pwd: 'tuthree10',
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
        alert('해당 공지사항 글을 작성하였습니다.');
        this.noticeWritingState = 0;
        this.state = 1;
      })
      .catch((e) => {
        alert('해당 공지사항 글을 작성하는데 실패하였습니다.');
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
          id: 'tuthree10',
          pwd: 'tuthree10',
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
        alert('해당 공지사항 글을 수정하였습니다.');

        this.noticeWritingState = 0;
        this.state = 1;
      })
      .catch((e) => {
        alert('해당 공지사항 글을 수정하는데 실패하였습니다.');
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
        alert('해당 공지사항 글이 삭제되었습니다.');
        if (this.noticeDelState === 1) {
          this.checkAry = [];
          this.state = 1;
          this.noticeWritingState = 0;
          this.getAdminNoticeList();
        }
      })
      .catch((e) => {
        alert('해당 공지사항 글을 삭제하는데 실패하였습니다.');
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

      case 'community':
        index = this.checkCommunityAry.indexOf(parseInt(id));
        // this.checkAry

        console.info(index);
        if (index === -1) {
          this.checkCommunityAry.push(parseInt(id));
        } else {
          this.checkCommunityAry.splice(index, 1);
        }
        console.info(toJS(this.checkCommunityAry));
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

      case 'community':
        console.info(idx);
        console.info(toJS(this.communityList[idx]));
        if (this.communityList[idx].checked) {
          this.communityList[idx].checked = false;
        } else {
          this.communityList[idx].checked = true;
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
        this.checkAry = [];
        this.state = 1;
        this.noticeWritingState = 0;
        this.noticeDelState = 1;
        break;
      case 'faq':
        console.info('sdfsdf');
        console.info(this.faqDelState);
        console.info(toJS(this.checkFaqAry));
        await Promise.all(
          this.checkFaqAry.map(async (item, idx) => {
            console.info(item);

            await this.delAdminFaq(item);
          })
        );

        console.info(toJS(this.faqList));
        this.getAdminFaqList();
        this.checkFaqAry = [];
        this.state = 1;
        this.faqWritingState = 0;
        this.faqDelState = 1;
        break;

      case 'community':
        await Promise.all(
          this.checkCommunityAry.map(async (item, idx) => {
            console.info(item);

            await this.delCommunity(item);
          })
        );

        this.getCommunityList();
        this.checkCommunityAry = [];
        this.state = 1;
        this.communityDelState = 1;
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
      data: {
        adminId: {
          id: 'tuthree10',
          pwd: 'tuthree10',
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
        alert('해당 FAQ 글을 작성하였습니다.');
        this.faqWritingState = 0;
        this.state = 1;
      })
      .catch((e) => {
        alert('해당 FAQ 글을 작성하는데 실패하였습니다.');
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
          id: 'tuthree10',
          pwd: 'tuthree10',
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
        alert('해당 FAQ 글을 수정하였습니다.');
        this.faqWritingState = 0;
        this.state = 1;
      })
      .catch((e) => {
        alert('해당 FAQ 글을 수정하는데 실패하였습니다.');
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
          this.checkFaqAry = [];
          alert('해당 FAQ 글이 삭제되었습니다.');
          this.state = 1;
          this.faqWritingState = 0;
          this.getAdminFaqList();
        }
      })
      .catch((e) => {
        alert('해당 FAQ 글을 삭제하는데 실패하였습니다.');
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

  @action getCommunityList = async (id) => {
    console.info('communitySearchValue');
    console.info(this.communitySearchValue);
    if (this.communitySearchValue) {
      this.communityCurrentPage = 1;
      this.searchCommunity();
    } else {
      console.info('init');
      const req = {
        id: id ? id : 1,
        headers: {
          Authorization: this.Authorization,
        },
      };

      await CommunityAPI.getCommunity(req)
        .then(async (res) => {
          console.info(res);
          this.communityList = await res.data.data;
          this.communityListTotalCount = await res.data.list;
          this.communityTotalPage = await Math.ceil(
            this.communityListTotalCount / 10
          );

          this.communityCurrentSet =
            parseInt((this.communityCurrentPage - 1) / 5) + 1; // community 현재 화면에 보일 페이지들 (ex: 1 2 3 4 5 / 6 7 8 9 10 ...)

          await this.communityList.map(async (item, idx) => {
            item.checked = false;
          });

          console.info(toJS(this.communityList));
        })
        .catch((e) => {
          console.info(e);
          console.info(e.response);
        });
    }
  };

  /* community 삭제하는 함수 */
  @action delCommunity = async (id) => {
    const req = {
      id: id,
      headers: {
        Authorization: this.Authorization,
      },
    };

    await CommunityAPI.delCommunity(req)
      .then((res) => {
        console.info(res);

        if (this.communityDelState === 1) {
          this.checkCommunityAry = [];
          alert('해당 커뮤니티 글이 삭제되었습니다');
          this.state = 1;
          this.communityState = 1;
          this.communityWritingState = 0;
          this.getCommunityList();
        }
      })
      .catch((e) => {
        alert('글 삭제를 실패하였습니다');
        console.info(e);
        console.info(e.response);
      });
  };

  @action searchCommunity = async (id = '') => {
    console.info(this.communityCurrentSet);
    console.info(this.communityCurrentPage);
    console.info(this.communityTotalPage);

    console.info('search');
    console.info(id);
    const req = {
      params: {
        keyword: id
          ? this.communitySearchValue
          : this.communitySearchFinalValue,
        page: id ? id : this.communityCurrentPage,
      },
      headers: {
        Authorization: this.Authorization,
      },
    };

    await CommunityAPI.searchCommunity(req)
      .then(async (res) => {
        if (res.data.statusCode === 403) {
          console.info('error');
          this.communityErrorMessage = `'${this.communitySearchValue}' 검색어를 찾을 수 없습니다. 다시 검색해주세요!`;
        } else {
          console.info(res);
          if (id) {
            this.communitySearchFinalValue = this.communitySearchValue;
          }

          this.communityList = await res.data.data;
          this.communityListTotalCount = await res.data.list;
          this.communityTotalPage = await Math.ceil(
            this.communityListTotalCount / 10
          );
          if (id) {
            this.communityCurrentPage = 1;
          }

          console.info(this.communityCurrentSet);
          console.info(this.communityCurrentPage);
          console.info(this.communityTotalPage);
        }
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };

  @action onChangeHandler = (e, type = '') => {
    switch (type) {
      case 'community':
        console.info(e.target.value);
        this.communitySearchValue = e.target.value;
        break;
      default:
        break;
    }
  };

  // @action onClickHandler = (type = '') => {
  //   switch (type) {
  //     case 'community':
  //       // console.info(e.target.value);
  //       this.searchCommunity();
  //       break;
  //     default:
  //       break;
  //   }
  // };

  /* commuinity 상세 페이지로 이동하는 함수 */
  @action pushToCommunityDetail = async (item, idx = 0, type = '') => {
    console.info(this.communityState);
    this.communityState = 3;
    console.info(this.communityState);
    const req = {
      id: item.id,
      headers: {
        Authorization: this.Authorization,
      },
    };

    await CommunityAPI.getDetailCommunity(req)
      .then(async (res) => {
        console.info(res);
        this.communityDetailList = await res.data.list;
        this.communityDetailFileAry = await res.data.data;
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });

    // await this.communityDetailList.push(item);
    console.info(toJS(this.communityDetailList));
    console.info(toJS(this.communityDetailFileAry));
    if (type !== 'modify') {
      this.state = 3;
      this.communityState = 3;
    }
    // this.communityState = 2;
  };

  /* community 클릭한 페이지로 이동하는 함수 */
  @action moveCommunityPage = async (e) => {
    const newPage = e.target.innerText * 1;
    console.info(e);
    this.communityCurrentPage = newPage;
    if (this.communitySearchFinalValue === '') {
      await this.getCommunityList(this.communityCurrentPage);
    } else {
      await this.searchCommunity();
    }
  };

  /* community 다음 페이지로 이동하는 함수 */
  @action pageCommunityNext = async () => {
    if (this.communityCurrentPage < this.communityTotalPage) {
      const nextPage = this.communityCurrentPage + 1;
      this.communityCurrentPage = nextPage;

      if (this.communitySearchFinalValue === '') {
        await this.getCommunityList(this.communityCurrentPage);
      } else {
        await this.searchCommunity();
      }
    }
  };

  /* community 이전 페이지로 이동하는 함수 */
  @action pageCommunityPrev = async () => {
    if (this.communityCurrentPage > 1) {
      const newPage = this.communityCurrentPage - 1;
      this.communityCurrentPage = newPage;

      if (this.communitySearchFinalValue === '') {
        await this.getCommunityList(this.communityCurrentPage);
      } else {
        await this.searchCommunity();
      }
    }
  };
}

export default new Community();

import { observable, action, makeObservable, toJS, decorate } from 'mobx';
import * as NoticeAPI from '../../axios/Comuunity/Notice';
import * as FaqAPI from '../../axios/Comuunity/Faq';
import * as CommunityAPI from '../../axios/Comuunity/Community';

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

  @observable faqDropdownState = -1;
  @observable faqList = []; // FAQ 페이지 당 목록 데이터
  @observable faqListTotalCount = 0; // FAQ 전체 개수
  @observable faqTotalPage = 0; // FAQ 전체 페이지 수
  @observable faqCurrentPage = 1; // FAQ 현재 페이지
  @observable faqCurrentSet = parseInt((this.faqCurrentPage - 1) / 5) + 1; // FAQ 현재 화면에 보일 페이지들 (ex: 1 2 3 4 5 / 6 7 8 9 10 ...)
  @observable faqDetailList = []; // FAQ 세부 페이지

  @observable communityState = 1; // 1 : 조회, 2 : 작성, 3 : 세부 조회
  @observable communityList = []; // community 페이지 당 목록 데이터
  @observable communityListTotalCount = 0; // community 전체 개수
  @observable communityTotalPage = 0; // community 전체 페이지 수
  @observable communityCurrentPage = 1; // community 현재 페이지
  @observable communityCurrentSet =
    parseInt((this.communityCurrentPage - 1) / 5) + 1; // community 현재 화면에 보일 페이지들 (ex: 1 2 3 4 5 / 6 7 8 9 10 ...)
  @observable communityDetailList = []; // community 세부 페이지
  @observable communityFileAry = [];
  @observable communityFileName = [];

  @action onClickNavHandler = (type) => {
    console.info(type);
    switch (type) {
      case 'notice':
        this.type = 1;
        this.state = 1;
        // Auth.idStep = 1;
        break;
      case 'faq':
        this.type = 2;
        this.state = 1;
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

  @action dropdownHandler = async (item, idx = 0) => {
    console.info(toJS(item));

    if (idx === this.faqDropdownState) {
      this.faqDropdownState = -1;
    } else {
      this.faqDropdownState = idx;
    }
  };

  /* 공지사항 클릭한 페이지로 이동하는 함수 */
  @action moveNoticePage = async (e) => {
    const newPage = e.target.innerText * 1;
    this.noticeCurrentPage = newPage;
    await this.getNoticeList(this.noticeCurrentPage);
  };

  /* 공지사항 다음 페이지로 이동하는 함수 */
  @action pageNoticeNext = async () => {
    if (this.noticeCurrentPage < this.noticeTotalPage) {
      const nextPage = this.noticeCurrentPage + 1;
      this.noticeCurrentPage = nextPage;
      await this.getNoticeList(this.noticeCurrentPage);
    }
  };

  /* 공지사항 이전 페이지로 이동하는 함수 */
  @action pageNoticePrev = async () => {
    if (this.noticeCurrentPage > 1) {
      const newPage = this.noticeCurrentPage - 1;
      this.noticeCurrentPage = newPage;
      await this.getNoticeList(this.noticeCurrentPage);
    }
  };

  @action getFaqList = async (id) => {
    const req = {
      id: id ? id : 1,
      headers: {
        Authorization: this.Authorization,
      },
    };

    FaqAPI.getFaq(req)
      .then(async (res) => {
        console.info(res);
        this.faqDropdownState = -1;
        this.faqList = await res.data.data;
        this.faqListTotalCount = await res.data.list;
        this.faqTotalPage = await Math.ceil(this.faqListTotalCount / 10);
        await this.faqList.map(async (item, idx) => {
          item.checked = false;
        });
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };

  /* FAQ 클릭한 페이지로 이동하는 함수 */
  @action moveFaqPage = async (e) => {
    const newPage = e.target.innerText * 1;
    this.faqCurrentPage = newPage;

    await this.getFaqList(this.faqCurrentPage);
  };

  /* FAQ 다음 페이지로 이동하는 함수 */
  @action pageFaqNext = async () => {
    if (this.faqCurrentPage < this.faqTotalPage) {
      const nextPage = this.faqCurrentPage + 1;
      this.faqCurrentPage = nextPage;
      await this.getFaqList(this.faqCurrentPage);
    }
  };

  /* FAQ 이전 페이지로 이동하는 함수 */
  @action pageFaqPrev = async () => {
    if (this.faqCurrentPage > 1) {
      const newPage = this.faqCurrentPage - 1;
      this.faqCurrentPage = newPage;
      await this.getFaqList(this.faqCurrentPage);
    }
  };

  @action getCommunityList = async (id) => {
    console.info('init');
    const req = {
      id: id ? id : 1,
      headers: {
        Authorization: this.Authorization,
      },
    };

    CommunityAPI.getCommunity(req)
      .then(async (res) => {
        console.info(res);
        this.communityList = await res.data.data;
        this.communityListTotalCount = await res.data.list;
        this.communityTotalPage = await Math.ceil(
          this.communityListTotalCount / 10
        );
        await this.communityList.map(async (item, idx) => {
          item.checked = false;
        });
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };
  /* commuinity 상세 페이지로 이동하는 함수 */
  @action pushToCommunityDetail = async (item, idx = 0) => {
    await this.communityDetailList.push(item);
    console.info(toJS(this.communityDetailList));
    this.state = 2;
  };

  /* community 클릭한 페이지로 이동하는 함수 */
  @action moveCommunityPage = async (e) => {
    const newPage = e.target.innerText * 1;
    this.communityCurrentPage = newPage;
    await this.getCommunityList(this.communityCurrentPage);
  };

  /* community 다음 페이지로 이동하는 함수 */
  @action pageCommunityNext = async () => {
    if (this.communityCurrentPage < this.communityTotalPage) {
      const nextPage = this.communityCurrentPage + 1;
      this.communityCurrentPage = nextPage;
      await this.getCommunityList(this.communityCurrentPage);
    }
  };

  /* community 이전 페이지로 이동하는 함수 */
  @action pageCommunityPrev = async () => {
    if (this.communityCurrentPage > 1) {
      const newPage = this.communityCurrentPage - 1;
      this.communityCurrentPage = newPage;
      await this.getCommunityList(this.communityCurrentPage);
    }
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
}

export default new Community();

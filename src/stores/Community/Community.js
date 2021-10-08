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
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmcmVzaF90b2tlbiIsImlhdCI6MTYzMzY1ODk3NywiZXhwIjoxNjMzNjYyNTc3LCJ1c2VySWQiOiJ0ZWFjaGVyMSIsIkdyYWRlIjoidGVhY2hlciJ9.a8s5pCBhZhosj2wBCdOAFYcI_-qJ6Vu32FQZ20gW3Dw';

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

  @action base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
      var ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }
    return bytes;
  }

  @action saveByteArray(reportName, byte) {
    var blob = new Blob([byte], { type: 'application/pdf' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    link.download = fileName;
    link.click();
  }

  @action downloadFile = async (id, name) => {
    const req = {
      id: id,
      headers: {
        Authorization: this.Authorization,

        // 'Content-Type': 'application/octet-stream',
      },
    };

    await CommunityAPI.downloadFile(req)
      .then(async (res) => {
        console.info(res);
        console.info(res.data);
        this.communityFile = await res.data;
        // let blob = new Blob([new Uint8Array(res.data)], {
        //   type: 'application/json',
        // });

        // let array = new Uint8Array(res.data.length);
        // console.info(res.data.length);
        // for (let i = 0; i < res.data.length; i++) {
        //   array[i] = res.data.charCodeAt(i);
        // }
        // console.info(array);
        // let blob = new Blob([array], {
        //   type: 'application/octet-stream',
        // });
        // console.info(blob);
        // window.location.href = URL.createObjectURL(blob);

        // console.info(res.data);

        // var reader = new FileReader();
        // let data = '';
        // reader.addEventListener('loaded', function (e) {
        //   data = reader.result;
        // });
        // reader.readAsBinaryString(res.data);

        let blob = new Blob([res.data], { type: 'application/octet-stream' });
        console.info(blob);
        const url = window.URL.createObjectURL(blob);
        // const a = document.createElement('a');
        // a.href = `${url}`;
        // a.download = `${url}`;
        // a.click();
        // a.remove();
        // window.URL.revokeObjectURL(url);
        // reader.readAsBinaryString(blob);
        // reader.readAsArrayBuffer(blob);
        // console.info(reader);
        let file = new File([blob], name);
        this.communityFileAry.push(file);
        // console.info(url);
        // console.info(file);
        console.info(toJS(this.communityFileAry));

        // var reader = new FileReader();
        // reader.onload = function (e) {
        //   console.log(e.target.result);
        // };
        // reader.onerror = function (e) {
        //   console.log('Error : ' + e.type);
        // };
        // reader.readAsBinaryString(blob);
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

  /* 공지사항 작성 - 제목 input chagne 함수 */
  @action onInputHandler = (e, type) => {
    console.info(e.value);
    switch (type) {
      case 'community':
        this.communityTitle = e.value;
        break;

      default:
        break;
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

      CommunityAPI.getCommunity(req)
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
        })
        .catch((e) => {
          console.info(e);
          console.info(e.response);
        });
    }
  };

  /* community 작성하는 함수 */
  @action setCommunity = async () => {
    console.info('community 작성 버튼 클릭');

    const formData = new FormData();
    formData.append('userId', 'teacher1');
    formData.append('title', this.communityTitle);
    formData.append('content', this.communityContent);
    formData.append('secret', 'OPEN');
    // formData.append('file', this.communityFileAry[0]);
    for (let i = 0; i < this.communityFileAry.length; i++) {
      formData.append(`file`, this.communityFileAry[i]);
    }

    const req = {
      data: formData,
      headers: {
        Authorization: this.Authorization,
      },
    };

    await CommunityAPI.setCommunity(req)
      .then(async (res) => {
        console.info(res);
        alert('글 작성을 완료하였습니다');
        this.communityWritingState = 0;
        this.communityState = 1;
      })
      .catch((e) => {
        alert('글 작성하는 데 실패하였습니다');
        console.info(e);
        console.info(e.response);
      });
  };

  /* community 수정하는 함수 */
  @action putCommunity = async (id) => {
    console.info(toJS(this.communityFileAry[0]));
    console.info(toJS(this.communityFileAry[1]));
    const formData = new FormData();
    formData.append('userId', 'teacher1');

    formData.append('title', this.communityTitle);
    formData.append('content', this.communityContent);
    formData.append('secret', 'OPEN');
    // formData.append('file', this.communityFileAry[0]);
    for (let i = 0; i < this.communityFileAry.length; i++) {
      formData.append(`file`, this.communityFileAry[i]);
    }

    const req = {
      data: formData,
      headers: {
        Authorization: this.Authorization,
      },
      id: id,
    };

    await CommunityAPI.putCommunity(req)
      .then(async (res) => {
        console.info(res);
        alert('글 수정이 완료되었습니다');
        this.communityWritingState = 0;
        this.communityState = 1;
      })
      .catch((e) => {
        alert('글 수정을 실패하였습니다');
        console.info(e);
        console.info(e.response);
      });
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
        alert('글 삭제가 완료되었습니다');
        this.communityState = 1;
        this.communityWritingState = 0;
        this.getCommunityList();
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

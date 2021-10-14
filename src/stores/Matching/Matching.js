import { observable, action, makeObservable, toJS, decorate } from 'mobx';
import * as MatchingAPI from '../../axios/Matching/Matching';

class Matching {
  constructor() {
    makeObservable(this);
  }
  @observable bookmarkAry = [];
  @observable bookmarkId = '';
  @observable isCheckBookmark = false;

  @action setBookmark = () => {
    const req = {
      params: {
        from: 'lZmooJ8Ydd',
        to: 'test112',
      },
      //   headers: {
      //     Authorization: this.Authorization,
      //   },
    };
    MatchingAPI.setBookmark(req)
      .then((res) => {
        console.info(res);
        this.checkBookmark();
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };

  @action getBookmark = async () => {
    const req = {
      params: {
        userId: 'lZmooJ8Ydd',
      },
      //   headers: {
      //     Authorization: this.Authorization,
      //   },
    };
    await MatchingAPI.getBookmark(req)
      .then((res) => {
        console.info(res);
        this.bookmarkAry.push(res.data.data);
        console.info(toJS(this.bookmarkAry));
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };

  @action checkBookmark = () => {
    this.bookmarkAry &&
      this.bookmarkAry[0] &&
      this.bookmarkAry[0].map((item, idx) => {
        console.info(toJS(item));
        // console.info(item.indexOf('test112'));
        if (item.user2 === 'test112') {
          this.bookmarkId = item.id;
          this.isCheckBookmark = true;
          return true;
        }
      });
    console.info(this.isCheckBookmark);
  };

  @action delBookmark = (id) => {
    console.info(id);
    const req = {
      id: id,

      //   headers: {
      //     Authorization: this.Authorization,
      //   },
    };
    MatchingAPI.delBookmark(req)
      .then((res) => {
        console.info(res);
        this.bookmarkId = '';
        this.isCheckBookmark = false;
      })
      .catch((e) => {
        console.info(e);
        console.info(e.response);
      });
  };
}

export default new Matching();

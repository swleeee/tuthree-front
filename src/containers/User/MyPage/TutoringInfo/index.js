import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TutorContent from './TutorContent';
import TuteeContent from './TuteeContent';

@inject('MyPage', 'Common', 'Auth')
@observer
class index extends Component {
  render() {
    const { Auth } = this.props;
    return (
      <>
        {/* <TutorContent /> */}
        {Auth.loggedUserType === 'teacher' ? (
          <TutorContent />
        ) : (
          <TuteeContent />
        )}
      </>
    );
  }
}

export default index;

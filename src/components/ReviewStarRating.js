import React from "react";


const stars = [1, 2, 3, 4, 5];
const star = "/tuthree-front/src/static/images/Common/full_star.png";

class ReviewStarRating extends React.Component {
  render() {
    const { width, margin, score } = this.props;
    return stars.map((data, id) => {
      if (id < score) {
        return (
          <img
            src={star}
            style={{
              filter: "sepia(80%) saturate(10)",
              width: `${width}px`,
              margin: `0 ${margin}px`,
            }}
          />
        );
      } else {
        return (
          <img
            src={star}
            style={{
              filter: "invert(0.5) opacity(0.5)",
              width: `${width}px`,
              margin: `0 ${margin}px`,
            }}
          />
        );
      }
    });
  }
}

export default ReviewStarRating;
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
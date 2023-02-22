import * as React from "react";
import { StoryContainer, StoryRight, StoryWrapper } from "./style";

function Story() {
  return (
    <StoryContainer>
      <StoryWrapper>
        <img
          className="left_img"
          src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/624299ca23b66156953f5d36_about-story-image.jpg"
          alt=""
        />
        <StoryRight>
          <div className="title main">The Delicious Story</div>
          <div className="main_text">
            The people, food and the prime locations make the perfect place for
            the friends & family to come together and have great time.
          </div>
          <div className="dates">
            <div className="date">
              <div className="title">2018</div>
              <div className="main_text">
                Plan for this restaurant to deliver healthy food.
              </div>
            </div>
            <div className="date">
              <div className="title">2022</div>
              <div className="main_text">
                Happily in the fourth year by fulfill the motto.
              </div>
            </div>
          </div>
          <div className="name">JOSEFINE</div>
          <img
            src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/62298ac37e5c6e63fdc37e34_josefin-sign.svg"
            alt=""
          />
        </StoryRight>
      </StoryWrapper>
    </StoryContainer>
  );
}

export default Story;

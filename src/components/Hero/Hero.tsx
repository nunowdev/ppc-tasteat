import * as React from "react";
import { HeroContainer, HeroWrapper, HeroMain, HeroLeftButton } from "./style";

function Hero() {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroMain>
          <div className="hero_left">
            <h1>Welcome to Restaurant</h1>
            <div className="content">
              The people, food and the prime locations make the perfect place
              good friends & family to come together and have great time.
            </div>
            <HeroLeftButton>View Menu</HeroLeftButton>
          </div>
          <div className="hero_right">
            <div className="image_area">
              <img
                src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229b247d132ea71a84093db_hero-image.jpg"
                alt=""
              />
            </div>
          </div>
        </HeroMain>
      </HeroWrapper>
    </HeroContainer>
  );
}

export default Hero;

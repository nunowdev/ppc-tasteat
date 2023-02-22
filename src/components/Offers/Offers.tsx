import * as React from "react";
import {
  OffersCard,
  OffersCardLeft,
  OffersCards,
  OffersCardsText,
  OffersCardSubtitle,
  OffersCardTitle,
  OffersContainer,
  OffersMain,
  OffersSubtitle,
  OffersText,
  OffersTitle,
  OffersWrapper,
} from "./style";

function Offers() {
  return (
    <OffersContainer>
      <OffersWrapper>
        <OffersMain>
          <OffersSubtitle>OFFERS</OffersSubtitle>
          <OffersTitle>Our Offer Dishes</OffersTitle>
          <OffersText>
            Our chefs create melt-in-your-mouth dishes that'll satiate even the
            fussiest eaters now <br />
            the dishes are in offers use it based on hunger.
          </OffersText>
          <OffersCards>
            <OffersCard className="burger">
              <OffersCardLeft>
                <div className="image">
                  <div className="title">Only</div>
                  <div className="price">$10</div>
                </div>
                <OffersCardSubtitle>50% OFFER GOING</OffersCardSubtitle>
                <OffersCardTitle>Chicken Burger</OffersCardTitle>
                <OffersCardsText>
                  Chicken burger with the tasty toppings and leaves.
                </OffersCardsText>
              </OffersCardLeft>
              <img
                src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/62302073b2cf9e730021e138_special-dish-1.png"
                alt=""
                className="burger_image"
              />
            </OffersCard>
            <OffersCard className="pizza">
              <OffersCardLeft>
                <div className="image pizza">
                  <div className="title white">Only</div>
                  <div className="price white">$9</div>
                </div>
                <OffersCardSubtitle>50% OFFER GOING</OffersCardSubtitle>
                <OffersCardTitle>Chicken Pizza</OffersCardTitle>
                <OffersCardsText>
                  Pizza with multiple flavor and the toping are mixed.
                </OffersCardsText>
              </OffersCardLeft>
              <img
                src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/623021fad15b67973a116d80_special-dish-2.png"
                alt=""
                className="burger_image"
              />
            </OffersCard>
          </OffersCards>
        </OffersMain>
      </OffersWrapper>
    </OffersContainer>
  );
}

export default Offers;

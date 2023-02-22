import styled from "styled-components";

export const OffersContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OffersWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 40px;
  padding-top: 140px;
  padding-bottom: 60px;
  @media screen and (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
  }
`;

export const OffersMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const OffersSubtitle = styled.div`
  margin-bottom: 0px;
  padding: 7px 0px;
  color: #292e36;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-top: 1px solid #e1b168;
  border-bottom: 1px solid #e1b168;
  font-family: "Josefin Sans", sans-serif;
`;

export const OffersTitle = styled.div`
  font-family: "Cormorant Infant", sans-serif;
  color: #292e36;
  line-height: 1.4;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 8px;
  font-size: 40px;
  text-transform: capitalize;
  @media screen and (max-width: 991px) {
    margin-top: 8px;
    font-size: 32px;
  }
`;

export const OffersText = styled.div`
  margin-bottom: 40px;
  font-family: "Josefin Sans", sans-serif;
  color: #555;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: 0.01em;
  text-align: center;
  @media screen and (max-width: 991px) {
    font-size: 17px;
    width: 100%;
  }
`;

export const OffersCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const OffersCard = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 645px;
  height: 409px;
  margin: 0px 16px;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 991px) {
    width: 100%;
    flex-direction: column;
    padding: 20px;
    height: auto;
    margin-bottom: 16px;
    justify-content: center;
    align-items: center;
  }
  .burger_image {
    width: 301px;
  }
  .pizza_image {
    width: 319px;
  }
  &.burger {
    background-image: url("https://assets.website-files.com/622856f73bdd0f82f7741cb2/62301cd8fcf4b25ef904e220_special-dish-bg-1.jpg");
  }

  &.pizza {
    background-image: url("https://assets.website-files.com/622856f73bdd0f82f7741cb2/62302247d15b671948116e28_special-dish-bg-2.jpg");
  }
`;

export const OffersCardLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  @media screen and (max-width: 991px) {
    align-items: center;
    justify-content: center;
  }

  .image {
    height: 138px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 140px;
    margin: 10px 10px 30px 0px;
    padding: 25px 25px 15px 30px;
    background-image: url("https://assets.website-files.com/622856f73bdd0f82f7741cb2/62301d273087db6f344caaa7_offer-bg-1.svg");
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-transform: rotate(-14deg);
    -ms-transform: rotate(-14deg);
    transform: rotate(-14deg);
    opacity: 1;
    &.pizza {
      background-image: url("https://assets.website-files.com/622856f73bdd0f82f7741cb2/6230226f3dfe38bbe2ce6745_offer-bg-2.svg");
    }
    .title {
      margin-bottom: 0px;
      color: #292e36;
      font-size: 15px;
      line-height: 0.7;
      font-weight: 500;
      text-transform: uppercase;
      font-family: "Josefin Sans", sans-serif;

      &.white {
        color: white;
      }
    }
    .price {
      margin-top: 0px;
      margin-bottom: 0px;
      padding-bottom: 10px;
      font-size: 60px;
      line-height: 1.1;
      font-weight: 700;
      font-family: "Cormorant Infant", sans-serif;
      color: #292e36;
      @media screen and (max-width: 991px) {
        font-size: 45px;
      }
      &.white {
        color: white;
      }
    }
  }
`;

export const OffersCardSubtitle = styled.div`
  border-top: 1px solid #292e36;
  border-bottom: 1px solid #292e36;
  display: inline-block;
  margin-bottom: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: "Josefin Sans", sans-serif;
  color: #292e36;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
`;

export const OffersCardTitle = styled.div`
  font-family: "Cormorant Infant", sans-serif;
  color: #292e36;
  line-height: 1.4;
  font-weight: 700;
  margin-top: 5px;
  margin-bottom: 0px;
  font-size: 40px;
  @media screen and (max-width: 991px) {
    font-size: 32px;
  }
`;

export const OffersCardsText = styled.div`
  margin-bottom: 10px;
  font-family: "Josefin Sans", sans-serif;
  color: #555;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: 0.01em;
  @media screen and (max-width: 991px) {
    font-size: 17px;
    text-align: center;
  }
`;

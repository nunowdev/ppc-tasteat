import styled from "styled-components";

export const DishesContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DishesWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 40px;
  padding-top: 120px;
  padding-bottom: 140px;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const DishesLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  .title {
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
  }

  .text {
    margin-bottom: 10px;
    font-family: "Josefin Sans", sans-serif;
    color: #555;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 400;
    letter-spacing: 0.01em;
    width: 476.25px;
    @media screen and (max-width: 991px) {
      font-size: 17px;
      width: 85%;
    }
  }
  img {
    margin-top: 30px;
    @media screen and (max-width: 991px) {
      width: 100%;
    }
  }
  button {
    padding: 18px 55px;
    border-style: solid;
    border-width: 2px;
    border-color: #e1b168;
    background-color: transparent;
    -webkit-transition: background-color 200ms ease, color 200ms ease;
    transition: background-color 200ms ease, color 200ms ease;
    font-family: "Josefin Sans", sans-serif;
    color: #e1b168;
    font-size: 22px;
    line-height: 1.5;
    font-weight: 500;
    text-align: center;
    margin-top: 60px;
    :hover {
      background-color: #e1b168;
      color: #292e36;
    }
    @media screen and (max-width: 991px) {
      padding: 15px 30px;
      font-size: 18px;
    }
  }
`;

export const DishesRight = styled.div`
  width: 793.75px;
  margin-top: 40px;
  height: 955px;
  overflow-y: scroll;

  @media screen and (max-width: 991px) {
    height: auto;
  }
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DishesRightTitle = styled.h1`
  margin-bottom: 40px;
  font-family: "Cormorant Infant", sans-serif;
  color: #292e36;
  font-size: 36px;
  line-height: 1.4;
  font-weight: 700;

  @media screen and (max-width: 991px) {
    font-size: 26px;
  }
`;

export const DishesRightDish = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
  }
  img {
    border-radius: 100%;
    margin-right: 20px;
  }
  .dish_info {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    .dish_name {
      font-family: "Cormorant Infant", sans-serif;
      color: #292e36;
      line-height: 1.4;
      font-weight: 700;
      margin-top: 0px;
      margin-bottom: 0px;
      font-size: 30px;

      @media screen and (max-width: 991px) {
        font-size: 24px;
        line-height: 1.3;
      }
    }
    .dish_description {
      margin-bottom: 0px;
      font-family: "Josefin Sans", sans-serif;
      color: #555;
      font-size: 20px;
      line-height: 1.5;
      font-weight: 400;
      letter-spacing: 0.01em;
      @media screen and (max-width: 991px) {
        margin-top: 3px;
        font-size: 17px;
      }
    }
  }
  .dish_line {
    width: 30%;
    height: 50px;
    margin-right: 10px;
    margin-left: 10px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-bottom: 2px dashed #aaa;
    @media screen and (max-width: 991px) {
      display: none;
    }
  }
  .price {
    margin-top: 15px;

    font-family: "Cormorant Infant", sans-serif;
    color: #292e36;

    line-height: 1.4;
    font-weight: 700;
    margin-bottom: 0px;
    font-size: 30px;
  }
`;

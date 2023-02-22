import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  background-color: #292e36;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  padding-top: 40px;
  @media screen and (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const HeroMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
  width: 100%;
  .hero_left {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 635px;
    @media screen and (max-width: 991px) {
      align-items: center;
      width: 100%;
      justify-content: center;
      display: flex;
      flex-direction: column;
    }
    h1 {
      margin-top: 10px;
      margin-bottom: 10px;
      font-family: "Cormorant Infant", sans-serif;
      color: #fff;
      font-size: 100px;
      line-height: 1.1;
      font-weight: 700;

      @media screen and (max-width: 991px) {
        font-size: 40px;
        line-height: 1;
        text-align: center;
      }
    }
    .content {
      padding-top: 5px;
      padding-bottom: 30px;
      color: #fff;
      margin-bottom: 10px;
      font-family: "Josefin Sans", sans-serif;
      font-size: 20px;
      line-height: 1.5;
      font-weight: 400;
      letter-spacing: 0.01em;
      @media screen and (max-width: 991px) {
        padding-bottom: 0px;
        text-align: center;
        font-size: 17px;
        width: 100%;
      }
    }
  }

  .hero_right {
    .image_area {
      border-style: solid solid none;
      border-width: 30px;
      border-color: hsla(0, 0%, 100%, 0.1);
      border-top-left-radius: 628px;
      border-top-right-radius: 628px;
      width: 575px;
      @media screen and (max-width: 991px) {
        width: 100%;
      }
      img {
        max-width: 100%;
        border-top-left-radius: 626px;
        border-top-right-radius: 626px;
        vertical-align: middle;
      }
    }
  }
`;

export const HeroLeftButton = styled.button`
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
  outline: 0;
  cursor: pointer;
  :hover {
    background-color: #e1b168;
    color: #292e36;
  }
  @media screen and (max-width: 479px) {
    padding: 15px 30px;
    font-size: 18px;
    margin-bottom: 40px;
  }
`;

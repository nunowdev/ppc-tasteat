import styled from "styled-components";

export const DetailsContainer = styled.div`
  width: 100%;
  background-color: #fff8f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailsWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 40px;
  padding-top: 100px;
  padding-bottom: 60px;
  @media screen and (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const DetailsMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  .icon_wrap {
    width: 83px;
    height: 83px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background-color: #292e36;
    margin-right: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .details_right {
    display: flex;
    flex-direction: column;

    margin-right: 30px;
    h1 {
      font-family: "Cormorant Infant", sans-serif;
      color: #292e36;
      line-height: 1.3;
      font-weight: 700;
      margin-top: 0px;
      margin-bottom: 5px;
      font-size: 30px;
    }
    p {
      margin-bottom: 0px;
      font-family: "Josefin Sans", sans-serif;
      color: #555;
      font-size: 20px;
      line-height: 1.5;
      font-weight: 400;
      letter-spacing: 0.01em;
      @media screen and (max-width: 991px) {
        font-size: 17px;
      }
    }
  }
`;

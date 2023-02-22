import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #292e36;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid gray;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 100px;
  padding-bottom: 70px;
`;

export const FooterMain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const FooterTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    img {
      margin: 15px 0px;
    }
  }
  h1 {
    font-family: "Josefin Sans", sans-serif;
    line-height: 1.5;
    text-align: left;
    letter-spacing: 0.01em;
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    text-decoration: underline;
  }
`;

export const FooterTitles = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  @media screen and (max-width: 991px) {
    height: 250px;
  }
`;

export const FooterInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const FooterDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  @media screen and (max-width: 991px) {
    margin-bottom: 100px;
    align-items: center;
    .details {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      h1 {
        font-size: 17px;
      }
    }
  }
  h1 {
    margin-bottom: 0px;
    font-family: "Josefin Sans", sans-serif;
    color: #e1b168;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 400;
    letter-spacing: 0.01em;
    &.address {
      color: white;
    }
  }
`;

export const FooterInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 68px;
  flex-direction: column;
  @media screen and (max-width: 991px) {
    width: 90%;
  }
  p {
    font-family: "Josefin Sans", sans-serif;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 400;
    letter-spacing: 0.01em;
    margin-bottom: 25px;
    color: #fff;
    text-align: center;
    margin-left: 30px;
    @media screen and (max-width: 991px) {
      font-size: 17px;
    }
  }
  .flex {
    display: flex;
    align-items: center;
    @media screen and (max-width: 991px) {
      flex-direction: column;
      width: 100%;
    }
    button {
      min-height: 70px;
    }
  }
`;

export const FooterSchedule = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 991px) {
    margin-top: 120px;
    align-items: center;
  }
  span {
    color: #e1b168;
  }
  h1 {
    font-family: "Josefin Sans", sans-serif;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 400;
    letter-spacing: 0.01em;
    margin-bottom: 5px;
    color: #fff;
    @media screen and (max-width: 991px) {
      font-size: 17px;
    }
  }
`;

export const FooterSubscribeButton = styled.button`
  min-height: 68px;
  padding-right: 55px;
  padding-left: 55px;
  background-color: #fff;
  -webkit-transition: background-color 200ms ease, color 200ms ease;
  transition: background-color 200ms ease, color 200ms ease;
  color: #292e36;
  font-size: 22px;
  font-weight: 500;
  font-family: "Josefin Sans", sans-serif;
  outline: none;
  border: none;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
  :hover {
    background-color: #e1b168;
    color: #fff;
  }
`;

export const CopyrightContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #292e36;
`;

export const Copyright = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 25px;
  padding-bottom: 25px;
  @media screen and (max-width: 991px) {
    flex-direction: column-reverse;
  }
  span {
    color: #e1b168;
  }
  h1 {
    margin-bottom: 0px;
    font-family: "Josefin Sans", sans-serif;
    color: white;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 400;
    letter-spacing: 0.01em;
    @media screen and (max-width: 991px) {
      text-align: center;
      font-size: 17px;
      width: 350px;
    }
  }
  .footer_right {
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 991px) {
      flex-direction: column;
    }
    h1 {
      margin: 0 10px;
      color: #e1b168;
    }
  }
`;

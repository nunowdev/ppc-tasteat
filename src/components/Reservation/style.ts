import styled from "styled-components";

export const ReservationContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229a8dfd19f083b1137c46e_reservation-bg.jpg");
  background-position: 100% 100%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 977px;
  @media screen and (max-width: 991px) {
    height: auto;
  }
`;

export const ReservationWrapper = styled.div`
  width: 100%;
  height: 417px;
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 140px;
  @media screen and (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
    height: auto;
  }
`;

export const ReservationMain = styled.div`
  margin-right: 80px;
  margin-left: 80px;

  width: 100%;
  padding: 140px;

  background-color: rgba(41, 46, 54, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 991px) {
    padding: 40px 20px;
    margin: 0;
  }
`;

export const ReservationTitle = styled.div`
  font-family: "Cormorant Infant", sans-serif;
  line-height: 1.4;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 32px;
  font-size: 40px;
  color: #fff;
  text-transform: capitalize;
  @media screen and (max-width: 991px) {
    margin-top: 8px;
    font-size: 32px;
  }
`;

export const ReservationInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 0px;
  @media screen and (max-width: 991px) {
    margin-bottom: 0px;
    flex-direction: column;
  }
`;

export const ReservationInput = styled.input`
  min-height: 70px;
  padding-left: 20px;
  border: 1px solid #858585;
  background-color: transparent;
  font-family: "Josefin Sans", sans-serif;
  color: #fff;
  font-size: 22px;
  font-weight: 500;
  height: 38px;
  padding: 8px 12px;
  margin: 15px 0;
  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 8px 16px;
  }
  &.footer_input {
    max-height: 68px;
    width: 437px;
    @media screen and (max-width: 991px) {
      width: 100%;
      margin: 0 0;
      text-align: center;
    }
  }
  ::placeholder {
    color: white;
  }
  :focus {
    border-color: #3898ec;
    outline: 0;
  }
  &.half {
    width: 48%;
    @media screen and (max-width: 991px) {
      width: 100%;
    }
  }
  &.third {
    width: 31%;
    @media screen and (max-width: 991px) {
      width: 100%;
    }
  }
`;

export const ReservationButton = styled.div`
  min-height: 68px;
  padding-right: 55px;
  padding-left: 55px;
  background-color: #fff;
  -webkit-transition: background-color 200ms ease, color 200ms ease;
  transition: background-color 200ms ease, color 200ms ease;
  color: #292e36;
  font-size: 22px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Josefin Sans", sans-serif;
`;

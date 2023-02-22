import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 288px;
  background-color: #292e36;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 991px) {
    padding-top: 30px;
    padding-bottom: 30px;
    height: auto;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    img {
      width: 340px;
      margin: 20px 0px;
    }
  }
`;

export const CallButton = styled.button`
  color: #fff;
  padding: 18px 55px;
  transition: background-color 200ms ease, color 200ms ease;
  font-family: "Josefin Sans", sans-serif;

  font-size: 22px;
  line-height: 1.5;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
  border-color: #e1b168;
  background-color: transparent;
  @media screen and (max-width: 479px) {
    padding: 18px 30px;
    font-size: 18px;
    width: 250px;
  }

  :hover {
    background-color: #e1b168;
    color: #292e36;
  }
`;

export const ReservationButton = styled.button`
  background-color: #e1b168;
  color: #292e36;
  padding: 18px 55px;
  transition: background-color 200ms ease, color 200ms ease;
  font-family: "Josefin Sans", sans-serif;
  font-size: 22px;
  line-height: 1.5;
  font-weight: 500;
  text-align: center;
  min-width: 295px;
  cursor: pointer;
  border-color: #e1b168;
  border-style: solid;
  outline: none;
  :hover {
    border-width: 2px;
    background-color: transparent;
    color: #e1b168;
  }
  @media screen and (max-width: 479px) {
    height: 61px;
    font-size: 18px;
  }
  @media screen and (max-width: 991px) {
    padding-right: 35px;
    padding-left: 35px;

    min-width: 250px;
  }
`;

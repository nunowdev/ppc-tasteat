import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 40px;
  padding-top: 140px;
  padding-bottom: 140px;
  @media screen and (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const MenuMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const MenuSubtitle = styled.div`
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

export const MenuTitle = styled.div`
  font-family: "Cormorant Infant", sans-serif;
  color: #292e36;
  line-height: 1.4;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 8px;
  font-size: 40px;
  text-transform: capitalize;
`;

export const MenuText = styled.div`
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
  }
`;

export const MenuItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 307.5px;
  margin: 0 15px;
  @media screen and (max-width: 991px) {
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 40px;
  }
  img {
    width: 100%;
    height: 296.95px;
    @media screen and (max-width: 991px) {
      height: 338px;
    }
  }
  .top_info {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-bottom: 1px solid #dcdcdc;
    @media screen and (max-width: 991px) {
      flex-direction: column;
      justify-content: center;
    }
    h1 {
      margin-bottom: 10px;
      font-family: "Cormorant Infant", sans-serif;
      color: #292e36;
      line-height: 1.4;
      font-weight: 700;
      margin-top: 10px;
      font-size: 30px;
      @media screen and (max-width: 991px) {
        margin-bottom: 0px;
      }
    }
  }
  p {
    margin-bottom: 10px;
    font-family: "Josefin Sans", sans-serif;
    color: #555;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 400;
    letter-spacing: 0.01em;
    @media screen and (max-width: 991px) {
      font-size: 17px;
      margin-top: 10px;
    }
  }
`;

export const MenuButton = styled.div`
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
  cursor: pointer;
  margin-top: 60px;
  @media screen and (max-width: 991px) {
    padding: 15px 30px;
    font-size: 18px;
  }

  :hover {
    background-color: #e1b168;
    color: #292e36;
  }
`;

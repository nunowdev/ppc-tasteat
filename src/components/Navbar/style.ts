import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  border-top: 1px solid #5c6168;
  border-bottom: 1px solid #5c6168;
  background-color: #292e36;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  @media screen and (max-width: 479px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export const NavbarNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 991px) {
    display: none;
  }
  .home {
    color: #e1b168;
    padding-left: 0px;
  }
`;

export const NavbarHamburguer = styled.div`
  width: 60px;
  height: 60px;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: white;
  img {
    width: 15px;
  }
  @media screen and (max-width: 991px) {
    display: flex;
  }
`;

export const NavigationItem = styled.h1`
  padding-right: 30px;
  padding-left: 30px;
  font-size: 20px;
  transition: color 200ms ease;
  color: #fff;
  font-family: "Josefin Sans", sans-serif;
  line-height: 1.5;
  font-weight: 400;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    padding: 0 10px;
  }
`;

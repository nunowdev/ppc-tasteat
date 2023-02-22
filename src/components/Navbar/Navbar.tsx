import * as React from "react";
import {
  NavbarContainer,
  NavbarHamburguer,
  NavbarNavigation,
  NavbarWrapper,
  NavigationItem,
  Socials,
} from "./style";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarNavigation>
          <NavigationItem className="home">Home</NavigationItem>
          <NavigationItem>About Us</NavigationItem>
          <NavigationItem>Our Menu</NavigationItem>
          <NavigationItem>Pages</NavigationItem>
          <NavigationItem>Blog</NavigationItem>
          <NavigationItem>Contact Us</NavigationItem>
        </NavbarNavigation>
        <NavbarHamburguer>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
            alt=""
          />
        </NavbarHamburguer>
        <Socials>
          <img
            src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/622879561ac344751081f7f3_social-white-icon-1.svg"
            alt=""
          />
          <img
            src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/622879a1180929e7b5a73221_social-white-icon-2.svg"
            alt=""
          />
          <img
            src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/622879adf27831d30cd4d274_social-white-icon-3.svg"
            alt=""
          />
          <img
            src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/622879b72fd62b54a7fe9322_social-white-icon-4.svg"
            alt=""
          />
        </Socials>
      </NavbarWrapper>
    </NavbarContainer>
  );
}

export default Navbar;

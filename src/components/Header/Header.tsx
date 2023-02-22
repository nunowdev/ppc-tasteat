import { Container } from "@mui/system";
import * as React from "react";

import {
  CallButton,
  HeaderContainer,
  HeaderWrapper,
  ReservationButton,
} from "./style";

function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <CallButton>Call - 123 456 789</CallButton>
        <img
          src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6246d7f2c2b5677de6d04e5f_tasteat-brand-logo.svg"
          alt=""
        />
        <ReservationButton>Reservation</ReservationButton>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;

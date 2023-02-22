import * as React from "react";

import { TestimonialsSubtitle } from "../Testimonials/style";
import {
  ReservationButton,
  ReservationContainer,
  ReservationInput,
  ReservationInputs,
  ReservationMain,
  ReservationTitle,
  ReservationWrapper,
} from "./style";

function Reservation() {
  return (
    <ReservationContainer>
      <ReservationWrapper>
        <ReservationMain>
          <TestimonialsSubtitle>RESERVATION</TestimonialsSubtitle>
          <ReservationTitle>Book Your Table</ReservationTitle>
          <ReservationInputs>
            <ReservationInput className="half" placeholder="Name" />
            <ReservationInput className="half" placeholder="Email" />
          </ReservationInputs>
          <ReservationInputs>
            <ReservationInput className="third" placeholder="Persons" />
            <ReservationInput className="third" placeholder="Timing" />
            <ReservationInput className="third" placeholder="Date" />
          </ReservationInputs>
          <ReservationButton>Book A Table</ReservationButton>
        </ReservationMain>
      </ReservationWrapper>
    </ReservationContainer>
  );
}

export default Reservation;

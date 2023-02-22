import * as React from "react";
import { DetailsContainer, DetailsMain, DetailsWrapper } from "./style";

function Details() {
  return (
    <DetailsContainer>
      <DetailsWrapper>
        <DetailsMain>
          <div className="icon_wrap">
            <img
              src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229b772cb568e7b96d20e2d_detail-icon-1.svg"
              alt=""
            />
          </div>
          <div className="details_right">
            <h1>Locate Us</h1>
            <p>Riverside 25, San Diego, California</p>
          </div>
          <div className="icon_wrap">
            <img
              src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229b8c45ca27b60baad8342_detail-icon-2.svg"
              alt=""
            />
          </div>
          <div className="details_right">
            <h1>Open Hours</h1>
            <p>Mon To Fri 9:00 AM - 9:00 PM</p>
          </div>
          <div className="icon_wrap">
            <img
              src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6229b8cd53997e91fce1dc76_detail-icon-3.svg"
              alt=""
            />
          </div>
          <div className="details_right">
            <h1>Reservation</h1>
            <p>restaurantate@gmail.com</p>
          </div>
        </DetailsMain>
      </DetailsWrapper>
    </DetailsContainer>
  );
}

export default Details;

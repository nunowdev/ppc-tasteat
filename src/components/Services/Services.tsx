import * as React from "react";
import { TestimonialsSubtitle } from "../Testimonials/style";
import {
  Service,
  ServicesContainer,
  ServicesLeft,
  ServicesMain,
  ServicesRight,
  ServicesText,
  ServicesTitle,
  ServicesWrapper,
} from "./style";

function Services() {
  const props = {
    services: [
      {
        title: "Opened 24/7",
        iconURL:
          "https://assets.website-files.com/622856f73bdd0f82f7741cb2/6230325511d205e0e62e7005_service-icon-1.svg",
      },
      {
        title: "Special Menus",
        iconURL:
          "https://assets.website-files.com/622856f73bdd0f82f7741cb2/623033cb38d7dd2d9b9df6fe_service-icon-2.svg",
      },
      {
        title: "Home Delivery",
        iconURL:
          "https://assets.website-files.com/622856f73bdd0f82f7741cb2/623033d411d205d63c2e7559_service-icon-3.svg",
      },
    ],
  };

  return (
    <ServicesContainer>
      <ServicesWrapper>
        <ServicesMain>
          <ServicesLeft>
            <TestimonialsSubtitle>WHAT WE OFFER</TestimonialsSubtitle>
            <ServicesTitle>Our Great Services</ServicesTitle>
            <ServicesText>
              The atmosphere set the stage. It’s about more than just a dining
              room away from your home. food takes the spotlight as guests.
            </ServicesText>
          </ServicesLeft>
          <ServicesRight>
            {props.services.map((service) => (
              <Service>
                <img src={service.iconURL} alt="" />
                <div className="service_text">{service.title}</div>
              </Service>
            ))}
          </ServicesRight>
        </ServicesMain>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;

import * as React from "react";
import { ReservationButton } from "../Header/style";
import { Socials } from "../Navbar/style";
import { ReservationInput } from "../Reservation/style";
import { TestimonialsSubtitle } from "../Testimonials/style";
import {
  Copyright,
  CopyrightContainer,
  FooterContainer,
  FooterDetails,
  FooterInfo,
  FooterInput,
  FooterMain,
  FooterSchedule,
  FooterSubscribeButton,
  FooterTitles,
  FooterTop,
  FooterWrapper,
} from "./style";

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterMain>
            <FooterTop>
              <h1>#TheTastEat</h1>
              <img
                src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/6246d7f2c2b5677de6d04e5f_tasteat-brand-logo.svg"
                alt=""
              />
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
                  src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/622879b72fd62b54a7fe9322_social-white-icon-4.svg"
                  alt=""
                />
                <img
                  src="https://assets.website-files.com/622856f73bdd0f82f7741cb2/622879adf27831d30cd4d274_social-white-icon-3.svg"
                  alt=""
                />
              </Socials>
            </FooterTop>

            <FooterInfo>
              <FooterDetails>
                <TestimonialsSubtitle className="footer_title">
                  CONTACT
                </TestimonialsSubtitle>
                <div className="details">
                  <h1 className="address">5 Rue Dalou, 75015 Paris</h1>
                  <h1>+123 456 789</h1>
                  <h1>josefin@mail.com</h1>
                </div>
              </FooterDetails>
              <FooterInput>
                <p>
                  Join our mailing list for updates,
                  <br />
                  Get news & offers events.
                </p>
                <div className="flex">
                  <ReservationInput
                    placeholder="Email"
                    className="footer_input"
                  ></ReservationInput>
                  <FooterSubscribeButton>Subscribe</FooterSubscribeButton>
                </div>
              </FooterInput>
              <FooterSchedule>
                <TestimonialsSubtitle className="footer_title">
                  WORKING HOURS
                </TestimonialsSubtitle>
                <h1>
                  <span>Mon – Fri:</span> 7.00am – 6.00pm
                </h1>
                <h1>
                  <span>Sat:</span> 7.00am – 6.00pm
                </h1>
                <h1>
                  <span>Sun:</span> 8.00am – 6.00pm
                </h1>
              </FooterSchedule>
            </FooterInfo>
          </FooterMain>
        </FooterWrapper>
      </FooterContainer>
      <CopyrightContainer>
        <Copyright>
          <h1>
            © Copyright - TastEat | Designed by <span>VictorFlow</span> -
            Powered by <span>CloudInfo</span>
          </h1>
          <div className="footer_right">
            <h1>Styleguide</h1>
            <h1>Licenses</h1>
            <h1>Protected</h1>
            <h1>Not Found</h1>
          </div>
        </Copyright>
      </CopyrightContainer>
    </>
  );
}

export default Footer;

import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  width: 100%;
  background-color: #292e36;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const TestimonialsWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px 40px;
  padding-top: 140px;
  padding-bottom: 120px;
  @media screen and (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const TestimonialsMain = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  overflow: visible;
`;

export const TestimonialsSubtitle = styled.div`
  margin-bottom: 0px;
  padding: 7px 0px;
  color: white;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-top: 1px solid #e1b168;
  border-bottom: 1px solid #e1b168;
  font-family: "Josefin Sans", sans-serif;
  &.footer_title {
    margin-bottom: 25px;
  }
`;

export const TestimonialsTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 8px;
  font-family: "Cormorant Infant", sans-serif;
  color: white;
  font-size: 40px;
  line-height: 1.4;
  font-weight: 700;
  @media screen and (max-width: 991px) {
    margin-top: 8px;
    font-size: 32px;
  }
`;

export const TestimonialsInfo = styled.p`
  font-family: "Josefin Sans", sans-serif;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.01em;
  margin-bottom: 30px;
  @media screen and (max-width: 991px) {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 10px;
  }
`;

export const TestimonialsSlider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  white-space: nowrap;
  overflow: visible;
  margin-top: 20px;
  @media screen and (max-width: 991px) {
    margin-top: 0px;
  }
`;

export const TestimonialCard = styled.div`
  min-width: 528px;
  height: 414px;
  margin-right: 30px;
  padding: 40px;
  background-color: #343942;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  @media screen and (max-width: 991px) {
    min-width: 100%;
    height: auto;
    padding: 25px;
  }
  .content {
    width: 100%;
    font-family: "Cormorant Infant", sans-serif;
    color: #fff;
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 10px;
    white-space: normal;
    line-height: 1.5;
    font-weight: 500;
    letter-spacing: 0.25px;
    text-align: left;
    @media screen and (max-width: 991px) {
      font-size: 23px;
    }
  }

  .testimonial_top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 30px;
    border-bottom: 1px solid #797e89;
    @media screen and (max-width: 991px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .info {
      display: flex;
      flex-direction: column;
      margin-left: 30px;
      @media screen and (max-width: 991px) {
        margin-left: 0;
      }
      .name {
        line-height: 1.4;
        font-weight: 700;
        font-family: "Cormorant Infant", sans-serif;
        margin-top: 0px;
        margin-bottom: 0px;
        color: #fff;
        font-size: 30px;
      }
      .location {
        font-family: "Josefin Sans", sans-serif;

        font-size: 20px;
        line-height: 1.5;
        font-weight: 400;
        letter-spacing: 0.01em;
        margin-bottom: 0px;
        color: #e1b168;
      }
    }
    .image {
      width: 113px;
      height: 113px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      .profile_pic {
        border-radius: 100%;
        width: 100%;
        height: 100%;
      }
      .quotes {
        position: absolute;
        left: 0%;
        top: 0%;
        right: auto;
        bottom: auto;
        display: flex;
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: center;
        border-style: solid;
        border-width: 2px;
        border-color: #292e36;
        border-radius: 100px;
        background-color: #e1b168;
      }
    }
  }
`;

export const TestimonialsDots = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  @media screen and (max-width: 991px) {
    display: none;
  }
  .dot {
    width: 20px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    margin: 5px;
    transition: background-color 100ms, color 100ms;
    border-radius: 100%;
    &.active {
      background-color: #fff;
    }
  }
`;

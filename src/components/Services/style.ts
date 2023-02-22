import styled from "styled-components";

export const ServicesContainer = styled.div`
  width: 100%;
  background-color: #292e36;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ServicesWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 140px 40px;
  @media screen and (max-width: 991px) {
    padding: 140px 20px;
  }
`;

export const ServicesMain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const ServicesLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const ServicesTitle = styled.div`
  line-height: 1.4;
  font-weight: 700;
  font-family: "Cormorant Infant", sans-serif;
  margin-top: 10px;
  margin-bottom: 8px;
  font-size: 40px;
  color: #fff;
  @media screen and (max-width: 991px) {
    margin-top: 8px;
    font-size: 32px;
  }
`;

export const ServicesText = styled.div`
  margin-bottom: 10px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  font-family: "Josefin Sans", sans-serif;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  width: 432px;
  @media screen and (max-width: 991px) {
    font-size: 18px;
    width: 350px;
    text-align: left;
  }
`;

export const ServicesRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
`;

export const Service = styled.div`
  padding: 45px 30px 30px;
  width: 246px;
  border: 20px solid #323841;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 10px;
  @media screen and (max-width: 991px) {
    width: 100%;
    margin-top: 20px;
  }
  img {
    min-height: 60px;
    min-width: 60px;
  }
  .service_text {
    margin-top: 15px;
    margin-bottom: 10px;
    font-family: "Cormorant Infant", sans-serif;
    line-height: 1.4;
    font-weight: 700;
    color: #fff;
    font-size: 25px;
    white-space: nowrap;
  }
`;

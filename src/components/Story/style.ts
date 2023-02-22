import styled from "styled-components";

export const StoryContainer = styled.div`
  width: 100%;
  background-color: #fff8f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StoryWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 50px 40px;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
  }

  .left_img {
    width: 720px;
    height: 502px;
    @media screen and (max-width: 991px) {
      width: 100%;
      height: 244px;
    }
  }
`;

export const StoryRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 41%;
  height: 552px;
  @media screen and (max-width: 991px) {
    width: 100%;
    height: auto;
  }
  .main {
    margin-top: 0px !important;
  }
  .title {
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: "Cormorant Infant", sans-serif;
    color: #292e36;
    font-size: 40px;
    line-height: 1.4;
    font-weight: 700;
  }
  .main_text {
    margin-bottom: 10px;
    font-family: "Josefin Sans", sans-serif;
    color: #555;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 400;
    letter-spacing: 0.01em;
  }
  .name {
    margin-bottom: 10px;
    font-family: "Josefin Sans", sans-serif;
    color: #555;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 400;
    letter-spacing: 0.01em;
  }
  img {
    margin-top: 10px;
    width: 200px;
  }
  .dates {
    display: flex;
    @media screen and (max-width: 991px) {
      flex-direction: column;
    }
    .date {
      display: flex;
      flex-direction: column;
    }
  }
`;

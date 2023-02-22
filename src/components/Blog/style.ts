import styled from "styled-components";

export const BlogContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BlogWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 40px;
  padding-top: 140px;
  padding-bottom: 100px;
  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const BlogMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const BlogSubtitle = styled.div`
  margin-bottom: 0px;
  padding: 7px 0px;
  color: #292e36;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-top: 1px solid #e1b168;
  border-bottom: 1px solid #e1b168;
  font-family: "Josefin Sans", sans-serif;
`;

export const BlogTitle = styled.div`
  font-family: "Cormorant Infant", sans-serif;
  color: #292e36;
  line-height: 1.4;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 8px;
  font-size: 40px;
  text-transform: capitalize;
  @media screen and (max-width: 991px) {
    margin-top: 8px;
    font-size: 32px;
  }
`;

export const BlogText = styled.div`
  margin-bottom: 40px;
  font-family: "Josefin Sans", sans-serif;
  color: #555;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: 0.01em;
  text-align: center;
  @media screen and (max-width: 991px) {
    font-size: 17px;
  }
`;

export const BlogNews = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const BlogNew = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 620px;
  height: 708px;
  border: 1px solid #c4c4c4;
  margin: 0 25px;
  @media screen and (max-width: 991px) {
    width: 100%;
    height: auto;
    margin-bottom: 30px;
  }
  img {
    width: 100%;
    height: 372px;
    @media screen and (max-width: 991px) {
      height: 192px;
    }
  }
`;

export const BlogNewBottom = styled.div`
  padding: 50px 45px 32px;
  @media screen and (max-width: 991px) {
    padding: 25px 15px 15px;
  }

  .info {
    display: flex;
    @media screen and (max-width: 991px) {
      flex-direction: column;
      align-items: flex-start;
    }
    .second {
      margin-left: 30px;
      @media screen and (max-width: 991px) {
        margin-left: 0px;
        margin-top: 10px;
      }
    }
  }
`;

export const BlogNewTitle = styled.div`
  display: inline-block;
  margin-top: 15px;
  margin-bottom: 20px;
  font-family: "Cormorant Infant", sans-serif;
  color: #292e36;
  font-size: 30px;
  line-height: 1.3;
  font-weight: 700;
  text-transform: capitalize;
  @media screen and (max-width: 991px) {
    margin-top: 24px;
    font-size: 22px;
  }
`;

export const BlogNewText = styled.div`
  margin-bottom: 10px;
  font-family: "Josefin Sans", sans-serif;
  color: #555;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: 0.01em;
  @media screen and (max-width: 991px) {
    font-size: 17px;
  }
`;

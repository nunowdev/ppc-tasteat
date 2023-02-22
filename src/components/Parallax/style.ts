import styled from "styled-components";

export const ParallaxContainer = styled.div`
  height: 600px;
  background-image: url("https://assets.website-files.com/622856f73bdd0f82f7741cb2/627610ea83e7ae06d5a9d0cb_tasteat-large-image.jpg");
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  @media screen and (max-width: 991px) {
    height: 250px;
  }
`;

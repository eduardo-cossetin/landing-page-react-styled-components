import styled from "styled-components";
import imgBg from "../../../public/assets/bg-banner.jpeg";

interface BannerProps {
  height: string;
  fontSize: string;
}

const Banner = styled.figure<BannerProps>`
  height: 60vh;
  background-image: url(${imgBg});
  background-size: cover;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  & > h1,
  h1 {
    font-size: ${(props) => props.fontSize};
  }
`;

export default Banner;

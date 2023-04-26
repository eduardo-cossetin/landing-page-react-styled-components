import styled from "styled-components";

interface DivImg {
  src?: string;
}

interface IContentStyledReverse {
  isInverted: boolean;
}

export const ContainerStyled = styled.div<IContentStyledReverse>`
  width: 100%;
  height: 40vh;
  display: flex;
  padding: 08px;
  flex-direction: ${(props) => (props.isInverted ? "row-reverse" : "row")};
`;

export const DivTextStyled = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  text-align: center;
  padding: 08px;
  justify-content: center;
  flex-direction: column;
`;
export const DivImageStyled = styled.img<DivImg>`
  width: 50%;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TextContentStyled = styled.p`
  font-size: 24px;
  color: ${(props) => props.theme.colors.textColor};
`;

export const TitleContentStyled = styled.h4`
  font-size: 36px;
  color: ${(props) => props.theme.colors.textColor};
`;

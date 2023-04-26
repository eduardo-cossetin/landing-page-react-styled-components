import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  width: 30vw;
  align-items: center;
  justify-content: space-evenly;
  color: ${(props) => props.theme.colors.textColor};
`;

const ContainerIcon = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${(props) => props.theme.colors.main};
`;

const ImageIcon = styled.img`
  width: 100px;
`;

const TitleCard = styled.h3`
  font-size: 20px;
  color: ${(props) => props.theme.colors.textColor};
`;

const DescriptonCard = styled.p`
  font-size: 16px;
  text-align: center;
`;

export { Wrapper, ContainerIcon, ImageIcon, TitleCard, DescriptonCard };

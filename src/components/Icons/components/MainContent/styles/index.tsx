import {
  ContainerStyled,
  DivImageStyled,
  DivTextStyled,
  TextContentStyled,
  TitleContentStyled,
} from "./styles";

interface IMainContent {
  title: string;
  p: string;
  img: string;
  isInverted: boolean;
}

export const MainContent: React.FC<IMainContent> = ({
  title,
  p,
  img,
  isInverted,
}) => {
  return (
    <ContainerStyled isInverted={isInverted}>
      <DivTextStyled>
        <TitleContentStyled>{title}</TitleContentStyled>
        <TextContentStyled>{p}</TextContentStyled>
      </DivTextStyled>
      <DivImageStyled src={img}></DivImageStyled>
    </ContainerStyled>
  );
};

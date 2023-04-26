import {
  ContainerIcon,
  DescriptonCard,
  ImageIcon,
  TitleCard,
  Wrapper,
} from "../styles";

export interface CardTypes {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardTypes> = ({ icon, title, description }) => {
  return (
    <Wrapper>
      <ContainerIcon>
        <ImageIcon src={icon} />
      </ContainerIcon>
      <TitleCard>{title}</TitleCard>
      <DescriptonCard>{description}</DescriptonCard>
    </Wrapper>
  );
};

export { Card };

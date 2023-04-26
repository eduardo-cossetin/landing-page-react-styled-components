import React from "react";
import checkIcon from "../../assets/icons/CheckIcon.svg";
import computerIcon from "../../assets/icons/computerIcon.svg";
import stackIcon from "../../assets/icons/stackIcon.svg";
import img1card from "../../assets/img/img1card.jpg";
import img2card from "../../assets/img/img2card.jpg";
import img3card from "../../assets/img/img3card.jpg";
import Banner from "../../components/Banner/styles";
import FooterIcons from "../../components/FooterIcons";
import { Card } from "../../components/Icons/components/Card";
import { MainContent } from "../../components/Icons/components/MainContent/styles";
import {
  Container,
  ContainerFooter,
  DivFooterIcons,
  DivFooterInformation,
  DivListFooter,
  LiFooterItens,
} from "../../components/Icons/styles";

const Home: React.FC = () => {
  const iconsContent = [
    {
      title: "Somente para Desktop",
      description: "Vamos aprender como utilizar um framework",
      icon: computerIcon,
    },
    {
      title: "Criado com componentes",
      description: "Utilizamos o styled-components",
      icon: stackIcon,
    },
    {
      title: "Facil aproveitamento",
      description: "Estamos no caminho",
      icon: checkIcon,
    },
  ];

  return (
    <React.Fragment>
      <header>
        <Banner height="60vh" fontSize="36px">
          <h1>Minha primeira página com React</h1>
        </Banner>
      </header>
      <main>
        <Container>
          {iconsContent.map((item) => {
            return (
              <Card
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </Container>
        <MainContent
          title="Lorem Ipsum"
          p="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum minima sed maxime praesentium magni incidunt voluptate commodi id ab unde, expedita, reprehenderit numquam doloribus eveniet in omnis error nihil quaerat."
          img={img1card}
          isInverted={false}
        />
        <MainContent
          title="Lorem Ipsum"
          p="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum minima sed maxime praesentium magni incidunt voluptate commodi id ab unde, expedita, reprehenderit numquam doloribus eveniet in omnis error nihil quaerat."
          img={img2card}
          isInverted={true}
        />
        <MainContent
          title="Lorem Ipsum"
          p="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum minima sed maxime praesentium magni incidunt voluptate commodi id ab unde, expedita, reprehenderit numquam doloribus eveniet in omnis error nihil quaerat."
          img={img3card}
          isInverted={false}
        />
      </main>
      <footer>
        <footer>
          <Banner height="60vh" fontSize="36px">
            <h1>Contato</h1>
          </Banner>
          <ContainerFooter>
            <DivFooterInformation>
              <DivListFooter>
                <li style={{ listStyle: "none" }}>About </li>
                <LiFooterItens>Contact</LiFooterItens>
                <LiFooterItens>Terms of Use</LiFooterItens>
                <LiFooterItens>Privacy Policy</LiFooterItens>
              </DivListFooter>
              <div style={{ marginRight: "100px", color: "#696969" }}>
                © Your Website 2020. All Rights Reserved.
              </div>
            </DivFooterInformation>
            <DivFooterIcons>
              <FooterIcons />
            </DivFooterIcons>
          </ContainerFooter>
        </footer>
      </footer>
    </React.Fragment>
  );
};

export default Home;

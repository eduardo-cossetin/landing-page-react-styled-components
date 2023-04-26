import styled from "styled-components";

const Container = styled.section`
  /* width: 100vh; */
  height: 40vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  height: 20vh;
  justify-content: center;
`;

const DivFooterInformation = styled.div`
  display: flex;
  align-items: center;
  width: 50vw;
  justify-content: center;
  flex-direction: column;
`;

const DivFooterIcons = styled.div`
  display: flex;
  width: 50vw;
  align-items: center;
  justify-content: flex-end;
  padding-right: 100px;
`;

const LiFooterItens = styled.li`
  margin-left: 14px;
`;

const DivListFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 14px;
  color: #1e90ff;
`;

export {
  Container,
  ContainerFooter,
  DivFooterInformation,
  DivFooterIcons,
  LiFooterItens,
  DivListFooter,
};

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { DivFooterIcons } from "../Icons/styles";
import FooterIconsStyled from "./styles";

const FooterIcons = () => {
  return (
    <FooterIconsStyled>
      <DivFooterIcons>
        <FaFacebook style={{ margin: "10px" }} />
        <FaTwitter style={{ margin: "10px" }} />
        <FaInstagram style={{ margin: "10px" }} />
      </DivFooterIcons>
    </FooterIconsStyled>
  );
};

export default FooterIcons;

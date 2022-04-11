import React from "react";
import { Container, Content, Section, Image, ColumnContainer } from "./styles";
import downloadIos from "../../assets/download-ios.svg";
import downloadAndriod from "../../assets/download-android.svg";
import instagramIcon from '../../assets/instagram.svg';
import facebookIcon from '../../assets/facebook.svg';
import twitterIcon from '../../assets/twitter.svg';

const Footer = () => {
  return (
    <Container>
      <Content>
        <Section className="right-section">
          <div>Address: HaMichlala Le Minhal/Motta Gur, Israel</div>
          <ColumnContainer>
          <a href="https://www.facebook.com/profile.php?id=100080146899744">
            <Image src={facebookIcon} width={50} height={40} />
          </a>
          <a href="https://twitter.com/tlcproject226?s=21">
          <Image src={twitterIcon} width={50} height={40} />
          </a>
          <a href="https://www.instagram.com/tlc_fsd/?igshid=YmMyMTA2M2Y=">
          <Image src={instagramIcon} width={50} height={40} />
          </a>
          </ColumnContainer>
        </Section>
        <Section className="left-section">
          <Image src={downloadIos} width={130} height={40} />
          <Image src={downloadAndriod} width={130} height={40} />
        </Section>
      </Content>
    </Container>
  );
};

export default Footer;

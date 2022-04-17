import moment from "moment";
import logo from "../../assets/imageNotFound.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Button from "../Button/Button";


import {
  BodyCard,
  CardBtn,
  CardStyled,
  ImageCard,
  Description,
  Title,
  Row,
  SourceCard,
  DateCard,
  ImageNotFound,
  ContainerImage,
  ButtonConatiner
} from "./styles";
import { useEffect, useState } from "react";
import { device } from "../../globalStyle/theme";
import { useMediaQuery } from "react-responsive";

const Card = ({ dates, location, description, image, title, rating }) => {
  const [imageError, setImageError] = useState(false);
  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });

  return (
    <CardStyled>
      {image !== "null" && image && !imageError ? (
        <ImageCard>
          <LazyLoadImage
            alt={image}
            style={{
              objectFit: "cover",
              borderRadius: isMobileDevice
                ? "20px 20px 0 0"
                : "20px 0px 0px 20px",
            }}
            effect="blur"
            height={"100%"}
            display={"inline"}
            src={image}
            width={"100%"}
            onError={(e) => setImageError(true)}
          />
        </ImageCard>
      ) : (
        <ContainerImage>
          <ImageNotFound src={logo} />
          <p>Image not found</p>
        </ContainerImage>
      )}
      <BodyCard>
        <Row>
          <DateCard>{moment.utc(dates).format("dddd MMM DD, YYYY")}</DateCard>
        </Row>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ButtonConatiner>
          <Button>More about</Button>
        </ButtonConatiner>
      </BodyCard>
    </CardStyled>
  );
};

export default Card;

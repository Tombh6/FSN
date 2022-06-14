import { Article, Source } from "../../utils/types";
import moment from "moment";
import { ButtonProps } from "../Button/Button";
import newLogo from "../../assets/icons/new logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { calculateTagsChart, isRTL, renderTags } from "../../utils/utils";
import favoriteBefore from "../../assets/icons/favorite-svgrepo-com.svg";
import favoriteAfter from "../../assets/icons/favorite-svgrepo-com (1).svg";
import { useAuth } from "../../contexts/AuthContext";

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
  FavoriteIcon,
  TagsContainer,
  Tag,
} from "./style";
import { useEffect, useState } from "react";
import { device } from "../../globalStyle/theme";
import { useMediaQuery } from "react-responsive";
import { getKeywords } from "../../services/articles.api";
import { useDispatch, useSelector } from "react-redux";
import { tagsActions } from "../../store/slicers/tagsSlice";
import { filtersActions } from "../../store/slicers/filtersSlice";
import { RootState } from "../../store";
import Tooltip from "@mui/material/Tooltip";

export interface CardProps {
  date: string;
  image: string;
  title: string;
  source: Source;
  description: string;
  tags: string[];
  button: ButtonProps;
  location: { name: string; value: string };
  favoriteFunc: (state: boolean) => void;
}

const Card = (props: CardProps) => {
  const dispatch = useDispatch();
  const filtersState = useSelector((state: RootState) => state.filters);
  const { favoritesUser } = useAuth();
  const [imageError, setImageError] = useState<boolean>(false);
  const rtl = isRTL(props.description) || isRTL(props.title) ? true : false;
  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (props.description && filtersState.country) {
      try {
        getKeywords(props.description).then((res) => {
          setTags(res.data);
          dispatch(tagsActions.setTags(calculateTagsChart(res.data)));
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [props.description, dispatch]);

  let isFavorite =
    favoritesUser.length &&
    favoritesUser.filter((object: Article) => props.title === object.title)[0]
      ? true
      : false;

  useEffect(() => {
    const items = favoritesUser.filter(
      (object: Article) => props.title === object.title
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    isFavorite = items[0] ? true : false;
  }, [favoritesUser]);

  const clickFavorite = () => {
    props.favoriteFunc(!isFavorite);
  };
  const searchByTag = (tag: string) => {
    if (!tag.includes("+")) {
      dispatch(filtersActions.setSearchInput(tag));
    }
  };
  const handleOtherTags = (amount: number) => {
    return tags.slice(tags.length - amount, tags.length).map((tag) => {
      return <p>{tag}</p>;
    });
  };
  return (
    <CardStyled>
      {props.image !== "null" && props.image && !imageError ? (
        <ImageCard>
          <LazyLoadImage
            alt={props.image}
            style={{
              objectFit: "cover",
              borderRadius: isMobileDevice
                ? "20px 20px 0 0"
                : "20px 0px 0px 20px",
            }}
            effect="blur"
            height={"100%"}
            src={props.image}
            width={"100%"}
            onError={(e) => setImageError(true)}
          />
        </ImageCard>
      ) : (
        <ContainerImage>
          <ImageNotFound src={newLogo} />
          <p>Image not found</p>
        </ContainerImage>
      )}
      <BodyCard dir={rtl ? "rtl" : "ltr"}>
        <Row rtl={rtl}>
          <DateCard>
            {moment.utc(props.date).format("dddd MMM DD, YYYY")}
          </DateCard>
          {tags.length ? (
            <TagsContainer>
              {renderTags(tags, isMobileDevice).arr.map((tag, index) => {
                return (
                  <Tag onClick={() => searchByTag(tag)} key={index}>
                    {tag}
                  </Tag>
                );
              })}
              <Tooltip
                placement="top"
                arrow
                title={handleOtherTags(renderTags(tags, isMobileDevice).amount)}
              >
                <Tag>+{renderTags(tags, isMobileDevice).amount}</Tag>
              </Tooltip>
            </TagsContainer>
          ) : (
            ""
          )}
          <FavoriteIcon
            onClick={clickFavorite}
            src={isFavorite ? favoriteAfter : favoriteBefore}
          />
        </Row>
        <Title rtl={rtl}>{props.title}</Title>
        <SourceCard rtl={rtl}>{props.source.name}</SourceCard>
        <Description rtl={rtl}>{props.description}</Description>
        <CardBtn rtl={rtl} {...props.button} />
      </BodyCard>
    </CardStyled>
  );
};

export default Card;

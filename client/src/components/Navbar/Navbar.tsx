import {
  Avatar,
  Container,
  Logo,
  NavbarContainer,
  PersonalArea,
  Icon,
  SignoutBox,
  SearchContainer,
  IconSearch,
  Row,
  SearchInput,
  Area,
} from "./style";
import logo from "../../assets/icons/new logo.png";
import userIcon from "../../assets/icons/icons8-user-50.png";
import likeIcon from "../../assets/icons/favorite-svgrepo-com (1).svg";
import searchIcon from "../../assets/icons/search.svg";
import backIcon from "../../assets/icons/back.svg";
import { useMediaQuery } from "react-responsive";
import Search from "../Search/Search";
import { FilterProps } from "../Filter/Filter";
import { useEffect, useState } from "react";
import { device } from "../../globalStyle/theme";
import OutsideClickHandler from "react-outside-click-handler";
import SearchMobile from "../Mobile/components/SearchMobile/SearchMobile";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { filtersActions } from "../../store/slicers/filtersSlice";
import Notifications from "react-notifications-menu";
import { useAuth } from "../../contexts/AuthContext";
import { getAllFavorites } from "../../services/favorites.api";

export interface NavbarProps {
  children: string;
  filter?: FilterProps;
  searchFunc: (value: string) => void;
  signOutFunc: () => void;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  const { favoritesUser, user } = useAuth();
  const [showSignoutBox, setShowSignoutBox] = useState(false);
  const filtersState = useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch();
  const [isPaneOpen, setPaneOpen] = useState(false);
  const [dataFavorites, setDataFavorites] = useState([]);
  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });
  const handleAvatarBox = () => {
    setShowSignoutBox(!showSignoutBox);
  };

  useEffect(() => {
    getAllFavorites(user.uid).then((res) => {
      setDataFavorites(
        res.data.map((item) => {
          return {
            image: item.urlToImage,
            message: item.title,
            detailPage: item.url,
          };
        })
      );
    });
  }, [user.uid, favoritesUser]);

  return isMobileDevice && filtersState.searchInput ? (
    <SearchContainer>
      <Row>
        <IconSearch
          onClick={() => {
            dispatch(filtersActions.setSearchInput(""));
          }}
          src={backIcon}
        />
        <SearchInput>"{filtersState.searchInput}"</SearchInput>
      </Row>
      <IconSearch onClick={() => setPaneOpen(true)} src={searchIcon} />
      <SearchMobile
        isPaneOpen={isPaneOpen}
        onClose={(value: boolean) => setPaneOpen(value)}
      />
    </SearchContainer>
  ) : (
    <NavbarContainer>
      <Logo src={logo} />
      <Container>
        {!isMobileDevice && (
          <Search
            filter={props.filter}
            searchFunc={(value) => {
              props.searchFunc(value);
            }}
          />
        )}
        <PersonalArea>
          {isMobileDevice && (
            <Icon onClick={() => setPaneOpen(true)} src={searchIcon} />
          )}
          <SearchMobile
            isPaneOpen={isPaneOpen}
            onClose={(value: boolean) => setPaneOpen(value)}
          />
          <OutsideClickHandler onOutsideClick={() => setShowSignoutBox(false)}>
            <Area>
              <Notifications
                data={dataFavorites}
                header={{
                  title: "Favorites",
                  option: {
                    text: "",
                    onClick: () => console.log("Clicked"),
                  },
                }}
                markAsRead={(data) => {
                  console.log(data);
                }}
                icon={likeIcon}
              />
              <Avatar onClick={() => handleAvatarBox()}>
                <img
                  alt=""
                  style={{ width: "35px", height: "35px" }}
                  src={userIcon}
                />
                {showSignoutBox && (
                  <SignoutBox onClick={props.signOutFunc}>Sign Out</SignoutBox>
                )}
              </Avatar>
            </Area>
          </OutsideClickHandler>
        </PersonalArea>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;

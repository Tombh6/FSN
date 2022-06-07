import { useNavigate } from "react-router-dom";
import { SIZE_TYPE, VARIANT } from "../../utils/types";
import { BodyContainer, ButtonLogin, Description, HeadTitle, Title } from "./style";

const Welcome = () => {
    const navigate = useNavigate();
  return (
    <BodyContainer>
      <Title>Welcome to FSN</Title>
      <HeadTitle>Filter Search News</HeadTitle>
      <Description>
        Locate articles and breaking news headlines from news sources and blogs
        across the web
      </Description>
      <ButtonLogin
        onClick={() => navigate('/login')}
        icon={true}
        variant={VARIANT.primary}
        size={SIZE_TYPE.large}
      >
        login
      </ButtonLogin>
    </BodyContainer>
  );
};

export default Welcome;

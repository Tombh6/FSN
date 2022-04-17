import { Key } from "react";
import Card from "../Card/Card";
import { ArticleContainer, Container, ContainerError, Text } from "./style";
import InfiniteScroll from "react-infinite-scroll-component";
import notFoundIcon from "../../assets/not-found.svg";


// export interface ArticlesProps {
//   error: string;
//   firstLoad: boolean;
//   results: number;
//   articles: Article[];
//   hasMore: boolean;
//   location: { name: string; value: string };
//   fetchMoreData: () => void;
// }

const Articles = ({firstLoad, error, articles, hasMore, results, location, fetchMoreData}) => {

  // const cards = new Array(4);
  // for (let i = 0; i < 4; i++) {
  //   cards.push(<SkeletonCard key={i} />);
  // }
  return error ? (
    <ContainerError>
      <Text>{error} </Text>
    </ContainerError>
  ) 
  // : firstLoad ? (
  //   <ArticleContainer>
  //     {cards.map((card) => card)}
  //     <SkeletonCard />
  //   </ArticleContainer>) 
  : results ? (
    <ArticleContainer>
      {/* <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<SkeletonCard />}
        scrollThreshold="99%"
        height="100%"
        endMessage={<Text>You have seen it all!</Text>}
      > */}
        {articles.map((article, i) => {
          return (
            <Card
              key={i}
              image={article.image}
              title={article.title}
              source={article.source}
              description={article.description}
              tags={[]}
              button={{
                onClick: () => {
                  window.open(article.url, "_blank");
                },
                icon: true,
                children: "Navigate to Dispatch",
                
              }}
              date={article.dates}
              location={location}
            ></Card>
          );
        })}
      {/* </InfiniteScroll> */}
    </ArticleContainer>
  ) : !firstLoad ? (
    <Container>
      <img alt="not-found-img" src={notFoundIcon}></img>
      <Text>We couldn't find any matches for your query</Text>
    </Container>
  ) : null;
};

export default Articles;

import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import { countryOptions, MockCard } from "../../mockData";
import Articles from "../../components/Articles/Articles";
import { MainLayout, FilterContainer, BodyContainer, DataContainer, ArticlesContainer } from "./styles";

const Homepage = () => {
  return (
    <MainLayout>
      <SearchBar />
      <FilterContainer>
        <Filter
          name="Location"
          value="Location"
          options={countryOptions}
          onChangeValue={(value) => {
            // dispatch(filtersActions.setLanguage(value));
          }}
        ></Filter>
        <Filter
          name="When"
          value="When"
          options={countryOptions}
          onChangeValue={(value) => {
            // dispatch(filtersActions.setLanguage(value));
          }}
        ></Filter>
        <Filter
          name="Category"
          value="Category"
          options={countryOptions}
          onChangeValue={(value) => {
            // dispatch(filtersActions.setLanguage(value));
          }}
        ></Filter>
      </FilterContainer>

      <BodyContainer>
        <DataContainer>
          <ArticlesContainer>
            {/* <Card title={MockCard.title} description={MockCard.description} dates={MockCard.dates} image={MockCard.image} /> */}
            <Articles results={30} articles={MockCard} />
          </ArticlesContainer>
        </DataContainer>
      </BodyContainer>
    </MainLayout>
  );
};

export default Homepage;

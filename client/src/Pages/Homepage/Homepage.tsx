import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import DoughnutChart from "../../components/Chart/DoughnutChart/DoughnutChart";
import LineChart from "../../components/Chart/LineChart/LineChart";
import DateFilter from "../../components/Datefilter/DateFilter";
import Filter from "../../components/Filter/Filter";
import Navbar from "../../components/Navbar/Navbar";
import ResultsLine from "./components/ResultsLine/ResultsLine";
import Articles from "./components/Articles/Articles";
import { device } from "../../globalStyle/theme";
import { Article, ENDPOINTS, ErrorType } from "../../utils/types";
import { filtersActions } from "../../store/slicers/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

import {
  countryOptions,
  languageOptions,
  categoryOptions,
  sortByOptions,
  filterNavbarOptions,
} from "../MockData";
import {
  BodyContainer,
  ChartContainer,
  FilterContainer,
  HomepageContainer,
  MainLayout,
  DataContainer,
  ArticlesContainer,
  TextMsg,
} from "./style";
// import {
//   getArticlesFromApi,
//   getSourcesFromApi,
// } from "../../services/articles.api";
import { getlocationFromApi } from "../../services/getLocationAxios";
import {
  calculateDatesChart,
  calculateSourcesChart,
  handleError,
} from "../../utils/utils";
import FilterMobile from "../../components/Mobile/components/FilterMobile/FilterMobile";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import HorizontalChart from "../../components/Chart/HorizontalChart/HorizontalChart";
import {
  getArticlesFromApi,
  getSourcesFromApi,
} from "../../services/getNewsApiAxios";

const Homepage = () => {
  const isTabletDevice = useMediaQuery({
    query: device.tablet,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const tagsState = useSelector((state: RootState) => state.tags);
  const filtersState = useSelector((state: RootState) => state.filters);
  const [results, setResults] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [articles, setArticles] = useState<Article[]>([]);
  const [location, setLocation] = useState<any>({});
  const [hasMore, setHasMore] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);
  const [error, setError] = useState<ErrorType>({ number: 0, message: "" });
  const [sourcesEverythingOptions, setSourcesEverythingOptions] = useState<
    { value: string; name: string }[]
  >([]);
  const [sourcesTopheadlinesOptions, setSourcesTopheadlinesOptions] = useState<
    { value: string; name: string }[]
  >([]);

  useEffect(() => {
    try {
      getlocationFromApi().then((res) => {
        const valueCountry = countryOptions.find(
          ({ name }) => name === res.data.country_name
        );
        setLocation(valueCountry);
      });
    } catch (error) {}
  }, [location]);

  useEffect(() => {
    articles.length && setFirstLoad(false);
  }, [articles]);

  useEffect(() => {
    setPageNumber(1);
    getArticlesFromApi(filtersState, location.value, 1)
      .then((res) => {
        setError({ number: 0, message: "" });
        setResults(res.data.totalResults);
        res.data.articles.length < 10 ? setHasMore(false) : setHasMore(true);
        setArticles(res.data.articles);
        setPageNumber(2);
      })
      .catch((error: any) => {
        setArticles([]);
        setResults(0);
        setError(handleError(error));
      });
  }, [filtersState, location]);

  const fetchArticles = () => {
    getArticlesFromApi(filtersState, location.value, pageNumber)
      .then((res) => {
        setError({ number: 0, message: "" });
        res.data.articles.length < 10 ? setHasMore(false) : setHasMore(true);
        setArticles((prevArticles: Article[]) => [
          ...prevArticles,
          ...res.data.articles,
        ]);
        setPageNumber(pageNumber + 1);
        setResults((prev) => prev + res.data.articles.length);
        if (res.data.articles.length === 0) {
          setPageNumber(1);
        }
      })
      .catch((error: Error) => {
        setError(handleError(error));
        setArticles([]);
        setResults(0);
      });
  };

  useEffect(() => {
    try {
      getSourcesFromApi(filtersState).then((res) => {
        setSourcesTopheadlinesOptions([{ value: "", name: "All" }]);
        res.data.sources.forEach((source: any) => {
          setSourcesTopheadlinesOptions((recentItems) => [
            ...recentItems,
            { value: `${source.id}`, name: `${source.name}` },
          ]);
        });
      });
    } catch (error) {
      setSourcesTopheadlinesOptions([]);
    }
  }, [filtersState, filtersState.country, filtersState.category]);

  useEffect(() => {
    try {
      getSourcesFromApi(filtersState).then((res) => {
        setSourcesEverythingOptions([{ value: "", name: "All" }]);
        dispatch(filtersActions.setSourceEverything(""));
        res.data.sources.forEach((source: any) => {
          setSourcesEverythingOptions((recentItems) => [
            ...recentItems,
            { value: `${source.id}`, name: `${source.name}` },
          ]);
        });
      });
    } catch (error) {
      setSourcesEverythingOptions([]);
    }
  }, [filtersState, filtersState.language, dispatch]);

  return (
    <HomepageContainer>
      {!isTabletDevice ? (
        <Navbar
          filter={{
            name: filterNavbarOptions.find(
              ({ value }) => value === filtersState.endpoint
            )?.name,
            value: filtersState.endpoint,
            options: filterNavbarOptions,
            disabled: false,
            onChangeValue: (value) =>
              dispatch(filtersActions.changeEndpoint(value)),
          }}
          searchFunc={(value: string) =>
            dispatch(filtersActions.setSearchInput(value))
          }
          signOutFunc={() => logout()}
        >
          YC
        </Navbar>
      ) : (
        <Navbar
          searchFunc={(value: string) =>
            dispatch(filtersActions.setSearchInput(value))
          }
          signOutFunc={() => logout()}
        >
          YC
        </Navbar>
      )}
      {isTabletDevice && (
        <FilterMobile
          sourcesTopheadlines={sourcesTopheadlinesOptions}
          sourcesEverything={sourcesEverythingOptions}
        />
      )}
      <MainLayout>
        {!isTabletDevice &&
          (filtersState.endpoint === ENDPOINTS.everything ? (
            <FilterContainer>
              <DateFilter
                name="Dates"
                onChangeValue={(
                  startDate: string | undefined,
                  endDate: string | undefined
                ) => {
                  dispatch(filtersActions.setDateFrom(startDate));
                  dispatch(filtersActions.setDateTo(endDate));
                }}
              ></DateFilter>
              <Filter
                name="Language"
                value="language"
                options={languageOptions}
                onChangeValue={(value) => {
                  dispatch(filtersActions.setLanguage(value));
                }}
              ></Filter>
              <Filter
                name="Source"
                value="sourceEverything"
                onChangeValue={(value) =>
                  dispatch(filtersActions.setSourceEverything(value))
                }
                disabled={sourcesEverythingOptions.length <= 0 ? true : false}
                options={sourcesEverythingOptions}
              ></Filter>
              <Filter
                name="Sort By"
                value="sortBy"
                options={sortByOptions}
                onChangeValue={(value) => {
                  dispatch(filtersActions.setSortBy(value));
                }}
              ></Filter>
            </FilterContainer>
          ) : (
            <div>
              <FilterContainer>
                <Filter
                  name="Country"
                  value="country"
                  disabled={filtersState.sourceTopheadlines ? true : false}
                  options={countryOptions}
                  onChangeValue={(value) => {
                    dispatch(filtersActions.setCountry(value));
                  }}
                ></Filter>
                <Filter
                  name="Category"
                  value="category"
                  disabled={filtersState.sourceTopheadlines ? true : false}
                  options={categoryOptions}
                  onChangeValue={(value) => {
                    dispatch(filtersActions.setCategory(value));
                  }}
                ></Filter>
                <Filter
                  name="Source"
                  value="sourceTopheadlines"
                  disabled={
                    filtersState.country ||
                    filtersState.category ||
                    sourcesTopheadlinesOptions.length <= 0
                      ? true
                      : false
                  }
                  onChangeValue={(value) =>
                    dispatch(filtersActions.setSourceTopheadlines(value))
                  }
                  options={sourcesTopheadlinesOptions}
                ></Filter>
              </FilterContainer>
              {filtersState.category || filtersState.country ? (
                <TextMsg>Be aware that you cant mix with source filter</TextMsg>
              ) : (
                filtersState.sourceTopheadlines && (
                  <TextMsg>
                    Be aware that you cant mix with category or country filter{" "}
                  </TextMsg>
                )
              )}
            </div>
          ))}
        <BodyContainer>
          <ResultsLine location={location.name} results={results} />
          <DataContainer>
            <ArticlesContainer>
              {articles && (
                <Articles
                  location={location}
                  firstLoad={firstLoad}
                  error={error.message}
                  hasMore={hasMore}
                  fetchMoreData={fetchArticles}
                  articles={articles}
                  results={results}
                />
              )}
            </ArticlesContainer>

            {!isTabletDevice ? (
              <ChartContainer>
                <DoughnutChart
                  firstLoad={firstLoad}
                  error={error.message}
                  DoughnutChartData={calculateSourcesChart(articles)}
                  ChartTitle="Sources"
                ></DoughnutChart>
                <LineChart
                  firstLoad={firstLoad}
                  error={error.message}
                  LineChartData={calculateDatesChart(articles)}
                  ChartTitle="Dates"
                />
                <HorizontalChart
                  HorizontalChartData={tagsState.tags}
                  ChartTitle={"Tags"}
                />
              </ChartContainer>
            ) : (
              <ChartContainer></ChartContainer>
            )}
          </DataContainer>
        </BodyContainer>
      </MainLayout>
    </HomepageContainer>
  );
};
export default Homepage;

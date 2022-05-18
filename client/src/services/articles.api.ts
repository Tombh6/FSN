import axios from "axios";
import { Config } from "../config";

export const getArticlesFromApi = async (
  filtersState: any,
  location: any,
  pageNumber: number
) => {
  return axios.post(`${Config.BASE_URL}/articles`, {
    filtersState,
    location,
    pageNumber,
  });
};
export const getSourcesFromApi = async (filtersState: any) => {
  return axios.post(`${Config.BASE_URL}/articles/sources`, {
    filtersState,
  });
};

import axios from "axios";
import { Config } from "../config";
import { Article } from "../utils/types";

export const createFavorite = (favoriteItem: Article) => {
  return axios.post(`${Config.BASE_URL}/favorites`, {
    favoriteItem,
  });
};
export const deleteFavorite = (title: string) => {
  return axios.delete(`${Config.BASE_URL}/favorites/${title}`);
};

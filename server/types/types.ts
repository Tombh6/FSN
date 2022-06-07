export type Source = {
  id: string;
  name: string;
};
export type Article = {
  urlToImage: string;
  title: string;
  source: Source;
  description: string;
  publishedAt: string;
  url: string;
  tags?: string[];
};
export enum ENDPOINTS {
  topheadlines = 'top-headlines',
  everything = 'everything',
}

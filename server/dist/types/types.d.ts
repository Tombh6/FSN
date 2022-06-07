export declare type Source = {
    id: string;
    name: string;
};
export declare type Article = {
    urlToImage: string;
    title: string;
    source: Source;
    description: string;
    publishedAt: string;
    url: string;
    tags?: string[];
};
export declare enum ENDPOINTS {
    topheadlines = "top-headlines",
    everything = "everything"
}

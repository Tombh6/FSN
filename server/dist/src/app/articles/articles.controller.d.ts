import { ArticlesService } from './articles.service';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    getArticles(body: {
        filtersState: any;
        location: any;
        pageNumber: number;
    }): Promise<any>;
    getSources(body: {
        filtersState: any;
    }): Promise<any>;
    getKeywords(body: {
        text: string;
    }): Promise<any>;
}

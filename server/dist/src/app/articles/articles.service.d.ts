import { HttpService } from '@nestjs/axios';
export declare class ArticlesService {
    private httpService;
    constructor(httpService: HttpService);
    getAllArticles(filtersState: any, location: any, pageNumber: any): Promise<any>;
    getSources(filtersState: any): Promise<any>;
    analyzingText: (text: string) => Promise<any>;
}

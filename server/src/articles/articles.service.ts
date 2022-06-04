import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ENDPOINTS } from '../../../types/types';
import * as language from '@google-cloud/language';

@Injectable()
export class ArticlesService {
  constructor(private httpService: HttpService) {}

  async getAllArticles(filtersState, location, pageNumber): Promise<any> {
    let country = '';
    if (filtersState.endpoint === ENDPOINTS.topheadlines) {
      country = filtersState.country
        ? filtersState.country
        : !filtersState.category && !filtersState.sourceTopheadlines
        ? location
        : '';
    }
    const urlEverything = `${filtersState.endpoint}?q=${filtersState.searchInput}&pageSize=10&page=${pageNumber}&sources=${filtersState.sourceEverything}&from=${filtersState.dateFrom}&to=${filtersState.dateTo}&language=${filtersState.language}&sortBy=${filtersState.sortBy}&apiKey=${process.env.REACT_APP_API_KEY}`;
    const urlTopheadlines = `${filtersState.endpoint}?q=${filtersState.searchInput}&pageSize=10&page=${pageNumber}&country=${country}&category=${filtersState.category}&sources=${filtersState.sourceTopheadlines}&apiKey=${process.env.REACT_APP_API_KEY}`;

    const response = await this.httpService
      .get(
        filtersState.endpoint === ENDPOINTS.topheadlines
          ? urlTopheadlines
          : urlEverything,
      )
      .toPromise();

    return response.data;
  }

  async getSources(filtersState): Promise<any> {
    const url = `top-headlines/sources?country=${filtersState.country}&category=${filtersState.category}&language=${filtersState.language}&apiKey=${process.env.REACT_APP_API_KEY}`;
    const responese = await this.httpService.get(url).toPromise();
    return responese.data;
  }

  analyzingText = async (text: string) => {
    const client = new language.LanguageServiceClient();
    const document: { content: string; type: any } = {
      content: text,
      type: 'PLAIN_TEXT',
    };
    const [result]: any = await client.analyzeEntities({ document });
    const entities = result.entities;
    return entities.map(({ name }) => name);
  };
}

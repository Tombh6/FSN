"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const types_1 = require("../../../types/types");
const language = require("@google-cloud/language");
let ArticlesService = class ArticlesService {
    constructor(httpService) {
        this.httpService = httpService;
        this.analyzingText = async (text) => {
            const client = new language.LanguageServiceClient();
            const document = {
                content: text,
                type: 'PLAIN_TEXT',
            };
            const [result] = await client.analyzeEntities({ document });
            const entities = result.entities;
            const saliences = entities.map(({ salience }) => salience);
            console.log(saliences);
            return entities.map(({ name }) => name);
        };
    }
    async getAllArticles(filtersState, location, pageNumber) {
        let country = '';
        if (filtersState.endpoint === types_1.ENDPOINTS.topheadlines) {
            country = filtersState.country
                ? filtersState.country
                : !filtersState.category && !filtersState.sourceTopheadlines
                    ? location
                    : '';
        }
        const urlEverything = `${filtersState.endpoint}?q=${filtersState.searchInput}&pageSize=10&page=${pageNumber}&sources=${filtersState.sourceEverything}&from=${filtersState.dateFrom}&to=${filtersState.dateTo}&language=${filtersState.language}&sortBy=${filtersState.sortBy}&apiKey=${process.env.REACT_APP_API_KEY}`;
        const urlTopheadlines = `${filtersState.endpoint}?q=${filtersState.searchInput}&pageSize=10&page=${pageNumber}&country=${country}&category=${filtersState.category}&sources=${filtersState.sourceTopheadlines}&apiKey=${process.env.REACT_APP_API_KEY}`;
        const response = await this.httpService
            .get(filtersState.endpoint === types_1.ENDPOINTS.topheadlines
            ? urlTopheadlines
            : urlEverything)
            .toPromise();
        return response.data;
    }
    async getSources(filtersState) {
        const url = `top-headlines/sources?country=${filtersState.country}&category=${filtersState.category}&language=${filtersState.language}&apiKey=${process.env.REACT_APP_API_KEY}`;
        const responese = await this.httpService.get(url).toPromise();
        return responese.data;
    }
};
ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map
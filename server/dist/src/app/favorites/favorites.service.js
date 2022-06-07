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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const favorites_schema_1 = require("./favorites.schema");
let FavoritesService = class FavoritesService {
    constructor(FavoriteModel) {
        this.FavoriteModel = FavoriteModel;
    }
    async create(favoriteArticle, userId) {
        const favorite = new this.FavoriteModel(Object.assign(Object.assign({}, favoriteArticle), { userId }));
        const doc = (await favorite.save()).toObject();
        return doc;
    }
    async findAll(userId) {
        return this.FavoriteModel.find({ userId: userId });
    }
    async findOne(id) {
        return this.FavoriteModel.findById({ _id: id });
    }
    async remove(id) {
        return this.FavoriteModel.deleteOne({ _id: id });
    }
};
FavoritesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(favorites_schema_1.Favorite.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FavoritesService);
exports.FavoritesService = FavoritesService;
//# sourceMappingURL=favorites.service.js.map
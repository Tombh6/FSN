/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indizes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
import { Model } from 'mongoose';
import { Favorite, FavoriteDocument } from './favorites.schema';
export declare class FavoritesService {
    private readonly FavoriteModel;
    constructor(FavoriteModel: Model<FavoriteDocument>);
    create(favoriteArticle: any, userId: string): Promise<Favorite>;
    findAll(userId: string): Promise<(import("mongoose").Document<unknown, any, FavoriteDocument> & {
        title: string;
        urlToImage: string;
        url: string;
        userId: string;
    } & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, any, FavoriteDocument> & {
        title: string;
        urlToImage: string;
        url: string;
        userId: string;
    } & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Favorite, FavoriteDocument } from './favorites.schema';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectModel(Favorite.name)
    private readonly FavoriteModel: Model<FavoriteDocument>,
  ) {}
  async create(favoriteArticle: any, userId: string): Promise<Favorite> {
    const favorite = new this.FavoriteModel({ ...favoriteArticle, userId });
    // return favorite.save();
    const doc = (await favorite.save()).toObject();
    return doc;
  }

  async findAll(userId: string) {
    return this.FavoriteModel.find({ userId: userId });
  }

  async findOne(id: string) {
    return this.FavoriteModel.findById({ _id: id });
  }

  async remove(id: string) {
    return this.FavoriteModel.deleteOne({ _id: id });
  }
}

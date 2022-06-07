import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  createFavorite(@Body() body: { favoriteItem: any; uid: string }) {
    return this.favoritesService.create(body.favoriteItem, body.uid);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    return this.favoritesService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoritesService.findOne(id);
  }

  @Delete(':id')
  deleteFavorite(@Param('id') id: string) {
    return this.favoritesService.remove(id);
  }
}

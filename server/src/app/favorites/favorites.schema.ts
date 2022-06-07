import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type FavoriteDocument = {
  title: string;
  urlToImage: string;
  url: string;
  userId: string;
} & Document;

@Schema({ collection: 'favorites' })
export class Favorite {
  @Prop({ required: true, unique: true })
  title: string;
  @Prop()
  urlToImage: string;
  @Prop()
  url: string;
  @Prop()
  userId: string;
}

export const FavoriteSchema = SchemaFactory.createForClass(Favorite);

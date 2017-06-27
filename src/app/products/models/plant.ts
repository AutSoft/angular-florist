import { LightReqEnum } from './light-req-enum';
import { PlantingTimeEnum } from './planting-time-enum';
import { WaterReqEnum } from './water-req-enum';
import { NutritionReqEnum } from './nutrition-req-enum';

export class Plant {
  name: string;
  price: number;
  id: number;
  categoryId: number;
  isFavorite: boolean;
  description: string;
  imageUrl: string;
  isFrostProof: boolean;
  lightReq: LightReqEnum;
  plantingTime: PlantingTimeEnum[];
  waterReq: WaterReqEnum;
  nutritionReq: NutritionReqEnum;
}

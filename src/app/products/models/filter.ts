import { LightReqEnum } from './light-req-enum';
import { PlantingTimeEnum } from './planting-time-enum';
import { WaterReqEnum } from './water-req-enum';
import { NutritionReqEnum } from './nutrition-req-enum';

export interface Filter {
  isFrostProof?: boolean;
  lightReq?: LightReqEnum[];
  plantingTime?: PlantingTimeEnum[];
  waterReq?: WaterReqEnum;
  nutritionReq?: NutritionReqEnum;
}

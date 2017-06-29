import { Pipe, PipeTransform } from '@angular/core';
import { Plant } from './models/plant';

@Pipe({
  name: 'plantsPipe',
  pure: false
})
export class PlantsPipe implements PipeTransform {

  transform(plants: Plant[], isFavoriteFilterOn: boolean) {
    if (!isFavoriteFilterOn || !plants) {
      return plants;
    }
    return plants.filter(plant => plant.isFavorite);
  }

}

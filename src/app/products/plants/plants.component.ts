import { Component, OnInit } from '@angular/core';
import { Plant } from '../models/plant';
import { PlantsService } from '../plants.service';
import { LightReqEnumDisplayableValues } from '../models/light-req-enum';
import { NutritionReqEnumDisplayableValues } from '../models/nutrition-req-enum';
import { WaterReqEnumDisplayableValues } from '../models/water-req-enum';
import { PlantingTimeEnumDisplayableValues } from '../models/planting-time-enum';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {
  plants: Plant[];
  isFavoriteFilterOn = false;
  lightReqEnumDisplayableValues = LightReqEnumDisplayableValues;
  nutritionReqEnumDisplayableValues = NutritionReqEnumDisplayableValues;
  plantingTimeEnumDisplayableValues = PlantingTimeEnumDisplayableValues;
  waterReqEnumDisplayableValues = WaterReqEnumDisplayableValues;

  constructor(private plantsService: PlantsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.switchMap(params => this.plantsService.getPlants(params['catId'])).subscribe(
      plants => this.plants = plants,
      () => {}
    );
  }

  toggleFavoriteStatus(plant: Plant) {
    this.plantsService.toggleFavoriteStatusOfPlant(plant.id).subscribe(
      () => {
        plant.isFavorite = !plant.isFavorite;
        console.log(
          plant.isFavorite ? `${plant.name} kedvencnek jelölve` : `${plant.name} törölve a kedvencek közül`);
      },
      () => {}
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { Plant } from '../models/plant';
import { PlantsService } from '../plants.service';
import { LightReqEnumDisplayableValues } from '../models/light-req-enum';
import { NutritionReqEnumDisplayableValues } from '../models/nutrition-req-enum';
import { WaterReqEnumDisplayableValues } from '../models/water-req-enum';
import { PlantingTimeEnumDisplayableValues } from '../models/planting-time-enum';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../notification.service';

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

  constructor(private plantsService: PlantsService, private route: ActivatedRoute, private notificationService: NotificationService) {
  }

  ngOnInit() {
    Observable.combineLatest(this.route.params, this.route.queryParams).switchMap(
      res => this.plantsService.getPlants(res[0].catId, res[1])
    ).subscribe(
      plants => this.plants = plants,
      () => {}
    );
  }

  toggleFavoriteStatus(plant: Plant) {
    this.plantsService.toggleFavoriteStatusOfPlant(plant.id).subscribe(
      () => {
        plant.isFavorite = !plant.isFavorite;
        this.notificationService.showSuccessMessage(
          plant.isFavorite ? `${plant.name} kedvencnek jelölve` : `${plant.name} törölve a kedvencek közül`);
      },
      () => {}
    );
  }

  trackById(index, item: Plant) {
    return item.id;
  }

}

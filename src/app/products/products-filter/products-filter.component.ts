import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LightReqEnum, LightReqEnumDisplayableValues } from '../models/light-req-enum';
import { PlantingTimeEnum, PlantingTimeEnumDisplayableValues } from '../models/planting-time-enum';
import { WaterReqEnum, WaterReqEnumDisplayableValues } from '../models/water-req-enum';
import { NutritionReqEnum, NutritionReqEnumDisplayableValues } from '../models/nutrition-req-enum';
import { Filter } from '../models/filter';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent implements OnInit {

  @Output() filter = new EventEmitter<Filter>();

  lightReqOptions: string[];
  plantingTimeOptions: string[];
  waterReqOptions: string[];
  nutritionReqOptions: string[];
  filterObject: Filter;
  lightReqEnumDisplayableValues = LightReqEnumDisplayableValues;
  nutritionReqEnumDisplayableValues = NutritionReqEnumDisplayableValues;
  plantingTimeEnumDisplayableValues = PlantingTimeEnumDisplayableValues;
  waterReqEnumDisplayableValues = WaterReqEnumDisplayableValues;

  constructor(private route: ActivatedRoute) {
    this.lightReqOptions = Object.keys(LightReqEnum);
    this.plantingTimeOptions = Object.keys(PlantingTimeEnum);
    this.waterReqOptions = Object.keys(WaterReqEnum);
    this.nutritionReqOptions = Object.keys(NutritionReqEnum);
    this.filterObject = {};
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        if (params.isFrostProof) {
          this.filterObject.isFrostProof = params.isFrostProof === 'true';
        }
        if (params.lightReq) {
          this.filterObject.lightReq = Array.isArray(params.lightReq) ? params.lightReq : [params.lightReq];
        }
        if (params.plantingTime) {
          this.filterObject.plantingTime = Array.isArray(params.plantingTime) ? params.plantingTime : [params.plantingTime];
        }
        if (params.waterReq) {
          this.filterObject.waterReq = params.waterReq;
        }
        if (params.nutritionReq) {
          this.filterObject.nutritionReq = params.nutritionReq;
        }
      }
    );
  }

  filterClicked() {
    this.filter.emit(this.filterObject);
  }

  removeNutritionReq() {
    delete this.filterObject.nutritionReq;
  }

  removeWaterReq() {
    delete this.filterObject.waterReq;
  }

  removeIsFrostProof() {
    delete this.filterObject.isFrostProof;
  }

}

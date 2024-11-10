import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weathers: Weather[] | undefined;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe(
      (data: Weather[]) => {
        this.weathers = data;
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weatherApp';
  constructor(private  weatherService: WeatherService){

  }
  weatherData? : WeatherData;

  ngOnInit(): void {
      this.getWeatherData(this.city);
      this.city = '';

  }


  city : string = 'Bengaluru';



  onSubmit() {
    this.getWeatherData(this.city);
    this.city = '';
  }

  private getWeatherData(city:string) {
    this.weatherService.getWeatherData(city)

      .subscribe({
        next : (response) => {
          this.weatherData = response;
          console.log(response);
        }
      })
  }
}

import { Component, OnInit } from '@angular/core'

import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current!: ICurrentWeather
  constructor(private weatherService: WeatherService) {
    // Dummy data initially used, later removed
    // this.current = {
    //   city: 'Bethesda',
    //   country: 'US',
    //   date: new Date(),
    //   image: '../assets/img/weather-app.jpg',
    //   temperature: 72,
    //   description: 'sunny',
    // } as ICurrentWeather
    //
    // Null guarding: Strategy 1, Property initialization
    // this.current = {
    //   city: '',
    //   country: '',
    //   date: 0,
    //   image: '',
    //   temperature: 0,
    //   description: '',
    // } as ICurrentWeather
  }

  ngOnInit(): void {
    this.weatherService
      .getCurrentWeather('Cypress', 'US')
      .subscribe((data) => (this.current = data))
  }
  getOrdinal(date: number) {
    const n = new Date(date).getDate()
    return n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : ''
  }
}

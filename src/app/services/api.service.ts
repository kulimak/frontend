import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { reportUnhandledError } from 'rxjs/internal/util/reportUnhandledError';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {}

  server = `http://localhost:3000/api`;

  newPlant(table: string, plant:object)
  {
    return this.http.post(`${this.server}/${table}`, plant);
  }

  getAllPlants(table:string)
  {
    return this.http.get(`${this.server}/${table}`)
  }

  getPlantById(table: string, id:string)
  {
    return this.http.get(`${this.server}/${table}/${id}`);
  }

  updatePlant(table:string, id:number, plant:object)
  {
    return this.http.patch(`${this.server}/${table}/${id}`, plant);
  }

  deletePlant(table:string, id:number)
  {
    return this.http.delete(`${this.server}/${table}/${id}`)
  }

  addWatering(table:string, watering:object)
  {
    return this.http.post(`${this.server}/${table}`, watering);
  }

  deleteWatering(table:string, id:number)
  {
    return this.http.delete(`${this.server}/${table}/${id}`)
  }
}
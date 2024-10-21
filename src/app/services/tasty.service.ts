import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TastyService {

  constructor(private http:HttpClient) { }

  getMeals(){
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast')
  }

  sendMail(data:any){
    return this.http.post('http://upskilling-egypt.com:3001/contact', data)
  }
}

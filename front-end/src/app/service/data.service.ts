import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Bebidas } from '../database/database.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  public API_KEY = 'http://localhost:3000/api/bebidas';
  public imgURL = 'http://localhost:3000/img';
  id!: Bebidas; 
  //private httpOptions: any;
  constructor(private http:HttpClient){}

  getData(): Observable<Bebidas[]>{
    return this.http.get<Bebidas[]>(this.API_KEY);
  }

  getDataId(id: any): Observable<any> {
    console.log(`Fetching data for ID: ${id}`);
    return this.http.get<Bebidas[]>(`${this.API_KEY}/${id}`);
  }

  uploadImage(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(this.imgURL, formData);
  }


}


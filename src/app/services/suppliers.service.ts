import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../interfaces/supplier.interface';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  baseUrl = 'http://localhost:8080/api/v1/gapsy/suppliers';

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.baseUrl);
  }

  get(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: Supplier): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: number, data: Supplier): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

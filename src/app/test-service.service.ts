import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestServiceService {
  constructor(private http: HttpClient) {}

  getCarrierLink() {
    return this.http.get('http://localhost:3000/api/file');
  }
}

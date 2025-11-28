import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tasinmaz } from '../../models/tasinmaz.model';

@Injectable({
  providedIn: 'root'
})
export class TasinmazListeService {

  private apiUrl = 'http://localhost:5097/api/tasinmaz'; // Backend URL

  constructor(private http: HttpClient) { }

  getTasinmazlar(): Observable<Tasinmaz[]> {
    return this.http.get<Tasinmaz[]>(this.apiUrl);
  }
}

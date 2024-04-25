import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormRequest } from '../payloads/request/form';
import { FormResponse } from '../payloads/response/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private baseUrl = 'http://localhost:8083/forms';

  constructor(private http: HttpClient) { }

  submitForm(formData: FormRequest): Observable<FormResponse> {
    return this.http.post<FormResponse>(`${this.baseUrl}/submit`, formData);
  }

  getAllForms(): Observable<FormResponse[]> {
    return this.http.get<FormResponse[]>(`${this.baseUrl}/all`);
  }
}

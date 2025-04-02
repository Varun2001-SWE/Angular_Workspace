import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface Card {
  Name: string;
  Subtext: string;
}

@Injectable({
  providedIn: 'root'
})

export class WorkbenchResolver implements Resolve<Card[]> {
  
  private apiUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

  constructor(private http: HttpClient) {}

  resolve(): Observable<Card[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response?.data.map((item: any) => ({
        Name: item.Nation,
        Subtext: item.Population
      })) || []),
      catchError(error => {
        console.error('Resolver API Error:', error);
        return [[]]; 
      })
    );
  }
}

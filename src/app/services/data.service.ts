import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Group } from './../interfaces/group';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<Group[]> {
    return this.http.get('assets/data/data.json')
    .pipe(
      map((data: any) => {
        return data.schedule[0].groups;
      })
    );
  }
}

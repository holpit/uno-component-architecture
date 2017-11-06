import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Team } from '../models/team';
import { Driver } from '../models/driver';

const URL = 'assets/db/formula1.data.json';

@Injectable()
export class Formula1Service {

    constructor(private http: HttpClient) {}

    getTeams(): Observable<Team[]> {
        return this.http.get(URL)
                        .map((data:any) => data.teams);
    }

    getDefaultDriver(): Observable<Driver> {
        return this.http.get(URL)
                        .map((data:any) => data.defaultDriver);
    }
    
}
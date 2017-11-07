import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Team } from '../models/team';
import { Driver } from '../models/driver';
import { IconOption } from '../../shared/models/icon-option';

const URL = 'assets/db/formula1.data.json';

@Injectable()
export class Formula1Service {

    constructor(private http: HttpClient) {}

    getTeams(): Observable<Team[]> {
        return this.get("teams");
    }

    getDefaultDriver(): Observable<Driver> {
        return this.get("defaultDriver");       
    }

    getSocial(): Observable<IconOption[]>  {
        return this.get("social");
    }

    private get(section: string) {
        return this.http.get(URL)
                        .map((data:any) => data[section]);
    }
    
}
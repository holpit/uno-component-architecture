import { Component } from '@angular/core';
import { Team } from '../models/team';
import { Driver } from '../models/driver';
import { IconOption } from '../../shared/models/icon-option';
import { Formula1Service } from '../services/formula1.service';
import { Option } from '../../shared/models/option';

@Component({
  selector: 'uno-widget-controls',
  templateUrl: 'widget-controls.components.html'
})
export class WidgetControlsComponent {
  teams: Option[];
  socialOptions: IconOption[];
  driver: Driver;

  constructor(private f1: Formula1Service) { 

    f1.getTeams().subscribe(t => this.teams = t.map(x => {return {value: x.id, text: x.name};}));
    f1.getSocial().subscribe(t => this.socialOptions = t);
    f1.getDefaultDriver().subscribe(t => {
        this.driver = t;
    });
  }
}

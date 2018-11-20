import { Component, OnInit } from '@angular/core';

import { DataService } from './../services/data.service';
import { Group } from './../interfaces/group';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  groups: Group[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getData()
    .subscribe((groups) => {
      this.groups = groups;
    });
  }

}

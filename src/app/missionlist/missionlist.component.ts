import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {
  color: string[] = [];
  missions: Mission[] = [];

  constructor(private spacexapiService: SpacexapiService) {
    this.getMissions();
  }
  ngOnInit(): void {
    this.getMissions();
  }
  getMissions(): void {
    this.spacexapiService.getMissions().subscribe((missions) => {
      this.missions = missions;
    });
  }
}


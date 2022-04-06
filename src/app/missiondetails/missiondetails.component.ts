import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})
export class MissiondetailsComponent implements OnInit {
  mission: Mission = {
    flight_number: 0,
    mission_name: '',
    launch_year: 0,
    rocket: {
      rocket_name: '',
      rocket_type: '',
    },
    links: {
      mission_patch_small: '',
    },
    launch_site: {
      site_name_long: '',
    },
    details: '',
  };

  constructor(
    private spacexapiService: SpacexapiService,
    private location: Location,
    private route: ActivatedRoute,) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getMission(id);
  }
  getMission(id: number): void {
    this.spacexapiService.getMission(id).subscribe((mission) => {
      this.mission = mission;
    });
  }
  goBack(): void {
    this.location.back();
  }
}

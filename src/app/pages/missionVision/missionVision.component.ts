import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-missionVision',
  templateUrl: './missionVision.component.html',
  styleUrls: ['./missionVision.component.css']
})
export class MissionVisionComponent implements OnInit {

  constructor(
    private titulo: Title) {
    titulo.setTitle("Misión y Visión")
  }

  ngOnInit() {
  }
  
}

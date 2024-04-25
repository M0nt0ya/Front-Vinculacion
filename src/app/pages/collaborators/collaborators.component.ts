import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.css']
})
export class CollaboratorsComponent implements OnInit {

  menProfile:string ='../../../assets/images/gallery/menprefil.jpg'

  constructor(private titulo: Title) {
    titulo.setTitle("Autoridades")
  }

  ngOnInit() {
  }

}

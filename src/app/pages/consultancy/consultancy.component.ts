import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-consultancy',
  templateUrl: './consultancy.component.html',
  styleUrls: ['./consultancy.component.css']
})
export class ConsultancyComponent implements OnInit {

  constructor(private titulo: Title) {
    titulo.setTitle("MEET MNT LATAM")
  }

  ngOnInit(): void {
  }

}

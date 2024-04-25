import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormRequest } from 'src/app/payloads/request/form';
import { FormService } from 'src/app/services/Form.service';
@Component({
  selector: 'app-missionVision',
  templateUrl: './missionVision.component.html',
  styleUrls: ['./missionVision.component.css']
})
export class MissionVisionComponent implements OnInit {
  formData: FormRequest = { name: '', lastName: '', comment: '' };

  constructor(private formService: FormService,
    private titulo: Title) {
    titulo.setTitle("Misión y Visión")
  }

  ngOnInit() {
  }
  // Método para enviar el formulario al backend
  submitForm(): void {
    this.formService.submitForm(this.formData).subscribe(response => {
      console.log('Form submitted successfully:', response);
      //this.loadForms(); // Actualizar la lista de formularios después de enviar uno nuevo
    }, error => {
      console.error('Error submitting form:', error);
    });
  }
}

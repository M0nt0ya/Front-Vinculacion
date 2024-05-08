import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormRequest } from 'src/app/payloads/request/form';
import { FormService } from 'src/app/services/Form.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  formData: FormRequest = { name: '', phone: '', email: '', comment: '' };

  constructor(private formService: FormService, private titulo: Title) {
    titulo.setTitle('Contactanos');
  }
  ngOnInit() { }

  submitForm(): void {
    this.formService.submitForm(this.formData).subscribe(response => {
      console.log('Form submitted successfully:', response);
      //this.loadForms(); // Actualizar la lista de formularios después de enviar uno nuevo
    }, error => {
      console.error('Error submitting form:', error);
    });
  }
}

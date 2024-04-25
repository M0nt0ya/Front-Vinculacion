import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormResponse } from 'src/app/payloads/response/form';
import { FormService } from 'src/app/services/Form.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-Form',
  templateUrl: './Form.component.html',
  styleUrls: ['./Form.component.css']
})
export class FormComponent implements OnInit {

  navigationSubscription;
  username: string;
  forms: FormResponse[] = [];
  //formData: FormRequest = { name: '', lastName: '', comment: '' };

  constructor(
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService,
    private formService: FormService) {

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.navigationSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
    this.username = this.authService.getUsername();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params["signedIn"] !== undefined && params["signedIn"] === "true") {
        this.toastr.success("Inicio Sesión Correctamente");
      }
    });
    this.loadForms();
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  // Método para enviar el formulario al backend
  /* submitForm(): void {
    this.formService.submitForm(this.formData).subscribe(response => {
      console.log('Form submitted successfully:', response);
      //this.loadForms(); // Actualizar la lista de formularios después de enviar uno nuevo
    }, error => {
      console.error('Error submitting form:', error);
    });
  } */

  // Método para cargar la lista de formularios desde el backend
  loadForms(): void {
    this.formService.getAllForms().subscribe(forms => {
      this.forms = forms;
    }, error => {
      console.error('Error loading forms:', error);
    });
  }


  logout(): void {
    this.authService.logout();
  }
}
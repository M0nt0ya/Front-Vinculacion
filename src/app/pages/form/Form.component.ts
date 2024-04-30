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
  formToDeleteId: number | null = null;
  isDeleteModalVisible: boolean = false;


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

  loadForms(): void {
    this.formService.getAllForms().subscribe(forms => {
      this.forms = forms;
    }, error => {
      console.error('Error loading forms:', error);
    });
  }

  openDeleteConfirmationModal(id: number): void {
    this.formToDeleteId = id;
    this.isDeleteModalVisible = true;
  }

  confirmDelete(): void {
    if (this.formToDeleteId !== null) {
      this.formService.deleteForm(this.formToDeleteId).subscribe(() => {
        this.loadForms();
        this.isDeleteModalVisible = false;
      }, error => {
        console.error('Error deleting form:', error);
        this.isDeleteModalVisible = false; 
      });
    }
  }

  cancelDelete(): void {
    this.formToDeleteId = null;
    this.isDeleteModalVisible = false;
  }



  logout(): void {
    try {
        this.authService.logout();
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
    }
        this.router.navigate(['/']); 
}
}
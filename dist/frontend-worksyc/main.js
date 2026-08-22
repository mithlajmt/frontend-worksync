"use strict";
(self["webpackChunkfrontend_worksyc"] = self["webpackChunkfrontend_worksyc"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _modules_public_components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/public/components/notfound/notfound.component */ 4638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  // component: PublicComponent,
  children: [{
    path: '',
    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../app/modules/public/public.module */ 5116)).then(m => m.PublicModule)
  }, {
    path: 'companyAdmin',
    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../app/modules/company/company.module */ 4389)).then(m => m.CompanyModule)
  }, {
    path: 'employee',
    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../app/modules/employee/employee.module */ 1167)).then(m => m.EmployeeModule)
  }, {
    path: 'departmentHead',
    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../app/modules/departmenthead/departmenthead.module */ 6873)).then(m => m.DepartmentheadModule)
  }, {
    path: '**',
    component: _modules_public_components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_0__.NotfoundComponent
  }]
}];
// this.router.url === '/' || this.router.url === '/login'
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_jwt_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/jwt.service */ 61);
/* harmony import */ var _services_userData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/userData.service */ 2902);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/loading.service */ 2548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _modules_shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/shared/components/loading/loading.component */ 9897);







function AppComponent_app_loading_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loading");
  }
}
class AppComponent {
  constructor(jwt, user, loadingService) {
    this.jwt = jwt;
    this.user = user;
    this.loadingService = loadingService;
    this.title = 'frontend-worksyc';
    this.isLoading$ = this.loadingService.isLoading$;
    this.token = localStorage.getItem('yourToken');
  }
  ngOnInit() {
    const dtoken = this.jwt.decodeToken(this.token);
    if (dtoken && dtoken.role) {
      this.user.role = dtoken.role;
    }
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_jwt_service__WEBPACK_IMPORTED_MODULE_0__.JwtService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_userData_service__WEBPACK_IMPORTED_MODULE_1__.userData), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 3,
    consts: [[1, ""], [4, "ngIf"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_app_loading_1_Template, 1, 0, "app-loading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx.isLoading$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _modules_shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__.LoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRKQUE0SiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _modules_public_public_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/public/public.module */ 5116);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _modules_company_company_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/company/company.module */ 4389);
/* harmony import */ var _services_AuthInterceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/AuthInterceptor.service */ 9260);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/shared/shared.module */ 8524);
/* harmony import */ var _modules_employee_employee_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/employee/employee.module */ 1167);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);














// import { WebcamModule } from 'ngx-webcam';
_modules_public_public_module__WEBPACK_IMPORTED_MODULE_2__.PublicModule;
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
      useClass: _services_AuthInterceptor_service__WEBPACK_IMPORTED_MODULE_4__.AuthInterceptor,
      multi: true
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _modules_company_company_module__WEBPACK_IMPORTED_MODULE_3__.CompanyModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _modules_employee_employee_module__WEBPACK_IMPORTED_MODULE_6__.EmployeeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _modules_public_public_module__WEBPACK_IMPORTED_MODULE_2__.PublicModule
    // NgMultiSelectDropDownModule,
    // WebcamModule
    ]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _modules_company_company_module__WEBPACK_IMPORTED_MODULE_3__.CompanyModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _modules_employee_employee_module__WEBPACK_IMPORTED_MODULE_6__.EmployeeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _modules_public_public_module__WEBPACK_IMPORTED_MODULE_2__.PublicModule
    // NgMultiSelectDropDownModule,
    // WebcamModule
    ]
  });
})();

/***/ }),

/***/ 9434:
/*!******************************************!*\
  !*** ./src/app/guards/LoggedIn.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggedAuthGuard: () => (/* binding */ LoggedAuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_userData_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/userData.service */ 2902);



class LoggedAuthGuard {
  constructor(router, user) {
    this.router = router;
    this.user = user;
  }
  canActivate(route, state) {
    const token = localStorage.getItem('yourToken');
    const role = this.user.role;
    if (token && role) {
      const targetPath = role === 'intern' ? 'employee' : role;
      this.router.navigate([`/${targetPath}`]);
      return false;
    } else {
      return true;
    }
  }
  static #_ = this.ɵfac = function LoggedAuthGuard_Factory(t) {
    return new (t || LoggedAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_userData_service__WEBPACK_IMPORTED_MODULE_0__.userData));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LoggedAuthGuard,
    factory: LoggedAuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7293:
/*!**********************************************!*\
  !*** ./src/app/guards/companyAdmin.guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   companyAuthGuard: () => (/* binding */ companyAuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_userData_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/userData.service */ 2902);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



class companyAuthGuard {
  constructor(userDataService, router) {
    this.userDataService = userDataService;
    this.router = router;
  }
  canActivateChild(route, state) {
    const isCompanyAdmin = this.userDataService.isCompanyAdmin();
    if (isCompanyAdmin) {
      return true;
    } else {
      this.router.navigate(['/restricted']);
      return false;
    }
  }
  static #_ = this.ɵfac = function companyAuthGuard_Factory(t) {
    return new (t || companyAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_userData_service__WEBPACK_IMPORTED_MODULE_0__.userData), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: companyAuthGuard,
    factory: companyAuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5001:
/*!************************************************!*\
  !*** ./src/app/guards/departmentHead.guard.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_userData_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/userData.service */ 2902);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



class AuthGuard {
  constructor(userDataService, router) {
    this.userDataService = userDataService;
    this.router = router;
  }
  canActivateChild(route, state) {
    const isDeptHead = this.userDataService.isDepartmentHead();
    if (isDeptHead) {
      return true;
    } else {
      this.router.navigate(['/restricted']);
      return false;
    }
  }
  static #_ = this.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_userData_service__WEBPACK_IMPORTED_MODULE_0__.userData), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 30:
/*!******************************************!*\
  !*** ./src/app/guards/employee.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeGuard: () => (/* binding */ EmployeeGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_userData_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/userData.service */ 2902);



class EmployeeGuard {
  constructor(router, user) {
    this.router = router;
    this.user = user;
  }
  canActivateChild() {
    const userRole = this.user.isEmployee();
    if (userRole) {
      return true;
    } else {
      this.router.navigate(['/forbidden']);
      return false;
    }
  }
  static #_ = this.ɵfac = function EmployeeGuard_Factory(t) {
    return new (t || EmployeeGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_userData_service__WEBPACK_IMPORTED_MODULE_0__.userData));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: EmployeeGuard,
    factory: EmployeeGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9529:
/*!***********************************************************!*\
  !*** ./src/app/modules/company/company-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyRoutingModule: () => (/* binding */ CompanyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_employee_employeeform_employeeform_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/employee/employeeform/employeeform.component */ 4591);
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company.component */ 2108);
/* harmony import */ var _components_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard/dashboard.component */ 3280);
/* harmony import */ var _components_departments_departments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/departments/departments.component */ 1940);
/* harmony import */ var _departmenthead_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../departmenthead/components/notifications/notifications.component */ 8959);
/* harmony import */ var _shared_components_todo_todo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/todo/todo.component */ 857);
/* harmony import */ var _components_employee_employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/employee/employeelist/employeelist.component */ 8939);
/* harmony import */ var _components_department_details_department_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/department-details/department-details.component */ 8523);
/* harmony import */ var _departmenthead_components_approve_complaints_approve_complaints_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../departmenthead/components/approve-complaints/approve-complaints.component */ 8477);
/* harmony import */ var _shared_components_chat_session_chat_session_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/chat-session/chat-session.component */ 2561);
/* harmony import */ var _shared_components_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/components/profile-form/profile-form.component */ 1639);
/* harmony import */ var _shared_components_employee_data_profile_employee_data_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/components/employee-data-profile/employee-data-profile.component */ 5415);
/* harmony import */ var _components_approve_leave_approve_leave_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/approve-leave/approve-leave.component */ 5362);
/* harmony import */ var src_app_guards_companyAdmin_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/guards/companyAdmin.guard */ 7293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 1699);

















const routes = [{
  path: '',
  component: _company_component__WEBPACK_IMPORTED_MODULE_1__.companyComponent,
  canActivateChild: [src_app_guards_companyAdmin_guard__WEBPACK_IMPORTED_MODULE_13__.companyAuthGuard],
  children: [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: _components_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent
  }, {
    path: 'employee',
    component: _components_employee_employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_6__.EmployeelistComponent
  }, {
    path: 'employee/:id',
    component: _shared_components_employee_data_profile_employee_data_profile_component__WEBPACK_IMPORTED_MODULE_11__.EmployeeDataProfileComponent
  }, {
    path: 'addemployee',
    component: _components_employee_employeeform_employeeform_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeformComponent
  }, {
    path: 'departments',
    component: _components_departments_departments_component__WEBPACK_IMPORTED_MODULE_3__.DepartmentsComponent
  }, {
    path: 'departments/:id',
    component: _components_department_details_department_details_component__WEBPACK_IMPORTED_MODULE_7__.DepartmentDetailsComponent
  }, {
    path: 'departments/:id/:id',
    component: _shared_components_employee_data_profile_employee_data_profile_component__WEBPACK_IMPORTED_MODULE_11__.EmployeeDataProfileComponent
  }, {
    path: 'notifications',
    component: _departmenthead_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__.NotificationsComponent
  }, {
    path: 'complaintsList',
    component: _departmenthead_components_approve_complaints_approve_complaints_component__WEBPACK_IMPORTED_MODULE_8__.ApproveComplaintsComponent
  }, {
    path: 'leaveRequest',
    component: _components_approve_leave_approve_leave_component__WEBPACK_IMPORTED_MODULE_12__.ApproveLeaveComponent
  }, {
    path: 'todo',
    component: _shared_components_todo_todo_component__WEBPACK_IMPORTED_MODULE_5__.TodoComponent
  }, {
    path: 'Messages',
    component: _shared_components_chat_session_chat_session_component__WEBPACK_IMPORTED_MODULE_9__.ChatSessionComponent
  }, {
    path: 'profile',
    component: _shared_components_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_10__.ProfileFormComponent
  }]
}];
class CompanyRoutingModule {
  static #_ = this.ɵfac = function CompanyRoutingModule_Factory(t) {
    return new (t || CompanyRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
    type: CompanyRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](CompanyRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
  });
})();

/***/ }),

/***/ 2108:
/*!******************************************************!*\
  !*** ./src/app/modules/company/company.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   companyComponent: () => (/* binding */ companyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _shared_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/topbar/topbar.component */ 6233);
/* harmony import */ var _shared_components_sidebar_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/sidebar/toolbar/toolbar.component */ 1305);




class companyComponent {
  static #_ = this.ɵfac = function companyComponent_Factory(t) {
    return new (t || companyComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: companyComponent,
    selectors: [["app-company"]],
    decls: 8,
    vars: 0,
    consts: [[1, "w-screen", "flex", "flex-row", "max-h-screen", "overflow-hidden", "max-w-full"], [1, "text-white"], [1, "flex", "flex-col", "flex-1", "h-screen", "overflow-hidden"], [1, "md:h-[75px]", "h-[65px]", "bg-blue-500"], [1, "overflow-auto", "flex-1", "p-4"], [1, "h-full", "bg-white", "shadow-md", "hover:shadow-lg", "transition"]],
    template: function companyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "app-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "App Toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "app-topbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Top Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "router-outlet", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__.TopbarComponent, _shared_components_sidebar_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__.ToolbarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wYW55L2NvbXBhbnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4389:
/*!***************************************************!*\
  !*** ./src/app/modules/company/company.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyModule: () => (/* binding */ CompanyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_employee_employeeform_employeeform_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/employee/employeeform/employeeform.component */ 4591);
/* harmony import */ var _components_employee_employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/employee/employeelist/employeelist.component */ 8939);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company.component */ 2108);
/* harmony import */ var _components_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard/dashboard.component */ 3280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-routing.module */ 9529);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ 8524);
/* harmony import */ var _components_departments_departments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/departments/departments.component */ 1940);
/* harmony import */ var _components_employee_edit_employee_data_edit_employee_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/employee/edit-employee-data/edit-employee-data.component */ 3296);
/* harmony import */ var _components_department_details_department_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/department-details/department-details.component */ 8523);
/* harmony import */ var _departmenthead_departmenthead_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../departmenthead/departmenthead.module */ 6873);
/* harmony import */ var _components_approve_leave_approve_leave_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/approve-leave/approve-leave.component */ 5362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);















class CompanyModule {
  static #_ = this.ɵfac = function CompanyModule_Factory(t) {
    return new (t || CompanyModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: CompanyModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _company_routing_module__WEBPACK_IMPORTED_MODULE_4__.CompanyRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _company_routing_module__WEBPACK_IMPORTED_MODULE_4__.CompanyRoutingModule, _departmenthead_departmenthead_module__WEBPACK_IMPORTED_MODULE_9__.DepartmentheadModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](CompanyModule, {
    declarations: [_components_employee_employeeform_employeeform_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeformComponent, _components_employee_employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_1__.EmployeelistComponent, _company_component__WEBPACK_IMPORTED_MODULE_2__.companyComponent, _components_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent, _components_departments_departments_component__WEBPACK_IMPORTED_MODULE_6__.DepartmentsComponent, _components_employee_edit_employee_data_edit_employee_data_component__WEBPACK_IMPORTED_MODULE_7__.EditEmployeeDataComponent, _components_department_details_department_details_component__WEBPACK_IMPORTED_MODULE_8__.DepartmentDetailsComponent, _components_approve_leave_approve_leave_component__WEBPACK_IMPORTED_MODULE_10__.ApproveLeaveComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _company_routing_module__WEBPACK_IMPORTED_MODULE_4__.CompanyRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _company_routing_module__WEBPACK_IMPORTED_MODULE_4__.CompanyRoutingModule, _departmenthead_departmenthead_module__WEBPACK_IMPORTED_MODULE_9__.DepartmentheadModule],
    exports: [_company_component__WEBPACK_IMPORTED_MODULE_2__.companyComponent, _components_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent, _components_employee_employeeform_employeeform_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeformComponent, _components_employee_employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_1__.EmployeelistComponent, _components_employee_edit_employee_data_edit_employee_data_component__WEBPACK_IMPORTED_MODULE_7__.EditEmployeeDataComponent]
  });
})();

/***/ }),

/***/ 5362:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/company/components/approve-leave/approve-leave.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApproveLeaveComponent: () => (/* binding */ ApproveLeaveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 4471);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function ApproveLeaveComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5)(2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "*No leave requests found at the Moment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function ApproveLeaveComponent_div_5_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 30);
  }
  if (rf & 2) {
    const request_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", request_r2.photo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ApproveLeaveComponent_div_5_ul_29_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 33)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const date_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 1, date_r7, "medium"), " ");
  }
}
function ApproveLeaveComponent_div_5_ul_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApproveLeaveComponent_div_5_ul_29_li_1_Template, 4, 4, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const date_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", date_r7);
  }
}
function ApproveLeaveComponent_div_5_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21)(1, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Attachment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const request_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", request_r2.attachment, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ApproveLeaveComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApproveLeaveComponent_div_5_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const request_r2 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.toggleExpand(request_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9)(3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ApproveLeaveComponent_div_5_img_4_Template, 1, 1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12)(6, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 15)(13, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " STATUS : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 18)(19, "div", 19)(20, "div", 20)(21, "div", 21)(22, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 24)(27, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Dates:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ApproveLeaveComponent_div_5_ul_29_Template, 2, 1, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ApproveLeaveComponent_div_5_div_30_Template, 4, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 27)(32, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApproveLeaveComponent_div_5_Template_button_click_32_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const request_r2 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.onDecline(request_r2._Id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Decline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApproveLeaveComponent_div_5_Template_button_click_34_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const request_r2 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.onApprove(request_r2._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const request_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("flipped", request_r2.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", request_r2.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("AUTHOR : ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 13, request_r2.userName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" TITLE : ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 15, request_r2.title), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r1.getStatusColor(request_r2.reviewStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 17, request_r2.reviewStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("max-h-0", !request_r2.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !request_r2.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](request_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", request_r2.requestedDates);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", request_r2.attachment);
  }
}
class ApproveLeaveComponent {
  constructor(api) {
    this.api = api;
    this.leaveRequests = [];
    this.requestedDates = [];
  }
  toggleExpand(request) {
    request.expanded = !request.expanded; // Toggle the expanded state
  }

  getStatusColor(status) {
    switch (status.toLowerCase()) {
      case 'pending':
        return {
          color: 'green'
        };
      case 'approved':
        return {
          color: 'red'
        };
      case 'declined':
        return {
          color: 'yellow'
        };
      default:
        return {};
    }
  }
  ngOnInit() {
    this.api.getLeaveRequests().subscribe({
      next: res => {
        this.leaveRequests = [...res?.data];
        console.log(this.leaveRequests);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  onApprove(id) {
    this.api.updateLeaveRequest(id, "Approved").subscribe({
      next: res => {
        console.log(res);
        alert('leaveApproved successfully');
        this.api.getLeaveRequests().subscribe({
          next: res => {
            this.leaveRequests = [...res?.data];
            console.log(this.leaveRequests);
          },
          error: err => {
            console.log(err);
          }
        });
      },
      error: err => {
        alert('leaveApprove failed');
      }
    });
  }
  onDecline(_id) {
    alert(_id);
    this.api.updateLeaveRequest(_id, "denied").subscribe({
      next: res => {
        console.log(res);
        alert("Leave request declined successfully");
        this.api.getLeaveRequests().subscribe({
          next: res => {
            this.leaveRequests = [...res?.data];
            console.log(this.leaveRequests);
          },
          error: err => {
            console.log(err);
          }
        });
      },
      error: err => {
        console.log(err);
        alert("Failed to Decline the leave request");
      }
    });
  }
  static #_ = this.ɵfac = function ApproveLeaveComponent_Factory(t) {
    return new (t || ApproveLeaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ApproveLeaveComponent,
    selectors: [["app-approve-leave"]],
    decls: 6,
    vars: 2,
    consts: [[1, "min-h-full", "w-full", "bg-gray-900", "p-8"], [1, "text-white", "text-xl", "mb-4"], [4, "ngIf"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], ["class", "card-container bg-gray-800 h-[200px] sm:overflow-hidden overflow-scroll sm:h-[300px]", 4, "ngFor", "ngForOf"], [1, "flex", "justify-center", "items-center", "h-full", "md:text-xl"], [1, "text-red-900"], [1, "card-container", "bg-gray-800", "h-[200px]", "sm:overflow-hidden", "overflow-scroll", "sm:h-[300px]"], [1, "card", "rounded-lg", "shadow-md", "overflow-hidden", "bg-gray-800", 3, "click"], [1, "card__side", "card__side--front", "bg-gray-800"], [1, "flex", "items-center", "flex-col", "gap-4", "p-4", "cursor-pointer"], ["alt", "", "class", "w-20 h-20 object-cover rounded-full mr-4", 3, "src", 4, "ngIf"], [1, "flex", "flex-col", "text-left", "gap-0"], [1, "text-xl", "font-semibold", "text-gray-200"], [1, "text-lg", "font-medium", "text-gray-400"], [1, "flex", "flex-col", "items-center", "text-sm", "text-gray-500", "justify-around", "w-full"], [1, "mr-2"], [3, "ngStyle"], [1, "card__side", "card__side--back"], [1, "p-4", "gap-4", "overflow-hidden", "transition-max-h", "duration-300", "ease-in-out"], [3, "hidden"], [1, "bg-gray-900", "p-4", "mt-4", "rounded-lg"], [1, "text-lg", "font-semibold", "text-gray-300", "mb-2"], [1, "text-gray-400"], [1, "bg-gray-900", "p-4", "rounded-lg", "mt-4"], ["class", "list-disc pl-4", 4, "ngFor", "ngForOf"], ["class", "bg-gray-900 p-4 mt-4 rounded-lg", 4, "ngIf"], [1, "flex", "justify-center", "gap-4", "mt-5"], [1, "bg-red-700", "text-white", "font-bold", "py-2", "px-4", "rounded-full", "transition", "duration-300", "ease-in-out", 3, "click"], [1, "bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded-full", "transition", "duration-300", "ease-in-out", 3, "click"], ["alt", "", 1, "w-20", "h-20", "object-cover", "rounded-full", "mr-4", 3, "src"], [1, "list-disc", "pl-4"], ["class", "text-gray-400 mt-2 ", 4, "ngIf"], [1, "text-gray-400", "mt-2"], [1, "text-lg", "font-semibold", "text-gray-400", "mb-2"], ["alt", "", 1, "object-cover", "lg:max-h-[400px]", "lg:max-w-[400px]", "mb-2", 3, "src"]],
    template: function ApproveLeaveComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "LEAVE REQUESTS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ApproveLeaveComponent_ng_container_3_Template, 4, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ApproveLeaveComponent_div_5_Template, 36, 19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leaveRequests.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.leaveRequests);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
    styles: ["\n\n\n.card-container[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.card[_ngcontent-%COMP%] {\n    position: relative;\n    height: 100%; \n\n    width: 100%; \n\n    perspective: 150rem;\n}\n\n.card__side[_ngcontent-%COMP%] {\n    height: 100%;\n    transition: all 0.8s ease;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    backface-visibility: hidden;\n    border-radius: 3px;\n    overflow: hidden;\n}\n\n.card__side--front[_ngcontent-%COMP%] {\n    overflow-y: auto;\n\n    \n\n}\n\n.card__side--back[_ngcontent-%COMP%] {\n    \n\n    transform: rotateY(180deg);\n    overflow-y: auto;\n}\n\n@media (max-width: 768px) {\n    .card__side--back[_ngcontent-%COMP%] {\n        max-height: 200px; \n\n    }\n    .card__side--front[_ngcontent-%COMP%] {\n        max-height: 200px;\n    }\n}\n\n.card.flipped[_ngcontent-%COMP%]   .card__side--front[_ngcontent-%COMP%] {\n    transform: rotateY(-180deg);\n}\n\n.card.flipped[_ngcontent-%COMP%]   .card__side--back[_ngcontent-%COMP%] {\n    transform: rotateY(0);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHJvdmUtbGVhdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBc0I7O0FBRXRCO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVksRUFBRSxxQkFBcUI7SUFDbkMsV0FBVyxFQUFFLHFCQUFxQjtJQUVsQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjs7SUFFaEIsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksZ0RBQWdEO0lBQ2hELDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQixFQUFFLHVCQUF1QjtJQUM5QztJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoiYXBwcm92ZS1sZWF2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWRkIHlvdXIgQ1NTIGhlcmUgKi9cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXG4gICAgd2lkdGg6IDEwMCU7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxNTByZW07XG4gICAgcGVyc3BlY3RpdmU6IDE1MHJlbTtcbn1cblxuLmNhcmRfX3NpZGUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkX19zaWRlLS1mcm9udCB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMwODY4NmY7IEFkanVzdCBhcyBuZWVkZWQgKi9cbn1cblxuLmNhcmRfX3NpZGUtLWJhY2sge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7IEFkanVzdCBhcyBuZWVkZWQgKi9cbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY2FyZF9fc2lkZS0tYmFjayB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4OyAvKiBTZXQgbWF4aW11bSBoZWlnaHQgKi9cbiAgICB9XG4gICAgLmNhcmRfX3NpZGUtLWZyb250IHtcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgfVxufVxuXG4uY2FyZC5mbGlwcGVkIC5jYXJkX19zaWRlLS1mcm9udCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xufVxuXG4uY2FyZC5mbGlwcGVkIC5jYXJkX19zaWRlLS1iYWNrIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wYW55L2NvbXBvbmVudHMvYXBwcm92ZS1sZWF2ZS9hcHByb3ZlLWxlYXZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCOztBQUV0QjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZLEVBQUUscUJBQXFCO0lBQ25DLFdBQVcsRUFBRSxxQkFBcUI7SUFFbEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7O0lBRWhCLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUIsRUFBRSx1QkFBdUI7SUFDOUM7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBLDRxRUFBNHFFIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWRkIHlvdXIgQ1NTIGhlcmUgKi9cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXG4gICAgd2lkdGg6IDEwMCU7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxNTByZW07XG4gICAgcGVyc3BlY3RpdmU6IDE1MHJlbTtcbn1cblxuLmNhcmRfX3NpZGUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkX19zaWRlLS1mcm9udCB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMwODY4NmY7IEFkanVzdCBhcyBuZWVkZWQgKi9cbn1cblxuLmNhcmRfX3NpZGUtLWJhY2sge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7IEFkanVzdCBhcyBuZWVkZWQgKi9cbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY2FyZF9fc2lkZS0tYmFjayB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4OyAvKiBTZXQgbWF4aW11bSBoZWlnaHQgKi9cbiAgICB9XG4gICAgLmNhcmRfX3NpZGUtLWZyb250IHtcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgfVxufVxuXG4uY2FyZC5mbGlwcGVkIC5jYXJkX19zaWRlLS1mcm9udCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xufVxuXG4uY2FyZC5mbGlwcGVkIC5jYXJkX19zaWRlLS1iYWNrIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3280:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/company/components/dashboard/dashboard/dashboard.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ 2112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/jwt.service */ 61);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api.service */ 4471);





class DashboardComponent {
  ngOnInit() {
    this.createChart();
    this.serv.getDepartments().subscribe({
      next: res => {
        console.log(res);
        res.data.map(res => {
          this.departmentName.push(res.departmentName);
          this.employees.push(res.totalEmployees);
        });
        this.createDepChart();
      },
      error: err => {
        console.log('mi');
      }
    });
  }
  constructor(api, http, serv) {
    this.api = api;
    this.http = http;
    this.serv = serv;
    this.departmentName = [];
    this.employees = [];
  }
  minu() {
    console.log('ji');
  }
  createChart() {
    this.chart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__.Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13', '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17'],
        datasets: [{
          label: "attendance",
          data: ['467', '576', '572', '79', '92', '574', '573', '576'],
          backgroundColor: 'navy'
        }, {
          label: "late",
          data: ['542', '542', '536', '327', '17', '100', '538', '541'],
          backgroundColor: 'yellow'
        }, {
          label: "leave",
          data: ['54', '54', '53', '32', '17', '0.00', '70', '80'],
          backgroundColor: 'red'
        }]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
  createDepChart() {
    this.chartTwo = new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__.Chart("MyChartTwo", {
      type: 'pie',
      data: {
        labels: this.departmentName,
        datasets: [{
          label: 'Number of employees',
          data: this.employees,
          backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)']
        }]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
  static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_jwt_service__WEBPACK_IMPORTED_MODULE_1__.JwtService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 10,
    vars: 2,
    consts: [[1, "bg-gray-900", "min-h-screen", "flex", "flex-col", "gap-6", "p-4"], [1, "chart-container", "bg-white", "mt-6"], [1, "p-4"], [1, "text-red-500", "font-kanit", "text-2xl"], ["id", "MyChartTwo"], [1, "chart-container", "bg-white"], ["id", "MyChart"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "DEPARTMENTS DATA :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "canvas", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "canvas", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.chartTwo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.chart);
      }
    },
    styles: ["\n\n\n\n\n.dashboard-card[_ngcontent-%COMP%] {\n    background: linear-gradient(45deg, #4CAF50, #2196F3);\n    color: white;\n    border-radius: 10px;\n    padding: 20px;\n    height: 200px; \n\n    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;\n}\n\n.dashboard-card[_ngcontent-%COMP%]:hover {\n    transform: scale(1.1);\n    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);\n}\n\n\n\n.dashboard-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-bottom: 10px;\n}\n\n.dashboard-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    opacity: 0.8;\n}\n\n.entrance-animation[_ngcontent-%COMP%] {\n    opacity: 0;\n    transform: translateY(-20px);\n    animation: _ngcontent-%COMP%_fadeInUp 0.5s forwards;\n}\n\n.rotate-card[_ngcontent-%COMP%]:hover {\n    transform: rotate(10deg) scale(1.1);\n}\n\n@keyframes _ngcontent-%COMP%_fadeInUp {\n    from {\n        opacity: 0;\n        transform: translateY(-20px);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0Qjs7QUFFNUIsa0JBQWtCO0FBQ2xCO0lBQ0ksb0RBQW9EO0lBQ3BELFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWEsRUFBRSxnQ0FBZ0M7SUFDL0MsbUVBQW1FO0FBQ3ZFOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHVDQUF1QztBQUMzQzs7QUFFQSwrQ0FBK0M7QUFDL0M7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtJQUM1QjtBQUNKIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MgKi9cblxuLyogQ3VzdG9tIHN0eWxlcyAqL1xuLmRhc2hib2FyZC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM0Q0FGNTAsICMyMTk2RjMpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDsgLyogQWRqdXN0IHRoZSBoZWlnaHQgYXMgbmVlZGVkICovXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmRhc2hib2FyZC1jYXJkOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4vKiBBZGRpdGlvbmFsIHN0eWxpbmcgZm9yIGEgbW9yZSBkeW5hbWljIGxvb2sgKi9cbi5kYXNoYm9hcmQtY2FyZCBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkIHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG5cbi5lbnRyYW5jZS1hbmltYXRpb24ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICBhbmltYXRpb246IGZhZGVJblVwIDAuNXMgZm9yd2FyZHM7XG59XG5cbi5yb3RhdGUtY2FyZDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpIHNjYWxlKDEuMSk7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluVXAge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wYW55L2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7O0FBRTVCLGtCQUFrQjtBQUNsQjtJQUNJLG9EQUFvRDtJQUNwRCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhLEVBQUUsZ0NBQWdDO0lBQy9DLG1FQUFtRTtBQUN2RTs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix1Q0FBdUM7QUFDM0M7O0FBRUEsK0NBQStDO0FBQy9DO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDRCQUE0QjtJQUM1QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDViw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQSxvaEVBQW9oRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGRhc2hib2FyZC5jb21wb25lbnQuY3NzICovXG5cbi8qIEN1c3RvbSBzdHlsZXMgKi9cbi5kYXNoYm9hcmQtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNENBRjUwLCAjMjE5NkYzKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGhlaWdodDogMjAwcHg7IC8qIEFkanVzdCB0aGUgaGVpZ2h0IGFzIG5lZWRlZCAqL1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5kYXNoYm9hcmQtY2FyZDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLyogQWRkaXRpb25hbCBzdHlsaW5nIGZvciBhIG1vcmUgZHluYW1pYyBsb29rICovXG4uZGFzaGJvYXJkLWNhcmQgaDIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZCBwIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgb3BhY2l0eTogMC44O1xufVxuXG4uZW50cmFuY2UtYW5pbWF0aW9uIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjVzIGZvcndhcmRzO1xufVxuXG4ucm90YXRlLWNhcmQ6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKSBzY2FsZSgxLjEpO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8523:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/company/components/department-details/department-details.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepartmentDetailsComponent: () => (/* binding */ DepartmentDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 4471);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/jwt.service */ 61);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_components_table_list_table_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/table-list/table-list.component */ 2755);
/* harmony import */ var _departmenthead_components_department_statisctics_department_statisctics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../departmenthead/components/department-statisctics/department-statisctics.component */ 6561);







function DepartmentDetailsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("*", ctx_r0.message, "");
  }
}
class DepartmentDetailsComponent {
  constructor(api, active, jwt, router) {
    this.api = api;
    this.active = active;
    this.jwt = jwt;
    this.router = router;
    this.message = '';
  }
  ngOnInit() {
    const Token = this.jwt.getTokenFromLocalStorage();
    const decTok = this.jwt.decodeToken(Token);
    if (decTok.role == 'departmentHead') {
      this.api.getDepID().subscribe({
        next: res => {
          this.ID = res.data.departmentID;
          this.getData();
        },
        error: err => {
          console.log(err);
          alert(err.error.message);
        }
      });
    } else {
      this.ID = this.active.snapshot.params['id'];
      this.getData();
    }
  }
  getData() {
    this.api.getDepartmentData(this.ID).subscribe({
      next: res => {
        console.log(res, 'Response from API');
        // Check if 'data' property exists and has at least one element
        if (res?.data?.length > 0) {
          // Access the first element of 'data' array
          const departmentData = res.data[0];
          // Check if 'employees' property exists
          if (departmentData?.employees) {
            // Assign 'employees' array to 'employeeData'
            this.employeeData = [...departmentData.employees];
            console.log(this.employeeData, 'Employee data');
          } else {
            console.error('Employees data not found in the response');
            this.message = 'No existing Employee Found';
          }
        } else {
          console.error('Empty or invalid data response');
          this.message = 'No  Employee Found at the moment';
        }
      },
      error: err => {
        console.log(err, 'Error fetching department data');
      }
    });
  }
  onRowClick(id) {
    this.router.navigate(['.', id], {
      relativeTo: this.active
    });
  }
  static #_ = this.ɵfac = function DepartmentDetailsComponent_Factory(t) {
    return new (t || DepartmentDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_jwt_service__WEBPACK_IMPORTED_MODULE_1__.JwtService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DepartmentDetailsComponent,
    selectors: [["app-department-details"]],
    decls: 8,
    vars: 3,
    consts: [[1, "w-full", "min-h-full", "bg-gray-900"], [1, "pt-5"], [1, "text-gray-200", "font-kanit", "text-lg", "pl-4", "pt-3"], [3, "keyID", "tableData", "clickData"], ["class", "text-red-600 font-mono  text-xl text-center mt-2", 4, "ngIf"], [1, "text-red-600", "font-mono", "text-xl", "text-center", "mt-2"]],
    template: function DepartmentDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-department-statisctics");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div")(4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Employee List : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "app-table-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("clickData", function DepartmentDetailsComponent_Template_app_table_list_clickData_6_listener($event) {
          return ctx.onRowClick($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DepartmentDetailsComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("keyID", "employeeID")("tableData", ctx.employeeData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.message);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_table_list_table_list_component__WEBPACK_IMPORTED_MODULE_2__.TableListComponent, _departmenthead_components_department_statisctics_department_statisctics_component__WEBPACK_IMPORTED_MODULE_3__.DepartmentStatiscticsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wYW55L2NvbXBvbmVudHMvZGVwYXJ0bWVudC1kZXRhaWxzL2RlcGFydG1lbnQtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnTEFBZ0wiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1940:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/company/components/departments/departments.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepartmentsComponent: () => (/* binding */ DepartmentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 4471);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);







function DepartmentsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DepartmentsComponent_div_13_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const department_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.selectDepartment(department_r2.ID));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3)(2, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12)(6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const department_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](department_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Employees : ", department_r2.totalEmployees, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Present Employees : ", department_r2.attendancesToday, "");
  }
}
function DepartmentsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Add Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 17)(5, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Department Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Department Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Budget Allocation:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DepartmentsComponent_div_14_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.addDepartment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DepartmentsComponent_div_14_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.showAddDepartmentForm = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.myForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.myForm.valid);
  }
}
class DepartmentsComponent {
  constructor(fb, api, router) {
    this.fb = fb;
    this.api = api;
    this.router = router;
    this.departments = [];
    this.showAddDepartmentForm = false;
  }
  ngOnInit() {
    this.myForm = this.fb.group({
      departmentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      budgetAllocation: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.api.getDepartments().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => res?.data ? res.data.map(summary => ({
      name: summary.departmentName,
      ID: summary.departmentID,
      totalEmployees: summary.totalEmployees,
      attendancesToday: summary.attendancesToday
    })) : [])).subscribe({
      next: departments => {
        // console.log(departments);
        this.departments = departments;
      },
      error: err => {
        console.log(err, 'kidmanfdsAKJDajdslkADLKHalkjdhAKDSahdlAK');
      }
    });
  }
  addDepartment() {
    const form = this.myForm.value;
    console.log(this.myForm.value);
    this.api.addingDepartment(form).subscribe({
      next: res => {
        this.api.getDepartments().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(res => res?.data ? res.data.map(summary => ({
          name: summary.departmentName,
          ID: summary.departmentID,
          totalEmployees: summary.totalEmployees,
          attendancesToday: summary.attendancesToday
        })) : [])).subscribe({
          next: departments => {
            // console.log(departments);
            this.departments = departments;
            this.showAddDepartmentForm = false;
            alert('department Added Successfully');
            this.myForm.reset();
          },
          error: err => {
            console.log(err);
          }
        });
        this.myForm.reset();
        this.showAddDepartmentForm = false;
      },
      error: err => {
        console.log(err);
        alert(err.error['message']);
      }
    });
  }
  selectDepartment(department) {
    console.log(department);
    const depID = department; // Assuming 'department' represents the department ID
    // console.log(depID);
    // Navigate to the department details route, passing the department ID as a parameter
    this.router.navigate(['/companyAdmin/departments', depID]);
  }
  static #_ = this.ɵfac = function DepartmentsComponent_Factory(t) {
    return new (t || DepartmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DepartmentsComponent,
    selectors: [["app-departments"]],
    decls: 15,
    vars: 2,
    consts: [[1, "w-full", "h-full", "bg-gray-900"], [1, "bg-gray-900", "grid", "md:grid-cols-3", "p-3", "sm:grid-cols-2", "grid-cols-1", "gap-5"], [1, "bg-gray-700", "text-white", "min-h-72", "rounded-md", "overflow-hidden", "relative", "transition", "duration-300", "transform", "hover:scale-105", "cursor-pointer", 3, "click"], [1, "p-4"], [1, "text-lg", "font-semibold", "text-gray-200"], [1, "text-3xl", "font-bold", "text-gray-200"], [1, "ml-2"], [1, "absolute", "inset-0", "bg-gradient-to-b", "from-transparent", "to-black", "opacity-0", "hover:opacity-70", "transition", "duration-300"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "text-white", "opacity-0", "hover:opacity-100", "transition", "duration-300"], [1, "text-2xl", "font-bold"], ["class", "bg-gray-700 text-white min-h-72 rounded-md overflow-hidden relative transition duration-300 transform hover:scale-105 cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], ["class", "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50", 4, "ngIf"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "flex-col", "text-white", "opacity-0", "hover:opacity-100", "transition", "duration-300"], [1, "text-2xl", "font-kanit"], [1, "fixed", "inset-0", "flex", "items-center", "justify-center", "bg-black", "bg-opacity-50"], [1, "bg-white", "p-8", "rounded-md"], [1, "text-2xl", "font-semibold", "mb-4"], [1, "neon-form", 3, "formGroup"], ["for", "departmentName", 1, "block", "text-gray-700", "font-semibold", "mb-2"], ["type", "text", "id", "departmentName", "formControlName", "departmentName", "placeholder", "Enter department name", 1, "border", "rounded-lg", "border-gray-300", "p-2", "w-full", "mb-4", "focus:outline-none", "focus:border-purple-500"], ["for", "departmentDescription", 1, "block", "text-gray-700", "font-semibold", "mb-2"], ["id", "departmentDescription", "formControlName", "description", "rows", "5", "placeholder", "Describe the department", 1, "border", "rounded-lg", "border-gray-300", "p-2", "w-full", "mb-4", "focus:outline-none", "focus:border-purple-500"], ["for", "budgetAllocation", 1, "block", "text-gray-700", "font-semibold", "mb-2"], ["type", "number", "id", "budgetAllocation", "formControlName", "budgetAllocation", "placeholder", "Enter budget allocation", 1, "border", "rounded-lg", "border-gray-300", "p-2", "w-full", "mb-4", "focus:outline-none", "focus:border-purple-500"], ["type", "submit", 1, "bg-purple-500", "text-white", "px-4", "py-2", "rounded-md", 3, "disabled", "click"], ["type", "button", 1, "ml-2", "text-gray-600", 3, "click"]],
    template: function DepartmentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DepartmentsComponent_Template_div_click_2_listener() {
          return ctx.showAddDepartmentForm = true;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "h2", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Add Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Add Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, DepartmentsComponent_div_13_Template, 11, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DepartmentsComponent_div_14_Template, 18, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.departments);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showAddDepartmentForm);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: ["\n\n\n.fixed[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n  \n  .inset-0[_ngcontent-%COMP%] {\n    inset: 0;\n  }\n  \n  .bg-black.bg-opacity-50[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n  \n  .rounded-md[_ngcontent-%COMP%] {\n    border-radius: 0.625rem;\n  }\n  \n  .shadow-md[_ngcontent-%COMP%] {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  }\n  \n  .btn[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-weight: 400;\n    line-height: 1.25;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n            user-select: none;\n    border: 1px solid transparent;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n  }\n  \n  .btn-secondary[_ngcontent-%COMP%] {\n    color: #333;\n    background-color: #fff;\n    border-color: #ccc;\n  }\n  \n  .btn-primary[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #00bfff;\n    border-color: #00bfff;\n  }\n  \n  .btn-disabled[_ngcontent-%COMP%] {\n    pointer-events: none;\n    opacity: 0.5;\n  }\n  \n  .float-right[_ngcontent-%COMP%] {\n    float: right;\n  }\n  .confirmation-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5); \n\n    z-index: 999; \n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGFydG1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDOztBQUV0QztJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxpRkFBaUY7RUFDbkY7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix5QkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHVHQUF1RztFQUN6Rzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQyxFQUFFLDZCQUE2QjtJQUNuRSxZQUFZLEVBQUUscUJBQXFCO0FBQ3ZDIiwiZmlsZSI6ImRlcGFydG1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuLi4gZXhpc3RpbmcgbmVvbi1mb3JtIHN0eWxlcyAuLi4gKi9cblxuLmZpeGVkIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAuaW5zZXQtMCB7XG4gICAgaW5zZXQ6IDA7XG4gIH1cbiAgXG4gIC5iZy1ibGFjay5iZy1vcGFjaXR5LTUwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIH1cbiAgXG4gIC5yb3VuZGVkLW1kIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbiAgfVxuICBcbiAgLnNoYWRvdy1tZCB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICB9XG4gIFxuICAuYnRuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICAuYnRuLXNlY29uZGFyeSB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmZmZjtcbiAgICBib3JkZXItY29sb3I6ICMwMGJmZmY7XG4gIH1cbiAgXG4gIC5idG4tZGlzYWJsZWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICBcbiAgLmZsb2F0LXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgLmNvbmZpcm1hdGlvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogc2VtaS10cmFuc3BhcmVudCBvdmVybGF5ICovXG4gICAgei1pbmRleDogOTk5OyAvKiBhZGp1c3QgYXMgbmVlZGVkICovXG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wYW55L2NvbXBvbmVudHMvZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQ0FBc0M7O0FBRXRDO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGlGQUFpRjtFQUNuRjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHlCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsdUdBQXVHO0VBQ3pHOztFQUVBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DLEVBQUUsNkJBQTZCO0lBQ25FLFlBQVksRUFBRSxxQkFBcUI7QUFDdkM7O0FBR0EsNDhGQUE0OEYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuLi4gZXhpc3RpbmcgbmVvbi1mb3JtIHN0eWxlcyAuLi4gKi9cblxuLmZpeGVkIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAuaW5zZXQtMCB7XG4gICAgaW5zZXQ6IDA7XG4gIH1cbiAgXG4gIC5iZy1ibGFjay5iZy1vcGFjaXR5LTUwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIH1cbiAgXG4gIC5yb3VuZGVkLW1kIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbiAgfVxuICBcbiAgLnNoYWRvdy1tZCB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICB9XG4gIFxuICAuYnRuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICAuYnRuLXNlY29uZGFyeSB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmZmZjtcbiAgICBib3JkZXItY29sb3I6ICMwMGJmZmY7XG4gIH1cbiAgXG4gIC5idG4tZGlzYWJsZWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICBcbiAgLmZsb2F0LXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgLmNvbmZpcm1hdGlvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogc2VtaS10cmFuc3BhcmVudCBvdmVybGF5ICovXG4gICAgei1pbmRleDogOTk5OyAvKiBhZGp1c3QgYXMgbmVlZGVkICovXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3296:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/company/components/employee/edit-employee-data/edit-employee-data.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditEmployeeDataComponent: () => (/* binding */ EditEmployeeDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api.service */ 4471);






class EditEmployeeDataComponent {
  constructor(route, api, router, formBuilder) {
    this.route = route;
    this.api = api;
    this.router = router;
    this.formBuilder = formBuilder;
    this.cancelClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.saveEditClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.employeeData = {};
    this.selectedEmployee = '';
    this.isFormVisible = true;
    this.editingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      contactEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]),
      employeeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]),
      contactNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(10)]),
      salary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]),
      hireDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]),
      department: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]),
      role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]),
      gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)])
    });
  }
  ngOnInit() {
    const employeeId = this.route.snapshot.params['id'];
    this.selectedEmployee = employeeId;
    this.api.getEmployeeData(this.selectedEmployee).subscribe({
      next: res => {
        if (res.success) {
          this.employeeData = res.data;
          console.log(this.employeeData);
          this.loadForm();
        }
      },
      error: err => {
        console.log(err);
        // Handle the error, e.g., show an error message to the user
      }
    });
  }

  loadForm() {
    this.editingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      contactEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.employeeData?.contactEmail, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]),
      employeeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.employeeData?.employeeName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]),
      contactNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.employeeData?.contactNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(10)]),
      salary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.employeeData?.salary, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]),
      hireDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.employeeData?.hireDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]),
      department: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.employeeData?.department, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]),
      role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.employeeData?.role, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]),
      gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(this.employeeData?.gender, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)])
    });
  }
  //better version
  onSaveClick() {
    this.editedFormData = this.editingForm.value;
    console.log(this.editedFormData);
    this.api.updateEmployee(this.selectedEmployee, this.editedFormData).subscribe({
      next: res => {
        console.log(res);
        if (res.success) {
          this.saveEditClicked.emit();
        }
      },
      error: err => {
        console.log(err);
      }
    });
  }
  onCancel() {
    this.cancelClicked.emit();
  }
  static #_ = this.ɵfac = function EditEmployeeDataComponent_Factory(t) {
    return new (t || EditEmployeeDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: EditEmployeeDataComponent,
    selectors: [["app-edit-employee-data"]],
    outputs: {
      cancelClicked: "cancelClicked",
      saveEditClicked: "saveEditClicked"
    },
    decls: 69,
    vars: 1,
    consts: [[1, "fixed", "inset-0", "bg-black", "bg-opacity-50", "z-50"], [1, "max-w-xl", "mx-auto"], [1, "fixed", "top-1/2", "left-1/2", "transform", "-translate-x-1/2", "-translate-y-1/2", "w-full", "max-w-sm", "m-auto", "bg-white", "rounded", "shadow-md", "px-6", "py-8", "flex", "flex-col", "gap-6", "z-50"], [1, "text-2xl", "font-semibold", "mb-4", "text-center", "text-indigo-600"], [1, "space-y-6", 3, "formGroup"], [1, "border", "border-gray-300", "rounded", "p-4", "transition", "duration-300", "ease-in-out", "transform", "hover:shadow-md", "hover:border-indigo-500"], [1, "text-lg", "font-semibold", "mb-2", "text-gray-800"], [1, "grid", "grid-cols-2", "gap-4"], [1, "flex", "flex-col"], ["for", "employeeName", 1, "mb-1", "text-gray-600"], ["type", "text", "id", "employeeName", "formControlName", "employeeName", "placeholder", "Enter First Name", 1, "border", "rounded-md", "px-3", "py-2", "focus:outline-blue-500", "focus:ring-blue-500", "focus:ring-opacity-50"], ["for", "gender", 1, "mb-1", "text-gray-600"], ["id", "gender", "formControlName", "gender", 1, "custom-select"], ["value", "", "disabled", "", "selected", "", 1, ""], ["value", "male"], ["value", "female"], ["for", "contactNumber", 1, "mb-1", "text-gray-600"], ["type", "text", "id", "contactNumber", "formControlName", "contactNumber", "placeholder", "Enter Phone Number", 1, "border", "rounded-md", "px-3", "py-2", "focus:outline-blue-500", "focus:ring-blue-500", "focus:ring-opacity-50"], ["for", "email", 1, "mb-1", "text-gray-600"], ["type", "text", "id", "email", "formControlName", "contactEmail", "placeholder", "Enter email address", 1, "border", "rounded-md", "px-3", "py-2", "focus:outline-blue-500", "focus:ring-blue-500", "focus:ring-opacity-50"], ["for", "role", 1, "mb-1", "text-gray-600"], ["id", "role", "formControlName", "role", 1, "custom-select"], ["value", "", "disabled", "", "selected", ""], ["value", "departmentHead"], ["value", "employee"], ["for", "department", 1, "mb-1", "text-gray-600"], ["id", "department", "formControlName", "department", 1, "custom-select"], ["value", "Sales"], ["value", "Promotion"], ["for", "salary", 1, "mb-1", "text-gray-600"], ["type", "text", "id", "salary", "formControlName", "salary", "placeholder", "Enter Salary", 1, "border", "rounded-md", "px-3", "py-2", "focus:outline-blue-500", "focus:ring-blue-500", "focus:ring-opacity-50"], ["for", "hireDate", 1, "mb-1", "text-gray-600"], ["type", "date", "id", "hireDate", "formControlName", "hireDate", 1, "border", "rounded-md", "px-3", "py-2", "focus:outline-blue-500", "focus:ring-blue-500", "focus:ring-opacity-50"], [1, "flex", "justify-between"], ["type", "submit", 1, "bg-indigo-500", "hover:bg-indigo-600", "text-white", "px-4", "py-2", "rounded-md", "transition", "duration-300", "ease-in-out", 3, "click"], ["type", "button", 1, "text-gray-600", "hover:text-gray-700", "px-4", "py-2", "rounded-md", "transition", "duration-300", "ease-in-out", 3, "click"]],
    template: function EditEmployeeDataComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " EDIT EMPLOYEE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4)(6, "fieldset", 5)(7, "legend", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " personal details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Employee Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8)(15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Gender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "select", 12)(18, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Select Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 8)(25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Phone Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 8)(29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "fieldset", 5)(33, "legend", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Employment Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 7)(36, "div", 8)(37, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Employee Role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "select", 21)(40, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Select Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Department head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 8)(47, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Department:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "select", 26)(50, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Select department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Promotion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 8)(57, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Salary:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 8)(61, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Hiring Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 33)(65, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditEmployeeDataComponent_Template_button_click_65_listener() {
          return ctx.onSaveClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Save Changes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditEmployeeDataComponent_Template_button_click_67_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editingForm);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWVtcGxveWVlLWRhdGEuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wYW55L2NvbXBvbmVudHMvZW1wbG95ZWUvZWRpdC1lbXBsb3llZS1kYXRhL2VkaXQtZW1wbG95ZWUtZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnTEFBZ0wiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4591:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/company/components/employee/employeeform/employeeform.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeformComponent: () => (/* binding */ EmployeeformComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api.service */ 4471);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/loading.service */ 2548);
/* harmony import */ var _shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/confirmation-dialog/confirmation-dialog.component */ 5407);
/* harmony import */ var _shared_components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/multiselect/multiselect.component */ 5572);







class EmployeeformComponent {
  constructor(formBuilder, api, loading) {
    this.formBuilder = formBuilder;
    this.api = api;
    this.loading = loading;
    this.result = false;
    this.message = '';
    this.note = '';
    this.apiEnd = 'departmentNames'; //for child
    this.selectedFile = [];
  }
  ngOnInit() {
    this.reactiveForm = this.formBuilder.group({
      employeeName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
      dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      contactEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      contactNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^\d{10}$/)]],
      hireDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      department: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
      role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
      salary: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
      identityProof: [''] // Add this line to define the control for identityProof
    });
  }

  onSubmit() {
    if (this.reactiveForm.valid) {
      const formData = new FormData();
      const value = this.reactiveForm.value;
      formData.append('employeeName', value.employeeName);
      formData.append('dateOfBirth', value.dateOfBirth);
      formData.append('gender', value.gender);
      formData.append('salary', value.salary);
      formData.append('contactEmail', value.contactEmail);
      formData.append('contactNumber', value.contactNumber);
      formData.append('hireDate', value.hireDate);
      formData.append('department', value.department);
      formData.append('role', value.role);
      formData.append('identityProof', this.selectedFile[0]); // Use selectedFile
      this.loading.show();
      this.api.addingEmployee(formData).subscribe({
        next: res => {
          this.loading.hide();
          this.result = true;
          this.message = res.message;
          this.note = res.note;
          // this.reactiveForm.reset();
          this.selectedFile = []; // Reset selectedFile array
          this.reactiveForm.reset();
        },
        error: err => {
          this.loading.hide();
          console.log(err);
          this.result = true;
          this.message = err.error.message;
        }
      });
    }
  }
  handleDepartmentSelection(event) {
    console.log(event);
    this.reactiveForm.patchValue({
      department: event[0]
    });
  }
  onFileSelected(event) {
    const files = event.target.files;
    if (files.length > 0) {
      this.selectedFile = [files[0]]; // Update the selectedFile array
    } else {
      alert('YOU CAN CHOOSE ONLY ONE FILE');
    }
  }
  onAdding() {
    this.result = false;
  }
  static #_ = this.ɵfac = function EmployeeformComponent_Factory(t) {
    return new (t || EmployeeformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: EmployeeformComponent,
    selectors: [["app-employeeform"]],
    decls: 75,
    vars: 7,
    consts: [[1, "bg-gray-900", "flex", "flex-wrap", "justify-center", "max-w-full", "m-0", "border", "border-yellow-800"], [1, "font-kanit", "font-semibold", "text-2xl", "pl-8", "pt-6", "text-white"], [1, "m-3", "md:ml-12", "max-w-full", "px-3", "md:mt-7", "pb-9", "flex", "justify-center", "items-center", "lg:flex-row", "flex-col", "lg:gap-20", "self-center", "flex-wrap", 3, "formGroup", "ngSubmit"], [1, "font-serif", "text-sm", "gap-5", "w-full", "flex", "flex-col", "max-w-full", "flex-1"], [1, "flex", "flex-col", "border-black"], ["for", "employeeName", 1, "text-white"], ["type", "text", "id", "employeeName", "formControlName", "employeeName", "placeholder", "Enter First Name", 1, "border", "rounded-lg", "border-th", "mt-2", "md:md:min-w-[300px]", "md:max-w-[240px]", "md:min-h-12", "px-3", "py-2", "text-gray-900", "focus:outline-none", "focus:border-[#45aaf2]"], [1, "flex", "flex-col", "border-black", "relative"], ["for", "gender", 1, "text-white"], ["id", "gender", "formControlName", "gender", 1, "border", "rounded-lg", "border-th", "mt-2", "md:md:min-w-[300px]", "md:max-w-[240px]", "md:min-h-12", "px-3", "py-2", "text-gray-900", "focus:outline-none", "focus:border-[#45aaf2]", "appearance-none"], ["value", "", "disabled", "", "selected", "", 1, "text-gray-500"], ["value", "male"], ["value", "female"], [1, "absolute", "inset-y-0", "right-0", "flex", "items-center", "pr-3", "pointer-events-none", "transition-transform", "transform", "hover:rotate-180"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "h-5", "w-5", "text-gray-900"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["for", "contactNumber", 1, "text-white"], ["type", "text", "id", "contactNumber", "formControlName", "contactNumber", "placeholder", "Enter Phone Number", 1, "border", "rounded-lg", "border-th", "mt-2", "w-full", "flex-1", "md:min-w-[300px]", "md:max-w-[240px]", "md:min-h-12", "px-3", "py-2", "text-gray-900", "focus:outline-none", "focus:border-[#45aaf2]"], ["for", "salary", 1, "text-white"], ["type", "number", "id", "Salary", "formControlName", "salary", "placeholder", "Enter Salary", 1, "border", "border-th", "mt-2", "rounded-lg", "md:md:min-w-[300px]", "md:max-w-[240px]", "md:min-h-12", "px-3", "py-2", "text-gray-900", "focus:outline-none", "focus:border-[#45aaf2]"], [1, "font-serif", "text-sm", "gap-5", "flex", "flex-col", "mt-2", "sm:mt-0", "max-w-full", "w-full", "flex-1"], ["for", "email", 1, "text-white"], ["type", "text", "id", "email", "formControlName", "contactEmail", "placeholder", "Enter email address", 1, "border", "rounded-lg", "border-th", "mt-2", "md:min-w-[300px]", "md:max-w-[240px]", "md:min-h-12", "px-3", "py-2", "text-gray-900", "focus:outline-none", "focus:border-[#45aaf2]"], ["for", "role", 1, "text-white"], ["id", "role", "formControlName", "role", 1, "border", "rounded-lg", "border-th", "mt-2", "md:min-w-[300px]", "md:max-w-[240px]", "md:min-h-12", "px-3", "py-2", "text-gray-900", "focus:outline-none", "focus:border-[#45aaf2]", "appearance-none"], ["value", "departmentHead"], ["value", "employee"], ["value", "intern"], ["for", "dateOfBirth", 1, "text-white"], ["type", "date", "id", "dateOfBirth", "formControlName", "dateOfBirth", 1, "border", "rounded-lg", "border-th", "mt-2", "md:min-w-[300px]", "md:max-w-[240px]", "md:min-h-12", "px-3", "py-2", "text-gray-900", "focus:outline-none", "focus:border-[#45aaf2]"], [1, "font-serif", "text-sm", "gap-5", "flex", "flex-col", "max-w-full", "flex-1"], [1, "flex", "flex-col", "border-black", "mt-3", "sm:mt-0"], ["for", "department", 1, "text-white"], [1, "text-gray-700", "mt-2", "bg-white"], [3, "singleSelection", "apiUrl", "selectedOption"], ["for", "hireDate", 1, "text-white"], ["type", "date", "id", "hireDate", "formControlName", "hireDate", 1, "border", "rounded-lg", "border-th", "md:min-w-[300px]", "md:max-w-[240px]", "md:min-h-12", "px-3", "py-2", "text-gray-900", "focus:outline-none", "focus:border-[#45aaf2]"], ["for", "identityProof", 1, "text-white"], ["type", "file", "id", "identityProof", 1, "border", "rounded-lg", "border-th", "mt-2", "md:min-w-[300px]", "md:max-w-[240px]", "md:min-h-12", "px-3", "py-2", "text-gray-200", "focus:outline-none", "focus:border-[#45aaf2]", 3, "change"], ["type", "submit", 1, "bg-[#45aaf2]", "text-white", "font-semibold", "px-6", "py-2", "rounded-lg", "mt-4", 3, "disabled"], [3, "isVisible", "confirmationMessage", "bodyText", "cancel", "confirm"]],
    template: function EmployeeformComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "ADD EMPLOYEE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function EmployeeformComponent_Template_form_ngSubmit_4_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "EMPLOYEE NAME :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7)(11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "GENDER :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "select", 9)(14, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Select Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 4)(24, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Phone Number :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 4)(28, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Salary :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 20)(32, "div", 4)(33, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "EMAIL :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 7)(37, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "EMPLOYEE ROLE :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "select", 24)(40, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Select Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Department head");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Intern");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 7)(52, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "DATE OF BIRTH :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 30)(59, "div", 31)(60, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "DEPARTMENT :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 33)(63, "app-multiselect", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedOption", function EmployeeformComponent_Template_app_multiselect_selectedOption_63_listener($event) {
          return ctx.handleDepartmentSelection($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 4)(65, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "HIRING DATE :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 4)(69, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "IDENTITY PROOF :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function EmployeeformComponent_Template_input_change_71_listener($event) {
          return ctx.onFileSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "app-confirmation-dialog", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cancel", function EmployeeformComponent_Template_app_confirmation_dialog_cancel_74_listener() {
          return ctx.onAdding();
        })("confirm", function EmployeeformComponent_Template_app_confirmation_dialog_confirm_74_listener() {
          return ctx.onAdding();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.reactiveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("singleSelection", true)("apiUrl", ctx.apiEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.reactiveForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isVisible", ctx.result)("confirmationMessage", ctx.message)("bodyText", ctx.note);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, _shared_components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_3__.MultiselectComponent],
    styles: [".form-container[_ngcontent-%COMP%]{\n    box-shadow: 0px 0px 3px black;\n}\n\n\n\n\n\n\n\n.custom-dropdown[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n  }\n  \n  .custom-dropdown[_ngcontent-%COMP%]::after {\n    content: '\\25BC'; \n\n    position: absolute;\n    top: 50%;\n    right: 10px;\n    transform: translateY(-50%);\n    pointer-events: none;\n  }\n  \n  .custom-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    padding-right: 30px; \n\n    cursor: pointer;\n    font-size: 16px; \n\n  }\n  \n  \n\n  .custom-dropdown[_ngcontent-%COMP%]:hover {\n    background-color: #f0f0f0;\n  }\n  \n  \n\n  .custom-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:checked {\n    background-color: #4caf50; \n\n    color: #fff; \n\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBOzs7R0FHRzs7QUFFSDtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxnQkFBZ0IsRUFBRSxxQ0FBcUM7SUFDdkQsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLG1CQUFtQixFQUFFLHdCQUF3QjtJQUM3QyxlQUFlO0lBQ2YsZUFBZSxFQUFFLG1DQUFtQztFQUN0RDs7RUFFQSw4QkFBOEI7RUFDOUI7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUEsOEJBQThCO0VBQzlCO0lBQ0UseUJBQXlCLEVBQUUsdURBQXVEO0lBQ2xGLFdBQVcsRUFBRSxpREFBaUQ7RUFDaEUiLCJmaWxlIjoiZW1wbG95ZWVmb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJ7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggYmxhY2s7XG59XG5cbi8qIC5maWVsZC1jb250YWluZXJ7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBjb2xvcjogcmVkO1xufSAqL1xuXG4uY3VzdG9tLWRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIFxuICAuY3VzdG9tLWRyb3Bkb3duOjphZnRlciB7XG4gICAgY29udGVudDogJ1xcMjVCQyc7IC8qIFVuaWNvZGUgY2hhcmFjdGVyIGZvciBkb3duIGFycm93ICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgLmN1c3RvbS1kcm9wZG93biBzZWxlY3Qge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4OyAvKiBTcGFjZSBmb3IgdGhlIGFycm93ICovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDsgLyogQWRqdXN0IHRoZSBmb250IHNpemUgYXMgbmVlZGVkICovXG4gIH1cbiAgXG4gIC8qIEFkZCBhIHN1YnRsZSBob3ZlciBlZmZlY3QgKi9cbiAgLmN1c3RvbS1kcm9wZG93bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgfVxuICBcbiAgLyogU3R5bGUgdGhlIHNlbGVjdGVkIG9wdGlvbiAqL1xuICAuY3VzdG9tLWRyb3Bkb3duIHNlbGVjdCBvcHRpb246Y2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDsgLyogQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBzZWxlY3RlZCBvcHRpb24gKi9cbiAgICBjb2xvcjogI2ZmZjsgLyogQ2hhbmdlIHRoZSB0ZXh0IGNvbG9yIG9mIHRoZSBzZWxlY3RlZCBvcHRpb24gKi9cbiAgfVxuICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wYW55L2NvbXBvbmVudHMvZW1wbG95ZWUvZW1wbG95ZWVmb3JtL2VtcGxveWVlZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBOzs7R0FHRzs7QUFFSDtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxnQkFBZ0IsRUFBRSxxQ0FBcUM7SUFDdkQsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLG1CQUFtQixFQUFFLHdCQUF3QjtJQUM3QyxlQUFlO0lBQ2YsZUFBZSxFQUFFLG1DQUFtQztFQUN0RDs7RUFFQSw4QkFBOEI7RUFDOUI7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUEsOEJBQThCO0VBQzlCO0lBQ0UseUJBQXlCLEVBQUUsdURBQXVEO0lBQ2xGLFdBQVcsRUFBRSxpREFBaUQ7RUFDaEU7O0FBRUYsNGtFQUE0a0UiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJ7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggYmxhY2s7XG59XG5cbi8qIC5maWVsZC1jb250YWluZXJ7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBjb2xvcjogcmVkO1xufSAqL1xuXG4uY3VzdG9tLWRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIFxuICAuY3VzdG9tLWRyb3Bkb3duOjphZnRlciB7XG4gICAgY29udGVudDogJ1xcMjVCQyc7IC8qIFVuaWNvZGUgY2hhcmFjdGVyIGZvciBkb3duIGFycm93ICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgLmN1c3RvbS1kcm9wZG93biBzZWxlY3Qge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4OyAvKiBTcGFjZSBmb3IgdGhlIGFycm93ICovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDsgLyogQWRqdXN0IHRoZSBmb250IHNpemUgYXMgbmVlZGVkICovXG4gIH1cbiAgXG4gIC8qIEFkZCBhIHN1YnRsZSBob3ZlciBlZmZlY3QgKi9cbiAgLmN1c3RvbS1kcm9wZG93bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgfVxuICBcbiAgLyogU3R5bGUgdGhlIHNlbGVjdGVkIG9wdGlvbiAqL1xuICAuY3VzdG9tLWRyb3Bkb3duIHNlbGVjdCBvcHRpb246Y2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDsgLyogQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBzZWxlY3RlZCBvcHRpb24gKi9cbiAgICBjb2xvcjogI2ZmZjsgLyogQ2hhbmdlIHRoZSB0ZXh0IGNvbG9yIG9mIHRoZSBzZWxlY3RlZCBvcHRpb24gKi9cbiAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8939:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/company/components/employee/employeelist/employeelist.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeelistComponent: () => (/* binding */ EmployeelistComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_modules_company_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/company/services/api.service */ 4471);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/loading.service */ 2548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_components_table_list_table_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/table-list/table-list.component */ 2755);
/* harmony import */ var _employeeform_employeeform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employeeform/employeeform.component */ 4591);








function EmployeelistComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeelistComponent_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.addClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " ADD \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " EMPLOYEE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function EmployeelistComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-employeeform");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function EmployeelistComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " *At the moment, there are no employees found. Please add an employee to any Department see them here.\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class EmployeelistComponent {
  constructor(http, router, route, api, Loading) {
    this.http = http;
    this.router = router;
    this.route = route;
    this.api = api;
    this.Loading = Loading;
    this.deleteConfirm = false;
    this.isEditFormVisible = false;
    this.confirmationMessage = '';
    this.bodyText = '';
    this.employeeToDelete = '';
    this.addClicked = false;
  }
  ngOnInit() {
    this.Loading.show();
    this.api.getEmployees().subscribe({
      next: res => {
        console.log(res);
        this.employees = res;
        this.Loading.hide();
      }
    });
  }
  onDeleteButtonClick(employee) {
    this.deleteConfirm = true;
    this.confirmationMessage = 'Confirm Deletion';
    this.bodyText = 'Are you sure you want to delete?';
    this.employeeToDelete = employee;
    console.log(this.employeeToDelete);
  }
  onCancelConfirmationDelete() {
    this.deleteConfirm = false;
    this.employeeToDelete = '';
  }
  onDeleteConfirmation() {
    this.deleteEmployee(this.employeeToDelete);
    // this.isEditFormVisible=true
  }

  deleteEmployee(employeeID) {
    this.api.deletingEmployee(employeeID).subscribe({
      next: res => {
        if (res.success) {
          console.log(res);
          this.deleteConfirm = false;
          this.employeeToDelete = '';
          // Remove the deleted employee from the local array
          this.employees = this.employees.filter(employee => employee.employeeID !== employeeID);
        }
      },
      error: err => {
        console.error('Error deleting employee:', err);
        // Handle the error, e.g., show a notification or log it
      }
    });
  }

  editEmployee(employeeID) {
    this.addQuerry(employeeID);
    this.isEditFormVisible = true;
  }
  addQuerry(empId) {
    const queryparam = {
      selected: empId
    };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryparam
    });
  }
  onEditCancelClicked() {
    this.isEditFormVisible = false;
    //   this.router.navigate([], {
    //     relativeTo: this.route, // Import ActivatedRoute and inject it in the constructor
    //     queryParams: { selected: null }, // Specify the query parameter to be removed
    //     queryParamsHandling: 'merge', // Keep existing query parameters
    //   });    
  }

  onEditSaveclicked() {
    this.isEditFormVisible = false;
  }
  addClick() {
    this.addClicked = true;
  }
  onRowClick(id) {
    this.router.navigate(['.', id], {
      relativeTo: this.route
    });
  }
  static #_ = this.ɵfac = function EmployeelistComponent_Factory(t) {
    return new (t || EmployeelistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_modules_company_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: EmployeelistComponent,
    selectors: [["app-employeelist"]],
    decls: 9,
    vars: 5,
    consts: [[1, "container", "bg-gray-900", "min-h-full", "flex", "flex-col", "gap-3", "md:gap-6", "max-h-full", "border", "border-yellow-800", "overflow-scroll", 2, "overflow-x", "hidden"], ["class", "flex flex-row-reverse", 4, "ngIf"], ["class", "p-10", 4, "ngIf"], [1, "text-white", "font-mono", "pl-3"], [3, "keyID", "tableData", "clickData"], ["class", "text-red-500 p-4 text-center md:text-xl", 4, "ngIf"], [1, "flex", "flex-row-reverse"], [1, "add-button", "self-end", "sm:mr-14", "sm:mt-3", "flex", "flex-row", "p-2", "bg-gradient-to-r", "from-yellow-500", "to-yellow-700", "text-white", "rounded-md", "hover:bg-gradient-to-r", "hover:from-yellow-700", "hover:to-yellow-900", "transition", "duration-300", 3, "click"], [1, "hidden", "md:block"], [1, "p-10"], [1, "text-red-500", "p-4", "text-center", "md:text-xl"]],
    template: function EmployeelistComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EmployeelistComponent_div_1_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EmployeelistComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div")(4, "div")(5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Employees List :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "app-table-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("clickData", function EmployeelistComponent_Template_app_table_list_clickData_7_listener($event) {
          return ctx.onRowClick($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, EmployeelistComponent_div_8_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.addClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.addClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("keyID", "userID")("tableData", ctx.employees);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.employees && ctx.employees.length === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_table_list_table_list_component__WEBPACK_IMPORTED_MODULE_2__.TableListComponent, _employeeform_employeeform_component__WEBPACK_IMPORTED_MODULE_3__.EmployeeformComponent],
    styles: [".container[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0 10px;\n    margin: 0 auto;\n}\n\n.add-button[_ngcontent-%COMP%] {\n    background: linear-gradient(to right, #4e54c8, #8f94fb);\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: background 0.3s ease;\n}\n\n.add-button[_ngcontent-%COMP%]:hover {\n    background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);\n}\n\n\n\n@media (max-width: 768px) {\n    .add-button[_ngcontent-%COMP%] {\n        \n\n    }\n}\n\n\n\n@keyframes _ngcontent-%COMP%_tableEntrance {\n    from {\n        opacity: 0;\n        transform: translateY(-20px);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n.custom-table-animation[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_tableEntrance 0.5s ease-out;\n}\n\n\n\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n    from {\n        opacity: 0;\n        transform: translateY(-10px);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n.fade-in[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n\n.confirmation-container[_ngcontent-%COMP%] {\n    \n\n    position: fixed; \n\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 100; \n\n    background-color: #fff; \n\n    border: 1px solid #ddd; \n\n    border-radius: 8px; \n\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); \n\n  }\n  \n  .confirmation-dialog[_ngcontent-%COMP%] {\n    padding: 20px; \n\n    animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in-out forwards; \n\n  }\n  \n  @keyframes _ngcontent-%COMP%_fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n  \n  .confirm-button[_ngcontent-%COMP%], .cancel-button[_ngcontent-%COMP%] {\n    cursor: pointer; \n\n    transition: background-color 0.2s ease-in-out;\n  }\n  \n  .confirm-button[_ngcontent-%COMP%] {\n    background-color: #e74c3c; \n\n  }\n  \n  .cancel-button[_ngcontent-%COMP%] {\n    background-color: #f1f1f1; \n\n  }\n  \n  .confirm-button[_ngcontent-%COMP%]:hover, .cancel-button[_ngcontent-%COMP%]:hover {\n    background-color: #ddd; \n\n  }\n  \n  .confirmation-container.show[_ngcontent-%COMP%] {\n    display: block; \n\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdURBQXVEO0lBQ3ZELFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnRUFBZ0U7QUFDcEU7O0FBRUEsb0NBQW9DO0FBQ3BDO0lBQ0k7UUFDSSxtREFBbUQ7SUFDdkQ7QUFDSjs7OztBQUlBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7OztBQUdBLDhCQUE4QjtBQUM5QjtJQUNJO1FBQ0ksVUFBVTtRQUNWLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGVBQWUsRUFBRSxtREFBbUQ7SUFDcEUsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsWUFBWSxFQUFFLDRDQUE0QztJQUMxRCxzQkFBc0IsRUFBRSwyQkFBMkI7SUFDbkQsc0JBQXNCLEVBQUUsc0JBQXNCO0lBQzlDLGtCQUFrQixFQUFFLCtCQUErQjtJQUNuRCx3Q0FBd0MsRUFBRSx3QkFBd0I7RUFDcEU7O0VBRUE7SUFDRSxhQUFhLEVBQUUsaUNBQWlDO0lBQ2hELDJDQUEyQyxFQUFFLDRCQUE0QjtFQUMzRTs7RUFFQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7RUFFQTs7SUFFRSxlQUFlLEVBQUUsMkJBQTJCO0lBQzVDLDZDQUE2QztFQUMvQzs7RUFFQTtJQUNFLHlCQUF5QixFQUFFLCtCQUErQjtFQUM1RDs7RUFFQTtJQUNFLHlCQUF5QixFQUFFLG1DQUFtQztFQUNoRTs7RUFFQTs7SUFFRSxzQkFBc0IsRUFBRSxnQ0FBZ0M7RUFDMUQ7O0VBRUE7SUFDRSxjQUFjLEVBQUUsNkNBQTZDO0VBQy9EIiwiZmlsZSI6ImVtcGxveWVlbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFkZC1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRlNTRjOCwgIzhmOTRmYik7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG59XG5cbi5hZGQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4MzNhYjQsICNmZDFkMWQsICNmY2IwNDUpO1xufVxuXG4vKiBBZGQgcmVzcG9uc2l2ZSBzdHlsZXMgYXMgbmVlZGVkICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuYWRkLWJ1dHRvbiB7XG4gICAgICAgIC8qIEFkanVzdCBzdHlsZXMgZm9yIHNtYWxsZXIgc2NyZWVucyBpZiBuZWNlc3NhcnkgKi9cbiAgICB9XG59XG5cblxuXG5Aa2V5ZnJhbWVzIHRhYmxlRW50cmFuY2Uge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG5cbi5jdXN0b20tdGFibGUtYW5pbWF0aW9uIHtcbiAgICBhbmltYXRpb246IHRhYmxlRW50cmFuY2UgMC41cyBlYXNlLW91dDtcbn1cblxuXG4vKiBBZGQgdGhpcyB0byB5b3VyIENTUyBmaWxlICovXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn1cblxuLmZhZGUtaW4ge1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5jb25maXJtYXRpb24tY29udGFpbmVyIHtcbiAgICAvKiBkaXNwbGF5OiBub25lOyBIaWRlIGJ5IGRlZmF1bHQgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFBvc2l0aW9uIHRoZSBwb3B1cCBpbiB0aGUgY2VudGVyIG9mIHRoZSBzY3JlZW4gKi9cbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgei1pbmRleDogMTAwOyAvKiBNYWtlIHN1cmUgaXQncyBvbiB0b3Agb2Ygb3RoZXIgZWxlbWVudHMgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAvKiBTZXQgYSB3aGl0ZSBiYWNrZ3JvdW5kICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgLyogQWRkIGEgdGhpbiBib3JkZXIgKi9cbiAgICBib3JkZXItcmFkaXVzOiA4cHg7IC8qIFJvdW5kIHRoZSBjb3JuZXJzIHNsaWdodGx5ICovXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgLyogQWRkIGEgc3VidGxlIHNoYWRvdyAqL1xuICB9XG4gIFxuICAuY29uZmlybWF0aW9uLWRpYWxvZyB7XG4gICAgcGFkZGluZzogMjBweDsgLyogQWRkIHNvbWUgcGFkZGluZyBmb3IgY29udGVudCAqL1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZS1pbi1vdXQgZm9yd2FyZHM7IC8qIEFkZCBhIGZhZGUtaW4gYW5pbWF0aW9uICovXG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIFxuICAuY29uZmlybS1idXR0b24sXG4gIC5jYW5jZWwtYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIE1ha2UgYnV0dG9ucyBjbGlja2FibGUgKi9cbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5jb25maXJtLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYzsgLyogUmVkIGNvbG9yIGZvciBjb25maXJtYXRpb24gKi9cbiAgfVxuICBcbiAgLmNhbmNlbC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7IC8qIE5ldXRyYWwgY29sb3IgZm9yIGNhbmNlbGxhdGlvbiAqL1xuICB9XG4gIFxuICAuY29uZmlybS1idXR0b246aG92ZXIsXG4gIC5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyAvKiBMaWdodGVyIGJhY2tncm91bmQgb24gaG92ZXIgKi9cbiAgfVxuICBcbiAgLmNvbmZpcm1hdGlvbi1jb250YWluZXIuc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7IC8qIFNob3cgdGhlIHBvcHVwIHdoZW4gdGhlIGNvbmRpdGlvbiBpcyBtZXQgKi9cbiAgfVxuICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wYW55L2NvbXBvbmVudHMvZW1wbG95ZWUvZW1wbG95ZWVsaXN0L2VtcGxveWVlbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdURBQXVEO0lBQ3ZELFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnRUFBZ0U7QUFDcEU7O0FBRUEsb0NBQW9DO0FBQ3BDO0lBQ0k7UUFDSSxtREFBbUQ7SUFDdkQ7QUFDSjs7OztBQUlBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7OztBQUdBLDhCQUE4QjtBQUM5QjtJQUNJO1FBQ0ksVUFBVTtRQUNWLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGVBQWUsRUFBRSxtREFBbUQ7SUFDcEUsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsWUFBWSxFQUFFLDRDQUE0QztJQUMxRCxzQkFBc0IsRUFBRSwyQkFBMkI7SUFDbkQsc0JBQXNCLEVBQUUsc0JBQXNCO0lBQzlDLGtCQUFrQixFQUFFLCtCQUErQjtJQUNuRCx3Q0FBd0MsRUFBRSx3QkFBd0I7RUFDcEU7O0VBRUE7SUFDRSxhQUFhLEVBQUUsaUNBQWlDO0lBQ2hELDJDQUEyQyxFQUFFLDRCQUE0QjtFQUMzRTs7RUFFQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7RUFFQTs7SUFFRSxlQUFlLEVBQUUsMkJBQTJCO0lBQzVDLDZDQUE2QztFQUMvQzs7RUFFQTtJQUNFLHlCQUF5QixFQUFFLCtCQUErQjtFQUM1RDs7RUFFQTtJQUNFLHlCQUF5QixFQUFFLG1DQUFtQztFQUNoRTs7RUFFQTs7SUFFRSxzQkFBc0IsRUFBRSxnQ0FBZ0M7RUFDMUQ7O0VBRUE7SUFDRSxjQUFjLEVBQUUsNkNBQTZDO0VBQy9EOztBQUVGLG9vSkFBb29KIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFkZC1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRlNTRjOCwgIzhmOTRmYik7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG59XG5cbi5hZGQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4MzNhYjQsICNmZDFkMWQsICNmY2IwNDUpO1xufVxuXG4vKiBBZGQgcmVzcG9uc2l2ZSBzdHlsZXMgYXMgbmVlZGVkICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuYWRkLWJ1dHRvbiB7XG4gICAgICAgIC8qIEFkanVzdCBzdHlsZXMgZm9yIHNtYWxsZXIgc2NyZWVucyBpZiBuZWNlc3NhcnkgKi9cbiAgICB9XG59XG5cblxuXG5Aa2V5ZnJhbWVzIHRhYmxlRW50cmFuY2Uge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG5cbi5jdXN0b20tdGFibGUtYW5pbWF0aW9uIHtcbiAgICBhbmltYXRpb246IHRhYmxlRW50cmFuY2UgMC41cyBlYXNlLW91dDtcbn1cblxuXG4vKiBBZGQgdGhpcyB0byB5b3VyIENTUyBmaWxlICovXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn1cblxuLmZhZGUtaW4ge1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5jb25maXJtYXRpb24tY29udGFpbmVyIHtcbiAgICAvKiBkaXNwbGF5OiBub25lOyBIaWRlIGJ5IGRlZmF1bHQgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFBvc2l0aW9uIHRoZSBwb3B1cCBpbiB0aGUgY2VudGVyIG9mIHRoZSBzY3JlZW4gKi9cbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgei1pbmRleDogMTAwOyAvKiBNYWtlIHN1cmUgaXQncyBvbiB0b3Agb2Ygb3RoZXIgZWxlbWVudHMgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAvKiBTZXQgYSB3aGl0ZSBiYWNrZ3JvdW5kICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgLyogQWRkIGEgdGhpbiBib3JkZXIgKi9cbiAgICBib3JkZXItcmFkaXVzOiA4cHg7IC8qIFJvdW5kIHRoZSBjb3JuZXJzIHNsaWdodGx5ICovXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgLyogQWRkIGEgc3VidGxlIHNoYWRvdyAqL1xuICB9XG4gIFxuICAuY29uZmlybWF0aW9uLWRpYWxvZyB7XG4gICAgcGFkZGluZzogMjBweDsgLyogQWRkIHNvbWUgcGFkZGluZyBmb3IgY29udGVudCAqL1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZS1pbi1vdXQgZm9yd2FyZHM7IC8qIEFkZCBhIGZhZGUtaW4gYW5pbWF0aW9uICovXG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIFxuICAuY29uZmlybS1idXR0b24sXG4gIC5jYW5jZWwtYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIE1ha2UgYnV0dG9ucyBjbGlja2FibGUgKi9cbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5jb25maXJtLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYzsgLyogUmVkIGNvbG9yIGZvciBjb25maXJtYXRpb24gKi9cbiAgfVxuICBcbiAgLmNhbmNlbC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7IC8qIE5ldXRyYWwgY29sb3IgZm9yIGNhbmNlbGxhdGlvbiAqL1xuICB9XG4gIFxuICAuY29uZmlybS1idXR0b246aG92ZXIsXG4gIC5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyAvKiBMaWdodGVyIGJhY2tncm91bmQgb24gaG92ZXIgKi9cbiAgfVxuICBcbiAgLmNvbmZpcm1hdGlvbi1jb250YWluZXIuc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7IC8qIFNob3cgdGhlIHBvcHVwIHdoZW4gdGhlIGNvbmRpdGlvbiBpcyBtZXQgKi9cbiAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4471:
/*!*********************************************************!*\
  !*** ./src/app/modules/company/services/api.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);




class ApiService {
  constructor(http) {
    this.http = http;
    this.userapi = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/companyAdmin`;
  }
  getEmployees() {
    return this.http.get(`${this.userapi}/employee`);
  }
  addingEmployee(employee) {
    return this.http.post(`${this.userapi}/employee`, employee).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('API Error:', error);
      throw error; // Rethrow the error after logging
    }));
  }

  deletingEmployee(employeeID) {
    return this.http.delete(`${this.userapi}/employee/${employeeID}`);
  }
  addingDepartment(department) {
    return this.http.post(`${this.userapi}/department`, department).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('API Error:', error);
      throw error; // Rethrow the error after logging
    }));
  }

  getEmployeeData(employeeID) {
    return this.http.get(`${this.userapi}/employee/${employeeID}`);
  }
  updateEmployee(employeeID, updateEmployeeData) {
    return this.http.put(`${this.userapi}/employee/${employeeID}`, updateEmployeeData);
  }
  getDepartments() {
    return this.http.get(`${this.userapi}/departments`);
  }
  getDepartmentData(depID) {
    return this.http.get(`${this.userapi}/department/${depID}`);
  }
  getLeaveRequests() {
    return this.http.get(`${this.userapi}/leaveRequests`);
  }
  updateLeaveRequest(id, status) {
    return this.http.patch(`${this.userapi}/leaveRequests/${id}`, {
      status
    });
  }
  getDepID() {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/DepartmentID`);
  }
  static #_ = this.ɵfac = function ApiService_Factory(t) {
    return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ApiService,
    factory: ApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8477:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/departmenthead/components/approve-complaints/approve-complaints.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApproveComplaintsComponent: () => (/* binding */ ApproveComplaintsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_apiUtitility_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/apiUtitility.service */ 7729);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function ApproveComplaintsComponent_ng_container_4_div_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 27);
  }
  if (rf & 2) {
    const complaint_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", complaint_r4.employeedata[0].photo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ApproveComplaintsComponent_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApproveComplaintsComponent_ng_container_4_div_2_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const complaint_r4 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.toggleExpand(complaint_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApproveComplaintsComponent_ng_container_4_div_2_img_2_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9)(4, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 12)(11, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " STATUS : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16)(20, "div", 17)(21, "div", 18)(22, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 21)(27, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Attachment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 24)(31, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApproveComplaintsComponent_ng_container_4_div_2_Template_button_click_31_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const complaint_r4 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.onInvestigate(complaint_r4._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Investigate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApproveComplaintsComponent_ng_container_4_div_2_Template_button_click_33_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const complaint_r4 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.onCaseClose(complaint_r4._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Close Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const complaint_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", complaint_r4.employeedata[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("AUTHOR : ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 16, complaint_r4 == null ? null : complaint_r4.employeedata[0] == null ? null : complaint_r4.employeedata[0].employeeName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" TITLE : ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 18, complaint_r4.title), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r3.getStatusColor(complaint_r4.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 20, complaint_r4.status), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](18, 22, complaint_r4.postDate, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("max-h-0", !complaint_r4.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !complaint_r4.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](complaint_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", complaint_r4.attachment, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", complaint_r4.status !== "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", complaint_r4.status !== "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", complaint_r4.status == "closed");
  }
}
function ApproveComplaintsComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApproveComplaintsComponent_ng_container_4_div_2_Template, 35, 25, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.complaints);
  }
}
function ApproveComplaintsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28)(1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " * No reviews or complaints found at the Moment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class ApproveComplaintsComponent {
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.api.getComplaintsList().subscribe({
      next: res => {
        this.complaints = res.data;
      },
      error: err => {
        console.log(err);
      }
    });
  }
  toggleExpand(complaint) {
    complaint.expanded = !complaint.expanded;
  }
  getStatusColor(status) {
    switch (status.toLowerCase()) {
      case 'pending':
        return {
          color: 'green'
        };
      case 'closed':
        return {
          color: 'red'
        };
      case 'inaction':
        return {
          color: 'yellow'
        };
      default:
        return {};
    }
  }
  onInvestigate(id) {
    this.api.updateComplaint(id, 'inAction').subscribe({
      next: res => {
        this.complaints.map(res => {
          if (res._id == id) {
            res.status = 'inAction';
          }
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }
  onCaseClose(id) {
    this.api.updateComplaint(id, 'closed').subscribe({
      next: res => {
        this.complaints.map(res => {
          if (res._id == id) {
            res.status = 'closed';
          }
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }
  static #_ = this.ɵfac = function ApproveComplaintsComponent_Factory(t) {
    return new (t || ApproveComplaintsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_apiUtitility_service__WEBPACK_IMPORTED_MODULE_0__.ApiutitilityService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ApproveComplaintsComponent,
    selectors: [["app-approve-complaints"]],
    decls: 7,
    vars: 2,
    consts: [[1, "w-full", "min-h-full", "p-6", "bg-slate-900", "overflow-scroll"], [1, "text-gray-300"], [4, "ngIf", "ngIfElse"], ["noDataFound", ""], [1, "columns-1", "md:columns-2", "md:gap-4", "space-y-9", "md:space-y-4"], ["class", "rounded-lg shadow-md overflow-hidden bg-gray-800 hover:shadow-lg", 4, "ngFor", "ngForOf"], [1, "rounded-lg", "shadow-md", "overflow-hidden", "bg-gray-800", "hover:shadow-lg"], [1, "flex", "items-center", "p-4", "cursor-pointer", 3, "click"], ["alt", "", "class", "w-20 h-20 object-cover rounded-full mr-4", 3, "src", 4, "ngIf"], [1, "flex", "flex-col", "text-left", "gap-0"], [1, "text-xl", "font-semibold", "text-gray-200"], [1, "text-lg", "font-medium", "text-gray-400"], [1, "flex", "flex-col", "items-center", "text-sm", "text-gray-500", "justify-around", "w-full"], [1, "mr-2"], [3, "ngStyle"], [1, ""], [1, "p-4", "overflow-hidden", "transition-max-h", "duration-300", "ease-in-out"], [3, "hidden"], [1, "bg-gray-900", "p-4", "rounded-lg"], [1, "text-lg", "font-semibold", "text-gray-300", "mb-2"], [1, "text-gray-400"], [1, "bg-gray-900", "p-4", "mt-4", "rounded-lg"], [1, "text-lg", "font-semibold", "text-gray-400", "mb-2"], ["alt", "", 1, "object-cover", "lg:max-h-[400px]", "lg:max-w-[400px]", "mb-2", 3, "src"], [1, "flex", "justify-center", "gap-9"], [1, "btn2", 3, "disabled", "click"], [1, "btn", 3, "click"], ["alt", "", 1, "w-20", "h-20", "object-cover", "rounded-full", "mr-4", 3, "src"], [1, "flex", "justify-center", "items-center", "h-full"], [1, "text-red-900", "md:text-xl"]],
    template: function ApproveComplaintsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Reviews And Complaints :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ApproveComplaintsComponent_ng_container_4_Template, 3, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ApproveComplaintsComponent_ng_template_5_Template, 3, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.complaints.length > 0)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
    styles: [".btn[_ngcontent-%COMP%] {\n    --color: #e20910;\n    --color2: rgb(236, 236, 236);\n    padding: 0.8em 1.75em;\n    background-color: transparent;\n    border-radius: 6px;\n    border: .3px solid var(--color);\n    transition: .5s;\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n    z-index: 1;\n    font-weight: 300;\n    font-size: 17px;\n    font-family: 'Roboto', 'Segoe UI', sans-serif;\n    text-transform: uppercase;\n    color: var(--color);\n   }\n   \n   .btn[_ngcontent-%COMP%]::after, .btn[_ngcontent-%COMP%]::before {\n    content: '';\n    display: block;\n    height: 100%;\n    width: 100%;\n    transform: skew(90deg) translate(-50%, -50%);\n    position: absolute;\n    inset: 50%;\n    left: 25%;\n    z-index: -1;\n    transition: .5s ease-out;\n    background-color: var(--color);\n   }\n   \n   .btn[_ngcontent-%COMP%]::before {\n    top: -50%;\n    left: -25%;\n    transform: skew(90deg) rotate(180deg) translate(-50%, -50%);\n   }\n   \n   .btn[_ngcontent-%COMP%]:hover::before {\n    transform: skew(45deg) rotate(180deg) translate(-50%, -50%);\n   }\n   \n   .btn[_ngcontent-%COMP%]:hover::after {\n    transform: skew(45deg) translate(-50%, -50%);\n   }\n   \n   .btn[_ngcontent-%COMP%]:hover {\n    color: var(--color2);\n   }\n   \n   .btn[_ngcontent-%COMP%]:active {\n    filter: brightness(.7);\n    transform: scale(.98);\n   }\n\n\n   .btn2[_ngcontent-%COMP%] {\n    --color: #a79900;\n    --color2: rgb(236, 236, 236);\n    padding: 0.8em 1.75em;\n    background-color: transparent;\n    border-radius: 6px;\n    border: .3px solid var(--color);\n    transition: .5s;\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n    z-index: 1;\n    font-weight: 300;\n    font-size: 17px;\n    font-family: 'Roboto', 'Segoe UI', sans-serif;\n    text-transform: uppercase;\n    color: var(--color);\n   }\n   \n   .btn2[_ngcontent-%COMP%]::after, .btn2[_ngcontent-%COMP%]::before {\n    content: '';\n    display: block;\n    height: 100%;\n    width: 100%;\n    transform: skew(90deg) translate(-50%, -50%);\n    position: absolute;\n    inset: 50%;\n    left: 25%;\n    z-index: -1;\n    transition: .5s ease-out;\n    background-color: var(--color);\n   }\n   \n   .btn2[_ngcontent-%COMP%]::before {\n    top: -50%;\n    left: -25%;\n    transform: skew(90deg) rotate(180deg) translate(-50%, -50%);\n   }\n   \n   .btn2[_ngcontent-%COMP%]:hover::before {\n    transform: skew(45deg) rotate(180deg) translate(-50%, -50%);\n   }\n   \n   .btn2[_ngcontent-%COMP%]:hover::after {\n    transform: skew(45deg) translate(-50%, -50%);\n   }\n   \n   .btn2[_ngcontent-%COMP%]:hover {\n    color: var(--color2);\n   }\n   \n   .btn2[_ngcontent-%COMP%]:active {\n    filter: brightness(.7);\n    transform: scale(.98);\n   }\n\n\n   .disabled[_ngcontent-%COMP%] {\n    cursor: not-allowed;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHJvdmUtY29tcGxhaW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDZDQUE2QztJQUM3Qyx5QkFBeUI7SUFDekIsbUJBQW1CO0dBQ3BCOztHQUVBO0lBQ0MsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLDhCQUE4QjtHQUMvQjs7R0FFQTtJQUNDLFNBQVM7SUFDVCxVQUFVO0lBQ1YsMkRBQTJEO0dBQzVEOztHQUVBO0lBQ0MsMkRBQTJEO0dBQzVEOztHQUVBO0lBQ0MsNENBQTRDO0dBQzdDOztHQUVBO0lBQ0Msb0JBQW9CO0dBQ3JCOztHQUVBO0lBQ0Msc0JBQXNCO0lBQ3RCLHFCQUFxQjtHQUN0Qjs7O0dBR0E7SUFDQyxnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsNkNBQTZDO0lBQzdDLHlCQUF5QjtJQUN6QixtQkFBbUI7R0FDcEI7O0dBRUE7SUFDQyxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsOEJBQThCO0dBQy9COztHQUVBO0lBQ0MsU0FBUztJQUNULFVBQVU7SUFDViwyREFBMkQ7R0FDNUQ7O0dBRUE7SUFDQywyREFBMkQ7R0FDNUQ7O0dBRUE7SUFDQyw0Q0FBNEM7R0FDN0M7O0dBRUE7SUFDQyxvQkFBb0I7R0FDckI7O0dBRUE7SUFDQyxzQkFBc0I7SUFDdEIscUJBQXFCO0dBQ3RCOzs7R0FHQTtJQUNDLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJhcHByb3ZlLWNvbXBsYWludHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xuICAgIC0tY29sb3I6ICNlMjA5MTA7XG4gICAgLS1jb2xvcjI6IHJnYigyMzYsIDIzNiwgMjM2KTtcbiAgICBwYWRkaW5nOiAwLjhlbSAxLjc1ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJvcmRlcjogLjNweCBzb2xpZCB2YXIoLS1jb2xvcik7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiAxO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gICB9XG4gICBcbiAgIC5idG46OmFmdGVyLCAuYnRuOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2Zvcm06IHNrZXcoOTBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDUwJTtcbiAgICBsZWZ0OiAyNSU7XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2Utb3V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgIH1cbiAgIFxuICAgLmJ0bjo6YmVmb3JlIHtcbiAgICB0b3A6IC01MCU7XG4gICAgbGVmdDogLTI1JTtcbiAgICB0cmFuc2Zvcm06IHNrZXcoOTBkZWcpIHJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgIH1cbiAgIFxuICAgLmJ0bjpob3Zlcjo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHNrZXcoNDVkZWcpIHJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgIH1cbiAgIFxuICAgLmJ0bjpob3Zlcjo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2tldyg0NWRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgfVxuICAgXG4gICAuYnRuOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3IyKTtcbiAgIH1cbiAgIFxuICAgLmJ0bjphY3RpdmUge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyguNyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOTgpO1xuICAgfVxuXG5cbiAgIC5idG4yIHtcbiAgICAtLWNvbG9yOiAjYTc5OTAwO1xuICAgIC0tY29sb3IyOiByZ2IoMjM2LCAyMzYsIDIzNik7XG4gICAgcGFkZGluZzogMC44ZW0gMS43NWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IC4zcHggc29saWQgdmFyKC0tY29sb3IpO1xuICAgIHRyYW5zaXRpb246IC41cztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgei1pbmRleDogMTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICAgfVxuICAgXG4gICAuYnRuMjo6YWZ0ZXIsIC5idG4yOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2Zvcm06IHNrZXcoOTBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDUwJTtcbiAgICBsZWZ0OiAyNSU7XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2Utb3V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgIH1cbiAgIFxuICAgLmJ0bjI6OmJlZm9yZSB7XG4gICAgdG9wOiAtNTAlO1xuICAgIGxlZnQ6IC0yNSU7XG4gICAgdHJhbnNmb3JtOiBza2V3KDkwZGVnKSByb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICB9XG4gICBcbiAgIC5idG4yOmhvdmVyOjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogc2tldyg0NWRlZykgcm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgfVxuICAgXG4gICAuYnRuMjpob3Zlcjo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2tldyg0NWRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgfVxuICAgXG4gICAuYnRuMjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yMik7XG4gICB9XG4gICBcbiAgIC5idG4yOmFjdGl2ZSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKC43KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC45OCk7XG4gICB9XG5cblxuICAgLmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG4gICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9kZXBhcnRtZW50aGVhZC9jb21wb25lbnRzL2FwcHJvdmUtY29tcGxhaW50cy9hcHByb3ZlLWNvbXBsYWludHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiw2Q0FBNkM7SUFDN0MseUJBQXlCO0lBQ3pCLG1CQUFtQjtHQUNwQjs7R0FFQTtJQUNDLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztJQUNYLHdCQUF3QjtJQUN4Qiw4QkFBOEI7R0FDL0I7O0dBRUE7SUFDQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLDJEQUEyRDtHQUM1RDs7R0FFQTtJQUNDLDJEQUEyRDtHQUM1RDs7R0FFQTtJQUNDLDRDQUE0QztHQUM3Qzs7R0FFQTtJQUNDLG9CQUFvQjtHQUNyQjs7R0FFQTtJQUNDLHNCQUFzQjtJQUN0QixxQkFBcUI7R0FDdEI7OztHQUdBO0lBQ0MsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDZDQUE2QztJQUM3Qyx5QkFBeUI7SUFDekIsbUJBQW1CO0dBQ3BCOztHQUVBO0lBQ0MsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLDhCQUE4QjtHQUMvQjs7R0FFQTtJQUNDLFNBQVM7SUFDVCxVQUFVO0lBQ1YsMkRBQTJEO0dBQzVEOztHQUVBO0lBQ0MsMkRBQTJEO0dBQzVEOztHQUVBO0lBQ0MsNENBQTRDO0dBQzdDOztHQUVBO0lBQ0Msb0JBQW9CO0dBQ3JCOztHQUVBO0lBQ0Msc0JBQXNCO0lBQ3RCLHFCQUFxQjtHQUN0Qjs7O0dBR0E7SUFDQyxtQkFBbUI7RUFDckI7O0FBRUYsdzNKQUF3M0oiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgICAtLWNvbG9yOiAjZTIwOTEwO1xuICAgIC0tY29sb3IyOiByZ2IoMjM2LCAyMzYsIDIzNik7XG4gICAgcGFkZGluZzogMC44ZW0gMS43NWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IC4zcHggc29saWQgdmFyKC0tY29sb3IpO1xuICAgIHRyYW5zaXRpb246IC41cztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgei1pbmRleDogMTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICAgfVxuICAgXG4gICAuYnRuOjphZnRlciwgLmJ0bjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiBza2V3KDkwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiA1MCU7XG4gICAgbGVmdDogMjUlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcik7XG4gICB9XG4gICBcbiAgIC5idG46OmJlZm9yZSB7XG4gICAgdG9wOiAtNTAlO1xuICAgIGxlZnQ6IC0yNSU7XG4gICAgdHJhbnNmb3JtOiBza2V3KDkwZGVnKSByb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICB9XG4gICBcbiAgIC5idG46aG92ZXI6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiBza2V3KDQ1ZGVnKSByb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICB9XG4gICBcbiAgIC5idG46aG92ZXI6OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHNrZXcoNDVkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgIH1cbiAgIFxuICAgLmJ0bjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yMik7XG4gICB9XG4gICBcbiAgIC5idG46YWN0aXZlIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoLjcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjk4KTtcbiAgIH1cblxuXG4gICAuYnRuMiB7XG4gICAgLS1jb2xvcjogI2E3OTkwMDtcbiAgICAtLWNvbG9yMjogcmdiKDIzNiwgMjM2LCAyMzYpO1xuICAgIHBhZGRpbmc6IDAuOGVtIDEuNzVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiAuM3B4IHNvbGlkIHZhcigtLWNvbG9yKTtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgIH1cbiAgIFxuICAgLmJ0bjI6OmFmdGVyLCAuYnRuMjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiBza2V3KDkwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiA1MCU7XG4gICAgbGVmdDogMjUlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcik7XG4gICB9XG4gICBcbiAgIC5idG4yOjpiZWZvcmUge1xuICAgIHRvcDogLTUwJTtcbiAgICBsZWZ0OiAtMjUlO1xuICAgIHRyYW5zZm9ybTogc2tldyg5MGRlZykgcm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgfVxuICAgXG4gICAuYnRuMjpob3Zlcjo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHNrZXcoNDVkZWcpIHJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgIH1cbiAgIFxuICAgLmJ0bjI6aG92ZXI6OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHNrZXcoNDVkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgIH1cbiAgIFxuICAgLmJ0bjI6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcjIpO1xuICAgfVxuICAgXG4gICAuYnRuMjphY3RpdmUge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyguNyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOTgpO1xuICAgfVxuXG5cbiAgIC5kaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6561:
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/departmenthead/components/department-statisctics/department-statisctics.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepartmentStatiscticsComponent: () => (/* binding */ DepartmentStatiscticsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_apiUtitility_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/apiUtitility.service */ 7729);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/jwt.service */ 61);
/* harmony import */ var src_app_modules_company_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/company/services/api.service */ 4471);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);






function DepartmentStatiscticsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "department Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Department ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5)(12, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "budget:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 5)(17, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Total Employees:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepartmentStatiscticsComponent_div_1_Template_div_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onPresentClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Employees present :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 5)(27, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Employees on leave:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.departmentData.departmentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.departmentData.departmentID);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.departmentData.budget);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.departmentData.totalEmployees);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.departmentData.attendancesToday);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.departmentData.leaveToday);
  }
}
class DepartmentStatiscticsComponent {
  constructor(api, route, router, jwt, apis) {
    this.api = api;
    this.route = route;
    this.router = router;
    this.jwt = jwt;
    this.apis = apis;
    this.ID = '';
    this.loaded = false;
  }
  ngOnInit() {
    const Token = this.jwt.getTokenFromLocalStorage();
    const decTok = this.jwt.decodeToken(Token);
    if (decTok.role == 'departmentHead') {
      this.apis.getDepID().subscribe({
        next: res => {
          this.ID = res.data.departmentID;
          this.getData();
        },
        error: err => {
          console.log(err);
        }
      });
    } else {
      this.ID = this.route.snapshot.params['id'];
      this.getData();
    }
    // const ID = this.route.snapshot.paramMap.get('id') 
  }

  onPresentClick() {
    // Update the query parameter 'employee' to 'present' without navigating
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        employee: 'present'
      },
      queryParamsHandling: 'merge'
    });
  }
  getData() {
    this.api.getDepartmentData(this.ID).subscribe({
      next: res => {
        this.departmentData = res.data[0];
        this.loaded = true;
        console.log(this.departmentData);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  static #_ = this.ɵfac = function DepartmentStatiscticsComponent_Factory(t) {
    return new (t || DepartmentStatiscticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_apiUtitility_service__WEBPACK_IMPORTED_MODULE_0__.ApiutitilityService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_jwt_service__WEBPACK_IMPORTED_MODULE_1__.JwtService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_modules_company_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DepartmentStatiscticsComponent,
    selectors: [["app-department-statisctics"]],
    decls: 7,
    vars: 2,
    consts: [[1, "bg-gray-900", "gap-5", "flex", "flex-col"], ["class", " max-w-full mx-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4  ", 4, "ngIf"], [1, "text-gray-300", "mx-4", "flex", "flex-col"], [1, "pl-14"], [1, "max-w-full", "mx-4", "grid", "grid-cols-1", "sm:grid-cols-3", "md:grid-cols-2", "lg:grid-cols-4", "xl:grid-cols-6", "gap-4"], [1, "bg-white", "grid", "sm:grid-cols-1", "grid-cols-2", "place-items-center"], [1, "text-center", "text-gray-900"], [1, "text-gray-800"], [1, "bg-white", "grid", "sm:grid-cols-1", "grid-cols-2", "place-items-center", 3, "click"], [1, "text-green-500"], [1, "text-red-600"]],
    template: function DepartmentStatiscticsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DepartmentStatiscticsComponent_div_1_Template, 31, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "DESCIPTION:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.departmentData == null ? null : ctx.departmentData.description);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LXN0YXRpc2N0aWNzLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9kZXBhcnRtZW50aGVhZC9jb21wb25lbnRzL2RlcGFydG1lbnQtc3RhdGlzY3RpY3MvZGVwYXJ0bWVudC1zdGF0aXNjdGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3TEFBd0wiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 589:
/*!****************************************************************************!*\
  !*** ./src/app/modules/departmenthead/components/leads/leads.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeadsComponent: () => (/* binding */ LeadsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _task_create_task_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task-create/task-create.component */ 3929);


class LeadsComponent {
  static #_ = this.ɵfac = function LeadsComponent_Factory(t) {
    return new (t || LeadsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LeadsComponent,
    selectors: [["app-leads"]],
    decls: 4,
    vars: 0,
    template: function LeadsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-task-create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_task_create_task_create_component__WEBPACK_IMPORTED_MODULE_0__.TaskCreateComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFkcy5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9kZXBhcnRtZW50aGVhZC9jb21wb25lbnRzL2xlYWRzL2xlYWRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8959:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/departmenthead/components/notifications/notifications.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsComponent: () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_modules_shared_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/shared/services/common.service */ 9653);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _shared_components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/multiselect/multiselect.component */ 5572);
/* harmony import */ var _shared_components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/notification-list/notification-list.component */ 1964);









function NotificationsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NotificationsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Title must be at least 4 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NotificationsComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "please select a date or multiple dates");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NotificationsComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NotificationsComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Description must be at least 10 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NotificationsComponent_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const targetItem_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", targetItem_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, targetItem_r9.name));
  }
}
function NotificationsComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Target Audience is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NotificationsComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Target Audience is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class NotificationsComponent {
  constructor(fb, serv) {
    this.fb = fb;
    this.serv = serv;
    this.selectedDepartments = [];
    this.api = 'departmentNames';
    this.departments = [{
      name: 'Department 1',
      value: 'department1'
    }, {
      name: 'Department 2',
      value: 'department2'
    }];
    this.target = [{
      name: 'ALL EMPLOYEES',
      value: 'ALL'
    }, {
      name: 'departmentHead',
      value: 'departmentHead'
    }];
    this.dep = [];
  }
  ngOnInit() {
    // Initialize the form group with form controls and validators
    this.eventForm = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4)]],
      range: this.fb.group({
        start: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        end: ['']
      }),
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10)]],
      target: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      recipients: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      eventType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  handleSelectedDepartment(event) {
    this.selectedDepartments = [...event];
    // console.log(this.selectedDepartments,);   //eg:   ['minu', 'sales accomodation']
    this.eventForm.patchValue({
      recipients: this.selectedDepartments
    });
  }
  onFileSelection(event) {
    const files = event.target.files;
    if (files.length > 0) {
      this.selectedFile = files[0]; // Update the selectedFile array
      console.log(this.selectedFile);
      // this.formData?.append('attachment', this.selectedFile)
      // alert('hu')
    } else {
      alert('YOU CAN CHOOSE ONLY ONE FILE');
    }
  }
  createEvent() {
    //onSubmit()
    this.formData = new FormData();
    const data = this.eventForm.value;
    // console.log(this.eventForm.value);
    this.formData.append('title', data.title);
    this.formData.append('start', data.range.start);
    this.formData.append('end', data.range.end);
    this.formData.append('description', data.description);
    this.formData.append('target', data.target);
    this.formData.append('recipients', data.recipients);
    this.formData.append('eventType', data.eventType);
    this.formData.append('attachment', this.selectedFile);
    this.serv.postNotification(this.formData).subscribe({
      next: res => {
        console.log(res);
        alert(res.message);
        this.eventForm.reset();
      },
      error: err => {
        alert(err.error.message);
        console.log(err);
      }
    });
    // Reset the form after submission if needed
  }
  static #_ = this.ɵfac = function NotificationsComponent_Factory(t) {
    return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_modules_shared_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NotificationsComponent,
    selectors: [["app-notifications"]],
    decls: 67,
    vars: 13,
    consts: [[1, "min-w-full", "min-h-full", "bg-gray-900", "pb-5"], [1, "bg-gray-900", "max-w-screen", "m-0", "md:p-4", "gap-9", "grid-flow-row"], [1, "font-kanit", "text-3xl", "text-white", "font-bold", "mb-4"], [1, "form-container", "grid", "grid-cols-2", "gap-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "px-1", "gap-5", 3, "formGroup", "ngSubmit"], [1, ""], ["for", "title", 1, "block", "text-sm", "font-medium", "text-gray-200", "mb-2"], ["type", "text", "id", "title", "formControlName", "title", "placeholder", "Event Title", 1, "input-field", "bg-gray-700", "text-white"], ["class", "text-red-500", 4, "ngIf"], ["for", "eventDate", 1, "block", "mt-2", "text-sm", "font-medium", "text-gray-200", "mb-2"], [1, "mt-4", "md:mt-0", "grid", "md:place-items-center"], ["appearance", "fill"], [1, "text-white"], ["formGroupName", "range", 3, "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date", "id", "start", 1, "bg-gray-700", "text-white", "p-2", "rounded-md", "my-1", "transition", "duration-300", "ease-in-out", "transform", "hover:scale-105"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date", "id", "end", 1, "bg-gray-700", "text-white", "p-2", "rounded-md", "my-1", "transition", "duration-300", "ease-in-out", "transform", "hover:scale-105"], ["matIconSuffix", "", 3, "for"], ["picker", ""], ["for", "description", 1, "block", "mt-2", "text-sm", "font-medium", "text-gray-200", "mb-2"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "Event Description", 1, "input-field", "bg-gray-700", "text-white"], [1, "flex", "flex-col"], ["for", "attachments", 1, "text-white"], ["type", "file", "id", "attachments", 1, "bg-gray-700", "text-white", "p-2", "rounded-md", "my-1", "transition", "duration-300", "ease-in-out", "transform", "hover:", 3, "change"], ["for", "target", 1, "block", "mt-2", "text-sm", "font-medium", "text-gray-200", "mb-2"], ["id", "target", "formControlName", "target", 1, "select-field", "bg-gray-700", "text-gray-200"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "eventType", 1, "block", "mt-2", "text-sm", "font-medium", "text-gray-200", "mb-2"], ["id", "eventType", "formControlName", "eventType", 1, "select-field", "bg-gray-700", "text-gray-200"], ["value", "high"], ["value", "medium"], ["value", "low"], ["for", "", 1, "block", "mt-2", "text-sm", "font-medium", "text-gray-200", "mb-2"], [1, "text-gray-400", 3, "apiUrl", "selectedOption"], [1, "self-center"], ["type", "submit", 1, "btn-primary", "mt-7", "w-44", 3, "disabled"], [1, "text-red-500"], [3, "value"]],
    template: function NotificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Create a New Event:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function NotificationsComponent_Template_form_ngSubmit_5_listener() {
          return ctx.createEvent();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, NotificationsComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, NotificationsComponent_div_11_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div")(13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Event Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10)(16, "mat-form-field", 11)(17, "mat-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Enter a date range");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-date-range-input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 14)(21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-hint", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "MM/DD/YYYY \u2013 MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "mat-datepicker-toggle", 16)(25, "mat-date-range-picker", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, NotificationsComponent_div_27_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div")(29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, NotificationsComponent_div_32_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, NotificationsComponent_div_33_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 20)(35, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Attachments:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NotificationsComponent_Template_input_change_37_listener($event) {
          return ctx.onFileSelection($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div")(39, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Target Audience:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "select", 24)(42, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Select Target Audience");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, NotificationsComponent_option_44_Template, 3, 4, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, NotificationsComponent_div_45_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div")(47, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Event Priority:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "select", 28)(50, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Select Event Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "high Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Medium Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Low Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, NotificationsComponent_div_58_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 5)(60, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "recipients:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "app-multiselect", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedOption", function NotificationsComponent_Template_app_multiselect_selectedOption_62_listener($event) {
          return ctx.handleSelectedDepartment($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 34)(64, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Create Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "app-notification-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](26);
        let tmp_1_0;
        let tmp_2_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_9_0;
        let tmp_10_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.eventForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.eventForm.get("title")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx.eventForm.get("title")) == null ? null : tmp_1_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.eventForm.get("title")) == null ? null : tmp_2_0.hasError("minlength")) && ((tmp_2_0 = ctx.eventForm.get("title")) == null ? null : tmp_2_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rangePicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.eventForm.get("range.start")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.eventForm.get("range.start")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.eventForm.get("description")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx.eventForm.get("description")) == null ? null : tmp_6_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.eventForm.get("description")) == null ? null : tmp_7_0.hasError("minlength")) && ((tmp_7_0 = ctx.eventForm.get("description")) == null ? null : tmp_7_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.target);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.eventForm.get("target")) == null ? null : tmp_9_0.hasError("required")) && ((tmp_9_0 = ctx.eventForm.get("target")) == null ? null : tmp_9_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.eventForm.get("eventType")) == null ? null : tmp_10_0.hasError("required")) && ((tmp_10_0 = ctx.eventForm.get("eventType")) == null ? null : tmp_10_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("apiUrl", ctx.api);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.eventForm.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDateRangePicker, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _shared_components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_1__.MultiselectComponent, _shared_components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_2__.NotificationListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe],
    styles: ["\n\n\n.input-field[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 8px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-bottom: 10px;\n  }\n  \n  .btn-primary[_ngcontent-%COMP%] {\n    background-color: #3490dc;\n    color: #fff;\n    padding: 8px 16px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n  \n  }\n  .btn-primary[_ngcontent-%COMP%]:hover {\n    background-color: #1d4ed8;\n  }\n  \n  .event-card[_ngcontent-%COMP%] {\n    background-color: #fcd34d;\n    padding: 16px;\n    border-radius: 8px;\n    margin-bottom: 10px;\n    transition: transform 0.3s ease;\n  \n  }\n  .event-card[_ngcontent-%COMP%]:hover {\n    transform: scale(1.05);\n  }\n  \n  .form-container[_ngcontent-%COMP%] {\n    \n\n    display: flex;\n    flex-direction: column;\n    min-height: 96px;\n    width: 100%;\n    padding: 6px;\n    border-radius: 8px; \n\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.08);\n  }\n  \n  .form-container[_ngcontent-%COMP%]:hover {\n    \n\n    animation: _ngcontent-%COMP%_gradient-hover 0.5s ease-in-out forwards;\n  }\n  \n  @keyframes _ngcontent-%COMP%_gradient-hover {\n    from {\n      background-color: navy;\n    }\n    to {\n      \n\n    }\n  }\n  \n  .input-field[_ngcontent-%COMP%] {\n    \n\n    border-radius: 4px;\n    border: 1px solid #ccc;\n    padding: 8px;\n    margin-bottom: 16px;\n    \n\n    color: #666; \n\n  }\n  \n  .select-field[_ngcontent-%COMP%] {\n    \n\n    border-radius: 4px;\n    border: 1px solid #ccc;\n    padding: 8px;\n    margin-bottom: 16px;\n    width: 100%;\n    color: #666; \n\n  }\n  \n  .btn-primary[_ngcontent-%COMP%] {\n    \n\n    background-color: #007bff;\n    color: #fff;\n    border-radius: 4px;\n    padding: 8px 16px;\n    font-size: 16px;\n    cursor: pointer;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBK0Q7O0FBRS9EO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNDQUFzQzs7RUFFeEM7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwrQkFBK0I7O0VBRWpDO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0IsRUFBRSxtQ0FBbUM7SUFDdkQsdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0Usc0NBQXNDO0lBQ3RDLG1EQUFtRDtFQUNyRDs7RUFFQTtJQUNFO01BQ0Usc0JBQXNCO0lBQ3hCO0lBQ0E7TUFDRSx3RUFBd0U7SUFDMUU7RUFDRjs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVcsRUFBRSwrQkFBK0I7RUFDOUM7O0VBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXLEVBQUUsK0JBQStCO0VBQzlDOztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtFQUNqQiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBZGQgdGhlc2Ugc3R5bGVzIHRvIHlvdXIgZ2xvYmFsIHN0eWxlcyBvciBjb21wb25lbnQgc3R5bGVzICovXG5cbi5pbnB1dC1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OTBkYztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgXG4gIH1cbiAgLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ0ZWQ4O1xuICB9XG4gIFxuICAuZXZlbnQtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZDM0ZDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gIFxuICB9XG4gIC5ldmVudC1jYXJkOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB9XG4gIFxuICAuZm9ybS1jb250YWluZXIge1xuICAgIC8qIEJhc2Ugc3R5bGVzIGZvciB0aGUgZm9ybSBjb250YWluZXIgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogOTZweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4OyAvKiBTZXQgeW91ciBkZXNpcmVkIGJvcmRlciByYWRpdXMgKi9cbiAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgLyogQW5pbWF0aW9uIHN0eWxlcyBmb3IgaG92ZXIgZWZmZWN0ICovXG4gICAgYW5pbWF0aW9uOiBncmFkaWVudC1ob3ZlciAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGdyYWRpZW50LWhvdmVyIHtcbiAgICBmcm9tIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6cmdiKDAsIDIsIDcxKTsgQWRqdXN0IGFscGhhIHZhbHVlIGZvciB0cmFuc3BhcmVuY3kgKi9cbiAgICB9XG4gIH1cbiAgXG4gIC5pbnB1dC1maWVsZCB7XG4gICAgLyogU3R5bGVzIGZvciBpbnB1dCBmaWVsZHMgKi9cbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICBjb2xvcjogIzY2NjsgLyogU2V0IHBsYWNlaG9sZGVyIHRleHQgY29sb3IgKi9cbiAgfVxuICBcbiAgLnNlbGVjdC1maWVsZCB7XG4gICAgLyogU3R5bGVzIGZvciB0aGUgc2VsZWN0IGVsZW1lbnQgKi9cbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzY2NjsgLyogU2V0IHBsYWNlaG9sZGVyIHRleHQgY29sb3IgKi9cbiAgfVxuICBcbiAgLmJ0bi1wcmltYXJ5IHtcbiAgICAvKiBTdHlsZXMgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9kZXBhcnRtZW50aGVhZC9jb21wb25lbnRzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUErRDs7QUFFL0Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0NBQXNDOztFQUV4QztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLCtCQUErQjs7RUFFakM7RUFDQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQixFQUFFLG1DQUFtQztJQUN2RCx1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxzQ0FBc0M7SUFDdEMsbURBQW1EO0VBQ3JEOztFQUVBO0lBQ0U7TUFDRSxzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLHdFQUF3RTtJQUMxRTtFQUNGOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVyxFQUFFLCtCQUErQjtFQUM5Qzs7RUFFQTtJQUNFLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFdBQVcsRUFBRSwrQkFBK0I7RUFDOUM7O0VBRUE7SUFDRSxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0VBQ2pCOztBQUVGLGc3SEFBZzdIIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWRkIHRoZXNlIHN0eWxlcyB0byB5b3VyIGdsb2JhbCBzdHlsZXMgb3IgY29tcG9uZW50IHN0eWxlcyAqL1xuXG4uaW5wdXQtZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDkwZGM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIFxuICB9XG4gIC5idG4tcHJpbWFyeTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkNGVkODtcbiAgfVxuICBcbiAgLmV2ZW50LWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2QzNGQ7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICBcbiAgfVxuICAuZXZlbnQtY2FyZDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxuICBcbiAgLmZvcm0tY29udGFpbmVyIHtcbiAgICAvKiBCYXNlIHN0eWxlcyBmb3IgdGhlIGZvcm0gY29udGFpbmVyICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDk2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDsgLyogU2V0IHlvdXIgZGVzaXJlZCBib3JkZXIgcmFkaXVzICovXG4gICAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB9XG4gIFxuICAuZm9ybS1jb250YWluZXI6aG92ZXIge1xuICAgIC8qIEFuaW1hdGlvbiBzdHlsZXMgZm9yIGhvdmVyIGVmZmVjdCAqL1xuICAgIGFuaW1hdGlvbjogZ3JhZGllbnQtaG92ZXIgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBncmFkaWVudC1ob3ZlciB7XG4gICAgZnJvbSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xuICAgIH1cbiAgICB0byB7XG4gICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLCAyLCA3MSk7IEFkanVzdCBhbHBoYSB2YWx1ZSBmb3IgdHJhbnNwYXJlbmN5ICovXG4gICAgfVxuICB9XG4gIFxuICAuaW5wdXQtZmllbGQge1xuICAgIC8qIFN0eWxlcyBmb3IgaW5wdXQgZmllbGRzICovXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgY29sb3I6ICM2NjY7IC8qIFNldCBwbGFjZWhvbGRlciB0ZXh0IGNvbG9yICovXG4gIH1cbiAgXG4gIC5zZWxlY3QtZmllbGQge1xuICAgIC8qIFN0eWxlcyBmb3IgdGhlIHNlbGVjdCBlbGVtZW50ICovXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICM2NjY7IC8qIFNldCBwbGFjZWhvbGRlciB0ZXh0IGNvbG9yICovXG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeSB7XG4gICAgLyogU3R5bGVzIGZvciB0aGUgc3VibWl0IGJ1dHRvbiAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3929:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/departmenthead/components/task-create/task-create.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskCreateComponent: () => (/* binding */ TaskCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);


class TaskCreateComponent {
  constructor() {
    this.task = {
      title: '',
      description: '',
      deadline: '',
      priority: '',
      assignedEmployee: ''
    };
  }
  createTask() {
    // Implement task creation logic here
    console.log(this.task);
  }
  static #_ = this.ɵfac = function TaskCreateComponent_Factory(t) {
    return new (t || TaskCreateComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TaskCreateComponent,
    selectors: [["app-task-create"]],
    decls: 34,
    vars: 5,
    consts: [[1, "max-w-md", "mx-auto"], [1, "text-2xl", "font-bold", "mb-4"], [3, "submit"], [1, "mb-4"], ["for", "title", 1, "block", "mb-2", "font-semibold"], ["type", "text", "id", "title", "name", "title", "required", "", 1, "w-full", "p-2", "border", "border-gray-300", "rounded", 3, "ngModel", "ngModelChange"], ["for", "description", 1, "block", "mb-2", "font-semibold"], ["id", "description", "name", "description", "rows", "4", "required", "", 1, "w-full", "p-2", "border", "border-gray-300", "rounded", 3, "ngModel", "ngModelChange"], ["for", "deadline", 1, "block", "mb-2", "font-semibold"], ["type", "date", "id", "deadline", "name", "deadline", "required", "", 1, "w-full", "p-2", "border", "border-gray-300", "rounded", 3, "ngModel", "ngModelChange"], ["for", "priority", 1, "block", "mb-2", "font-semibold"], ["id", "priority", "name", "priority", "required", "", 1, "w-full", "p-2", "border", "border-gray-300", "rounded", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", ""], ["value", "High"], ["value", "Medium"], ["value", "Low"], ["for", "assignedEmployee", 1, "block", "mb-2", "font-semibold"], ["type", "text", "id", "assignedEmployee", "name", "assignedEmployee", "required", "", 1, "w-full", "p-2", "border", "border-gray-300", "rounded", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "bg-blue-500", "text-white", "px-4", "py-2", "rounded", "hover:bg-blue-600"]],
    template: function TaskCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function TaskCreateComponent_Template_form_submit_3_listener() {
          return ctx.createTask();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskCreateComponent_Template_input_ngModelChange_7_listener($event) {
          return ctx.task.title = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskCreateComponent_Template_textarea_ngModelChange_11_listener($event) {
          return ctx.task.description = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3)(13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Deadline:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskCreateComponent_Template_input_ngModelChange_15_listener($event) {
          return ctx.task.deadline = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3)(17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Priority:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskCreateComponent_Template_select_ngModelChange_19_listener($event) {
          return ctx.task.priority = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Select Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "High");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3)(29, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Assigned Employee:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskCreateComponent_Template_input_ngModelChange_31_listener($event) {
          return ctx.task.assignedEmployee = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Create Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.task.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.task.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.task.deadline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.task.priority);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.task.assignedEmployee);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9kZXBhcnRtZW50aGVhZC9jb21wb25lbnRzL3Rhc2stY3JlYXRlL3Rhc2stY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2011:
/*!*************************************************************************!*\
  !*** ./src/app/modules/departmenthead/departmenthead-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepartmentheadRoutingModule: () => (/* binding */ DepartmentheadRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _departmenthead_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./departmenthead.component */ 6479);
/* harmony import */ var _employee_components_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee/components/check-in/check-in.component */ 7661);
/* harmony import */ var _shared_components_attendencecalender_attendencecalender_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/attendencecalender/attendencecalender.component */ 5089);
/* harmony import */ var _shared_components_leave_request_leave_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/leave-request/leave-request.component */ 9868);
/* harmony import */ var _shared_components_complaints_complaints_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/complaints/complaints.component */ 1505);
/* harmony import */ var _shared_components_chat_session_chat_session_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/chat-session/chat-session.component */ 2561);
/* harmony import */ var _shared_components_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/profile-form/profile-form.component */ 1639);
/* harmony import */ var _components_approve_complaints_approve_complaints_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/approve-complaints/approve-complaints.component */ 8477);
/* harmony import */ var _shared_components_todo_todo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/todo/todo.component */ 857);
/* harmony import */ var _company_components_department_details_department_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../company/components/department-details/department-details.component */ 8523);
/* harmony import */ var _components_leads_leads_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/leads/leads.component */ 589);
/* harmony import */ var src_app_guards_departmentHead_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/guards/departmentHead.guard */ 5001);
/* harmony import */ var _public_components_publichomepage_landingpage_featurespage_featurespage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/components/publichomepage/landingpage/featurespage/featurespage.component */ 1408);
/* harmony import */ var _shared_components_support_support_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/components/support/support.component */ 7528);
/* harmony import */ var _shared_components_employee_data_profile_employee_data_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/components/employee-data-profile/employee-data-profile.component */ 5415);
/* harmony import */ var _shared_components_showevents_showevents_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/components/showevents/showevents.component */ 3676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 1699);



















const routes = [{
  path: '',
  component: _departmenthead_component__WEBPACK_IMPORTED_MODULE_0__.DepartmentheadComponent,
  canActivateChild: [src_app_guards_departmentHead_guard__WEBPACK_IMPORTED_MODULE_11__.AuthGuard],
  children: [{
    path: '',
    redirectTo: 'checkIn',
    pathMatch: 'full'
  }, {
    path: 'checkIn',
    component: _employee_components_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_1__.CheckInComponent
  }, {
    path: 'attendance',
    component: _shared_components_attendencecalender_attendencecalender_component__WEBPACK_IMPORTED_MODULE_2__.AttendencecalenderComponent
  }, {
    path: 'leaveRequest',
    component: _shared_components_leave_request_leave_request_component__WEBPACK_IMPORTED_MODULE_3__.LeaveRequestComponent
  }, {
    path: 'complaints',
    component: _shared_components_complaints_complaints_component__WEBPACK_IMPORTED_MODULE_4__.ComplaintsComponent
  }, {
    path: 'departments/:id',
    component: _shared_components_employee_data_profile_employee_data_profile_component__WEBPACK_IMPORTED_MODULE_14__.EmployeeDataProfileComponent
  }, {
    path: 'departments',
    component: _company_components_department_details_department_details_component__WEBPACK_IMPORTED_MODULE_9__.DepartmentDetailsComponent
  }, {
    path: 'complaintsList',
    component: _components_approve_complaints_approve_complaints_component__WEBPACK_IMPORTED_MODULE_7__.ApproveComplaintsComponent
  }, {
    path: 'Messages',
    component: _shared_components_chat_session_chat_session_component__WEBPACK_IMPORTED_MODULE_5__.ChatSessionComponent
  }, {
    path: 'profile',
    component: _shared_components_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_6__.ProfileFormComponent
  }, {
    path: 'todo',
    component: _shared_components_todo_todo_component__WEBPACK_IMPORTED_MODULE_8__.TodoComponent
  }, {
    path: 'Leads',
    component: _components_leads_leads_component__WEBPACK_IMPORTED_MODULE_10__.LeadsComponent
  }, {
    path: 'about',
    component: _public_components_publichomepage_landingpage_featurespage_featurespage_component__WEBPACK_IMPORTED_MODULE_12__.FeaturespageComponent
  }, {
    path: 'support',
    component: _shared_components_support_support_component__WEBPACK_IMPORTED_MODULE_13__.SupportComponent
  }, {
    path: 'notifications',
    component: _shared_components_showevents_showevents_component__WEBPACK_IMPORTED_MODULE_15__.ShoweventsComponent
  }]
}];
class DepartmentheadRoutingModule {
  static #_ = this.ɵfac = function DepartmentheadRoutingModule_Factory(t) {
    return new (t || DepartmentheadRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
    type: DepartmentheadRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](DepartmentheadRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
  });
})();

/***/ }),

/***/ 6479:
/*!********************************************************************!*\
  !*** ./src/app/modules/departmenthead/departmenthead.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepartmentheadComponent: () => (/* binding */ DepartmentheadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _shared_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/topbar/topbar.component */ 6233);
/* harmony import */ var _shared_components_sidebar_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/sidebar/toolbar/toolbar.component */ 1305);




class DepartmentheadComponent {
  static #_ = this.ɵfac = function DepartmentheadComponent_Factory(t) {
    return new (t || DepartmentheadComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DepartmentheadComponent,
    selectors: [["app-departmenthead"]],
    decls: 7,
    vars: 0,
    consts: [[1, "bg-gray-700"], [1, "w-screen", "flex", "flex-row", "max-h-screen", "overflow-hidden", "max-w-full"], [1, ""], [1, "flex", "flex-col", "flex-1", "h-screen", "overflow-hidden"], [1, "h-16"], [1, "overflow-auto", "p-2", "flex-1"]],
    template: function DepartmentheadComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-topbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "router-outlet", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__.TopbarComponent, _shared_components_sidebar_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__.ToolbarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50aGVhZC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9kZXBhcnRtZW50aGVhZC9kZXBhcnRtZW50aGVhZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6873:
/*!*****************************************************************!*\
  !*** ./src/app/modules/departmenthead/departmenthead.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepartmentheadModule: () => (/* binding */ DepartmentheadModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _departmenthead_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./departmenthead-routing.module */ 2011);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 8524);
/* harmony import */ var _departmenthead_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./departmenthead.component */ 6479);
/* harmony import */ var _components_department_statisctics_department_statisctics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/department-statisctics/department-statisctics.component */ 6561);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _components_approve_complaints_approve_complaints_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/approve-complaints/approve-complaints.component */ 8477);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _components_task_create_task_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/task-create/task-create.component */ 3929);
/* harmony import */ var _components_leads_leads_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/leads/leads.component */ 589);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);












class DepartmentheadModule {
  static #_ = this.ɵfac = function DepartmentheadModule_Factory(t) {
    return new (t || DepartmentheadModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: DepartmentheadModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _departmenthead_routing_module__WEBPACK_IMPORTED_MODULE_0__.DepartmentheadRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DepartmentheadModule, {
    declarations: [_departmenthead_component__WEBPACK_IMPORTED_MODULE_2__.DepartmentheadComponent, _components_department_statisctics_department_statisctics_component__WEBPACK_IMPORTED_MODULE_3__.DepartmentStatiscticsComponent, _components_approve_complaints_approve_complaints_component__WEBPACK_IMPORTED_MODULE_4__.ApproveComplaintsComponent, _components_task_create_task_create_component__WEBPACK_IMPORTED_MODULE_5__.TaskCreateComponent, _components_leads_leads_component__WEBPACK_IMPORTED_MODULE_6__.LeadsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _departmenthead_routing_module__WEBPACK_IMPORTED_MODULE_0__.DepartmentheadRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule],
    exports: [_components_department_statisctics_department_statisctics_component__WEBPACK_IMPORTED_MODULE_3__.DepartmentStatiscticsComponent, _components_approve_complaints_approve_complaints_component__WEBPACK_IMPORTED_MODULE_4__.ApproveComplaintsComponent]
  });
})();

/***/ }),

/***/ 7729:
/*!*************************************************************************!*\
  !*** ./src/app/modules/departmenthead/services/apiUtitility.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiutitilityService: () => (/* binding */ ApiutitilityService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class ApiutitilityService {
  constructor(http) {
    this.http = http;
    this.userapi = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/departmentHead`;
  }
  getDepartmentData(departmentID) {
    return this.http.get(`${this.userapi}/department/${departmentID}`);
  }
  getComplaintsList() {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/complaintsList`);
  }
  updateComplaint(id, status) {
    return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/complaintsList/${id}`, {
      status: status
    });
  }
  getNotificationList(role) {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/${role}/notification`);
  }
  static #_ = this.ɵfac = function ApiutitilityService_Factory(t) {
    return new (t || ApiutitilityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ApiutitilityService,
    factory: ApiutitilityService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7661:
/*!****************************************************************************!*\
  !*** ./src/app/modules/employee/components/check-in/check-in.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckInComponent: () => (/* binding */ CheckInComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_modules_shared_services_attendence_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/shared/services/attendence.service */ 6646);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_components_camera_camera_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/camera/camera.component */ 758);





function CheckInComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckInComponent_div_12_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.onCheckIn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 24)(4, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Check In");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function CheckInComponent_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckInComponent_div_12_div_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.onCheckOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 24)(4, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Check Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function CheckInComponent_div_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Shift Completed Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function CheckInComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CheckInComponent_div_12_div_1_Template, 7, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CheckInComponent_div_12_div_2_Template, 7, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CheckInComponent_div_12_div_3_Template, 6, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.checkedIn && !ctx_r0.alreadyCheckedOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.checkedIn && !ctx_r0.alreadyCheckedOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.alreadyCheckedOut);
  }
}
function CheckInComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "app-camera", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("getResponse", function CheckInComponent_div_13_Template_app_camera_getResponse_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.handleResponse($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("action", ctx_r1.logType);
  }
}
class CheckInComponent {
  constructor(cdr, attendance) {
    this.cdr = cdr;
    this.attendance = attendance;
    this.hoverState = 'initial';
    this.checkButVisibility = true;
    this.cameraVisibility = false;
    this.checkedIn = false;
    this.alreadyCheckedOut = false;
    this.logType = 'checkIN';
    this.checkInTime = '';
    this.checkOutTime = '';
    this.currentTime = '';
    this.currentDateStr = '';
  }
  ngOnInit() {
    this.updateClock();
    this.clockTimer = setInterval(() => this.updateClock(), 1000);
    this.fetchStatus();
  }
  ngOnDestroy() {
    if (this.clockTimer) {
      clearInterval(this.clockTimer);
    }
  }
  updateClock() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    this.currentDateStr = now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    this.cdr.detectChanges();
  }
  fetchStatus() {
    this.attendance.getAttendence().subscribe({
      next: res => {
        console.log('Attendance status:', res);
        this.checkInTime = res.checkInTime || '';
        this.checkOutTime = res.checkOutTime || '';
        if (res.checkedIn) {
          this.checkedIn = true;
          this.alreadyCheckedOut = false;
          this.logType = 'checkOut';
        } else if (res.alreadyCheckedOut) {
          this.checkedIn = false;
          this.alreadyCheckedOut = true;
          this.logType = 'checkIN';
        } else {
          this.checkedIn = false;
          this.alreadyCheckedOut = false;
          this.logType = 'checkIN';
        }
        this.cdr.detectChanges();
      },
      error: err => {
        console.error(err);
      }
    });
  }
  onHover() {
    this.hoverState = 'hovered';
  }
  onLeave() {
    this.hoverState = 'initial';
  }
  handleImage(webcamImage) {
    this.webcamImage = webcamImage;
  }
  handleResponse(res) {
    this.cameraVisibility = false;
    this.checkButVisibility = true;
    if (res.success) {
      const isCheckOut = this.logType === 'checkOut';
      const successMsg = isCheckOut ? 'Checked Out Successfully!' : 'Checked In Successfully!';
      setTimeout(() => {
        alert(successMsg);
        this.fetchStatus();
      }, 300);
    } else {
      const msg = res.error?.message || res.error?.reason || res.message || 'Attendance request failed';
      setTimeout(() => {
        alert(msg);
        this.fetchStatus();
      }, 300);
    }
  }
  onCheckIn() {
    this.logType = 'checkIN';
    this.checkButVisibility = false;
    this.cameraVisibility = true;
  }
  onCheckOut() {
    this.logType = 'checkOut';
    this.checkButVisibility = false;
    this.cameraVisibility = true;
  }
  static #_ = this.ɵfac = function CheckInComponent_Factory(t) {
    return new (t || CheckInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_modules_shared_services_attendence_service__WEBPACK_IMPORTED_MODULE_0__.AttendenceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CheckInComponent,
    selectors: [["app-check-in"]],
    decls: 33,
    vars: 7,
    consts: [[1, "min-h-screen", "bg-[#070a12]", "flex", "items-center", "justify-center", "p-4", "md:p-8", "font-sans"], [1, "w-full", "max-w-xl", "bg-[#0d121f]", "border", "border-slate-800/90", "rounded-3xl", "p-8", "lg:p-10", "shadow-2xl", "backdrop-blur-xl", "flex", "flex-col", "items-center", "text-center"], [1, "w-full", "flex", "flex-col", "items-center", "mb-8"], [1, "inline-flex", "items-center", "gap-2", "px-3.5", "py-1.5", "rounded-full", "bg-slate-800/70", "border", "border-slate-700/50", "text-xs", "font-medium", "text-slate-300", "mb-4"], [1, "w-2", "h-2", "rounded-full", 3, "ngClass"], [1, "text-4xl", "lg:text-5xl", "font-black", "text-white", "font-mono", "tracking-wider"], [1, "text-xs", "text-slate-400", "mt-1.5", "font-medium"], [1, "w-full", "min-h-[200px]", "flex", "items-center", "justify-center", "my-4"], ["class", "w-full flex flex-col items-center", 4, "ngIf"], ["class", "w-full flex justify-center", 4, "ngIf"], [1, "w-full", "grid", "grid-cols-2", "gap-4", "mt-6", "pt-6", "border-t", "border-slate-800/80"], [1, "p-4", "rounded-2xl", "bg-[#070a12]", "border", "border-slate-800/80", "text-left", "flex", "items-center", "gap-3.5"], [1, "p-2.5", "rounded-xl", "bg-emerald-500/10", "text-emerald-400"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"], [1, "text-[11px]", "font-semibold", "uppercase", "text-slate-400", "tracking-wider", "block"], [1, "font-mono", "font-bold", "text-white", "text-sm", "lg:text-base"], [1, "p-2.5", "rounded-xl", "bg-indigo-500/10", "text-indigo-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"], [1, "w-full", "flex", "flex-col", "items-center"], ["class", "flex flex-col items-center gap-4", 4, "ngIf"], ["class", "flex flex-col items-center gap-2 py-4", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "gap-4"], [1, "px-12", "py-4", "rounded-2xl", "bg-indigo-600", "hover:bg-indigo-500", "text-white", "font-bold", "text-base", "shadow-lg", "shadow-indigo-600/30", "transition", "duration-200", "cursor-pointer", "flex", "items-center", "gap-2.5", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 13a3 3 0 11-6 0 3 3 0 016 0z"], [1, "px-12", "py-4", "rounded-2xl", "bg-rose-600", "hover:bg-rose-500", "text-white", "font-bold", "text-base", "shadow-lg", "shadow-rose-600/30", "transition", "duration-200", "cursor-pointer", "flex", "items-center", "gap-2.5", 3, "click"], [1, "flex", "flex-col", "items-center", "gap-2", "py-4"], [1, "px-6", "py-3", "rounded-2xl", "bg-emerald-500/10", "border", "border-emerald-500/30", "text-emerald-400", "flex", "items-center", "gap-2", "text-sm", "font-semibold"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M5 13l4 4L19 7"], [1, "w-full", "flex", "justify-center"], [1, "w-full", "max-w-md", 3, "action", "getResponse"]],
    template: function CheckInComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Workstation Attendance Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CheckInComponent_div_12_Template, 4, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CheckInComponent_div_13_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div")(20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Check-In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 11)(25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div")(29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Check-Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.checkedIn ? "bg-emerald-400 animate-pulse" : ctx.alreadyCheckedOut ? "bg-indigo-400" : "bg-amber-400");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.currentDateStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.currentTime, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkButVisibility);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cameraVisibility);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.checkInTime || "--:--");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.checkOutTime || (ctx.checkedIn ? "In Progress" : "--:--"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_components_camera_camera_component__WEBPACK_IMPORTED_MODULE_1__.CameraComponent],
    styles: ["@keyframes _ngcontent-%COMP%_radarPulse {\n  0% { transform: scale(0.98); opacity: 0.85; box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4); }\n  50% { transform: scale(1.03); opacity: 1; box-shadow: 0 0 0 20px rgba(99, 102, 241, 0); }\n  100% { transform: scale(0.98); opacity: 0.85; box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }\n}\n\n@keyframes _ngcontent-%COMP%_radarPulseSuccess {\n  0% { transform: scale(0.98); opacity: 0.85; box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }\n  50% { transform: scale(1.03); opacity: 1; box-shadow: 0 0 0 20px rgba(34, 197, 94, 0); }\n  100% { transform: scale(0.98); opacity: 0.85; box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }\n}\n\n.radar-glow[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_radarPulse 3s ease-in-out infinite;\n}\n\n.radar-glow-success[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_radarPulseSuccess 3s ease-in-out infinite;\n}\n\n\n\n.glass-panel[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.7);\n  backdrop-filter: blur(28px) saturate(180%);\n  -webkit-backdrop-filter: blur(28px) saturate(180%);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  box-shadow: \n    inset 0 1px 1px 0 rgba(255, 255, 255, 0.15),\n    0 25px 60px -15px rgba(0, 0, 0, 0.8),\n    0 0 40px -10px rgba(99, 102, 241, 0.2);\n}\n\n\n\n.inset-card[_ngcontent-%COMP%] {\n  background: #070b14;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  box-shadow: \n    inset 3px 3px 6px rgba(0, 0, 0, 0.7),\n    inset -2px -2px 5px rgba(255, 255, 255, 0.03);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxLQUFLLHNCQUFzQixFQUFFLGFBQWEsRUFBRSwyQ0FBMkMsRUFBRTtFQUN6RixNQUFNLHNCQUFzQixFQUFFLFVBQVUsRUFBRSw0Q0FBNEMsRUFBRTtFQUN4RixPQUFPLHNCQUFzQixFQUFFLGFBQWEsRUFBRSx5Q0FBeUMsRUFBRTtBQUMzRjs7QUFFQTtFQUNFLEtBQUssc0JBQXNCLEVBQUUsYUFBYSxFQUFFLDBDQUEwQyxFQUFFO0VBQ3hGLE1BQU0sc0JBQXNCLEVBQUUsVUFBVSxFQUFFLDJDQUEyQyxFQUFFO0VBQ3ZGLE9BQU8sc0JBQXNCLEVBQUUsYUFBYSxFQUFFLHdDQUF3QyxFQUFFO0FBQzFGOztBQUVBO0VBQ0UsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0Usb0RBQW9EO0FBQ3REOztBQUVBLHNDQUFzQztBQUN0QztFQUNFLGlDQUFpQztFQUNqQywwQ0FBMEM7RUFDMUMsa0RBQWtEO0VBQ2xELDJDQUEyQztFQUMzQzs7OzBDQUd3QztBQUMxQzs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDOztpREFFK0M7QUFDakQiLCJmaWxlIjoiY2hlY2staW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgcmFkYXJQdWxzZSB7XG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsgb3BhY2l0eTogMC44NTsgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDk5LCAxMDIsIDI0MSwgMC40KTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpOyBvcGFjaXR5OiAxOyBib3gtc2hhZG93OiAwIDAgMCAyMHB4IHJnYmEoOTksIDEwMiwgMjQxLCAwKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsgb3BhY2l0eTogMC44NTsgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDk5LCAxMDIsIDI0MSwgMCk7IH1cbn1cblxuQGtleWZyYW1lcyByYWRhclB1bHNlU3VjY2VzcyB7XG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsgb3BhY2l0eTogMC44NTsgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDM0LCAxOTcsIDk0LCAwLjQpOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7IG9wYWNpdHk6IDE7IGJveC1zaGFkb3c6IDAgMCAwIDIwcHggcmdiYSgzNCwgMTk3LCA5NCwgMCk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMC45OCk7IG9wYWNpdHk6IDAuODU7IGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgzNCwgMTk3LCA5NCwgMCk7IH1cbn1cblxuLnJhZGFyLWdsb3cge1xuICBhbmltYXRpb246IHJhZGFyUHVsc2UgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5yYWRhci1nbG93LXN1Y2Nlc3Mge1xuICBhbmltYXRpb246IHJhZGFyUHVsc2VTdWNjZXNzIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4vKiBHbGFzc21vcnBoaXNtIENvbnRyb2wgQ2VudGVyIENhcmQgKi9cbi5nbGFzcy1wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC43KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI4cHgpIHNhdHVyYXRlKDE4MCUpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyOHB4KSBzYXR1cmF0ZSgxODAlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgYm94LXNoYWRvdzogXG4gICAgaW5zZXQgMCAxcHggMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSxcbiAgICAwIDI1cHggNjBweCAtMTVweCByZ2JhKDAsIDAsIDAsIDAuOCksXG4gICAgMCAwIDQwcHggLTEwcHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuMik7XG59XG5cbi8qIEluc2V0IE1ldHJpYyBDYXJkICovXG4uaW5zZXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICMwNzBiMTQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyk7XG4gIGJveC1zaGFkb3c6IFxuICAgIGluc2V0IDNweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC43KSxcbiAgICBpbnNldCAtMnB4IC0ycHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMyk7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9jb21wb25lbnRzL2NoZWNrLWluL2NoZWNrLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxLQUFLLHNCQUFzQixFQUFFLGFBQWEsRUFBRSwyQ0FBMkMsRUFBRTtFQUN6RixNQUFNLHNCQUFzQixFQUFFLFVBQVUsRUFBRSw0Q0FBNEMsRUFBRTtFQUN4RixPQUFPLHNCQUFzQixFQUFFLGFBQWEsRUFBRSx5Q0FBeUMsRUFBRTtBQUMzRjs7QUFFQTtFQUNFLEtBQUssc0JBQXNCLEVBQUUsYUFBYSxFQUFFLDBDQUEwQyxFQUFFO0VBQ3hGLE1BQU0sc0JBQXNCLEVBQUUsVUFBVSxFQUFFLDJDQUEyQyxFQUFFO0VBQ3ZGLE9BQU8sc0JBQXNCLEVBQUUsYUFBYSxFQUFFLHdDQUF3QyxFQUFFO0FBQzFGOztBQUVBO0VBQ0UsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0Usb0RBQW9EO0FBQ3REOztBQUVBLHNDQUFzQztBQUN0QztFQUNFLGlDQUFpQztFQUNqQywwQ0FBMEM7RUFDMUMsa0RBQWtEO0VBQ2xELDJDQUEyQztFQUMzQzs7OzBDQUd3QztBQUMxQzs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDOztpREFFK0M7QUFDakQ7QUFDQSx3c0ZBQXdzRiIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgcmFkYXJQdWxzZSB7XG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsgb3BhY2l0eTogMC44NTsgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDk5LCAxMDIsIDI0MSwgMC40KTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpOyBvcGFjaXR5OiAxOyBib3gtc2hhZG93OiAwIDAgMCAyMHB4IHJnYmEoOTksIDEwMiwgMjQxLCAwKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsgb3BhY2l0eTogMC44NTsgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDk5LCAxMDIsIDI0MSwgMCk7IH1cbn1cblxuQGtleWZyYW1lcyByYWRhclB1bHNlU3VjY2VzcyB7XG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsgb3BhY2l0eTogMC44NTsgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDM0LCAxOTcsIDk0LCAwLjQpOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7IG9wYWNpdHk6IDE7IGJveC1zaGFkb3c6IDAgMCAwIDIwcHggcmdiYSgzNCwgMTk3LCA5NCwgMCk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMC45OCk7IG9wYWNpdHk6IDAuODU7IGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgzNCwgMTk3LCA5NCwgMCk7IH1cbn1cblxuLnJhZGFyLWdsb3cge1xuICBhbmltYXRpb246IHJhZGFyUHVsc2UgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5yYWRhci1nbG93LXN1Y2Nlc3Mge1xuICBhbmltYXRpb246IHJhZGFyUHVsc2VTdWNjZXNzIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4vKiBHbGFzc21vcnBoaXNtIENvbnRyb2wgQ2VudGVyIENhcmQgKi9cbi5nbGFzcy1wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC43KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI4cHgpIHNhdHVyYXRlKDE4MCUpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyOHB4KSBzYXR1cmF0ZSgxODAlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgYm94LXNoYWRvdzogXG4gICAgaW5zZXQgMCAxcHggMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSxcbiAgICAwIDI1cHggNjBweCAtMTVweCByZ2JhKDAsIDAsIDAsIDAuOCksXG4gICAgMCAwIDQwcHggLTEwcHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuMik7XG59XG5cbi8qIEluc2V0IE1ldHJpYyBDYXJkICovXG4uaW5zZXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICMwNzBiMTQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyk7XG4gIGJveC1zaGFkb3c6IFxuICAgIGluc2V0IDNweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC43KSxcbiAgICBpbnNldCAtMnB4IC0ycHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMyk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('hoverAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('initial', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        transform: 'scale(1)'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('hovered', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        transform: 'scale(1.1)'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('initial => hovered', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('300ms ease-in-out')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('hovered => initial', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('300ms ease-in-out'))])]
    }
  });
}

/***/ }),

/***/ 4385:
/*!*************************************************************!*\
  !*** ./src/app/modules/employee/employee-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeRoutingModule: () => (/* binding */ EmployeeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee.component */ 8032);
/* harmony import */ var _components_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/check-in/check-in.component */ 7661);
/* harmony import */ var _shared_components_attendencecalender_attendencecalender_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/attendencecalender/attendencecalender.component */ 5089);
/* harmony import */ var _shared_components_leave_request_leave_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/leave-request/leave-request.component */ 9868);
/* harmony import */ var _shared_components_complaints_complaints_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/complaints/complaints.component */ 1505);
/* harmony import */ var _shared_components_todo_todo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/todo/todo.component */ 857);
/* harmony import */ var _shared_components_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/profile-form/profile-form.component */ 1639);
/* harmony import */ var _shared_components_chat_session_chat_session_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/chat-session/chat-session.component */ 2561);
/* harmony import */ var src_app_guards_employee_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/guards/employee.guard */ 30);
/* harmony import */ var _public_components_publichomepage_landingpage_featurespage_featurespage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/components/publichomepage/landingpage/featurespage/featurespage.component */ 1408);
/* harmony import */ var _shared_components_support_support_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/components/support/support.component */ 7528);
/* harmony import */ var _shared_components_showevents_showevents_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/components/showevents/showevents.component */ 3676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);















const routes = [{
  path: '',
  component: _employee_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeComponent,
  canActivateChild: [src_app_guards_employee_guard__WEBPACK_IMPORTED_MODULE_8__.EmployeeGuard],
  children: [{
    path: '',
    redirectTo: 'checkIn',
    pathMatch: 'full'
  }, {
    path: 'checkIn',
    component: _components_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_1__.CheckInComponent
  }, {
    path: 'attendance',
    component: _shared_components_attendencecalender_attendencecalender_component__WEBPACK_IMPORTED_MODULE_2__.AttendencecalenderComponent
  }, {
    path: 'leaveRequest',
    component: _shared_components_leave_request_leave_request_component__WEBPACK_IMPORTED_MODULE_3__.LeaveRequestComponent
  }, {
    path: 'complaints',
    component: _shared_components_complaints_complaints_component__WEBPACK_IMPORTED_MODULE_4__.ComplaintsComponent
  }, {
    path: 'todo',
    component: _shared_components_todo_todo_component__WEBPACK_IMPORTED_MODULE_5__.TodoComponent
  }, {
    path: 'profile',
    component: _shared_components_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_6__.ProfileFormComponent
  }, {
    path: 'Messages',
    component: _shared_components_chat_session_chat_session_component__WEBPACK_IMPORTED_MODULE_7__.ChatSessionComponent
  }, {
    path: 'about',
    component: _public_components_publichomepage_landingpage_featurespage_featurespage_component__WEBPACK_IMPORTED_MODULE_9__.FeaturespageComponent
  }, {
    path: 'support',
    component: _shared_components_support_support_component__WEBPACK_IMPORTED_MODULE_10__.SupportComponent
  }, {
    path: 'notifications',
    component: _shared_components_showevents_showevents_component__WEBPACK_IMPORTED_MODULE_11__.ShoweventsComponent
  }]
}];
class EmployeeRoutingModule {
  static #_ = this.ɵfac = function EmployeeRoutingModule_Factory(t) {
    return new (t || EmployeeRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: EmployeeRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    providers: [src_app_guards_employee_guard__WEBPACK_IMPORTED_MODULE_8__.EmployeeGuard],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 8032:
/*!********************************************************!*\
  !*** ./src/app/modules/employee/employee.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeComponent: () => (/* binding */ EmployeeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _shared_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/topbar/topbar.component */ 6233);
/* harmony import */ var _shared_components_sidebar_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/sidebar/toolbar/toolbar.component */ 1305);




class EmployeeComponent {
  static #_ = this.ɵfac = function EmployeeComponent_Factory(t) {
    return new (t || EmployeeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: EmployeeComponent,
    selectors: [["app-employee"]],
    decls: 7,
    vars: 0,
    consts: [[1, "bg-gray-700"], [1, "w-screen", "flex", "flex-row", "max-h-screen", "overflow-hidden", "max-w-full"], [1, ""], [1, "flex", "flex-col", "flex-1", "h-screen", "overflow-hidden"], [1, "h-16"], [1, "overflow-auto", "p-2", "flex-1"]],
    template: function EmployeeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-topbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "router-outlet", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__.TopbarComponent, _shared_components_sidebar_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__.ToolbarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1167:
/*!*****************************************************!*\
  !*** ./src/app/modules/employee/employee.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeModule: () => (/* binding */ EmployeeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/check-in/check-in.component */ 7661);
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-routing.module */ 4385);
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee.component */ 8032);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 8524);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webcam */ 2477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);








class EmployeeModule {
  static #_ = this.ɵfac = function EmployeeModule_Factory(t) {
    return new (t || EmployeeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: EmployeeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _employee_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmployeeRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, ngx_webcam__WEBPACK_IMPORTED_MODULE_6__.WebcamModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EmployeeModule, {
    declarations: [_components_check_in_check_in_component__WEBPACK_IMPORTED_MODULE_0__.CheckInComponent, _employee_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _employee_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmployeeRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, ngx_webcam__WEBPACK_IMPORTED_MODULE_6__.WebcamModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule],
    exports: [_employee_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeComponent]
  });
})();

/***/ }),

/***/ 199:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/public/components/authorisation/login/login.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api.service */ 8573);
/* harmony import */ var src_app_services_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/jwt.service */ 61);
/* harmony import */ var src_app_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/userData.service */ 2902);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);









function LoginComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40)(1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "blockquote", 42)(4, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "footer", 44)(7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div")(10, "cite", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \"", ctx_r0.selectedQuote.text, "\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedQuote.initials, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.selectedQuote.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.selectedQuote.title);
  }
}
function LoginComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function LoginComponent_div_40_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "* User ID or Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginComponent_div_40_span_1_Template, 2, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f["userID"].errors == null ? null : ctx_r2.f["userID"].errors["required"]);
  }
}
function LoginComponent_div_49_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "* Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_49_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "* Minimum 6 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginComponent_div_49_span_1_Template, 2, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LoginComponent_div_49_span_2_Template, 2, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.f["password"].errors == null ? null : ctx_r3.f["password"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.f["password"].errors == null ? null : ctx_r3.f["password"].errors["minlength"]);
  }
}
class LoginComponent {
  constructor(fb, http, router, api, jwt, user) {
    this.fb = fb;
    this.http = http;
    this.router = router;
    this.api = api;
    this.jwt = jwt;
    this.user = user;
    this.error = '';
    this.quotes = [{
      text: "Great things in business are never done by one person. They're done by a team of people.",
      author: "Steve Jobs",
      title: "Co-Founder, Apple Inc.",
      initials: "SJ"
    }, {
      text: "Efficiency is doing things right; effectiveness is doing the right things.",
      author: "Peter Drucker",
      title: "Management Consultant & Author",
      initials: "PD"
    }, {
      text: "Alone we can do so little; together we can do so much.",
      author: "Helen Keller",
      title: "Author & Activist",
      initials: "HK"
    }, {
      text: "Productivity is never an accident. It is always the result of a commitment to excellence.",
      author: "Paul J. Meyer",
      title: "Pioneer in Personal Growth",
      initials: "PM"
    }, {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      title: "Co-Founder, Apple Inc.",
      initials: "SJ"
    }, {
      text: "The secret of getting ahead is getting started.",
      author: "Mark Twain",
      title: "Renowned Author & Humorist",
      initials: "MT"
    }, {
      text: "Success is best when it's shared.",
      author: "Howard Schultz",
      title: "Former CEO, Starbucks",
      initials: "HS"
    }, {
      text: "Quality means doing it right when no one is looking.",
      author: "Henry Ford",
      title: "Founder, Ford Motor Company",
      initials: "HF"
    }];
  }
  ngOnInit() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.selectedQuote = this.quotes[randomIndex];
    this.loginForm = this.fb.group({
      userID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)],
      rememberMe: [false]
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.loginData = this.loginForm.value;
    console.log(this.loginData);
    this.api.login(this.loginData).subscribe({
      next: res => {
        console.log(res);
        if (res.success) {
          console.log('chathisghatt');
          this.jwt.setToken(res.token);
          const decodedToken = this.jwt.decodeToken(res.token);
          console.log(decodedToken.companyID, decodedToken.role);
          if (decodedToken.role === 'employee' || decodedToken.role === 'intern') {
            this.user.role = decodedToken.role;
            this.router.navigate(['/employee/checkIn']);
          } else if (decodedToken.role === 'companyAdmin') {
            this.user.role = 'companyAdmin';
            this.router.navigate(['/companyAdmin/dashboard']);
          } else if (decodedToken.role === 'admin') {
            this.user.role = 'admin';
            this.router.navigate(['/admin/dashboard']);
            // this.router.navigate(['/company/dashboard'])
          } else if (decodedToken.role === 'departmentHead') {
            this.user.role = 'departmentHead';
            this.router.navigate(['/departmentHead/checkIn']);
            // this.router.navigate(['/company/dashboard'])
          }
        }
      },

      error: err => {
        console.log(err);
        this.error = err.error.message;
      }
    });
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_jwt_service__WEBPACK_IMPORTED_MODULE_1__.JwtService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_userData_service__WEBPACK_IMPORTED_MODULE_2__.userData));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 60,
    vars: 6,
    consts: [[1, "min-h-screen", "bg-[#060911]", "relative", "flex", "items-center", "justify-center", "p-4", "md:p-8", "font-sans", "selection:bg-indigo-500", "selection:text-white", "overflow-hidden"], [1, "fixed", "-top-20", "-left-20", "w-[550px]", "h-[550px]", "bg-gradient-to-br", "from-indigo-600/30", "to-purple-600/20", "rounded-full", "blur-[130px]", "pointer-events-none", "animate-orb-1"], [1, "fixed", "-bottom-20", "-right-20", "w-[550px]", "h-[550px]", "bg-gradient-to-tr", "from-purple-600/25", "to-pink-600/20", "rounded-full", "blur-[130px]", "pointer-events-none", "animate-orb-2"], [1, "relative", "w-full", "max-w-4xl", "glass-container", "rounded-3xl", "overflow-hidden", "grid", "grid-cols-1", "lg:grid-cols-12", "min-h-[620px]", "z-10"], [1, "lg:col-span-5", "bg-slate-900/40", "p-8", "lg:p-12", "flex", "flex-col", "justify-between", "border-b", "lg:border-b-0", "lg:border-r", "border-white/10", "relative", "overflow-hidden"], [1, "relative", "z-10"], [1, "flex", "items-center", "gap-3.5", "mb-10"], [1, "w-10", "h-10", "rounded-2xl", "bg-gradient-to-tr", "from-indigo-500", "to-purple-600", "flex", "items-center", "justify-center", "text-white", "shadow-lg", "shadow-indigo-500/40", "border", "border-white/20"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M13 10V3L4 14h7v7l9-11h-7z"], [1, "text-white", "font-bold", "tracking-widest", "text-base", "uppercase"], ["class", "glass-quote-card p-6 rounded-2xl relative my-4", 4, "ngIf"], [1, "relative", "z-10", "pt-6"], [1, "p-4", "rounded-2xl", "glass-quote-card", "flex", "items-center", "gap-3.5"], [1, "p-2.5", "rounded-xl", "bg-indigo-500/20", "text-indigo-300", "border", "border-indigo-500/30"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [1, "text-xs", "font-bold", "text-white"], [1, "text-[11px]", "text-slate-400"], [1, "lg:col-span-7", "p-8", "lg:p-12", "flex", "flex-col", "justify-center", "bg-slate-950/30", "relative"], [1, "max-w-md", "mx-auto", "w-full"], [1, "mb-8"], [1, "text-3xl", "font-extrabold", "text-white", "tracking-tight", "mb-2"], [1, "text-slate-400", "text-sm"], ["class", "mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-center gap-3 backdrop-blur-md", 4, "ngIf"], [1, "space-y-6", 3, "formGroup", "ngSubmit"], ["for", "userID", 1, "block", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-slate-300", "mb-2"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "pl-4", "flex", "items-center", "pointer-events-none", "text-slate-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["id", "userID", "formControlName", "userID", "type", "text", "placeholder", "Company ID, Employee ID, or Email", 1, "w-full", "pl-12", "pr-4", "py-3.5", "neo-input", "rounded-2xl", "text-white", "placeholder-slate-600", "text-sm", "focus:outline-none"], ["class", "text-rose-400 text-xs mt-1.5 pl-1", 4, "ngIf"], ["for", "password", 1, "block", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-slate-300", "mb-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"], ["id", "password", "formControlName", "password", "type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "w-full", "pl-12", "pr-4", "py-3.5", "neo-input", "rounded-2xl", "text-white", "placeholder-slate-600", "text-sm", "focus:outline-none"], ["type", "submit", 1, "w-full", "py-4", "px-6", "neo-button", "disabled:opacity-40", "disabled:cursor-not-allowed", "text-white", "font-extrabold", "text-sm", "rounded-2xl", "focus:outline-none", "flex", "items-center", "justify-center", "gap-2", "cursor-pointer", 3, "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M14 5l7 7m0 0l-7 7m7-7H3"], [1, "mt-8", "pt-6", "border-t", "border-white/10", "text-center"], [1, "text-xs", "text-slate-400"], ["routerLink", "/signup", 1, "text-indigo-400", "font-bold", "hover:text-indigo-300", "transition", "duration-150", "ml-1"], [1, "glass-quote-card", "p-6", "rounded-2xl", "relative", "my-4"], [1, "text-6xl", "font-serif", "text-indigo-400/30", "absolute", "-top-4", "-left-1", "pointer-events-none", "select-none"], [1, "relative", "z-10", "space-y-4"], [1, "text-lg", "lg:text-xl", "font-medium", "text-slate-100", "leading-relaxed", "tracking-tight", "italic"], [1, "flex", "items-center", "gap-3", "pt-3", "border-t", "border-white/5"], [1, "w-9", "h-9", "rounded-full", "bg-gradient-to-tr", "from-indigo-500", "to-purple-600", "flex", "items-center", "justify-center", "text-white", "font-extrabold", "text-xs", "shadow-md", "border", "border-white/20"], [1, "not-italic", "text-sm", "font-bold", "text-white", "block"], [1, "text-xs", "text-slate-400", "font-medium"], [1, "mb-6", "p-4", "rounded-2xl", "bg-rose-500/10", "border", "border-rose-500/30", "text-rose-300", "text-sm", "flex", "items-center", "gap-3", "backdrop-blur-md"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "flex-shrink-0", "text-rose-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "font-medium", "text-xs", "md:text-sm"], [1, "text-rose-400", "text-xs", "mt-1.5", "pl-1"], [4, "ngIf"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "WorkSync");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 14, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 12)(14, "div", 13)(15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div")(19, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Enterprise Glass Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Protected by 256-bit JWT Encryption");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 18)(24, "div", 19)(25, "div", 20)(26, "h3", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Enter your credentials to access your portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, LoginComponent_div_30_Template, 5, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "form", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_31_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div")(33, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " User ID / Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 26)(36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, LoginComponent_div_40_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div")(42, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 26)(45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, LoginComponent_div_49_Template, 3, 2, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "button", 34)(51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Sign In to Workspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "svg", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 37)(56, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, " Registering a new company? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " Create Organization \u2192 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedQuote);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f["userID"].touched && ctx.f["userID"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f["password"].touched && ctx.f["password"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: ["@keyframes _ngcontent-%COMP%_floatOrb1 {\n  0%, 100% { transform: translate(0px, 0px) scale(1); }\n  50% { transform: translate(30px, -40px) scale(1.1); }\n}\n\n@keyframes _ngcontent-%COMP%_floatOrb2 {\n  0%, 100% { transform: translate(0px, 0px) scale(1); }\n  50% { transform: translate(-30px, 40px) scale(1.15); }\n}\n\n.animate-orb-1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_floatOrb1 12s ease-in-out infinite;\n}\n\n.animate-orb-2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_floatOrb2 14s ease-in-out infinite;\n}\n\n\n\n.glass-container[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.65);\n  backdrop-filter: blur(28px) saturate(190%);\n  -webkit-backdrop-filter: blur(28px) saturate(190%);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  box-shadow: \n    inset 0 1px 1px 0 rgba(255, 255, 255, 0.15),\n    0 25px 60px -15px rgba(0, 0, 0, 0.8),\n    0 0 40px -10px rgba(99, 102, 241, 0.2);\n}\n\n\n\n.glass-quote-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.08);\n}\n\n\n\n.neo-input[_ngcontent-%COMP%] {\n  background: #070b14;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  box-shadow: \n    inset 3px 3px 6px rgba(0, 0, 0, 0.7),\n    inset -2px -2px 5px rgba(255, 255, 255, 0.03);\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.neo-input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(99, 102, 241, 0.6);\n  box-shadow: \n    inset 3px 3px 6px rgba(0, 0, 0, 0.7),\n    0 0 20px rgba(99, 102, 241, 0.35);\n}\n\n\n\n.neo-button[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);\n  box-shadow: \n    0 10px 25px -5px rgba(99, 102, 241, 0.5),\n    inset 0 1px 0 0 rgba(255, 255, 255, 0.3);\n  transition: all 0.25s ease;\n}\n\n.neo-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: \n    0 15px 35px -5px rgba(99, 102, 241, 0.65),\n    inset 0 1px 0 0 rgba(255, 255, 255, 0.4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLHVDQUF1QyxFQUFFO0VBQ3BELE1BQU0sNENBQTRDLEVBQUU7QUFDdEQ7O0FBRUE7RUFDRSxXQUFXLHVDQUF1QyxFQUFFO0VBQ3BELE1BQU0sNkNBQTZDLEVBQUU7QUFDdkQ7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0Usa0NBQWtDO0VBQ2xDLDBDQUEwQztFQUMxQyxrREFBa0Q7RUFDbEQsMkNBQTJDO0VBQzNDOzs7MENBR3dDO0FBQzFDOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLHFDQUFxQztFQUNyQywyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLDJDQUEyQztFQUMzQyxxREFBcUQ7QUFDdkQ7O0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQzs7aURBRStDO0VBQy9DLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQzs7cUNBRW1DO0FBQ3JDOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLDZEQUE2RDtFQUM3RDs7NENBRTBDO0VBQzFDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQjs7NENBRTBDO0FBQzVDIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIGZsb2F0T3JiMSB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpIHNjYWxlKDEpOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIC00MHB4KSBzY2FsZSgxLjEpOyB9XG59XG5cbkBrZXlmcmFtZXMgZmxvYXRPcmIyIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCkgc2NhbGUoMSk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwcHgsIDQwcHgpIHNjYWxlKDEuMTUpOyB9XG59XG5cbi5hbmltYXRlLW9yYi0xIHtcbiAgYW5pbWF0aW9uOiBmbG9hdE9yYjEgMTJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4uYW5pbWF0ZS1vcmItMiB7XG4gIGFuaW1hdGlvbjogZmxvYXRPcmIyIDE0cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLyogR2xhc3Ntb3JwaGlzbSBVbHRyYSBDb250YWluZXIgKi9cbi5nbGFzcy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuNjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjhweCkgc2F0dXJhdGUoMTkwJSk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI4cHgpIHNhdHVyYXRlKDE5MCUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xuICBib3gtc2hhZG93OiBcbiAgICBpbnNldCAwIDFweCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpLFxuICAgIDAgMjVweCA2MHB4IC0xNXB4IHJnYmEoMCwgMCwgMCwgMC44KSxcbiAgICAwIDAgNDBweCAtMTBweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4yKTtcbn1cblxuLyogR2xhc3MgQ2FyZCBJbnNldCBRdW90ZSBQYW5lbCAqL1xuLmdsYXNzLXF1b3RlLWNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbn1cblxuLyogTmVvbW9ycGhpYyBSZWNlc3NlZCBJbnNldCBJbnB1dCAqL1xuLm5lby1pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICMwNzBiMTQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyk7XG4gIGJveC1zaGFkb3c6IFxuICAgIGluc2V0IDNweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC43KSxcbiAgICBpbnNldCAtMnB4IC0ycHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xufVxuXG4ubmVvLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDk5LCAxMDIsIDI0MSwgMC42KTtcbiAgYm94LXNoYWRvdzogXG4gICAgaW5zZXQgM3B4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjcpLFxuICAgIDAgMCAyMHB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjM1KTtcbn1cblxuLyogTmVvbW9ycGhpYyBGbG9hdGluZyBCdXR0b24gKi9cbi5uZW8tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmNDZlNSAwJSwgIzdjM2FlZCAxMDAlKTtcbiAgYm94LXNoYWRvdzogXG4gICAgMCAxMHB4IDI1cHggLTVweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC41KSxcbiAgICBpbnNldCAwIDFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbn1cblxuLm5lby1idXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IFxuICAgIDAgMTVweCAzNXB4IC01cHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuNjUpLFxuICAgIGluc2V0IDAgMXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wdWJsaWMvY29tcG9uZW50cy9hdXRob3Jpc2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLHVDQUF1QyxFQUFFO0VBQ3BELE1BQU0sNENBQTRDLEVBQUU7QUFDdEQ7O0FBRUE7RUFDRSxXQUFXLHVDQUF1QyxFQUFFO0VBQ3BELE1BQU0sNkNBQTZDLEVBQUU7QUFDdkQ7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0Usa0NBQWtDO0VBQ2xDLDBDQUEwQztFQUMxQyxrREFBa0Q7RUFDbEQsMkNBQTJDO0VBQzNDOzs7MENBR3dDO0FBQzFDOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLHFDQUFxQztFQUNyQywyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLDJDQUEyQztFQUMzQyxxREFBcUQ7QUFDdkQ7O0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQzs7aURBRStDO0VBQy9DLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQzs7cUNBRW1DO0FBQ3JDOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLDZEQUE2RDtFQUM3RDs7NENBRTBDO0VBQzFDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQjs7NENBRTBDO0FBQzVDO0FBQ0Esd2tIQUF3a0giLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIGZsb2F0T3JiMSB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpIHNjYWxlKDEpOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIC00MHB4KSBzY2FsZSgxLjEpOyB9XG59XG5cbkBrZXlmcmFtZXMgZmxvYXRPcmIyIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCkgc2NhbGUoMSk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwcHgsIDQwcHgpIHNjYWxlKDEuMTUpOyB9XG59XG5cbi5hbmltYXRlLW9yYi0xIHtcbiAgYW5pbWF0aW9uOiBmbG9hdE9yYjEgMTJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4uYW5pbWF0ZS1vcmItMiB7XG4gIGFuaW1hdGlvbjogZmxvYXRPcmIyIDE0cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLyogR2xhc3Ntb3JwaGlzbSBVbHRyYSBDb250YWluZXIgKi9cbi5nbGFzcy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuNjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjhweCkgc2F0dXJhdGUoMTkwJSk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI4cHgpIHNhdHVyYXRlKDE5MCUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xuICBib3gtc2hhZG93OiBcbiAgICBpbnNldCAwIDFweCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpLFxuICAgIDAgMjVweCA2MHB4IC0xNXB4IHJnYmEoMCwgMCwgMCwgMC44KSxcbiAgICAwIDAgNDBweCAtMTBweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4yKTtcbn1cblxuLyogR2xhc3MgQ2FyZCBJbnNldCBRdW90ZSBQYW5lbCAqL1xuLmdsYXNzLXF1b3RlLWNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbn1cblxuLyogTmVvbW9ycGhpYyBSZWNlc3NlZCBJbnNldCBJbnB1dCAqL1xuLm5lby1pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICMwNzBiMTQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyk7XG4gIGJveC1zaGFkb3c6IFxuICAgIGluc2V0IDNweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC43KSxcbiAgICBpbnNldCAtMnB4IC0ycHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xufVxuXG4ubmVvLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDk5LCAxMDIsIDI0MSwgMC42KTtcbiAgYm94LXNoYWRvdzogXG4gICAgaW5zZXQgM3B4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjcpLFxuICAgIDAgMCAyMHB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjM1KTtcbn1cblxuLyogTmVvbW9ycGhpYyBGbG9hdGluZyBCdXR0b24gKi9cbi5uZW8tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmNDZlNSAwJSwgIzdjM2FlZCAxMDAlKTtcbiAgYm94LXNoYWRvdzogXG4gICAgMCAxMHB4IDI1cHggLTVweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC41KSxcbiAgICBpbnNldCAwIDFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbn1cblxuLm5lby1idXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IFxuICAgIDAgMTVweCAzNXB4IC01cHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuNjUpLFxuICAgIGluc2V0IDAgMXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4376:
/*!************************************************************************************!*\
  !*** ./src/app/modules/public/components/authorisation/signup/signup.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupComponent: () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api.service */ 8573);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/jwt.service */ 61);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _verification_otp_verification_otp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../verification-otp/verification-otp.component */ 1794);
// import { Component, OnInit } from '@angular/core';








function SignupComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Company Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignupComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Industry is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignupComponent_p_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignupComponent_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Invalid email format.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignupComponent_p_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Contact Number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignupComponent_p_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Invalid phone number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignupComponent_p_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignupComponent_p_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignupComponent_p_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Confirm Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignupComponent_p_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Passwords do not match.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignupComponent_p_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Working Time is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignupComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please accept the terms and conditions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignupComponent_app_verification_otp_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-verification-otp", 39);
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("companyData", ctx_r12.signupForm);
  }
}
class SignupComponent {
  ngOnInit() {
    // Demo alert removed for direct registration
  }
  constructor(fb, apiService, router, jwtService) {
    this.fb = fb;
    this.apiService = apiService;
    this.router = router;
    this.jwtService = jwtService;
    this.showOtpComp = false;
    this.isSubmitted = false;
    this.signupForm = this.fb.group({
      companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      industry: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      workingHours: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      contactEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      contactNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[0-9]{10}')]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      terms: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.requiredTrue]]
    });
  }
  canExit() {
    if (this.isSubmitted) {
      return true;
    }
    if (this.signupForm.dirty) {
      return confirm('you have unsaved changes do you really want to navigate away ?');
    } else {
      return true;
    }
  }
  canEnter() {
    const token = localStorage.getItem('yourToken');
  }
  onSubmit() {
    this.isSubmitted = true;
    this.signupFormData = this.signupForm.value;
    console.log(this.signupForm);
    this.apiService.userSignupPost(this.signupFormData).subscribe({
      next: res => {
        this.errorMessage = '';
        if (res.success && res.token) {
          this.jwtService.setToken(res.token);
          this.router.navigate(['/companyAdmin/dashboard']);
        } else {
          this.showOtpComp = true;
        }
      },
      error: err => {
        this.showOtpComp = false;
        this.errorMessage = err.error?.data?.message || err.error?.message || 'An error occurred during registration.';
        console.error(err);
      }
    });
  }
  static #_ = this.ɵfac = function SignupComponent_Factory(t) {
    return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_jwt_service__WEBPACK_IMPORTED_MODULE_1__.JwtService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SignupComponent,
    selectors: [["app-sigup"]],
    decls: 75,
    vars: 15,
    consts: [[1, "w-full", "min-h-full", "bg-gray-900", "p-5", "flex", "justify-center", "items-center"], [1, "max-w-4xl", "w-full", "bg-gray-800", "p-8", "rounded-lg", "shadow-lg"], [1, "text-3xl", "font-semibold", "text-white", "text-center", "mb-6"], [1, "md:grid", "md:grid-cols-2", "md:gap-14", "gap-2", "grid", "grid-cols-1", 3, "formGroup", "ngSubmit"], [1, "mt-4"], ["for", "companyName", 1, "block", "text-sm", "font-medium", "text-gray-300"], ["type", "text", "id", "companyName", "placeholder", "Enter Company Name ", "formControlName", "companyName", 1, "form-input", "mt-2", "block", "w-full", "rounded-md", "bg-gray-700", "text-white", "border-gray-600", "h-11", "pl-3"], ["class", "text-red-500 text-xs italic", 4, "ngIf"], ["for", "industry", 1, "block", "text-sm", "font-medium", "text-gray-300"], ["type", "text", "id", "industry", "placeholder", "Enter Your Industry ", "formControlName", "industry", 1, "form-input", "mt-2", "block", "w-full", "rounded-md", "bg-gray-700", "text-white", "border-gray-600", "h-11", "pl-3"], ["for", "contactEmail", 1, "block", "text-sm", "font-medium", "text-gray-300"], ["type", "email", "id", "contactEmail", "placeholder", "Enter Your Email Adress ", "formControlName", "contactEmail", 1, "form-input", "mt-2", "block", "w-full", "rounded-md", "bg-gray-700", "text-white", "border-gray-600", "h-11", "pl-3"], ["for", "contactNumber", 1, "block", "text-sm", "font-medium", "text-gray-300"], ["type", "tel", "id", "contactNumber", "placeholder", "Enter Your Contact Number ", "formControlName", "contactNumber", "pattern", "[0-9]{10,}", 1, "form-input", "mt-2", "block", "w-full", "rounded-md", "bg-gray-700", "text-white", "border-gray-600", "h-11", "pl-3"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-gray-300"], ["type", "password", "id", "password", "placeholder", "Enter Your Password ", "formControlName", "password", "pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$", 1, "form-input", "mt-2", "block", "w-full", "rounded-md", "bg-gray-700", "text-white", "border-gray-600", "h-11", "pl-3"], ["for", "confirmPassword", 1, "block", "text-sm", "font-medium", "text-gray-300"], ["type", "password", "id", "confirmPassword", "placeholder", "Enter Your Password Again For Confirmation ", "formControlName", "confirmPassword", 1, "form-input", "mt-2", "block", "w-full", "rounded-md", "bg-gray-700", "text-white", "border-gray-600", "h-11", "pl-3"], ["for", "workingTime", 1, "block", "text-sm", "font-medium", "text-gray-300"], ["id", "workingTimeStart", "placeholder", "Enter ", "formControlName", "workingHours", 1, "form-select", "mt-2", "block", "w-full", "rounded-md", "bg-gray-700", "text-white", "border-gray-600", "h-11", "pl-3"], ["selected", "", "disabled", "", "value", ""], ["value", "9:00-17:00"], ["value", "9:30-17:30"], ["value", "10:00-18:00"], ["value", "10:30-17:30"], ["value", "11:00-19:00"], ["value", "11:30-19:30"], [1, "mt-4", "text-white"], [1, "flex", "items-center"], ["type", "checkbox", "formControlName", "terms", 1, "form-checkbox"], [1, "ml-2"], ["class", "text-danger", 4, "ngIf"], [1, "md:col-start-2", "flex", "flex-col", "gap-2", "mt-4", "justify-end", "pt-8"], ["type", "submit", 1, "bg-blue-500", "hover:bg-blue-600", "text-white", "font-semibold", "py-2", "px-4", "rounded-md", 3, "disabled"], [1, "text-center", "text-gray-300", "text-sm", "mt-4"], ["routerLink", "/login", 1, "text-blue-500", "font-semibold"], [3, "companyData", 4, "ngIf"], [1, "text-red-500", "text-xs", "italic"], [1, "text-danger"], [3, "companyData"]],
    template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Create an Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_4_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "div", 4)(7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, SignupComponent_p_10_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 4)(12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SignupComponent_p_15_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 4)(17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Contact Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, SignupComponent_p_20_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, SignupComponent_p_21_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 4)(23, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, SignupComponent_p_26_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, SignupComponent_p_27_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div")(29, "div", 4)(30, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, SignupComponent_p_33_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, SignupComponent_p_34_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 4)(36, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, SignupComponent_p_39_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, SignupComponent_p_40_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 4)(42, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Working Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "select", 19)(45, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Select Your Working Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "9 AM - 5 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "9:30 AM - 5:30 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "10 AM - 6 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "10:30 AM - 6:30 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "8 AM - 4 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "8:30 AM - 4:30 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, SignupComponent_p_59_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 27)(61, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "I agree to the terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, SignupComponent_div_65_Template, 2, 0, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 32)(68, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Login here");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, SignupComponent_app_verification_otp_74_Template, 1, 1, "app-verification-otp", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_11_0;
        let tmp_12_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.signupForm.get("companyName")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx.signupForm.get("companyName")) == null ? null : tmp_1_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.signupForm.get("industry")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.signupForm.get("industry")) == null ? null : tmp_2_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.signupForm.get("contactEmail")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx.signupForm.get("contactEmail")) == null ? null : tmp_3_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.signupForm.get("contactEmail")) == null ? null : tmp_4_0.hasError("email")) && ((tmp_4_0 = ctx.signupForm.get("contactEmail")) == null ? null : tmp_4_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.signupForm.get("contactNumber")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.signupForm.get("contactNumber")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.signupForm.get("contactNumber")) == null ? null : tmp_6_0.hasError("pattern")) && ((tmp_6_0 = ctx.signupForm.get("contactNumber")) == null ? null : tmp_6_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.signupForm.get("password")) == null ? null : tmp_7_0.hasError("required")) && ((tmp_7_0 = ctx.signupForm.get("password")) == null ? null : tmp_7_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.signupForm.get("password")) == null ? null : tmp_8_0.hasError("pattern")) && ((tmp_8_0 = ctx.signupForm.get("password")) == null ? null : tmp_8_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.signupForm.get("confirmPassword")) == null ? null : tmp_9_0.hasError("required")) && ((tmp_9_0 = ctx.signupForm.get("confirmPassword")) == null ? null : tmp_9_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.signupForm.get("confirmPassword")) == null ? null : tmp_10_0.hasError("mismatchedPasswords")) && ((tmp_10_0 = ctx.signupForm.get("confirmPassword")) == null ? null : tmp_10_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.signupForm.get("workingTime")) == null ? null : tmp_11_0.hasError("required")) && (((tmp_11_0 = ctx.signupForm.get("workingTime")) == null ? null : tmp_11_0.touched) || ctx.isSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.signupForm.get("terms")) == null ? null : tmp_12_0.hasError("requiredTrue")) && ((tmp_12_0 = ctx.signupForm.get("terms")) == null ? null : tmp_12_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.signupForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showOtpComp);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _verification_otp_verification_otp_component__WEBPACK_IMPORTED_MODULE_2__.VerificationOtpComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wdWJsaWMvY29tcG9uZW50cy9hdXRob3Jpc2F0aW9uL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1794:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/public/components/authorisation/verification-otp/verification-otp.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerificationOtpComponent: () => (/* binding */ VerificationOtpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api.service */ 8573);
/* harmony import */ var src_app_services_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/jwt.service */ 61);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);







function VerificationOtpComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " OTP is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function VerificationOtpComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " OTP must be 6 digits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function VerificationOtpComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " OTP must be 6 digits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class VerificationOtpComponent {
  ngOnInit() {
    console.log(this.companyData.value);
  }
  constructor(apiService, jwtService, router) {
    this.apiService = apiService;
    this.jwtService = jwtService;
    this.router = router;
    this.verificationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(6)])
    });
  }
  submitOTP() {
    const {
      otp
    } = this.verificationForm.value;
    // Shallow copy to avoid circular references
    const companyDataCopy = {
      ...this.companyData.value
    };
    // Combine OTP with the copied data
    const combinedData = {
      ...companyDataCopy,
      otp: otp
    };
    this.apiService.verifyOtp(combinedData).subscribe({
      next: res => {
        if (res.success) {
          // Display success message in your component
          console.log('OTP verified successfully');
          this.validationResult = res.message;
          this.token = res.token;
          this.jwtService.setToken(this.token);
          const decodedtoken = this.jwtService.decodeToken(this.token);
          const role = decodedtoken?.role;
          const companyID = decodedtoken?.companyID;
          console.log(role, companyID);
          this.router.navigate(['/companyAdmin/dashboard']);
          // this.router.navigate(['/company'])
        } else {
          // Display failure message in your component
          console.log('OTP verification failed, please retry again');
          this.validationResult = res.message;
        }
      },
      error: err => {
        this.errorMessage = err.error?.data?.message || 'An error occurred.';
        console.error(err);
      }
    });
  }
  static #_ = this.ɵfac = function VerificationOtpComponent_Factory(t) {
    return new (t || VerificationOtpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_jwt_service__WEBPACK_IMPORTED_MODULE_1__.JwtService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: VerificationOtpComponent,
    selectors: [["app-verification-otp"]],
    inputs: {
      companyData: "companyData"
    },
    decls: 11,
    vars: 5,
    consts: [[1, "{", "'opacity-100':", "open,", "'hidden':", "!open", "}"], [1, "text-2xl", "mb-4"], [3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "otp", "placeholder", "Enter OTP", "maxlength", "6", 1, "w-full", "px-4", "py-2", "mb-4", "border", "rounded-md", "focus:outline-none", "focus:border-blue-500"], [4, "ngIf"], ["type", "submit", 1, "bg-blue-500", "text-white", "px-4", "py-2", "rounded-md", "hover:bg-blue-600"]],
    template: function VerificationOtpComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Enter OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function VerificationOtpComponent_Template_form_ngSubmit_4_listener() {
          return ctx.submitOTP();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, VerificationOtpComponent_div_6_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, VerificationOtpComponent_div_7_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, VerificationOtpComponent_div_8_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.validationResult, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.verificationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.verificationForm.get("otp")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]) && ctx.verificationForm.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.verificationForm.get("otp")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.verificationForm.get("otp")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["maxlength"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZmljYXRpb24tb3RwLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wdWJsaWMvY29tcG9uZW50cy9hdXRob3Jpc2F0aW9uL3ZlcmlmaWNhdGlvbi1vdHAvdmVyaWZpY2F0aW9uLW90cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnTEFBZ0wiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4638:
/*!**************************************************************************!*\
  !*** ./src/app/modules/public/components/notfound/notfound.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotfoundComponent: () => (/* binding */ NotfoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class NotfoundComponent {
  static #_ = this.ɵfac = function NotfoundComponent_Factory(t) {
    return new (t || NotfoundComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NotfoundComponent,
    selectors: [["app-notfound"]],
    decls: 50,
    vars: 0,
    consts: [[1, "w-full", "h-screen", "flex", "flex-col", "lg:flex-row", "items-center", "justify-center", "space-y-16", "lg:space-y-0", "space-x-8", "2xl:space-x-0"], [1, "w-full", "lg:w-1/2", "flex", "flex-col", "items-center", "justify-center", "lg:px-2", "xl:px-0", "text-center"], [1, "text-7xl", "md:text-8xl", "lg:text-9xl", "font-bold", "tracking-wider", "text-gray-300"], [1, "text-4xl", "md:text-5xl", "lg:text-6xl", "font-bold", "tracking-wider", "text-gray-300", "mt-2"], [1, "text-lg", "md:text-xl", "lg:text-2xl", "text-gray-500", "my-12"], ["href", "#", "title", "Return Home", 1, "flex", "items-center", "space-x-2", "bg-blue-600", "hover:bg-blue-700", "text-gray-100", "px-4", "py-2", "rounded", "transition", "duration-150"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5"], ["fill-rule", "evenodd", "d", "M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z", "clip-rule", "evenodd"], [1, "w-1/2", "lg:h-full", "flex", "lg:items-end", "justify-center", "p-4"], ["xmlns", "http://www.w3.org/2000/svg", "data-name", "Layer 1", "viewBox", "0 0 1120.59226 777.91584", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "w-full", "text-blue-600"], ["cx", "212.59226", "cy", "103", "r", "64", "fill", "#ff6584"], ["d", "M563.68016,404.16381c0,151.01141-89.77389,203.73895-200.51559,203.73895S162.649,555.17522,162.649,404.16381,363.16457,61.04208,363.16457,61.04208,563.68016,253.1524,563.68016,404.16381Z", "transform", "translate(-39.70387 -61.04208)", "fill", "#cbd5e1"], ["points", "316.156 523.761 318.21 397.378 403.674 241.024 318.532 377.552 319.455 320.725 378.357 207.605 319.699 305.687 319.699 305.687 321.359 203.481 384.433 113.423 321.621 187.409 322.658 0 316.138 248.096 316.674 237.861 252.547 139.704 315.646 257.508 309.671 371.654 309.493 368.625 235.565 265.329 309.269 379.328 308.522 393.603 308.388 393.818 308.449 394.99 293.29 684.589 313.544 684.589 315.974 535.005 389.496 421.285 316.156 523.761", "fill", "#3f3d56"], ["d", "M1160.29613,466.01367c0,123.61-73.4842,166.77-164.13156,166.77s-164.13156-43.16-164.13156-166.77S996.16457,185.15218,996.16457,185.15218,1160.29613,342.40364,1160.29613,466.01367Z", "transform", "translate(-39.70387 -61.04208)", "fill", "#cbd5e1"], ["points", "950.482 552.833 952.162 449.383 1022.119 321.4 952.426 433.154 953.182 386.639 1001.396 294.044 953.382 374.329 953.382 374.329 954.741 290.669 1006.369 216.952 954.954 277.514 955.804 124.11 950.467 327.188 950.906 318.811 898.414 238.464 950.064 334.893 945.173 428.327 945.027 425.847 884.514 341.294 944.844 434.608 944.232 446.293 944.123 446.469 944.173 447.428 931.764 684.478 948.343 684.478 950.332 562.037 1010.514 468.952 950.482 552.833", "fill", "#3f3d56"], ["cx", "554.59226", "cy", "680.47903", "rx", "554.59226", "ry", "28.03433", "fill", "#3f3d56"], ["cx", "892.44491", "cy", "726.79663", "rx", "94.98858", "ry", "4.80162", "fill", "#3f3d56"], ["cx", "548.71959", "cy", "773.11422", "rx", "94.98858", "ry", "4.80162", "fill", "#3f3d56"], ["cx", "287.94432", "cy", "734.27887", "rx", "217.01436", "ry", "10.96996", "fill", "#3f3d56"], ["cx", "97.08375", "cy", "566.26982", "r", "79", "fill", "#2f2e41"], ["x", "99.80546", "y", "689.02332", "width", "24", "height", "43", "transform", "translate(-31.32451 -62.31008) rotate(0.67509)", "fill", "#2f2e41"], ["x", "147.80213", "y", "689.58887", "width", "24", "height", "43", "transform", "translate(-31.31452 -62.87555) rotate(0.67509)", "fill", "#2f2e41"], ["cx", "119.54569", "cy", "732.61606", "rx", "7.5", "ry", "20", "transform", "translate(-654.1319 782.47948) rotate(-89.32491)", "fill", "#2f2e41"], ["cx", "167.55414", "cy", "732.18168", "rx", "7.5", "ry", "20", "transform", "translate(-606.25475 830.05533) rotate(-89.32491)", "fill", "#2f2e41"], ["cx", "99.31925", "cy", "546.29477", "r", "27", "fill", "#fff"], ["cx", "99.31925", "cy", "546.29477", "r", "9", "fill", "#3f3d56"], ["d", "M61.02588,552.94636c-6.04185-28.64075,14.68758-57.26483,46.30049-63.93367s62.13813,11.14292,68.18,39.78367-14.97834,38.93-46.59124,45.59886S67.06774,581.58712,61.02588,552.94636Z", "transform", "translate(-39.70387 -61.04208)", "fill", "currentColor"], ["d", "M257.29613,671.38411c0,55.07585-32.73985,74.3063-73.13,74.3063q-1.40351,0-2.80255-.0312c-1.87139-.04011-3.72494-.1292-5.55619-.254-36.45135-2.57979-64.77127-22.79937-64.77127-74.02113,0-53.00843,67.73872-119.89612,72.827-124.84633l.00892-.00889c.19608-.19159.29409-.28516.29409-.28516S257.29613,616.30827,257.29613,671.38411Z", "transform", "translate(-39.70387 -61.04208)", "fill", "currentColor"], ["d", "M181.50168,737.26482l26.747-37.37367-26.81386,41.4773-.07125,4.29076c-1.87139-.04011-3.72494-.1292-5.55619-.254l2.88282-55.10258-.0223-.42775.049-.0802.27179-5.20415-26.88076-41.5798,26.96539,37.67668.06244,1.105,2.17874-41.63324-23.0132-42.96551,23.29391,35.6583,2.26789-86.31419.00892-.294v.28516l-.37871,68.064,22.91079-26.98321-23.00435,32.84678-.60595,37.27566L204.18523,621.958l-21.4805,41.259-.33863,20.723,31.05561-49.79149-31.17146,57.023Z", "transform", "translate(-39.70387 -61.04208)", "fill", "#3f3d56"], ["cx", "712.48505", "cy", "565.41532", "r", "79", "fill", "#2f2e41"], ["x", "741.77716", "y", "691.82355", "width", "24", "height", "43", "transform", "translate(-215.99457 191.86399) rotate(-17.08345)", "fill", "#2f2e41"], ["x", "787.6593", "y", "677.72286", "width", "24", "height", "43", "transform", "matrix(0.95588, -0.29376, 0.29376, 0.95588, -209.82788, 204.72037)", "fill", "#2f2e41"], ["cx", "767.887", "cy", "732.00275", "rx", "20", "ry", "7.5", "transform", "translate(-220.8593 196.83312) rotate(-17.08345)", "fill", "#2f2e41"], ["cx", "813.47537", "cy", "716.94619", "rx", "20", "ry", "7.5", "transform", "translate(-214.42477 209.56103) rotate(-17.08345)", "fill", "#2f2e41"], ["cx", "708.52153", "cy", "545.71023", "r", "27", "fill", "#fff"], ["cx", "708.52153", "cy", "545.71023", "r", "9", "fill", "#3f3d56"], ["d", "M657.35526,578.74316c-14.48957-25.43323-3.47841-59.016,24.59412-75.0092s62.57592-8.34055,77.06549,17.09268-2.39072,41.6435-30.46325,57.63671S671.84483,604.17639,657.35526,578.74316Z", "transform", "translate(-39.70387 -61.04208)", "fill", "currentColor"], ["d", "M611.29613,661.29875c0,50.55711-30.05368,68.20979-67.13,68.20979q-1.28835,0-2.57261-.02864c-1.71785-.03682-3.41933-.1186-5.10033-.23313-33.46068-2.36813-59.45707-20.92878-59.45707-67.948,0-48.65932,62.18106-110.05916,66.85186-114.60322l.00819-.00817c.18-.17587.27-.26177.27-.26177S611.29613,610.74164,611.29613,661.29875Z", "transform", "translate(-39.70387 -61.04208)", "fill", "currentColor"], ["d", "M541.72029,721.77424l24.55253-34.30732-24.6139,38.07426-.0654,3.93872c-1.71785-.03682-3.41933-.1186-5.10033-.23313l2.6463-50.58165-.02047-.39266.045-.07361.24949-4.77718-24.67531-38.16836,24.753,34.58547.05731,1.01433,2-38.21741-21.12507-39.44039L541.80616,625.928l2.08182-79.23247.00819-.26994v.26177l-.34764,62.47962,21.031-24.76934-21.11693,30.15184-.55624,34.21735,19.63634-32.839-19.71812,37.87389-.31085,19.0228,28.50763-45.70631-28.614,52.34448Z", "transform", "translate(-39.70387 -61.04208)", "fill", "#3f3d56"], ["d", "M875.29613,682.38411c0,55.07585-32.73985,74.3063-73.13,74.3063q-1.4035,0-2.80255-.0312c-1.87139-.04011-3.72494-.1292-5.55619-.254-36.45135-2.57979-64.77127-22.79937-64.77127-74.02113,0-53.00843,67.73872-119.89612,72.827-124.84633l.00892-.00889c.19608-.19159.29409-.28516.29409-.28516S875.29613,627.30827,875.29613,682.38411Z", "transform", "translate(-39.70387 -61.04208)", "fill", "currentColor"], ["d", "M799.50168,748.26482l26.747-37.37367-26.81386,41.4773-.07125,4.29076c-1.87139-.04011-3.72494-.1292-5.55619-.254l2.88282-55.10258-.0223-.42775.049-.0802.27179-5.20415L770.108,654.01076l26.96539,37.67668.06244,1.105,2.17874-41.63324-23.0132-42.96551,23.29391,35.6583,2.26789-86.31419.00892-.294v.28516l-.37871,68.064,22.91079-26.98321-23.00435,32.84678-.606,37.27566L822.18523,632.958l-21.4805,41.259-.33863,20.723,31.05561-49.79149-31.17146,57.023Z", "transform", "translate(-39.70387 -61.04208)", "fill", "#3f3d56"], ["cx", "721.51694", "cy", "656.82212", "rx", "12.40027", "ry", "39.5", "transform", "translate(-220.83517 966.22323) rotate(-64.62574)", "fill", "#2f2e41"], ["cx", "112.51694", "cy", "651.82212", "rx", "12.40027", "ry", "39.5", "transform", "translate(-574.07936 452.71367) rotate(-68.15829)", "fill", "#2f2e41"]],
    template: function NotfoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sorry, the page you are looking for could not be found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Return Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 9)(15, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "circle", 10)(18, "path", 11)(19, "polygon", 12)(20, "path", 13)(21, "polygon", 14)(22, "ellipse", 15)(23, "ellipse", 16)(24, "ellipse", 17)(25, "ellipse", 18)(26, "circle", 19)(27, "rect", 20)(28, "rect", 21)(29, "ellipse", 22)(30, "ellipse", 23)(31, "circle", 24)(32, "circle", 25)(33, "path", 26)(34, "path", 27)(35, "path", 28)(36, "circle", 29)(37, "rect", 30)(38, "rect", 31)(39, "ellipse", 32)(40, "ellipse", 33)(41, "circle", 34)(42, "circle", 35)(43, "path", 36)(44, "path", 37)(45, "path", 38)(46, "path", 39)(47, "path", 40)(48, "ellipse", 41)(49, "ellipse", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Rmb3VuZC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wdWJsaWMvY29tcG9uZW50cy9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1408:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/public/components/publichomepage/landingpage/featurespage/featurespage.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturespageComponent: () => (/* binding */ FeaturespageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FeaturespageComponent {
  static #_ = this.ɵfac = function FeaturespageComponent_Factory(t) {
    return new (t || FeaturespageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FeaturespageComponent,
    selectors: [["app-featurespage"]],
    decls: 62,
    vars: 0,
    consts: [[1, "min-h-screen", "bg-gray-300", "text-black", "flex", "flex-col", "justify-center", "items-center", "flex-wrap"], [1, "text-2xl", "text-blue-950", "font-semibold", "mb-4"], [1, "text-4xl", "text-center", "mb-8", "font-bold"], [1, "flex", "flex-wrap", "justify-center", "gap-7"], [1, "group"], [1, "bg-gray-200", "p-8", "m-4", "rounded-full", "flex", "justify-center", "items-center", "transition", "duration-300", "transform", "hover:scale-110", "hover:bg-red-500", "shadow-xl"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-10", "h-10"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"], [1, "hidden", "group-hover:block", "z-20", "absolute", "p-4", "bg-gray-800", "text-white", "rounded-md", "mt-2"], [1, "font-bold"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"], [1, "font-semibold"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"]],
    template: function FeaturespageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "WE DO MORE FOR YOUR WORLD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Let's Simplify Your Work, Amplify Your Results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " with WorkSync");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8)(13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Attendance Tracking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Efficiently Track employees attendence and time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4)(18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8)(22, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Notify employees/department about events customly ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4)(27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8)(31, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "assign task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "assign tasks to employees&departments customly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4)(36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8)(40, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "chat session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "custom chat session with employees&hr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4)(45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8)(49, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "private feed session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "personalised feed session for organisation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4)(54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8)(58, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Job session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Organisations can set job vacancy and conduct vediocall interview session with appleid candidates.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlc3BhZ2UuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wdWJsaWMvY29tcG9uZW50cy9wdWJsaWNob21lcGFnZS9sYW5kaW5ncGFnZS9mZWF0dXJlc3BhZ2UvZmVhdHVyZXNwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 186:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/public/components/publichomepage/landingpage/firstpage/firstpage.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirstpageComponent: () => (/* binding */ FirstpageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FirstpageComponent {
  static #_ = this.ɵfac = function FirstpageComponent_Factory(t) {
    return new (t || FirstpageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FirstpageComponent,
    selectors: [["app-firstpage"]],
    decls: 10,
    vars: 0,
    consts: [[1, "flex", "justify-center", "items-center", "flex-col", "h-full", "font-sans", "text-center", "text-white", "leading-snug"], [1, "text-4xl", "md:text-7xl", "font-bold"], [1, "text-lg", "md:text-3xl", "font-semibold", "mt-2", "md:mt-4"], [1, "text-lg", "md:text-3xl", "font-semibold", "animate-pulse", "mt-2"], [1, "px-4", "py-2", "text-base", "mt-3", "md:text-lg", "bg-blue-500", "text-white", "rounded-full", "hover:bg-blue-700", "focus:outline-none", "focus:ring", "focus:border-blue-300"]],
    template: function FirstpageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "workSync");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sync, Simplify, Succeed - That's WorkSync.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Connect With Us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span")(8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Learn more. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXJzdHBhZ2UuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wdWJsaWMvY29tcG9uZW50cy9wdWJsaWNob21lcGFnZS9sYW5kaW5ncGFnZS9maXJzdHBhZ2UvZmlyc3RwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5204:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/public/components/publichomepage/landingpage/footer/footer.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FooterComponent {
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 96,
    vars: 0,
    consts: [[1, "bg-white", "dark:bg-gray-800"], [1, "mx-auto", "w-full", "max-w-screen-xl"], [1, "grid", "grid-cols-2", "gap-8", "px-4", "py-6", "lg:py-8", "md:grid-cols-4"], [1, "mb-6", "text-sm", "font-semibold", "text-gray-900", "uppercase", "dark:text-white"], [1, "text-gray-500", "dark:text-gray-400", "font-medium"], [1, "mb-4"], ["href", "#", 1, "hover:underline"], [1, "px-4", "py-6", "bg-gray-100", "dark:bg-gray-700", "md:flex", "md:items-center", "md:justify-between"], [1, "text-sm", "text-gray-500", "dark:text-gray-300", "sm:text-center"], ["href", "https://flowbite.com/"], [1, "flex", "mt-4", "sm:justify-center", "md:mt-0", "space-x-5", "rtl:space-x-reverse"], ["href", "#", 1, "text-gray-400", "hover:text-gray-900", "dark:hover:text-white"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 8 19", 1, "w-4", "h-4"], ["fill-rule", "evenodd", "d", "M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z", "clip-rule", "evenodd"], [1, "sr-only"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 21 16", 1, "w-4", "h-4"], ["d", "M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 20 17", 1, "w-4", "h-4"], ["fill-rule", "evenodd", "d", "M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z", "clip-rule", "evenodd"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-4", "h-4"], ["fill-rule", "evenodd", "d", "M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z", "clip-rule", "evenodd"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4)(7, "li", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5)(11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5)(14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Brand Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 5)(17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div")(20, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Help center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 4)(23, "li", 5)(24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Discord Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 5)(27, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 5)(30, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 5)(33, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div")(36, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Legal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 4)(39, "li", 5)(40, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 5)(43, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Licensing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 5)(46, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div")(49, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul", 4)(52, "li", 5)(53, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "iOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 5)(56, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Android");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 5)(59, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Windows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 5)(62, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "MacOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 7)(65, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u00A9 2023 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Flowbite\u2122");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, ". All Rights Reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 10)(71, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Facebook page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Discord community");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Twitter page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "GitHub account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Dribbble account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wdWJsaWMvY29tcG9uZW50cy9wdWJsaWNob21lcGFnZS9sYW5kaW5ncGFnZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7307:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/public/components/publichomepage/landingpage/landingpage.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingpageComponent: () => (/* binding */ LandingpageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar.component */ 3965);
/* harmony import */ var _firstpage_firstpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firstpage/firstpage.component */ 186);
/* harmony import */ var _featurespage_featurespage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./featurespage/featurespage.component */ 1408);
/* harmony import */ var _thirdpage_thirdpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thirdpage/thirdpage.component */ 1807);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 5204);






class LandingpageComponent {
  static #_ = this.ɵfac = function LandingpageComponent_Factory(t) {
    return new (t || LandingpageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: LandingpageComponent,
    selectors: [["app-landingpage"]],
    decls: 7,
    vars: 0,
    consts: [[1, "flex", "flex-col", "bg-landingphoto", "bg-no-repeat", "md:bg-cover", "bg-center", "min-h-screen", "max-w-100", "overflow-hidden"], [1, "flex-1", "grid", "items-center"], ["id", "third-page"], ["thirdPage", ""]],
    template: function LandingpageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-navbar")(2, "app-firstpage", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-featurespage")(4, "app-thirdpage", 2, 3)(6, "app-footer");
      }
    },
    dependencies: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _firstpage_firstpage_component__WEBPACK_IMPORTED_MODULE_1__.FirstpageComponent, _featurespage_featurespage_component__WEBPACK_IMPORTED_MODULE_2__.FeaturespageComponent, _thirdpage_thirdpage_component__WEBPACK_IMPORTED_MODULE_3__.ThirdpageComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5ncGFnZS5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wdWJsaWMvY29tcG9uZW50cy9wdWJsaWNob21lcGFnZS9sYW5kaW5ncGFnZS9sYW5kaW5ncGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3965:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/public/components/publichomepage/landingpage/navbar/navbar.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


const _c0 = ["thirdPage"];
class NavbarComponent {
  scrollToThirdPage(event) {
    event.preventDefault();
    this.thirdPage.nativeElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    viewQuery: function NavbarComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.thirdPage = _t.first);
      }
    },
    decls: 28,
    vars: 0,
    consts: [[1, "bg-white", "border-gray-200", "dark:bg-gray-900", "fixed", "w-full", "z-[1000]"], [1, "max-w-screen-xl", "flex", "flex-wrap", "items-center", "justify-between", "mx-auto", "p-4"], ["href", "/#", 1, "flex", "items-center", "space-x-3", "rtl:space-x-reverse"], ["src", "https://flowbite.com/docs/images/logo.svg", "alt", "Flowbite Logo", 1, "h-8"], [1, "self-center", "text-2xl", "font-semibold", "whitespace-nowrap", "dark:text-white"], [1, "flex", "md:order-2", "space-x-3", "md:space-x-0", "rtl:space-x-reverse"], ["type", "button", "routerLink", "/signup", 1, "text-white", "bg-blue-700", "hover:bg-blue-800", "focus:ring-4", "focus:outline-none", "focus:ring-blue-300", "font-medium", "rounded-lg", "text-sm", "px-4", "py-2", "text-center", "transition-all", "duration-300", "ease-in-out", "transform", "hover:scale-105", "dark:bg-blue-600", "dark:hover:bg-blue-700", "dark:focus:ring-blue-800"], ["data-collapse-toggle", "navbar-cta", "type", "button", "aria-controls", "navbar-cta", "aria-expanded", "false", 1, "inline-flex", "items-center", "p-2", "w-10", "h-10", "justify-center", "text-sm", "text-gray-500", "rounded-lg", "md:hidden", "hover:bg-gray-100", "focus:outline-none", "focus:ring-2", "focus:ring-gray-200", "dark:text-gray-400", "dark:hover:bg-gray-700", "dark:focus:ring-gray-600"], [1, "sr-only"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 17 14", 1, "w-5", "h-5"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M1 1h15M1 7h15M1 13h15"], ["id", "navbar-cta", 1, "items-center", "justify-between", "hidden", "w-full", "md:flex", "md:w-auto", "md:order-1", "transition-all", "duration-300", "ease-in-out"], [1, "flex", "flex-col", "font-medium", "p-4", "md:p-0", "mt-4", "border", "border-gray-100", "rounded-lg", "bg-gray-50", "md:space-x-8", "rtl:space-x-reverse", "md:flex-row", "md:mt-0", "md:border-0", "md:bg-white", "dark:bg-gray-800", "md:dark:bg-gray-900", "dark:border-gray-700"], ["routerLink", "/", "aria-current", "page", 1, "block", "py-2", "px-3", "md:p-0", "text-white", "bg-blue-700", "rounded", "md:bg-transparent", "md:text-blue-700", "md:dark:text-blue-500", "transition-all", "duration-300", "ease-in-out", "hover:bg-blue-800", "hover:text-white"], ["href", "#", 1, "block", "py-2", "px-3", "md:p-0", "text-gray-900", "rounded", "hover:bg-gray-100", "md:hover:bg-transparent", "md:hover:text-blue-700", "d:dark:hover:text-blue-500", "dark:text-white", "dark:hover:bg-gray-700", "dark:hover:text-white", "md:dark:hover:bg-transparent", "dark:border-gray-700", "transition-all", "duration-300", "ease-in-out"], ["href", "#third-page", 1, "block", "py-2", "px-3", "md:p-0", "text-gray-900", "rounded", "hover:bg-gray-100", "md:hover:bg-transparent", "md:hover:text-blue-700", "md:dark:hover:text-blue-500", "dark:text-white", "dark:hover:bg-gray-700", "dark:hover:text-white", "md:dark:hover:bg-transparent", "dark:border-gray-700", "transition-all", "duration-300", "ease-in-out", 3, "click"], ["href", "#", 1, "block", "py-2", "px-3", "md:p-0", "text-gray-900", "rounded", "hover:bg-gray-100", "md:hover:bg-transparent", "md:hover:text-blue-700", "md:dark:hover:text-blue-500", "dark:text-white", "dark:hover:bg-gray-700", "dark:hover:text-white", "md:dark:hover:bg-transparent", "dark:border-gray-700", "transition-all", "duration-300", "ease-in-out"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "workSync");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Get started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7)(10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Open main menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11)(15, "ul", 12)(16, "li")(17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li")(23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_23_listener($event) {
          return ctx.scrollToThirdPage($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li")(26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wdWJsaWMvY29tcG9uZW50cy9wdWJsaWNob21lcGFnZS9sYW5kaW5ncGFnZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1807:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/public/components/publichomepage/landingpage/thirdpage/thirdpage.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThirdpageComponent: () => (/* binding */ ThirdpageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ThirdpageComponent {
  static #_ = this.ɵfac = function ThirdpageComponent_Factory(t) {
    return new (t || ThirdpageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ThirdpageComponent,
    selectors: [["app-thirdpage"]],
    decls: 36,
    vars: 0,
    consts: [[1, "min-h-screen", "bg-gray-900", "text-gray-300", "flex", "flex-col", "justify-center", "items-center", "gap-16", "flex-wrap", "max-w-[100%]"], [1, "flex", "justify-center", "items-center", "flex-col"], [1, "text-xl", "text-gray-300", "mb-1"], [1, "text-3xl", "text-center", "mb-8", "font-bold"], [1, "flex-grow-1", "flex", "md:flex-row", "flex-col"], [1, "bg-gray-300", "p-8", "m-2", "rounded-lg", "flex", "flex-col", "items-center", "transition", "transform", "hover:scale-105"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "white", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "navy", 1, "w-20", "h-20", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"], [1, "text-l", "text-black", "font-bold", "mb-4"], [1, "text-base", "text-gray-700"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12ZM6.75 15h.008v.008H6.75V15ZM6.75 18h.008v.008H6.75V18Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"]],
    template: function ThirdpageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "HOW WORKSYNC WORKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Let's get started In Just three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Easy steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "1. CONTACT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Touch base with us and learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " about our plan and tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "2. REGISTER WITH US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Share about your organisation and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " create your tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "3. It's all done.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Share about your organisation and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " create your tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aGlyZHBhZ2UuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wdWJsaWMvY29tcG9uZW50cy9wdWJsaWNob21lcGFnZS9sYW5kaW5ncGFnZS90aGlyZHBhZ2UvdGhpcmRwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2013:
/*!******************************************************************************!*\
  !*** ./src/app/modules/public/components/publicview/publicview.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicviewComponent: () => (/* binding */ PublicviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class PublicviewComponent {
  static #_ = this.ɵfac = function PublicviewComponent_Factory(t) {
    return new (t || PublicviewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PublicviewComponent,
    selectors: [["app-publicview"]],
    decls: 1,
    vars: 0,
    template: function PublicviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaWN2aWV3LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wdWJsaWMvY29tcG9uZW50cy9wdWJsaWN2aWV3L3B1YmxpY3ZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3917:
/*!**********************************************************!*\
  !*** ./src/app/modules/public/public-rounting.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicRoutingModule: () => (/* binding */ PublicRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_publichomepage_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/publichomepage/landingpage/landingpage.component */ 7307);
/* harmony import */ var _components_authorisation_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/authorisation/signup/signup.component */ 4376);
/* harmony import */ var _components_authorisation_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/authorisation/login/login.component */ 199);
/* harmony import */ var src_app_guards_LoggedIn_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/LoggedIn.guard */ 9434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: '',
  component: _components_publichomepage_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_0__.LandingpageComponent,
  canActivate: [src_app_guards_LoggedIn_guard__WEBPACK_IMPORTED_MODULE_3__.LoggedAuthGuard]
}, {
  path: 'login',
  component: _components_authorisation_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
  canActivate: [src_app_guards_LoggedIn_guard__WEBPACK_IMPORTED_MODULE_3__.LoggedAuthGuard]
}, {
  path: 'signup',
  component: _components_authorisation_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent,
  canActivate: [src_app_guards_LoggedIn_guard__WEBPACK_IMPORTED_MODULE_3__.LoggedAuthGuard],
  canDeactivate: [comp => {
    return comp.canExit();
  }] // Route for /signup path
}, {
  path: 'register',
  redirectTo: 'signup',
  pathMatch: 'full'
}];
class PublicRoutingModule {
  static #_ = this.ɵfac = function PublicRoutingModule_Factory(t) {
    return new (t || PublicRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: PublicRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PublicRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 5116:
/*!*************************************************!*\
  !*** ./src/app/modules/public/public.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicModule: () => (/* binding */ PublicModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_publichomepage_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/publichomepage/landingpage/landingpage.component */ 7307);
/* harmony import */ var _components_publichomepage_landingpage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/publichomepage/landingpage/navbar/navbar.component */ 3965);
/* harmony import */ var _components_publichomepage_landingpage_firstpage_firstpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/publichomepage/landingpage/firstpage/firstpage.component */ 186);
/* harmony import */ var _components_publichomepage_landingpage_featurespage_featurespage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/publichomepage/landingpage/featurespage/featurespage.component */ 1408);
/* harmony import */ var _components_publichomepage_landingpage_thirdpage_thirdpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/publichomepage/landingpage/thirdpage/thirdpage.component */ 1807);
/* harmony import */ var _components_publichomepage_landingpage_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/publichomepage/landingpage/footer/footer.component */ 5204);
/* harmony import */ var _components_authorisation_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/authorisation/login/login.component */ 199);
/* harmony import */ var _public_rounting_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./public-rounting.module */ 3917);
/* harmony import */ var _components_authorisation_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/authorisation/signup/signup.component */ 4376);
/* harmony import */ var _components_publicview_publicview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/publicview/publicview.component */ 2013);
/* harmony import */ var _components_authorisation_verification_otp_verification_otp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/authorisation/verification-otp/verification-otp.component */ 1794);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/notfound/notfound.component */ 4638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
















_components_authorisation_verification_otp_verification_otp_component__WEBPACK_IMPORTED_MODULE_10__.VerificationOtpComponent;
class PublicModule {
  static #_ = this.ɵfac = function PublicModule_Factory(t) {
    return new (t || PublicModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: PublicModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _public_rounting_module__WEBPACK_IMPORTED_MODULE_7__.PublicRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](PublicModule, {
    declarations: [_components_publichomepage_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_0__.LandingpageComponent, _components_publichomepage_landingpage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _components_publichomepage_landingpage_firstpage_firstpage_component__WEBPACK_IMPORTED_MODULE_2__.FirstpageComponent, _components_publichomepage_landingpage_featurespage_featurespage_component__WEBPACK_IMPORTED_MODULE_3__.FeaturespageComponent, _components_publichomepage_landingpage_thirdpage_thirdpage_component__WEBPACK_IMPORTED_MODULE_4__.ThirdpageComponent, _components_publichomepage_landingpage_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _components_authorisation_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__.SignupComponent, _components_authorisation_login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent, _components_publicview_publicview_component__WEBPACK_IMPORTED_MODULE_9__.PublicviewComponent, _components_authorisation_verification_otp_verification_otp_component__WEBPACK_IMPORTED_MODULE_10__.VerificationOtpComponent, _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__.NotfoundComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _public_rounting_module__WEBPACK_IMPORTED_MODULE_7__.PublicRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule],
    exports: [_components_publichomepage_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_0__.LandingpageComponent, _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__.NotfoundComponent, _components_publichomepage_landingpage_featurespage_featurespage_component__WEBPACK_IMPORTED_MODULE_3__.FeaturespageComponent]
  });
})();

/***/ }),

/***/ 8573:
/*!********************************************************!*\
  !*** ./src/app/modules/public/services/api.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




const httpOptions = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
    'Content-Type': 'application/json'
  })
};
class ApiService {
  constructor(http) {
    this.http = http;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.userapi = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  userSignupPost(data) {
    return this.http.post(`${this.userapi}/signup`, data, httpOptions);
  }
  verifyOtp(otp) {
    console.log('request generaated');
    return this.http.post(`${this.userapi}/verify-otp`, {
      otp
    }, httpOptions);
  }
  login(data) {
    return this.http.post(`${this.apiUrl}/login`, data, httpOptions);
  }
  static #_ = this.ɵfac = function ApiService_Factory(t) {
    return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ApiService,
    factory: ApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9521:
/*!********************************************************************!*\
  !*** ./src/app/modules/shared/components/about/about.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _public_components_publichomepage_landingpage_featurespage_featurespage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/components/publichomepage/landingpage/featurespage/featurespage.component */ 1408);


class AboutComponent {
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 1,
    vars: 0,
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-featurespage");
      }
    },
    dependencies: [_public_components_publichomepage_landingpage_featurespage_featurespage_component__WEBPACK_IMPORTED_MODULE_0__.FeaturespageComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5089:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/attendencecalender/attendencecalender.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttendencecalenderComponent: () => (/* binding */ AttendencecalenderComponent)
/* harmony export */ });
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/interaction */ 7068);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ 8566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_attendence_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/attendence.service */ 6646);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/angular */ 6514);






function AttendencecalenderComponent_full_calendar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "full-calendar", 8);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.calendarOptions);
  }
}
class AttendencecalenderComponent {
  constructor(attendance) {
    this.attendance = attendance;
    this.showCalendar = false;
    this.eventsArray = [];
    this.rawAttendanceData = [];
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__["default"]],
      dateClick: arg => this.handleDateClick(arg),
      events: this.eventsArray
    };
  }
  handleDateClick(arg) {
    const clickedDate = arg.dateStr;
    const record = this.rawAttendanceData.find(item => item.date === clickedDate);
    if (record) {
      const checkIn = record.checkIn || 'Not Recorded';
      const checkOut = record.checkOut || record.checkout || (record.status === 'present' || record.status === 'late' ? 'In Progress / None' : 'N/A');
      const statusStr = record.status ? record.status.toUpperCase() : 'RECORDED';
      alert(`📅 Date: ${clickedDate}\n\nStatus: ${statusStr}\n⏰ Check-In Time: ${checkIn}\n🚪 Check-Out Time: ${checkOut}`);
    } else {
      alert(`📅 Date: ${clickedDate}\n\nNo check-in or attendance record found for this day.`);
    }
  }
  ngOnInit() {
    this.attendance.attandanceCalendar().subscribe({
      next: res => {
        console.log('Attendance calendar response:', res);
        if (res.success) {
          const list = res.data || res.attendance || res.calendarDataEmp || [];
          this.rawAttendanceData = list;
          this.eventsArray = list.map(el => ({
            title: el.title && el.title !== 'dd' ? el.title : el.status === 'present' ? 'Present' : el.status === 'late' ? 'Late' : 'Leave',
            start: el.date || el.start,
            color: el.color && el.color !== 'black' && el.color !== 'green' && el.color !== 'red' && el.color !== 'yellow' ? el.color : el.status === 'present' || el.color === 'green' ? '#22c55e' : el.status === 'late' || el.color === 'yellow' ? '#eab308' : '#ef4444'
          }));
          this.calendarOptions = {
            ...this.calendarOptions,
            dateClick: arg => this.handleDateClick(arg),
            events: [...this.eventsArray]
          };
          this.showCalendar = true;
        }
      },
      error: err => {
        console.error(err);
      }
    });
  }
  static #_ = this.ɵfac = function AttendencecalenderComponent_Factory(t) {
    return new (t || AttendencecalenderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_attendence_service__WEBPACK_IMPORTED_MODULE_0__.AttendenceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AttendencecalenderComponent,
    selectors: [["app-attendencecalender"]],
    decls: 13,
    vars: 1,
    consts: [[1, "w-full", "h-full", "bg-gray-900", "flex", "flex-col", "justify-center", "items-center"], [1, "md:w-6/12", "md:p-8", "p-2", "rounded-md", "gap-4"], ["class", "bg-white", 3, "options", 4, "ngIf"], [1, "grid", "grid-cols-3", "gap-3"], [1, "text-white"], ["src", "./../../../../../assets/WhatsApp Image 2024-05-02 at 15.16.11_3d15a527.jpg", "alt", ""], ["src", "./../../../../../assets/WhatsApp Image 2024-05-02 at 15.16.43_ba773683.jpg", "alt", ""], ["src", "./../../../../../assets/WhatsApp Image 2024-05-02 at 15.17.31_07f16556.jpg", "alt", ""], [1, "bg-white", 3, "options"]],
    template: function AttendencecalenderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AttendencecalenderComponent_full_calendar_2_Template, 1, 1, "full-calendar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Present");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Late ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showCalendar);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__.FullCalendarComponent],
    styles: [".events[_ngcontent-%COMP%]{\n    \n\n    height: 30px;\n}\n.rounded-event[_ngcontent-%COMP%] {\n    \n\n    width: 100px;\n    height: 30px;\n    margin: 5px;\n    border-radius: 50%; \n\n    background-color: red; \n\n    color: white; \n\n    text-align: center;\n    padding: 5px; \n\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGVuZGVuY2VjYWxlbmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0IsRUFBRSwwQkFBMEI7SUFDOUMscUJBQXFCLEVBQUUsc0NBQXNDO0lBQzdELFlBQVksRUFBRSxtQ0FBbUM7SUFDakQsa0JBQWtCO0lBQ2xCLFlBQVksRUFBRSwrQkFBK0I7RUFDL0MiLCJmaWxlIjoiYXR0ZW5kZW5jZWNhbGVuZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbnRze1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDQwMHB4OyAqL1xuICAgIGhlaWdodDogMzBweDtcbn1cbi5yb3VuZGVkLWV2ZW50IHtcbiAgICAvKiBBZGp1c3Qgc2l6ZSBhbmQgbWFyZ2luIGFzIG5lZWRlZCAqL1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyAvKiBTZXQgZGVzaXJlZCByb3VuZG5lc3MgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IC8qIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIGFzIG5lZWRlZCAqL1xuICAgIGNvbG9yOiB3aGl0ZTsgLyogQWRqdXN0IHRleHQgY29sb3IgZm9yIGNvbnRyYXN0ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDsgLyogQWRqdXN0IHBhZGRpbmcgdG8gZml0IHRleHQgKi9cbiAgfVxuICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9hdHRlbmRlbmNlY2FsZW5kZXIvYXR0ZW5kZW5jZWNhbGVuZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQixFQUFFLDBCQUEwQjtJQUM5QyxxQkFBcUIsRUFBRSxzQ0FBc0M7SUFDN0QsWUFBWSxFQUFFLG1DQUFtQztJQUNqRCxrQkFBa0I7SUFDbEIsWUFBWSxFQUFFLCtCQUErQjtFQUMvQzs7QUFFRixnbENBQWdsQyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVudHN7XG4gICAgLyogYm9yZGVyLXJhZGl1czogNDAwcHg7ICovXG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuLnJvdW5kZWQtZXZlbnQge1xuICAgIC8qIEFkanVzdCBzaXplIGFuZCBtYXJnaW4gYXMgbmVlZGVkICovXG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IC8qIFNldCBkZXNpcmVkIHJvdW5kbmVzcyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDsgLyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3IgYXMgbmVlZGVkICovXG4gICAgY29sb3I6IHdoaXRlOyAvKiBBZGp1c3QgdGV4dCBjb2xvciBmb3IgY29udHJhc3QgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4OyAvKiBBZGp1c3QgcGFkZGluZyB0byBmaXQgdGV4dCAqL1xuICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 758:
/*!**********************************************************************!*\
  !*** ./src/app/modules/shared/components/camera/camera.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CameraComponent: () => (/* binding */ CameraComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _services_attendence_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/attendence.service */ 6646);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webcam */ 2477);






function CameraComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "webcam", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imageCapture", function CameraComponent_div_0_div_5_Template_webcam_imageCapture_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.snapshot($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10)(3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraComponent_div_0_div_5_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.captureImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraComponent_div_0_div_5_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.ofCam());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Turn off camera ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("trigger", ctx_r3.$trigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.btnLabel, " ");
  }
}
function CameraComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraComponent_div_0_div_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.checkPermissions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Retry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CameraComponent_div_0_div_8_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.uploadImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.loading ? "Submitting..." : "Submit", " ");
  }
}
function CameraComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Your Button Text ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CameraComponent_div_0_div_5_Template, 7, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CameraComponent_div_0_div_8_Template, 5, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Web camera status: ", ctx_r0.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.stream);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.previewImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showImage);
  }
}
function CameraComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 17)(2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class CameraComponent {
  constructor(attendence) {
    this.attendence = attendence;
    this.stream = null;
    this.getPicuture = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.getResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.status = null;
    // action:string='dcs'
    this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.btnLabel = 'captureImage';
    this.cameraLoaded = false;
    this.showImage = false;
    this.loading = false;
  }
  get $trigger() {
    return this.trigger.asObservable();
  }
  checkPermissions() {
    // This is to check whether there is permission for camera access
    // This is just a JavaScript code snippet and not related to ngx webcam navigator
    navigator.mediaDevices.getUserMedia({
      video: {
        width: 500,
        height: 500
      }
    }).then(stream => {
      // Handle successful permission here
      console.log('Camera access granted');
      this.status = 'cammera access granted';
      this.stream = stream;
      this.btnLabel = 'capture image';
      this.cameraLoaded = true;
    }).catch(err => {
      // Handle errors
      console.log('Error:', err);
      this.status = err;
    });
  }
  ngOnInit() {
    this.checkPermissions();
  }
  captureImage() {
    this.trigger.next();
    this.showImage = true;
  }
  // Function to handle image upload
  uploadImage() {
    // Create a new FormData object to prepare the data for an HTTP request.
    this.loading = true;
    const formData = new FormData();
    // Extract the base64-encoded part of the previewImage (remove the data URI prefix).
    const base64 = this.previewImage.split(',')[1];
    // Convert the base64-encoded string to a Blob.
    const imageBlob = this.dataURItoBlob(base64);
    // Set a name for the image file.
    const imageName = 'name.png';
    // Create a File object from the Blob, providing a name and MIME type.
    const imageFile = new File([imageBlob], imageName, {
      type: 'image/png'
    });
    // Log the created File object to the console.
    console.log(imageFile, 'IHIHIIH');
    // Append the File object to the FormData under the key 'photo'.
    formData.append('photo', imageFile);
    // Make an HTTP POST request with the FormData to a service or API endpoint.
    this.attendence.postattendence(formData, this.action).subscribe({
      // Log the response if the request is successful.
      next: res => {
        this.loading = true;
        // console.log(res);
        this.getResponse.emit(res);
      },
      // Log any errors that occur during the request.
      error: err => {
        // console.log(err);
        this.getResponse.emit(err);
      }
    });
  }
  // Function to convert a base64-encoded data URI to a Blob.       //ASCII,BLOB,ATOB
  dataURItoBlob(dataURI) {
    // Decode the base64 string using the atob function. //its inbuilt js function to convert base64 into binary
    const byteString = window.atob(dataURI);
    // Create an ArrayBuffer with the length of the byteString.
    const arrayBuffer = new ArrayBuffer(byteString.length);
    //ArrayBuffer: It is a built-in object in JavaScript that is used to represent a generic, fixed-length binary data buffer.
    // An ArrayBuffer cannot be directly manipulated; instead, views are created on top of it.
    // Create a Uint8Array to represent the binary data.
    const int8Array = new Uint8Array(arrayBuffer);
    // Iterate over the byteString, assigning each character code to the Uint8Array.
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    // Create a Blob from the Uint8Array, specifying the MIME type.
    const blob = new Blob([int8Array], {
      type: 'image/png'
    });
    // Note: Blob is a JavaScript object representing raw binary data.
    // Return the created Blob.
    return blob;
  }
  snapshot(event) {
    console.log(event);
    this.previewImage = event.imageAsDataUrl;
    console.log(this.previewImage);
    this.btnLabel = 'Recapture image';
    this.ofCam();
  }
  ofCam() {
    this.stream.getTracks().forEach(track => {
      track.stop();
    });
    this.stream = null;
    this.status = 'Camera turned off';
    // this.btnLabel = 'Capture Image';
  }
  static #_ = this.ɵfac = function CameraComponent_Factory(t) {
    return new (t || CameraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_attendence_service__WEBPACK_IMPORTED_MODULE_0__.AttendenceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CameraComponent,
    selectors: [["app-camera"]],
    inputs: {
      action: "action"
    },
    outputs: {
      getPicuture: "getPicuture",
      getResponse: "getResponse"
    },
    decls: 3,
    vars: 2,
    consts: [["class", "bg-gray-900 p-8 rounded-md", 4, "ngIf", "ngIfElse"], ["loadingScreen", ""], [1, "bg-gray-900", "p-8", "rounded-md"], [1, "mb-4", "text-white"], [1, "bg-purple-600", "hover:bg-purple-800", "text-white", "font-bold", "py-2", "px-4", "rounded-md"], ["class", "mb-8", 4, "ngIf"], [1, "mb-8"], [1, "rounded-3xl", 3, "src"], ["class", "mb-8 flex flex-row justify-around", 4, "ngIf"], [3, "trigger", "imageCapture"], [1, "flex", "flex-row", "justify-between", "px-4", "pt-4"], [1, "bg-blue-600", "hover:bg-blue-800", "text-white", "font-bold", "py-2", "px-4", "rounded-md", 3, "click"], [1, "bg-red-600", "hover:bg-red-800", "text-white", "font-bold", "py-2", "px-4", "rounded-md", "justify-end", 3, "click"], [1, "mb-8", "flex", "flex-row", "justify-around"], [1, "bg-yellow-600", "hover:bg-yellow-800", "text-white", "font-bold", "py-2", "px-4", "rounded-md", 3, "click"], [1, "bg-green-600", "hover:bg-green-800", "text-white", "font-bold", "py-2", "px-4", "rounded-md", 3, "disabled", "click"], [1, "relative", "flex", "justify-center", "items-center"], [1, "absolute", "animate-spin", "rounded-full", "h-32", "w-32", "border-t-4", "border-b-4", "border-purple-500"], ["src", "https://i.gifer.com/origin/70/70a3d696b6342a303d0c054e9c236435_w200.webp", 1, "rounded-full", "h-28", "w-28"]],
    template: function CameraComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CameraComponent_div_0_Template, 9, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CameraComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cameraLoaded)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ngx_webcam__WEBPACK_IMPORTED_MODULE_4__.WebcamComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1lcmEuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3159:
/*!****************************************************************************!*\
  !*** ./src/app/modules/shared/components/chat-list/chat-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatListComponent: () => (/* binding */ ChatListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/common.service */ 9653);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);





function ChatListComponent_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatListComponent_ul_5_li_1_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const user_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onContactClick(user_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11)(4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", user_r4.photo ? user_r4.photo : "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1711626492~exp=1711630092~hmac=13886b4779e3616cfdb6860e9e1c97d15166ecb0af5b2259dbc3acbe38ee60cd&w=740", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r4.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r4.department);
  }
}
function ChatListComponent_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatListComponent_ul_5_li_1_Template, 8, 3, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.contacts);
  }
}
function ChatListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No Contacts Available To chat !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class ChatListComponent {
  constructor(common, route, router) {
    this.common = common;
    this.route = route;
    this.router = router;
    this.selectedContact = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.contacts = [];
  }
  ngOnInit() {
    // const currentUrl = this.router.url
    // const urlParts = currentUrl.split('/')
    this.common.getchatList().subscribe({
      next: res => {
        // console.log(res);
        this.contacts = [...res.data];
      },
      error: Err => {}
    });
  }
  onContactClick(id) {
    this.selectedContact.emit(id);
  }
  static #_ = this.ɵfac = function ChatListComponent_Factory(t) {
    return new (t || ChatListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ChatListComponent,
    selectors: [["app-chat-list"]],
    outputs: {
      selectedContact: "selectedContact"
    },
    decls: 8,
    vars: 2,
    consts: [[1, "py-10", "h-full", "bg-gray-900", "px-2"], [1, "max-w-md", "mx-auto", "bg-gray-900", "shadow-lg", "rounded-lg", "overflow-hidden", "md:max-w-lg"], [1, "relative"], ["type", "text", "placeholder", "Search...", 1, "w-full", "h-12", "rounded", "focus:outline-none", "px-3", "focus:shadow-md", "bg-white", "placeholder-gray-400"], [1, "fa", "fa-search", "absolute", "right-3", "top-4", "text-gray-300"], [4, "ngIf", "ngIfElse"], ["noContacts", ""], ["class", "flex justify-between items-center bg-gray-700 mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between", "items-center", "bg-gray-700", "mt-2", "p-2", "hover:shadow-lg", "rounded", "cursor-pointer", "transition"], [1, "flex", "ml-2", 3, "click"], [1, "rounded-full", "object-cover", "object-center", "w-[50px]", "h-[50px]", 3, "src"], [1, "flex", "flex-col", "ml-2"], [1, "font-medium", "text-gray-300"], [1, "text-sm", "text-gray-900", "truncate", "w-32"], [1, "flex", "justify-center", "items-center", "mt-4"], [1, "text-gray-300"]],
    template: function ChatListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 3)(4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ChatListComponent_ul_5_Template, 2, 1, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ChatListComponent_ng_template_6_Template, 3, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contacts.length > 0)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2561:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shared/components/chat-session/chat-session.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatSessionComponent: () => (/* binding */ ChatSessionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/socket.service */ 4409);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/common.service */ 9653);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat-list/chat-list.component */ 3159);






function ChatSessionComponent_div_2_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "div", 46)(3, "div")(4, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](message_r2.content);
  }
}
function ChatSessionComponent_div_2_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "div", 51)(3, "div")(4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](message_r2 == null ? null : message_r2.content);
  }
}
function ChatSessionComponent_div_2_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ChatSessionComponent_div_2_div_25_div_1_Template, 7, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ChatSessionComponent_div_2_div_25_div_2_Template, 7, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isOwnMessage(message_r2.sender));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.isOwnMessage(message_r2.sender));
  }
}
function ChatSessionComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "circle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 11)(9, "div", 12)(10, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 15)(15, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ChatSessionComponent_div_2_div_25_Template, 3, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 24)(27, "div", 25)(28, "span", 26)(29, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ChatSessionComponent_div_2_Template_input_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.inputMessage = $event);
    })("input", function ChatSessionComponent_div_2_Template_input_input_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.onTyping());
    })("keyup.enter", function ChatSessionComponent_div_2_Template_input_keyup_enter_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.onMessageSent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 31)(34, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "path", 34)(40, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChatSessionComponent_div_2_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.onMessageSent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.profileData.photo ? ctx_r0.profileData.photo : "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1711626492~exp=1711630092~hmac=13886b4779e3616cfdb6860e9e1c97d15166ecb0af5b2259dbc3acbe38ee60cd&w=740", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.profileData.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.profileData.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.previousMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.inputMessage);
  }
}
class ChatSessionComponent {
  constructor(socketS, common) {
    this.socketS = socketS;
    this.common = common;
    this.inputMessage = '';
    this.showChat = false;
    this.previousMessage = [];
    this.userID = '';
  }
  isOwnMessage(senderID) {
    return String(this.userID) === String(senderID);
  }
  ngOnInit() {
    this.common.getUsernameAndProfile().subscribe({
      next: res => {
        if (res && res.data && res.data[0]) {
          this.userID = res.data[0]._id;
        }
      },
      error: err => {
        console.error('Error fetching user profile info:', err);
      }
    });
    this.socketS.welcomer();
    // Subscribe to real-time incoming messages stream
    this.socketSub = this.socketS.getMessageObservable().subscribe({
      next: msg => {
        if (!msg) return;
        const isRelevant = this.profileData && (String(msg.sender) === String(this.profileData._id) || String(msg.receiver) === String(this.profileData._id) || String(msg.reciever) === String(this.profileData._id) || String(msg.sender) === String(this.userID));
        if (isRelevant) {
          const exists = this.previousMessage.some(prevMsg => prevMsg._id && msg._id && prevMsg._id === msg._id);
          if (!exists) {
            this.previousMessage.push(msg);
            this.scrollToBottom();
          }
        }
      },
      error: err => {
        console.error('Socket message stream error:', err);
      }
    });
  }
  ngOnDestroy() {
    if (this.socketSub) {
      this.socketSub.unsubscribe();
    }
  }
  onTyping() {
    // Optional typing indicator listener
  }
  selectedChat(event) {
    this.showChat = true;
    this.profileData = event;
    this.socketS.getPreviuosMessages(this.profileData._id).subscribe({
      next: res => {
        this.previousMessage = res.data || [];
        this.scrollToBottom();
      },
      error: err => {
        console.error('Error fetching messages:', err);
      }
    });
  }
  onMessageSent() {
    if (!this.inputMessage || !this.inputMessage.trim() || !this.profileData) {
      return;
    }
    const data = {
      reciever: this.profileData._id,
      receiver: this.profileData._id,
      message: this.inputMessage.trim()
    };
    this.socketS.onSend(data);
    this.inputMessage = '';
  }
  scrollToBottom() {
    setTimeout(() => {
      const el = document.getElementById('messages');
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    }, 50);
  }
  static #_ = this.ɵfac = function ChatSessionComponent_Factory(t) {
    return new (t || ChatSessionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_0__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ChatSessionComponent,
    selectors: [["app-chat-session"]],
    decls: 3,
    vars: 1,
    consts: [[1, "flex", "flex-row", "max-h-full", "min-h-full"], [1, "w-1/5", 3, "selectedContact"], ["class", "flex-1 p:2 sm:p-6 justify-between flex flex-col max-h-full bg-gray-900", 4, "ngIf"], [1, "flex-1", "p:2", "sm:p-6", "justify-between", "flex", "flex-col", "max-h-full", "bg-gray-900"], [1, "flex", "sm:items-center", "justify-between", "py-3", "border-b-2", "border-gray-200"], [1, "relative", "flex", "items-center", "space-x-4"], [1, "relative"], [1, "absolute", "text-green-500", "right-0", "bottom-0"], ["width", "20", "height", "20"], ["cx", "8", "cy", "8", "r", "8", "fill", "currentColor"], ["alt", "", 1, "w-10", "sm:w-16", "h-10", "sm:h-16", "object-cover", "rounded-full", 3, "src"], [1, "flex", "flex-col", "leading-tight"], [1, "text-2xl", "mt-1", "flex", "items-center"], [1, "text-gray-200", "mr-3"], [1, "text-lg", "text-gray-500"], [1, "flex", "items-center", "space-x-2", "text-white"], ["type", "button", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-300", "h-10", "w-10", "transition", "duration-500", "ease-in-out", "text-gray-500", "hover:bg-gray-700", "focus:outline-none"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "white", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "button", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "border", "h-10", "w-10", "transition", "duration-500", "ease-in-out", "text-gray-500", "hover:bg-gray-700", "focus:outline-none"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], ["id", "messages", 1, "flex", "flex-col", "space-y-4", "p-3", "overflow-y-auto", "scrollbar-thumb-blue", "scrollbar-thumb-rounded", "scrollbar-track-blue-lighter", "scrollbar-w-2", "scrolling-touch"], ["class", "flex flex-col space-y-4 p-3  scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch ", 4, "ngFor", "ngForOf"], [1, "border-t-2", "border-gray-200", "px-4", "pt-4", "mb-2", "sm:mb-0"], [1, "relative", "flex", "bg-yellow-300", "max-h-full", "flex-wrap"], [1, "absolute", "inset-y-0", "flex", "items-center"], ["type", "button", 1, "inline-flex", "items-center", "justify-center", "rounded-full", "h-12", "w-12", "transition", "duration-500", "ease-in-out", "text-gray-500", "hover:bg-gray-300", "focus:outline-none"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"], ["type", "text", "placeholder", "Write your message!", 1, "w-full", "focus:outline-none", "focus:placeholder-gray-400", "text-gray-600", "placeholder-gray-600", "pl-12", "lg:pr-56", "bg-gray-200", "rounded-md", "py-3", 3, "ngModel", "ngModelChange", "input", "keyup.enter"], [1, "absolute", "right-0", "items-center", "inset-y-0", "hidden", "sm:flex"], ["type", "button", 1, "inline-flex", "items-center", "justify-center", "rounded-full", "h-10", "w-10", "transition", "duration-500", "ease-in-out", "text-gray-500", "hover:bg-gray-300", "focus:outline-none"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 13a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["type", "button", 1, "inline-flex", "items-center", "justify-center", "rounded-lg", "px-4", "py-3", "transition", "duration-500", "ease-in-out", "text-white", "bg-blue-500", "hover:bg-blue-400", "focus:outline-none", 3, "click"], [1, "font-bold"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-6", "w-6", "ml-2", "transform", "rotate-90"], ["d", "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"], [1, "flex", "flex-col", "space-y-4", "p-3", "scrollbar-thumb-blue", "scrollbar-thumb-rounded", "scrollbar-track-blue-lighter", "scrollbar-w-2", "scrolling-touch"], ["class", "chat-message bg", 4, "ngIf"], ["class", "chat-message", 4, "ngIf"], [1, "chat-message", "bg"], [1, "flex", "items-end", "justify-end"], [1, "flex", "flex-col", "space-y-2", "text-xs", "max-w-xs", "mx-2", "order-1", "items-end"], [1, "px-4", "py-2", "rounded-lg", "inline-block", "rounded-br-none", "bg-blue-600", "text-white"], ["src", "https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144", "alt", "My profile", 1, "w-6", "h-6", "rounded-full", "order-2"], [1, "chat-message"], [1, "flex", "items-end"], [1, "flex", "flex-col", "space-y-2", "text-xs", "max-w-xs", "mx-2", "order-2", "items-start"], [1, "px-4", "py-2", "rounded-lg", "inline-block", "rounded-bl-none", "bg-gray-300", "text-gray-600"], ["src", "https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144", "alt", "My profile", 1, "w-6", "h-6", "rounded-full", "order-1"]],
    template: function ChatSessionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "app-chat-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedContact", function ChatSessionComponent_Template_app_chat_list_selectedContact_1_listener($event) {
          return ctx.selectedChat($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ChatSessionComponent_div_2_Template, 49, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showChat);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_2__.ChatListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LXNlc3Npb24uY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9jaGF0LXNlc3Npb24vY2hhdC1zZXNzaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */", ".scrollbar-w-2[_ngcontent-%COMP%]::-webkit-scrollbar {\n width: 0.25rem;\n height: 0.25rem;\n}\n\n.scrollbar-track-blue-lighter[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n --bg-opacity: 1;\n background-color: #f7fafc;\n background-color: rgba(247, 250, 252, var(--bg-opacity));\n}\n\n.scrollbar-thumb-blue[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n --bg-opacity: 1;\n background-color: #edf2f7;\n background-color: rgba(237, 242, 247, var(--bg-opacity));\n}\n\n.scrollbar-thumb-rounded[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n border-radius: 0.25rem;\n}"]
  });
}

/***/ }),

/***/ 1505:
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/components/complaints/complaints.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComplaintsComponent: () => (/* binding */ ComplaintsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_complaints_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/complaints.service */ 6140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);




function ComplaintsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Title is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ComplaintsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Please specify the recipients. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ComplaintsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Provide a description. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ComplaintsComponent_div_36_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 44);
  }
  if (rf & 2) {
    const complaint_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", complaint_r7.employeedata[0].photo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ComplaintsComponent_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ComplaintsComponent_div_36_div_1_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const complaint_r7 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.toggleExpand(complaint_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ComplaintsComponent_div_36_div_1_img_2_Template, 1, 1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 29)(4, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 32)(11, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " STATUS: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 36)(20, "div", 37)(21, "div", 38)(22, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 41)(27, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Attachment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const complaint_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", complaint_r7.employeedata[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("AUTHOR: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 11, complaint_r7 == null ? null : complaint_r7.employeedata[0] == null ? null : complaint_r7.employeedata[0].employeeName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" TITLE: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 13, complaint_r7.title), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r6.getStatusColor(complaint_r7.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 15, complaint_r7.status), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](18, 17, complaint_r7.postDate, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("max-h-0", !complaint_r7.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !complaint_r7.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](complaint_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", complaint_r7.attachment, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ComplaintsComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ComplaintsComponent_div_36_div_1_Template, 30, 20, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.complaintsData);
  }
}
function ComplaintsComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *No Complaints Raised To show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatDatepickerModule } from '@angular/material/datepicker';
class ComplaintsComponent {
  constructor(complaints) {
    this.complaints = complaints;
    this.complaint = {
      title: '',
      description: '',
      to: '',
      attachment: null
    };
  }
  ngOnInit() {
    this.complaints.getComplaints().subscribe({
      next: res => {
        this.complaintsData = res.data;
      },
      error: err => {
        console.log(err);
      }
    });
  }
  onAttachmentChange(event) {
    const files = event.target.files;
    if (files.length > 0) {
      this.selectedFile = [files[0]]; // Update the selectedFile array
    } else {
      alert('YOU CAN CHOOSE ONLY ONE FILE');
    }
  }
  submitComplaint() {
    this.complaintForm = new FormData();
    this.complaintForm.append('title', this.complaint.title);
    this.complaintForm.append('description', this.complaint.description);
    this.complaintForm.append('recipient', this.complaint.to);
    this.complaintForm.append('attachment', this.selectedFile[0]);
    this.complaints.registerComplaint(this.complaintForm).subscribe({
      next: res => {
        console.log(res);
        alert(res.message);
        this.complaints.getComplaints().subscribe({
          next: res => {
            this.complaintsData = res.data;
          },
          error: err => {
            console.log(err);
          }
        });
      },
      error: err => {
        console.log(err);
        alert(err.error.message);
      }
    });
  }
  getStatusColor(status) {
    switch (status.toLowerCase()) {
      case 'pending':
        return {
          color: 'green'
        };
      case 'closed':
        return {
          color: 'red'
        };
      case 'inaction':
        return {
          color: 'yellow'
        };
      default:
        return {};
    }
  }
  toggleExpand(complaint) {
    complaint.expanded = !complaint.expanded;
  }
  static #_ = this.ɵfac = function ComplaintsComponent_Factory(t) {
    return new (t || ComplaintsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_complaints_service__WEBPACK_IMPORTED_MODULE_0__.ComplaintsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ComplaintsComponent,
    selectors: [["app-complaints"]],
    decls: 38,
    vars: 9,
    consts: [[1, "w-full", "min-h-full", "bg-gray-900", "p-5"], [1, "text-gray-300", "font-kanit", "text-2xl", "mb-2"], [1, "p-8", "border", "border-yellow-700", "rounded-md", "shadow-md", "bg-gray-900", "grid", "grid-cols-1", "md:grid-cols-2", "gap-4", "hover:border-purple-700", 3, "ngSubmit"], ["complaintForm", "ngForm"], [1, "form-group", "mb-4"], ["for", "title", 1, "text-white"], ["type", "text", "id", "title", "name", "title", "required", "", "placeholder", "Enter Title", 1, "w-full", "rounded-md", "p-2", "focus:outline-none", "focus:ring-1", "focus:ring-purple-500", "bg-gray-700", "text-white", 3, "ngModel", "ngModelChange"], ["class", "text-red-700", 4, "ngIf"], ["for", "to", 1, "text-white"], ["id", "to", "name", "to", "required", "", 1, "w-full", "rounded-md", "p-2", "focus:outline-none", "focus:ring-1", "focus:ring-purple-500", "bg-gray-700", "text-white", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", ""], ["value", "companyAdmin"], ["value", "departmentHead"], [1, "form-group", "mb-4", "md:col-span-2"], ["for", "description", 1, "text-white"], ["id", "description", "name", "description", "minlength", "10", "maxlength", "400", "rows", "10", "required", "", "placeholder", "Enter Complaint Description", 1, "w-full", "rounded-md", "p-2", "focus:outline-none", "focus:ring-1", "focus:ring-purple-500", "bg-gray-700", "text-white", 3, "ngModel", "ngModelChange"], ["for", "attachment", 1, "text-white"], ["type", "file", "id", "attachment", "name", "attachment", "placeholder", "Attach File", "accept", "image/*", 1, "w-full", "p-2", "focus:outline-none", "focus:ring-1", "focus:ring-purple-500", "bg-gray-700", "text-white", 3, "change"], [1, "justify-end", "flex", "items-center"], ["type", "submit", 1, "w-full", "py-2", "px-12", "rounded-md", "bg-yellow-700", "text-white", "font-medium", "hover:bg-gradient-to-r", "from-yellow-700", "to-yellow-500", "transition", "duration-500", "ease-in-out", "md:w-44", 3, "disabled"], [1, "pt-3"], ["class", "columns-1 md:columns-2 md:gap-4  space-y-9 md:space-y-4 mt-4 ", 4, "ngIf"], ["class", "text-red-900 font-kanit md:text-2xl  text-center", 4, "ngIf"], [1, "text-red-700"], [1, "columns-1", "md:columns-2", "md:gap-4", "space-y-9", "md:space-y-4", "mt-4"], ["class", "rounded-lg shadow-md overflow-hidden bg-gray-800 hover:shadow-lg", 4, "ngFor", "ngForOf"], [1, "rounded-lg", "shadow-md", "overflow-hidden", "bg-gray-800", "hover:shadow-lg"], [1, "flex", "items-center", "p-4", "cursor-pointer", 3, "click"], ["alt", "", "class", "w-20 h-20 object-cover rounded-full mr-4", 3, "src", 4, "ngIf"], [1, "flex", "flex-col", "text-left", "gap-0"], [1, "text-xl", "font-semibold", "text-gray-200"], [1, "text-lg", "font-medium", "text-gray-400"], [1, "flex", "flex-col", "items-center", "text-sm", "text-gray-500", "justify-around", "w-full"], [1, "mr-2"], [3, "ngStyle"], [1, ""], [1, "p-4", "overflow-hidden", "transition-max-h", "duration-300", "ease-in-out"], [3, "hidden"], [1, "bg-gray-900", "p-4", "rounded-lg"], [1, "text-lg", "font-semibold", "text-gray-300", "mb-2"], [1, "text-gray-400"], [1, "bg-gray-900", "p-4", "mt-4", "rounded-lg"], [1, "text-lg", "font-semibold", "text-gray-400", "mb-2"], ["alt", "", 1, "object-cover", "lg:max-h-[400px]", "lg:max-w-[400px]", "mb-2", 3, "src"], ["alt", "", 1, "w-20", "h-20", "object-cover", "rounded-full", "mr-4", 3, "src"], [1, "text-red-900", "font-kanit", "md:text-2xl", "text-center"]],
    template: function ComplaintsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " COMPLAINTS : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ComplaintsComponent_Template_form_ngSubmit_3_listener() {
          return ctx.submitComplaint();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ComplaintsComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.complaint.title = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ComplaintsComponent_div_9_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4)(11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "To:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ComplaintsComponent_Template_select_ngModelChange_13_listener($event) {
          return ctx.complaint.to = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Select recipient");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ComplaintsComponent_div_20_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Complaint Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ComplaintsComponent_Template_textarea_ngModelChange_24_listener($event) {
          return ctx.complaint.description = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ComplaintsComponent_div_25_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 4)(27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Attachments:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ComplaintsComponent_Template_input_change_29_listener($event) {
          return ctx.onAttachmentChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 18)(31, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 20)(34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Previous Complaints: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ComplaintsComponent_div_36_Template, 2, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ComplaintsComponent_div_37_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.complaint.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (_r0.controls["title"] == null ? null : _r0.controls["title"].hasError("required")) && (_r0.controls["title"] == null ? null : _r0.controls["title"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.complaint.to);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (_r0.controls["to"] == null ? null : _r0.controls["to"].hasError("required")) && (_r0.controls["to"] == null ? null : _r0.controls["to"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.complaint.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (_r0.controls["description"] == null ? null : _r0.controls["description"].hasError("required")) && (_r0.controls["description"] == null ? null : _r0.controls["description"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.complaintsData && ctx.complaintsData.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.complaintsData || ctx.complaintsData.length === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGFpbnRzLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9jb21wbGFpbnRzL2NvbXBsYWludHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5407:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmationDialogComponent: () => (/* binding */ ConfirmationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);



function ConfirmationDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u200B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_div_0_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onCancelClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12)(14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15)(17, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17)(20, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19)(23, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_div_0_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onConfirmClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_div_0_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onCancelClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.Image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.confirmationMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.bodyText);
  }
}
class ConfirmationDialogComponent {
  constructor() {
    this.isVisible = false;
    this.Image = '';
    this.confirmationMessage = 'Confirm Action';
    this.bodyText = 'Are you sure you want to confirm this action';
    this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onCancelClick() {
    this.cancel.emit();
  }
  onConfirmClick() {
    this.confirm.emit();
  }
  static #_ = this.ɵfac = function ConfirmationDialogComponent_Factory(t) {
    return new (t || ConfirmationDialogComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ConfirmationDialogComponent,
    selectors: [["app-confirmation-dialog"]],
    inputs: {
      isVisible: "isVisible",
      Image: "Image",
      confirmationMessage: "confirmationMessage",
      bodyText: "bodyText"
    },
    outputs: {
      cancel: "cancel",
      confirm: "confirm"
    },
    decls: 1,
    vars: 1,
    consts: [["id", "YOUR_ID", "class", "fixed z-50 inset-0 overflow-y-auto", 4, "ngIf"], ["id", "YOUR_ID", 1, "fixed", "z-50", "inset-0", "overflow-y-auto"], [1, "flex", "items-end", "justify-center", "min-h-screen", "pt-4", "px-4", "pb-20", "text-center", "sm:block", "sm:p-0"], ["aria-hidden", "true", 1, "fixed", "inset-0", "transition-opacity"], [1, "absolute", "inset-0", "bg-gray-500", "opacity-75"], ["aria-hidden", "true", 1, "hidden", "sm:inline-block", "sm:align-middle", "sm:h-screen"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "modal-headline", 1, "inline-block", "align-bottom", "bg-white", "rounded-lg", "px-4", "pt-5", "pb-4", "text-left", "overflow-hidden", "shadow-xl", "transform", "transition-all", "sm:my-8", "sm:align-middle", "sm:max-w-lg", "sm:w-full", "sm:p-6"], [1, "hidden", "sm:block", "absolute", "top-0", "right-0", "pt-4", "pr-4"], ["type", "button", "data-behavior", "cancel", 1, "bg-white", "rounded-md", "text-gray-400", "hover:text-gray-500", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-blue-500", 3, "click"], [1, "sr-only"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "aria-hidden", "true", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "sm:flex", "sm:items-start"], [1, "mx-auto", "flex-shrink-0", "flex", "items-center", "justify-center", "h-12", "w-12", "rounded-full", "bg-blue-100", "sm:mx-0", "sm:h-10", "sm:w-10"], ["alt", "https://imgs.search.brave.com/68cqVRRrJDTjdc9TSIlr_cIiiJtxrIIcHqyLrgwVuXU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/MTM1OTUxMC9waG90/by9yZWQtZGFuZ2Vy/LWFsYXJtLWJlbGwt/b24td2hpdGUtYmFj/a2dyb3VuZC53ZWJw/P2I9MSZzPTE3MDY2/N2Emdz0wJms9MjAm/Yz1TV1R4ZWJGTGd2/UzFNWDY3TjlycTB2/clo1dXl6UEg1WE1x/NUNUNFZsWkw4PQ", 3, "src"], [1, "mt-3", "text-center", "sm:mt-0", "sm:ml-4", "sm:text-left"], [1, "text-xl", "font-semibold", "mb-4", "text-black"], [1, "mt-2"], [1, "mb-4", "text-gray-800"], [1, "mt-5", "sm:mt-4", "sm:flex", "sm:flex-row-reverse"], ["type", "button", "data-behavior", "commit", 1, "w-full", "inline-flex", "justify-center", "rounded-md", "border", "border-transparent", "shadow-sm", "px-4", "py-2", "bg-blue-600", "text-base", "font-medium", "text-white", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-blue-500", "sm:ml-3", "sm:w-auto", "sm:text-sm", 3, "click"], ["type", "button", "data-behavior", "cancel", 1, "w-full", "inline-flex", "justify-center", "rounded-md", "border", "border-gray-300", "shadow-sm", "px-4", "py-2", "bg-white", "text-base", "font-medium", "text-gray-700", "hover:text-gray-500", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-blue-500", "sm:mt-0", "sm:w-auto", "sm:text-sm", 3, "click"]],
    template: function ConfirmationDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmationDialogComponent_div_0_Template, 27, 3, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0xBQW9MIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7266:
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/components/datepicker/datepicker.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatepickerComponent: () => (/* binding */ DatepickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 1333);






class DatepickerComponent {
  constructor(fb) {
    this.fb = fb;
    this.getDates = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.show = false;
  }
  onDateSelection() {
    this.getDates.emit(this.range.value);
  }
  ngOnInit() {
    this.show = true;
    this.range = this.fb.group({
      start: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      end: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
    });
  }
  static #_ = this.ɵfac = function DatepickerComponent_Factory(t) {
    return new (t || DatepickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DatepickerComponent,
    selectors: [["app-datepicker"]],
    outputs: {
      getDates: "getDates"
    },
    decls: 12,
    vars: 3,
    consts: [[1, "mt-4", "md:mt-0", "grid", "md:place-items-center"], ["appearance", "fill"], [1, "text-white"], [3, "rangePicker", "formGroup"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date", "id", "start", 1, "bg-gray-700", "text-white", "p-2", "rounded-md", "my-1", "transition", "duration-300", "ease-in-out", "transform", "hover:scale-105", 3, "dateChange"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date", "id", "end", 1, "bg-gray-700", "text-white", "p-2", "rounded-md", "my-1", "transition", "duration-300", "ease-in-out", "transform", "hover:scale-105"], ["matIconSuffix", "", 3, "for"], ["picker", ""]],
    template: function DatepickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enter a date range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-date-range-input", 3)(5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function DatepickerComponent_Template_input_dateChange_5_listener() {
          return ctx.onDateSelection();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-hint", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "MM/DD/YYYY \u2013 MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-datepicker-toggle", 6)(10, "mat-date-range-picker", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rangePicker", _r0)("formGroup", ctx.range);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__.MatDateRangePicker, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatSuffix],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRlcGlja2VyLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9404:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/employee-attendance-detaildata/employee-attendance-detaildata.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeAttendanceDetaildataComponent: () => (/* binding */ EmployeeAttendanceDetaildataComponent)
/* harmony export */ });
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/interaction */ 7068);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ 8566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/common.service */ 9653);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/angular */ 6514);
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../table-list/table-list.component */ 2755);








function EmployeeAttendanceDetaildataComponent_full_calendar_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "full-calendar", 9);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.calendarOptions);
  }
}
class EmployeeAttendanceDetaildataComponent {
  handleDateClick(arg) {
    const clickedDate = arg.dateStr;
    const record = this.attendanceData.find(item => item.date === clickedDate);
    if (record) {
      const checkIn = record.checkIn || 'Not Recorded';
      const checkOut = record.checkOut || record.checkout || (record.status === 'present' || record.status === 'late' ? 'In Progress / None' : 'N/A');
      const statusStr = record.status ? record.status.toUpperCase() : 'RECORDED';
      alert(`📅 Date: ${clickedDate}\n\nStatus: ${statusStr}\n⏰ Check-In Time: ${checkIn}\n🚪 Check-Out Time: ${checkOut}`);
    } else {
      alert(`📅 Date: ${clickedDate}\n\nNo check-in or attendance record found for this day.`);
    }
  }
  constructor(common, route) {
    this.common = common;
    this.route = route;
    this.attendanceData = [];
    this.showCalendar = false;
    this.eventsArray = [];
    this.datas = [];
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__["default"]],
      dateClick: arg => this.handleDateClick(arg),
      events: this.eventsArray
    };
  }
  ngOnInit() {
    const routers = this.route.snapshot.url;
    const empID = routers[1].path;
    this.common.getEmployeeAttendance(empID).subscribe({
      next: res => {
        console.log(res);
        this.attendanceData = [...(res.attendance || [])];
        this.eventsArray = (res.calendarDataEmp || []).map(el => ({
          title: el.title === 'dd' || !el.title ? el.status === 'present' ? 'Present' : el.status === 'late' ? 'Late' : 'Leave' : el.title,
          start: el.start || el.date,
          color: el.color && el.color !== 'black' && el.color !== 'green' && el.color !== 'red' && el.color !== 'yellow' ? el.color : el.status === 'present' || el.color === 'green' ? '#22c55e' : el.status === 'late' || el.color === 'yellow' ? '#eab308' : '#ef4444'
        }));
        this.calendarOptions = {
          ...this.calendarOptions,
          dateClick: arg => this.handleDateClick(arg),
          events: [...this.eventsArray]
        };
        this.showCalendar = true;
        console.log(this.eventsArray);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  static #_ = this.ɵfac = function EmployeeAttendanceDetaildataComponent_Factory(t) {
    return new (t || EmployeeAttendanceDetaildataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: EmployeeAttendanceDetaildataComponent,
    selectors: [["app-employee-attendance-detaildata"]],
    decls: 17,
    vars: 2,
    consts: [[1, "w-full", "bg-gray-900", "flex", "flex-col", "justify-center", "items-center"], [1, "md:w-6/12", "md:p-8", "p-2", "rounded-md", "gap-4"], ["class", "bg-white", 3, "options", 4, "ngIf"], [1, "grid", "grid-cols-3", "gap-3"], [1, "text-white"], ["src", "./../../../../../assets/WhatsApp Image 2024-05-02 at 15.16.11_3d15a527.jpg", "alt", ""], ["src", "./../../../../../assets/WhatsApp Image 2024-05-02 at 15.16.43_ba773683.jpg", "alt", ""], ["src", "./../../../../../assets/WhatsApp Image 2024-05-02 at 15.17.31_07f16556.jpg", "alt", ""], [3, "tableData"], [1, "bg-white", 3, "options"]],
    template: function EmployeeAttendanceDetaildataComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div")(2, "div", 0)(3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, EmployeeAttendanceDetaildataComponent_full_calendar_4_Template, 1, 1, "full-calendar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Present");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Late ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "app-table-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showCalendar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableData", ctx.attendanceData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_7__.FullCalendarComponent, _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_1__.TableListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1hdHRlbmRhbmNlLWRldGFpbGRhdGEuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9lbXBsb3llZS1hdHRlbmRhbmNlLWRldGFpbGRhdGEvZW1wbG95ZWUtYXR0ZW5kYW5jZS1kZXRhaWxkYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdNQUFnTSIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5415:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/employee-data-profile/employee-data-profile.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeDataProfileComponent: () => (/* binding */ EmployeeDataProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/common.service */ 9653);
/* harmony import */ var src_app_modules_company_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/company/services/api.service */ 4471);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.component */ 5407);
/* harmony import */ var _employee_attendance_detaildata_employee_attendance_detaildata_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee-attendance-detaildata/employee-attendance-detaildata.component */ 9404);







const _c0 = ["showMoreSection"];
function EmployeeDataProfileComponent_div_0_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-employee-attendance-detaildata");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function EmployeeDataProfileComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div")(6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Salary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div")(12, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Total Present Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div")(17, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Total Leave");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 9)(22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 12)(25, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDataProfileComponent_div_0_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.editEmployee());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDataProfileComponent_div_0_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.onDeleteButtonClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Terminate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 15)(30, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 22)(42, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeDataProfileComponent_div_0_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.showMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Show more");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, EmployeeDataProfileComponent_div_0_div_46_Template, 3, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 11, ctx_r0.employeeData.salary, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.employeeData.totalAttendance);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.employeeData.totalLeave);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.employeeData.photo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.employeeData.employeeName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.employeeData.contactEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.employeeData.department, " Department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.employeeData.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.employeeData.contactNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.employeeData.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.onShowMore);
  }
}
class EmployeeDataProfileComponent {
  constructor(activatedRoute, common, api, router) {
    this.activatedRoute = activatedRoute;
    this.common = common;
    this.api = api;
    this.router = router;
    this.deleteConfirm = false;
    this.isEditFormVisible = false;
    this.confirmationMessage = '';
    this.bodyText = '';
    this.employeeToDelete = '';
    this.addClicked = false;
    this.showTable = true;
    this.onShowMore = false;
  }
  ngOnInit() {
    // Get the route parameter 'id' using ActivatedRoute
    const employeeId = this.activatedRoute.snapshot.params['id'];
    // Call the common service method to fetch employee data
    this.common.getFullEmployeeData(employeeId).subscribe({
      next: res => {
        this.employeeData = res.data[0];
        console.log(this.employeeData.photo);
        this.showTable = true;
      },
      error: err => {
        console.log(err);
      }
    });
  }
  deleteEmployee() {
    const employeeId = this.activatedRoute.snapshot.params['id'];
    const currentUrl = this.router.url; // Get the current route URL
    this.api.deletingEmployee(employeeId).subscribe({
      next: res => {
        if (res.success) {
          this.deleteConfirm = false;
          this.router.navigate(['/companyAdmin/employee']); // Navigate to the current route URL
          alert('employeeDeletedSuccessfully  ');
          // console.log(res);
        }
      },

      error: err => {
        console.error('Error deleting employee:', err);
        alert(err.error.message);
        // Handle the error, e.g., show a notification or log it
      }
    });
  }

  onDeleteButtonClick() {
    const employeeId = this.activatedRoute.snapshot.params['id'];
    this.deleteConfirm = true;
    this.confirmationMessage = 'Confirm Deletion';
    this.bodyText = 'Are you sure you want to delete?';
    this.employeeToDelete = employeeId;
    console.log(this.employeeToDelete);
  }
  onDeleteConfirmation() {
    this.deleteEmployee();
    // this.isEditFormVisible=true
  }

  onCancelConfirmationDelete() {
    this.deleteConfirm = false;
    this.employeeToDelete = '';
  }
  editEmployee() {
    const employeeId = this.activatedRoute.snapshot.params['id'];
    this.isEditFormVisible = true;
  }
  showMore() {
    this.onShowMore = true;
    // setTimeout(() => {
    //   this.scrollToShowMore();
    // }, 100); // Timeout to ensure the div is rendered
  }
  // scrollToShowMore() {
  //   if (this.showMoreSection) {
  //     this.showMoreSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }
  onEditCancelClicked() {
    this.isEditFormVisible = false;
    //   this.router.navigate([], {
    //     relativeTo: this.route, // Import ActivatedRoute and inject it in the constructor
    //     queryParams: { selected: null }, // Specify the query parameter to be removed
    //     queryParamsHandling: 'merge', // Keep existing query parameters
    //   });    
  }

  onEditSaveclicked() {
    this.isEditFormVisible = false;
  }
  static #_ = this.ɵfac = function EmployeeDataProfileComponent_Factory(t) {
    return new (t || EmployeeDataProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_modules_company_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: EmployeeDataProfileComponent,
    selectors: [["app-employee-data-profile"]],
    viewQuery: function EmployeeDataProfileComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.showMoreSection = _t.first);
      }
    },
    decls: 2,
    vars: 4,
    consts: [["class", "w-full h-full  bg-gray-900", 4, "ngIf"], [3, "isVisible", "confirmationMessage", "bodyText", "cancel", "confirm"], [1, "w-full", "h-full", "bg-gray-900"], [1, "p-8"], [1, "p-8", "bg-gray-900", "shadow", "mt-24"], [1, "grid", "grid-cols-1", "md:grid-cols-3"], [1, "grid", "grid-cols-3", "text-center", "order-last", "md:order-first", "mt-20", "md:mt-0"], [1, "font-bold", "text-gray-700", "text-xl"], [1, "text-gray-400"], [1, ""], [1, "w-48", "h-48", "bg-indigo-100", "object-cover", "mx-auto", "rounded-full", "shadow-2xl", "inset-x-0", "top-0", "-mt-24", "flex", "text-indigo-500"], ["alt", "", 1, "flex-1", "rounded-full", "object-cover", 3, "src"], [1, "space-x-8", "flex", "justify-between", "mt-32", "md:mt-0", "md:justify-center"], [1, "text-white", "py-2", "px-8", "uppercase", "rounded", "bg-gray-700", "hover:bg-yellow-800", "shadow", "hover:shadow-lg", "font-medium", "transition", "transform", "hover:-translate-y-0.5", 3, "click"], [1, "text-white", "py-2", "px-4", "uppercase", "rounded", "bg-gray-800", "hover:bg-red-800", "shadow", "hover:shadow-lg", "font-medium", "transition", "transform", "hover:-translate-y-0.5", 3, "click"], [1, "mt-20", "text-center", "border-b", "pb-12"], [1, "text-4xl", "font-medium", "text-gray-300"], [1, "font-light", "text-gray-500"], [1, "font-light", "text-gray-400", "mt-3"], [1, "mt-2", "text-gray-500"], [1, "mt-8", "text-gray-500"], [1, "mt-8", "text-gray-400"], [1, "mt-12", "flex", "flex-col", "justify-center"], [1, "text-gray-600", "text-center", "font-light", "lg:px-16"], [1, "text-indigo-500", "py-2", "px-4", "font-medium", "mt-4", 3, "click"], ["id", "show-more", "class", "w-full min-h-full bg-gray-900", 4, "ngIf"], ["id", "show-more", 1, "w-full", "min-h-full", "bg-gray-900"], ["showMoreSection", ""]],
    template: function EmployeeDataProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, EmployeeDataProfileComponent_div_0_Template, 47, 14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-confirmation-dialog", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cancel", function EmployeeDataProfileComponent_Template_app_confirmation_dialog_cancel_1_listener() {
          return ctx.onCancelConfirmationDelete();
        })("confirm", function EmployeeDataProfileComponent_Template_app_confirmation_dialog_confirm_1_listener() {
          return ctx.onDeleteConfirmation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isVisible", ctx.deleteConfirm)("confirmationMessage", ctx.confirmationMessage)("bodyText", ctx.bodyText);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, _employee_attendance_detaildata_employee_attendance_detaildata_component__WEBPACK_IMPORTED_MODULE_3__.EmployeeAttendanceDetaildataComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1kYXRhLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9lbXBsb3llZS1kYXRhLXByb2ZpbGUvZW1wbG95ZWUtZGF0YS1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9MQUFvTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9868:
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/components/leave-request/leave-request.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeaveRequestComponent: () => (/* binding */ LeaveRequestComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_attendence_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/attendence.service */ 6646);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 1333);







function LeaveRequestComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Title is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LeaveRequestComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Title must be at least 4 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LeaveRequestComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Description is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LeaveRequestComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Description must be at least 10 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LeaveRequestComponent_div_39_div_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 48);
  }
  if (rf & 2) {
    const request_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", request_r8.photo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LeaveRequestComponent_div_39_div_1_ul_36_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 51)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const date_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 1, date_r13, "medium"));
  }
}
function LeaveRequestComponent_div_39_div_1_ul_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeaveRequestComponent_div_39_div_1_ul_36_li_1_Template, 4, 4, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const date_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", date_r13);
  }
}
function LeaveRequestComponent_div_39_div_1_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Attachment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const request_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", request_r8.attachment, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LeaveRequestComponent_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeaveRequestComponent_div_39_div_1_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const request_r8 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.toggleExpand(request_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 30)(3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LeaveRequestComponent_div_39_div_1_img_4_Template, 1, 1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 33)(6, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 36)(13, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " STATUS : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 39)(19, "div", 40)(20, "div", 41)(21, "div", 42)(22, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "STATUS:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4", 37)(25, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 42)(29, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 45)(34, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Dates:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, LeaveRequestComponent_div_39_div_1_ul_36_Template, 2, 1, "ul", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, LeaveRequestComponent_div_39_div_1_div_37_Template, 4, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const request_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("flipped", request_r8.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", request_r8.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("AUTHOR : ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 15, request_r8.userName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" TITLE : ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 17, request_r8.title), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r7.getStatusColor(request_r8.reviewStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 19, request_r8.reviewStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("max-h-0", !request_r8.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !request_r8.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r7.getStatusColor(request_r8.reviewStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 21, request_r8.reviewStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](request_r8.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", request_r8.requestedDates);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", request_r8.attachment);
  }
}
function LeaveRequestComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeaveRequestComponent_div_39_div_1_Template, 38, 23, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.leaveRequests);
  }
}
function LeaveRequestComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *No Leave Request Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class LeaveRequestComponent {
  constructor(fb, attendance) {
    this.fb = fb;
    this.attendance = attendance;
    this.leaveRequests = [];
  }
  ngOnInit() {
    this.leaveForm = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(4)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(200)]],
      range: this.fb.group({
        start: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        end: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
      })
    });
    this.attendance.getLeaveStatus().subscribe({
      next: res => {
        console.log(res);
        this.leaveRequests = [...res?.data];
      },
      error: err => {
        console.log(err);
      }
    });
  }
  onSubmit() {
    const recievedData = this.leaveForm.value;
    this.leaveFormData = new FormData();
    this.leaveFormData.append('title', recievedData.title);
    this.leaveFormData.append('description', recievedData.description);
    this.leaveFormData.append('start', recievedData.range.start);
    this.leaveFormData.append('end', recievedData.range.end);
    this.leaveFormData.append('attachment', this.selectedFile);
    this.attendance.registerLeave(this.leaveFormData).subscribe({
      next: res => {
        this.leaveRequests.push(res.data);
        alert(res.message);
        this.leaveForm.reset();
      },
      error: err => {
        console.log(err);
      }
    });
  }
  onFileSelection(event) {
    const files = event.target.files;
    if (files.length > 0) {
      this.selectedFile = [files[0]]; // Update the selectedFile array
    } else {
      alert('YOU CAN CHOOSE ONLY ONE FILE');
    }
  }
  getStatusColor(status) {
    switch (status?.toLowerCase()) {
      case 'pending':
        return {
          color: '#eab308',
          fontWeight: 'bold'
        };
      case 'approved':
        return {
          color: '#22c55e',
          fontWeight: 'bold'
        };
      case 'denied':
      case 'declined':
        return {
          color: '#ef4444',
          fontWeight: 'bold'
        };
      default:
        return {
          color: '#9ca3af'
        };
    }
  }
  toggleExpand(request) {
    request.expanded = !request.expanded; // Toggle the expanded state
  }
  static #_ = this.ɵfac = function LeaveRequestComponent_Factory(t) {
    return new (t || LeaveRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_attendence_service__WEBPACK_IMPORTED_MODULE_0__.AttendenceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LeaveRequestComponent,
    selectors: [["app-leave-request"]],
    decls: 41,
    vars: 10,
    consts: [[1, "w-full", "min-h-full", "bg-gray-900", "p-5"], [1, "text-white", "font-kanit", "text-2xl", "p-4"], [1, "bg-gray-900", "p-6", "rounded-md", "transition", "duration-300", "ease-in-out", "border", "border-yellow-700", "hover:border-red-900", "hover:border", 3, "formGroup", "ngSubmit"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "flex", "flex-col"], ["for", "title", 1, "text-white"], ["type", "text", "formControlName", "title", "placeholder", "Enter title", 1, "bg-gray-700", "text-white", "p-2", "rounded-md", "my-1", "transition", "duration-300", "ease-in-out", "transform", "hover:scale-[1.02]"], ["class", "text-red-500 mt-1", 4, "ngIf"], ["for", "attachments", 1, "text-white"], ["type", "file", "id", "attachments", "accept", "image/*", 1, "bg-gray-700", "text-white", "p-2", "rounded-md", "my-1", "transition", "duration-300", "ease-in-out", "transform", "hover:scale-[1.01]", 3, "change"], ["for", "description", 1, "text-white"], ["rows", "7", "name", "description", "formControlName", "description", "placeholder", "Enter description", 1, "bg-gray-700", "text-white", "p-2", "rounded-md", "my-1", "transition", "duration-300", "ease-in-out", "transform", "hover:scale-[1.01]"], [1, "mt-4", "md:mt-0", "grid", "md:place-items-center"], ["appearance", "fill"], [1, "text-white"], ["formGroupName", "range", 3, "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date", "id", "start", 1, "bg-gray-700", "text-white", "p-2", "rounded-md", "my-1", "transition", "duration-300", "ease-in-out", "transform", "hover:scale-[1.01]"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date", "id", "end", 1, "bg-gray-700", "text-white", "p-2", "rounded-md", "my-1", "transition", "duration-300", "ease-in-out", "transform", "hover:scale-[1.01]"], ["matIconSuffix", "", 3, "for"], ["picker", ""], [1, ""], ["type", "submit", 1, "bg-yellow-600", "text-gray-900", "p-2", "rounded-md", "my-2", "transition", "duration-300", "ease-in-out", "transform", "hover:scale-105", "px-12", "mt-4", 3, "disabled"], [1, "min-h-full", "w-full", "bg-gray-900", "p-8"], [1, "text-white", "text-xl", "mb-4", "font-kanit"], ["class", "grid grid-cols-1 md:grid-cols-2 gap-4", 4, "ngIf"], ["class", "text-red-900 text-center text-xl font-kanit", 4, "ngIf"], [1, "text-red-500", "mt-1"], ["class", "card-container bg-gray-800 h-[200px] sm:overflow-hidden overflow-scroll sm:h-[300px]", 4, "ngFor", "ngForOf"], [1, "card-container", "bg-gray-800", "h-[200px]", "sm:overflow-hidden", "overflow-scroll", "sm:h-[300px]"], [1, "card", "rounded-lg", "shadow-md", "overflow-hidden", "bg-gray-800", 3, "click"], [1, "card__side", "card__side--front", "bg-gray-800"], [1, "flex", "items-center", "flex-col", "gap-4", "p-4", "cursor-pointer"], ["alt", "", "class", "w-20 h-20 object-cover rounded-full mr-4", 3, "src", 4, "ngIf"], [1, "flex", "flex-col", "text-left", "gap-0"], [1, "text-xl", "font-semibold", "text-gray-200"], [1, "text-lg", "font-medium", "text-gray-400"], [1, "flex", "flex-col", "items-center", "text-sm", "text-gray-500", "justify-around", "w-full"], [1, "mr-2"], [3, "ngStyle"], [1, "card__side", "card__side--back"], [1, "p-4", "gap-4", "overflow-hidden", "transition-max-h", "duration-300", "ease-in-out"], [3, "hidden"], [1, "bg-gray-900", "p-4", "mt-4", "rounded-lg"], [1, "text-lg", "font-semibold", "text-gray-300", "mb-2"], [1, "text-gray-400"], [1, "bg-gray-900", "p-4", "rounded-lg", "mt-4"], ["class", "list-disc pl-4", 4, "ngFor", "ngForOf"], ["class", "bg-gray-900 p-4 mt-4 rounded-lg", 4, "ngIf"], ["alt", "", 1, "w-20", "h-20", "object-cover", "rounded-full", "mr-4", 3, "src"], [1, "list-disc", "pl-4"], ["class", "text-gray-400 mt-2 ", 4, "ngIf"], [1, "text-gray-400", "mt-2"], [1, "text-lg", "font-semibold", "text-gray-400", "mb-2"], ["alt", "", 1, "object-cover", "lg:max-h-[400px]", "lg:max-w-[400px]", "mb-2", 3, "src"], [1, "text-red-900", "text-center", "text-xl", "font-kanit"]],
    template: function LeaveRequestComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " LEAVE APPLICATION : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LeaveRequestComponent_Template_form_ngSubmit_3_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LeaveRequestComponent_div_9_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LeaveRequestComponent_div_10_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4)(12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Attachments:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LeaveRequestComponent_Template_input_change_14_listener($event) {
          return ctx.onFileSelection($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4)(16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LeaveRequestComponent_div_19_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LeaveRequestComponent_div_20_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12)(22, "mat-form-field", 13)(23, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Enter a date range");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-date-range-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 16)(27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-hint", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "MM/DD/YYYY \u2013 MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "mat-datepicker-toggle", 18)(31, "mat-date-range-picker", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 20)(34, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 22)(37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "APPLEID LEAVE REQUESTS :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, LeaveRequestComponent_div_39_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, LeaveRequestComponent_div_40_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.leaveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leaveForm.controls["title"].hasError("required") && ctx.leaveForm.controls["title"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leaveForm.controls["title"].hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leaveForm.controls["description"].hasError("required") && ctx.leaveForm.controls["description"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leaveForm.controls["description"].hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rangePicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.leaveForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leaveRequests && ctx.leaveRequests.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.leaveRequests || ctx.leaveRequests.length === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDateRangePicker, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
    styles: ["\n\n\n.card-container[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.card[_ngcontent-%COMP%] {\n    position: relative;\n    height: 100%; \n\n    width: 100%; \n\n    perspective: 150rem;\n}\n\n.card__side[_ngcontent-%COMP%] {\n    height: 100%;\n    transition: all 0.8s ease;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    backface-visibility: hidden;\n    border-radius: 3px;\n    overflow: hidden;\n}\n\n.card__side--front[_ngcontent-%COMP%] {\n    overflow-y: auto;\n\n    \n\n}\n\n.card__side--back[_ngcontent-%COMP%] {\n    \n\n    transform: rotateY(180deg);\n    overflow-y: auto;\n}\n\n@media (max-width: 768px) {\n    .card__side--back[_ngcontent-%COMP%] {\n        max-height: 200px; \n\n    }\n    .card__side--front[_ngcontent-%COMP%] {\n        max-height: 200px;\n    }\n}\n\n.card.flipped[_ngcontent-%COMP%]   .card__side--front[_ngcontent-%COMP%] {\n    transform: rotateY(-180deg);\n}\n\n.card.flipped[_ngcontent-%COMP%]   .card__side--back[_ngcontent-%COMP%] {\n    transform: rotateY(0);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXZlLXJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBc0I7O0FBRXRCO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVksRUFBRSxxQkFBcUI7SUFDbkMsV0FBVyxFQUFFLHFCQUFxQjtJQUVsQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjs7SUFFaEIsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksZ0RBQWdEO0lBQ2hELDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQixFQUFFLHVCQUF1QjtJQUM5QztJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoibGVhdmUtcmVxdWVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWRkIHlvdXIgQ1NTIGhlcmUgKi9cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXG4gICAgd2lkdGg6IDEwMCU7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxNTByZW07XG4gICAgcGVyc3BlY3RpdmU6IDE1MHJlbTtcbn1cblxuLmNhcmRfX3NpZGUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkX19zaWRlLS1mcm9udCB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMwODY4NmY7IEFkanVzdCBhcyBuZWVkZWQgKi9cbn1cblxuLmNhcmRfX3NpZGUtLWJhY2sge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7IEFkanVzdCBhcyBuZWVkZWQgKi9cbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY2FyZF9fc2lkZS0tYmFjayB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4OyAvKiBTZXQgbWF4aW11bSBoZWlnaHQgKi9cbiAgICB9XG4gICAgLmNhcmRfX3NpZGUtLWZyb250IHtcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgfVxufVxuXG4uY2FyZC5mbGlwcGVkIC5jYXJkX19zaWRlLS1mcm9udCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xufVxuXG4uY2FyZC5mbGlwcGVkIC5jYXJkX19zaWRlLS1iYWNrIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9sZWF2ZS1yZXF1ZXN0L2xlYXZlLXJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBc0I7O0FBRXRCO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVksRUFBRSxxQkFBcUI7SUFDbkMsV0FBVyxFQUFFLHFCQUFxQjtJQUVsQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjs7SUFFaEIsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksZ0RBQWdEO0lBQ2hELDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQixFQUFFLHVCQUF1QjtJQUM5QztJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0EsNHFFQUE0cUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBZGQgeW91ciBDU1MgaGVyZSAqL1xuXG4uY2FyZC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cbiAgICB3aWR0aDogMTAwJTsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDE1MHJlbTtcbiAgICBwZXJzcGVjdGl2ZTogMTUwcmVtO1xufVxuXG4uY2FyZF9fc2lkZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2U7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmRfX3NpZGUtLWZyb250IHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzA4Njg2ZjsgQWRqdXN0IGFzIG5lZWRlZCAqL1xufVxuXG4uY2FyZF9fc2lkZS0tYmFjayB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTsgQWRqdXN0IGFzIG5lZWRlZCAqL1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5jYXJkX19zaWRlLS1iYWNrIHtcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7IC8qIFNldCBtYXhpbXVtIGhlaWdodCAqL1xuICAgIH1cbiAgICAuY2FyZF9fc2lkZS0tZnJvbnQge1xuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICB9XG59XG5cbi5jYXJkLmZsaXBwZWQgLmNhcmRfX3NpZGUtLWZyb250IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG59XG5cbi5jYXJkLmZsaXBwZWQgLmNhcmRfX3NpZGUtLWJhY2sge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9897:
/*!************************************************************************!*\
  !*** ./src/app/modules/shared/components/loading/loading.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingComponent: () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class LoadingComponent {
  static #_ = this.ɵfac = function LoadingComponent_Factory(t) {
    return new (t || LoadingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoadingComponent,
    selectors: [["app-loading"]],
    decls: 13,
    vars: 0,
    consts: [[1, "loading-screen"], [1, "loader"], [1, "spinner"], [1, "bar", "bar1"], [1, "bar", "bar2"], [1, "bar", "bar3"], [1, "bar", "bar4"], [1, "bar", "bar5"], [1, "bar", "bar6"], [1, "bar", "bar7"], [1, "bar", "bar8"], [1, "text"]],
    template: function LoadingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".loading-screen[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5); \n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    z-index: 9999;\n  }\n  \n  .loader[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n  \n  .spinner[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    position: relative;\n    animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  }\n  \n  .bar[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 30px;\n    background-color: #d4d4d4;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform-origin: bottom center;\n  }\n  \n  .bar1[_ngcontent-%COMP%] {\n    transform: rotate(0deg) translateX(-50%);\n    animation: _ngcontent-%COMP%_bar1 1s ease-in-out infinite;\n  }\n  \n  .bar2[_ngcontent-%COMP%] {\n    transform: rotate(45deg) translateX(-50%);\n    animation: _ngcontent-%COMP%_bar2 1s ease-in-out infinite;\n  }\n  \n  .bar3[_ngcontent-%COMP%] {\n    transform: rotate(90deg) translateX(-50%);\n    animation: _ngcontent-%COMP%_bar3 1s ease-in-out infinite;\n  }\n  \n  .bar4[_ngcontent-%COMP%] {\n    transform: rotate(135deg) translateX(-50%);\n    animation: _ngcontent-%COMP%_bar4 1s ease-in-out infinite;\n  }\n  \n  .bar5[_ngcontent-%COMP%] {\n    transform: rotate(180deg) translateX(-50%);\n    animation: _ngcontent-%COMP%_bar5 1s ease-in-out infinite;\n  }\n  \n  .bar6[_ngcontent-%COMP%] {\n    transform: rotate(225deg) translateX(-50%);\n    animation: _ngcontent-%COMP%_bar6 1s ease-in-out infinite;\n  }\n  \n  .bar7[_ngcontent-%COMP%] {\n    transform: rotate(270deg) translateX(-50%);\n    animation: _ngcontent-%COMP%_bar7 1s ease-in-out infinite;\n  }\n  \n  .bar8[_ngcontent-%COMP%] {\n    transform: rotate(315deg) translateX(-50%);\n    animation: _ngcontent-%COMP%_bar8 1s ease-in-out infinite;\n  }\n  \n  .text[_ngcontent-%COMP%] {\n    font-size: 24px;\n    color: #d4d4d4;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    animation: _ngcontent-%COMP%_fade 1s infinite;\n  }\n  \n  @keyframes _ngcontent-%COMP%_spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  \n  @keyframes _ngcontent-%COMP%_bar1 {\n    0% {\n      height: 30px;\n    }\n    50% {\n      height: 60px;\n    }\n    100% {\n      height: 30px;\n    }\n  }\n  \n  @keyframes _ngcontent-%COMP%_bar2 {\n    0% {\n      height: 30px;\n    }\n    50% {\n      height: 50px;\n    }\n    100% {\n      height: 30px;\n    }\n  }\n  \n  @keyframes _ngcontent-%COMP%_bar3 {\n    0% {\n      height: 30px;\n    }\n    50% {\n      height: 40px;\n    }\n    100% {\n      height: 30px;\n    }\n  }\n  \n  @keyframes _ngcontent-%COMP%_bar4 {\n    0% {\n      height: 30px;\n    }\n    50% {\n      height: 50px;\n    }\n    100% {\n      height: 30px;\n    }\n  }\n  \n  @keyframes _ngcontent-%COMP%_bar5 {\n    0% {\n      height: 30px;\n    }\n    50% {\n      height: 60px;\n    }\n    100% {\n      height: 30px;\n    }\n  }\n  \n  @keyframes _ngcontent-%COMP%_bar6 {\n    0% {\n      height: 30px;\n    }\n    50% {\n      height: 50px;\n    }\n    100% {\n      height: 30px;\n    }\n  }\n  \n  @keyframes _ngcontent-%COMP%_bar7 {\n    0% {\n      height: 30px;\n    }\n    50% {\n      height: 40px;\n    }\n    100% {\n      height: 30px;\n    }\n  }\n  \n  @keyframes _ngcontent-%COMP%_bar8 {\n    0% {\n      height: 30px;\n    }\n    50% {\n      height: 50px;\n    }\n    100% {\n      height: 30px;\n    }\n  }\n  \n  @keyframes _ngcontent-%COMP%_fade {\n    0%, 100% {\n      opacity: 0.2;\n    }\n    50% {\n      opacity: 1;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DLEVBQUUsc0NBQXNDO0lBQzVFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSx3Q0FBd0M7SUFDeEMsdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0UseUNBQXlDO0lBQ3pDLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLHlDQUF5QztJQUN6Qyx1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSwwQ0FBMEM7SUFDMUMsdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0UsMENBQTBDO0lBQzFDLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLDBDQUEwQztJQUMxQyx1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSwwQ0FBMEM7SUFDMUMsdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0UsMENBQTBDO0lBQzFDLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7RUFDRjs7RUFFQTtJQUNFO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7SUFDZDtFQUNGOztFQUVBO0lBQ0U7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsWUFBWTtJQUNkO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7RUFDRjs7RUFFQTtJQUNFO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7SUFDZDtFQUNGOztFQUVBO0lBQ0U7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsWUFBWTtJQUNkO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7RUFDRjs7RUFFQTtJQUNFO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7SUFDZDtFQUNGOztFQUVBO0lBQ0U7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGIiwiZmlsZSI6ImxvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLXNjcmVlbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIFNlbWktdHJhbnNwYXJlbnQgYmxhY2sgYmFja2dyb3VuZCAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gIH1cbiAgXG4gIC5sb2FkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbiAgXG4gIC5zcGlubmVyIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5iYXIge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XG4gIH1cbiAgXG4gIC5iYXIxIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGFuaW1hdGlvbjogYmFyMSAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLmJhcjIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGFuaW1hdGlvbjogYmFyMiAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLmJhcjMge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGFuaW1hdGlvbjogYmFyMyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLmJhcjQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZykgdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBhbmltYXRpb246IGJhcjQgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5iYXI1IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgYW5pbWF0aW9uOiBiYXI1IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG4gIFxuICAuYmFyNiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKSB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGFuaW1hdGlvbjogYmFyNiAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLmJhcjcge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBhbmltYXRpb246IGJhcjcgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5iYXI4IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpIHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgYW5pbWF0aW9uOiBiYXI4IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG4gIFxuICAudGV4dCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjZDRkNGQ0O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBhbmltYXRpb246IGZhZGUgMXMgaW5maW5pdGU7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgYmFyMSB7XG4gICAgMCUge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgYmFyMiB7XG4gICAgMCUge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgYmFyMyB7XG4gICAgMCUge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgYmFyNCB7XG4gICAgMCUge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgYmFyNSB7XG4gICAgMCUge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgYmFyNiB7XG4gICAgMCUge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgYmFyNyB7XG4gICAgMCUge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgYmFyOCB7XG4gICAgMCUge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZSB7XG4gICAgMCUsIDEwMCUge1xuICAgICAgb3BhY2l0eTogMC4yO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DLEVBQUUsc0NBQXNDO0lBQzVFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSx3Q0FBd0M7SUFDeEMsdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0UseUNBQXlDO0lBQ3pDLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLHlDQUF5QztJQUN6Qyx1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSwwQ0FBMEM7SUFDMUMsdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0UsMENBQTBDO0lBQzFDLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLDBDQUEwQztJQUMxQyx1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSwwQ0FBMEM7SUFDMUMsdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0UsMENBQTBDO0lBQzFDLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7RUFDRjs7RUFFQTtJQUNFO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7SUFDZDtFQUNGOztFQUVBO0lBQ0U7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsWUFBWTtJQUNkO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7RUFDRjs7RUFFQTtJQUNFO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7SUFDZDtFQUNGOztFQUVBO0lBQ0U7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsWUFBWTtJQUNkO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7RUFDRjs7RUFFQTtJQUNFO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7SUFDZDtFQUNGOztFQUVBO0lBQ0U7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGO0FBQ0Ysd21NQUF3bU0iLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1zY3JlZW4ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBTZW1pLXRyYW5zcGFyZW50IGJsYWNrIGJhY2tncm91bmQgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiA5OTk5O1xuICB9XG4gIFxuICAubG9hZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG4gIFxuICAuc3Bpbm5lciB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICAuYmFyIHtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xuICB9XG4gIFxuICAuYmFyMSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBhbmltYXRpb246IGJhcjEgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5iYXIyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBhbmltYXRpb246IGJhcjIgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5iYXIzIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBhbmltYXRpb246IGJhcjMgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5iYXI0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpIHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgYW5pbWF0aW9uOiBiYXI0IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG4gIFxuICAuYmFyNSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGFuaW1hdGlvbjogYmFyNSAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLmJhcjYge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZykgdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBhbmltYXRpb246IGJhcjYgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5iYXI3IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpIHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgYW5pbWF0aW9uOiBiYXI3IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG4gIFxuICAuYmFyOCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKSB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGFuaW1hdGlvbjogYmFyOCAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogI2Q0ZDRkNDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgYW5pbWF0aW9uOiBmYWRlIDFzIGluZmluaXRlO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGJhcjEge1xuICAgIDAlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGJhcjIge1xuICAgIDAlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGJhcjMge1xuICAgIDAlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGJhcjQge1xuICAgIDAlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGJhcjUge1xuICAgIDAlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGJhcjYge1xuICAgIDAlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGJhcjcge1xuICAgIDAlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGJhcjgge1xuICAgIDAlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZhZGUge1xuICAgIDAlLCAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5572:
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/components/multiselect/multiselect.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiselectComponent: () => (/* binding */ MultiselectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/common.service */ 9653);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-multiselect-dropdown */ 268);







function MultiselectComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "ng-multiselect-dropdown", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MultiselectComponent_div_0_Template_ng_multiselect_dropdown_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.selectedItems = $event);
    })("onSelect", function MultiselectComponent_div_0_Template_ng_multiselect_dropdown_onSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onItemSelect($event));
    })("onSelectAll", function MultiselectComponent_div_0_Template_ng_multiselect_dropdown_onSelectAll_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.onSelectAll($event));
    })("onDropDownClose", function MultiselectComponent_div_0_Template_ng_multiselect_dropdown_onDropDownClose_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onDropDownClose());
    })("onDeSelect", function MultiselectComponent_div_0_Template_ng_multiselect_dropdown_onDeSelect_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.onItemDeSelect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx_r0.placeholder)("settings", ctx_r0.dropdownSettings)("data", ctx_r0.dropdownList)("ngModel", ctx_r0.selectedItems);
  }
}
class MultiselectComponent {
  //  ngDoCheck(): void {
  //  console.log(this.selectedItems);
  // this.selectedOption.emit(this.selectedItems.map(items=>items.item_text))
  //  }
  constructor(commonService) {
    this.commonService = commonService;
    this.apiUrl = '';
    this.selectedOption = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.singleSelection = false;
    this.placeholder = 'select department';
    this.dropdownList = [];
    this.selectedItems = [];
    this.dropdownSettings = {};
    this.showDrop = false;
    this.p = [];
  }
  ngOnInit() {
    this.commonService.getListData(this.apiUrl).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => res.data || []) // Use the map operator to extract the 'data' array
    ).subscribe({
      next: dataArray => {
        // console.log(dataArray);
        // Now 'dataArray' contains each item from the 'data' array
        dataArray.forEach((element, i) => {
          // console.log(element,i);
          this.dropdownList.push({
            item_id: i,
            item_text: element.name
          });
        });
        this.showDrop = true;
        // console.log(this.dropdownList);
      },

      error: err => {
        console.error(err);
      }
    });
    this.dropdownSettings = {
      singleSelection: this.singleSelection,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };
  }
  onDropDownClose() {
    this.selectedOption.emit(this.selectedItems.map(items => items.item_text));
  }
  onItemSelect(item) {
    // this.selectedItems.push(item)
    // console.log(this.selectedItems,'k');
    // this.selectedOption.emit(this.selectedItems.map(items=>items.item_text));
  }
  onSelectAll(items) {
    // console.log(items);
    // this.selectedOption.emit(this.selectedItems.map(items=>items.item_text));
  }
  onItemDeSelect() {
    // this.selectedOption.emit(this.selectedItems.map(items=>items.item_text));
  }
  static #_ = this.ɵfac = function MultiselectComponent_Factory(t) {
    return new (t || MultiselectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MultiselectComponent,
    selectors: [["app-multiselect"]],
    inputs: {
      apiUrl: "apiUrl",
      singleSelection: "singleSelection",
      placeholder: "placeholder"
    },
    outputs: {
      selectedOption: "selectedOption"
    },
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onSelectAll", "onDropDownClose", "onDeSelect"]],
    template: function MultiselectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MultiselectComponent_div_0_Template, 2, 4, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDrop);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__.MultiSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdWx0aXNlbGVjdC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1964:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/shared/components/notification-list/notification-list.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationListComponent: () => (/* binding */ NotificationListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_modules_departmenthead_services_apiUtitility_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/departmenthead/services/apiUtitility.service */ 7729);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);




function NotificationListComponent_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const event_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 2, event_r5.start, "dd MMM yy"));
  }
}
function NotificationListComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NotificationListComponent_ng_container_4_div_1_Template, 6, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.upcomingEvents);
  }
}
function NotificationListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No upcoming notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NotificationListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const event_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 2, event_r6.start, "dd MMM yy"));
  }
}
class NotificationListComponent {
  constructor(api, route, router) {
    this.api = api;
    this.route = route;
    this.router = router;
    this.upcomingEvents = [];
    this.allEvents = [];
  }
  ngOnInit() {
    const currentUrl = this.router.url;
    // console.log('Current URL:', currentUrl);
    const urlParts = currentUrl.split('/');
    this.api.getNotificationList(urlParts[1]).subscribe({
      next: res => {
        console.log(res, 'juju');
        // console.log(res.upcomingNotifications);
        this.allEvents = [...res.previousOrAllNotifications];
        this.upcomingEvents = [...res.upcomingNotifications];
      },
      error: err => {}
    });
  }
  static #_ = this.ɵfac = function NotificationListComponent_Factory(t) {
    return new (t || NotificationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_departmenthead_services_apiUtitility_service__WEBPACK_IMPORTED_MODULE_0__.ApiutitilityService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NotificationListComponent,
    selectors: [["app-notification-list"]],
    decls: 12,
    vars: 3,
    consts: [[1, "flex", "flex-col", "md:mt-8", "p-1", "flex-wrap"], [1, "font-kanit", "text-3xl", "text-white", "font-bold", "mb-4"], [1, "grid", "lg:grid-cols-2", "sm:grid-cols-1", "gap-5", "sm:px-3", "md:mt-4"], [4, "ngIf", "ngIfElse"], ["noUpcomingEvents", ""], [1, "flex", "flex-col", "col-span-2", "md:mt-8"], [1, "grid", "lg:grid-cols-2", "sm:grid-cols-1", "gap-5", "sm:px-3", "md:mt-4", "font-kanit"], ["class", "event-card bg-gray-800 text-white p-4 md:max-h-14 flex justify-between rounded-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105", 4, "ngFor", "ngForOf"], ["class", " flex font-kanit border border-yellow-800 justify-between event-card bg-gray-800 text-white p-4 rounded-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105", 4, "ngFor", "ngForOf"], [1, "flex", "font-kanit", "border", "border-yellow-800", "justify-between", "event-card", "bg-gray-800", "text-white", "p-4", "rounded-md", "hover:shadow-lg", "transition", "duration-300", "ease-in-out", "transform", "hover:scale-105"], [1, "text-2xl"], [1, "text-xl", "text-yellow-800"], [1, "text-red-500", "text-center", "font-bold"], [1, "event-card", "bg-gray-800", "text-white", "p-4", "md:max-h-14", "flex", "justify-between", "rounded-md", "hover:shadow-lg", "transition", "duration-300", "ease-in-out", "transform", "hover:scale-105"], [1, "text-2xl", "text-gray-500"]],
    template: function NotificationListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Upcoming Active Events:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NotificationListComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NotificationListComponent_ng_template_5_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "All Announced Events:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NotificationListComponent_div_11_Template, 6, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.upcomingEvents.length > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allEvents);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24tbGlzdC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9ub3RpZmljYXRpb24tbGlzdC9ub3RpZmljYXRpb24tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnTEFBZ0wiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1639:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shared/components/profile-form/profile-form.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileFormComponent: () => (/* binding */ ProfileFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/common.service */ 9653);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);





function ProfileFormComponent_form_7_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProfileFormComponent_form_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileFormComponent_form_7_div_5_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.f["name"].errors["required"]);
  }
}
function ProfileFormComponent_form_7_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProfileFormComponent_form_7_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid email format");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProfileFormComponent_form_7_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileFormComponent_form_7_div_10_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileFormComponent_form_7_div_10_div_2_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.f["email"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.f["email"].errors["email"]);
  }
}
function ProfileFormComponent_form_7_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Gender is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProfileFormComponent_form_7_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileFormComponent_form_7_div_23_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.f["gender"].errors["required"]);
  }
}
function ProfileFormComponent_form_7_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Phone number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProfileFormComponent_form_7_div_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid phone number format");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProfileFormComponent_form_7_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileFormComponent_form_7_div_28_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProfileFormComponent_form_7_div_28_div_2_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.f["phoneNumber"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.f["phoneNumber"].errors["pattern"]);
  }
}
function ProfileFormComponent_form_7_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProfileFormComponent_form_7_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileFormComponent_form_7_div_33_div_1_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.f["address"].errors["required"]);
  }
}
function ProfileFormComponent_form_7_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.profileFormError);
  }
}
function ProfileFormComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfileFormComponent_form_7_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10)(2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProfileFormComponent_form_7_div_5_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10)(7, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProfileFormComponent_form_7_div_10_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10)(12, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Gender:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "select", 28)(15, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Select gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ProfileFormComponent_form_7_div_23_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10)(25, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Phone Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ProfileFormComponent_form_7_div_28_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 10)(30, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ProfileFormComponent_form_7_div_33_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 10)(35, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Second Phone Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 10)(39, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Bio:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, ProfileFormComponent_form_7_div_42_Template, 5, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 42)(44, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Submit Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.profileForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["name"].errors && (ctx_r0.f["name"].dirty || ctx_r0.f["name"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["email"].errors && (ctx_r0.f["email"].dirty || ctx_r0.f["email"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["gender"].errors && (ctx_r0.f["gender"].dirty || ctx_r0.f["gender"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["phoneNumber"].errors && (ctx_r0.f["phoneNumber"].dirty || ctx_r0.f["phoneNumber"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f["address"].errors && (ctx_r0.f["address"].dirty || ctx_r0.f["address"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.profileFormError);
  }
}
function ProfileFormComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.passwordErrorMessage);
  }
}
class ProfileFormComponent {
  constructor(fb, serv) {
    this.fb = fb;
    this.serv = serv;
    this.loaded = false;
    this.profileImage = '';
    this.profileFormError = '';
    this.selectedImageFile = null;
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
      newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
      confirmNewPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]]
    });
    this.passwordErrorMessage = '';
    this.updateProfile = new FormData();
  }
  ngAfterContentInit() {
    this.serv.getProfile().subscribe({
      next: res => {
        this.profileData = res.data[0];
        this.initForm(); // Initialize the form after data is received
        console.log(this.profileData.employeeName);
      },
      error: err => console.log(err)
    });
  }
  initForm() {
    this.profileImage = this.profileData?.photo || 'https://i.pinimg.com/originals/6e/4c/9d/6e4c9d2edd4e96ebf5aa313f15827b15.jpg';
    this.profileForm = this.fb.group({
      name: [this.profileData?.employeeName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      email: [this.profileData?.contactEmail || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      gender: [this.profileData?.gender || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      phoneNumber: [this.profileData?.contactNumber || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^\d{10}$/)]],
      secondPhoneNumber: [this.profileData?.secondPhoneNumber || ''],
      bio: [this.profileData?.bio || ''],
      address: [this.profileData?.address || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      skills: this.fb.array([]) // Define skills as an array
    });

    this.loaded = true; // Set loaded to true after form initialization
  }
  // Getter for easier access to form controls
  get f() {
    return this.profileForm.controls;
  }
  onSubmit() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      const errors = [];
      if (this.f['name']?.invalid) errors.push('Name is required');
      if (this.f['email']?.invalid) {
        if (this.f['email'].errors?.['required']) errors.push('Email is required');else if (this.f['email'].errors?.['email']) errors.push('Invalid email format');
      }
      if (this.f['gender']?.invalid) errors.push('Gender selection is required');
      if (this.f['phoneNumber']?.invalid) {
        if (this.f['phoneNumber'].errors?.['required']) errors.push('Phone number is required');else if (this.f['phoneNumber'].errors?.['pattern']) errors.push('Phone number must be 10 digits');
      }
      if (this.f['address']?.invalid) errors.push('Address is required');
      this.profileFormError = `Cannot submit: ${errors.join(', ')}.`;
      return;
    }
    this.profileFormError = '';
    const formValue = this.profileForm.value;
    const bioValue = Array.isArray(formValue.bio) ? formValue.bio[0] : formValue.bio;
    const formData = new FormData();
    formData.append('name', formValue.name);
    formData.append('email', formValue.email);
    formData.append('gender', formValue.gender);
    formData.append('phoneNumber', formValue.phoneNumber);
    formData.append('secondPhoneNumber', formValue.secondPhoneNumber || '');
    formData.append('bio', bioValue || '');
    formData.append('address', formValue.address);
    if (this.selectedImageFile) {
      formData.append('image', this.selectedImageFile);
    }
    this.serv.UpdateProfile(formData).subscribe({
      next: res => {
        alert('Profile updated successfully');
      },
      error: err => {
        console.log(err);
        this.profileFormError = err.error?.message || 'Failed to update profile. Please try again.';
      }
    });
  }
  onChangePassword() {
    if (this.changePasswordForm.invalid) {
      this.changePasswordForm.markAllAsTouched();
      const errors = [];
      const cp = this.changePasswordForm.controls['currentPassword'];
      const np = this.changePasswordForm.controls['newPassword'];
      const cnp = this.changePasswordForm.controls['confirmNewPassword'];
      if (cp.invalid) errors.push('Current password is required (min 6 characters)');
      if (np.invalid) errors.push('New password is required (min 6 characters)');
      if (cnp.invalid) errors.push('Confirm password is required (min 6 characters)');
      this.passwordErrorMessage = `Cannot submit: ${errors.join(', ')}.`;
      return;
    }
    const {
      currentPassword,
      newPassword,
      confirmNewPassword
    } = this.changePasswordForm.value;
    if (newPassword !== confirmNewPassword) {
      this.passwordErrorMessage = 'New password and confirm password do not match.';
      return;
    }
    this.passwordErrorMessage = '';
    this.serv.changePassword({
      currentPassword,
      newPassword
    }).subscribe({
      next: res => {
        if (res.success) {
          alert('Password changed successfully!');
          this.changePasswordForm.reset();
        } else {
          this.passwordErrorMessage = res.message || 'Failed to change password.';
        }
      },
      error: err => {
        this.passwordErrorMessage = err.error?.message || 'Current password is incorrect or failed to update.';
        console.error(err);
      }
    });
  }
  onProfileImageSelected(event) {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      this.selectedImageFile = selectedFile;
      const reader = new FileReader();
      reader.onload = e => {
        this.profileImage = e.target?.result?.toString() || '';
      };
      reader.readAsDataURL(selectedFile);
    }
  }
  static #_ = this.ɵfac = function ProfileFormComponent_Factory(t) {
    return new (t || ProfileFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProfileFormComponent,
    selectors: [["app-profile-form"]],
    decls: 28,
    vars: 4,
    consts: [[1, "w-full", "min-h-full", "bg-gray-900"], [1, "w-full", "bg-gray-900", "h-full", "p-10", "gap-0"], [1, "flex", "justify-center", "items-center", "flex-col", "img-container", "gap-2"], ["alt", "", 1, "md:w-36", "w-24", "h-24", "md:h-36", "object-cover", "object-center", "overflow-hidden", "p-1", "rounded-full", "ring-2", "ring-gray-300", "dark:ring-gray-500", 3, "src"], ["for", "profileImageInput", 1, "text-gray-300", "hover:text-yellow-600", "cursor-pointer"], ["type", "file", "id", "profileImageInput", "accept", "image/*", 2, "display", "none", 3, "change"], ["class", "bg-gray-900 shadow-sm shadow-gray-700 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 h-5/6 p-8 justify-center items-center gap-9 md:text-xl text-md", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "bg-gray-800", "shadow-md", "shadow-gray-700", "rounded-lg", "p-8", "mt-10"], [1, "text-2xl", "font-semibold", "text-white", "mb-6"], [1, "grid", "lg:grid-cols-3", "md:grid-cols-2", "grid-cols-1", "gap-6", "md:text-xl", "text-md", 3, "formGroup", "ngSubmit"], [1, "text-white", "font-kanit", "flex", "flex-col"], ["for", "currentPassword"], ["type", "password", "formControlName", "currentPassword", "placeholder", "Enter current password", 1, "rounded-lg", "border-th", "mt-2", "md:min-h-14", "px-3", "py-2", "text-gray-300", "border-0", "bg-gray-700", "focus:outline-none", "focus:border-[#45aaf2]"], ["for", "newPassword"], ["type", "password", "formControlName", "newPassword", "placeholder", "Enter new password", 1, "rounded-lg", "border-th", "mt-2", "md:min-h-14", "px-3", "py-2", "text-gray-300", "border-0", "bg-gray-700", "focus:outline-none", "focus:border-[#45aaf2]"], ["for", "confirmNewPassword"], ["type", "password", "formControlName", "confirmNewPassword", "placeholder", "Confirm new password", 1, "rounded-lg", "border-th", "mt-2", "md:min-h-14", "px-3", "py-2", "text-gray-300", "border-0", "bg-gray-700", "focus:outline-none", "focus:border-[#45aaf2]"], ["class", "lg:col-span-3 md:col-span-2 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex items-center gap-3", 4, "ngIf"], [1, "lg:col-span-3", "md:col-span-2", "flex", "justify-end"], ["type", "submit", 1, "px-8", "rounded-md", "bg-blue-600", "hover:bg-blue-700", "py-3", "text-white", "font-semibold", "transition", "duration-300", "cursor-pointer"], [1, "bg-gray-900", "shadow-sm", "shadow-gray-700", "grid", "lg:grid-cols-3", "md:grid-cols-2", "grid-cols-1", "h-5/6", "p-8", "justify-center", "items-center", "gap-9", "md:text-xl", "text-md", 3, "formGroup", "ngSubmit"], ["for", "name"], ["type", "text", "formControlName", "name", "placeholder", "Enter your name", 1, "rounded-lg", "border-th", "mt-2", "md:min-h-14", "px-3", "py-2", "text-gray-300", "border-0", "bg-gray-700", "focus:outline-none", "focus:border-[#45aaf2]"], ["class", "text-red-500 ", 4, "ngIf"], ["for", "email"], ["type", "email", "formControlName", "email", "placeholder", "Enter your email", 1, "rounded-lg", "border-th", "mt-2", "md:min-h-14", "px-3", "py-2", "text-gray-300", "border-0", "bg-gray-700", "focus:outline-none", "focus:border-[#45aaf2]"], ["class", "text-red-500", 4, "ngIf"], ["for", "gender"], ["formControlName", "gender", "placeholder", "Select gender", 1, "rounded-lg", "border-th", "mt-2", "md:min-h-14", "px-3", "py-2", "text-gray-300", "border-0", "bg-gray-700", "focus:outline-none", "focus:border-[#45aaf2]"], ["value", "", "disabled", ""], ["value", "male"], ["value", "female"], ["value", "other"], ["for", "phoneNumber"], ["type", "tel", "formControlName", "phoneNumber", "placeholder", "Enter your phone number", 1, "rounded-lg", "border-th", "mt-2", "md:min-h-14", "px-3", "py-2", "text-gray-300", "border-0", "bg-gray-700", "focus:outline-none", "focus:border-[#45aaf2]"], ["for", "address"], ["type", "text", "formControlName", "address", "placeholder", "Enter your address", 1, "rounded-lg", "border-th", "mt-2", "md:min-h-14", "px-3", "py-2", "text-gray-300", "border-0", "bg-gray-700", "focus:outline-none", "focus:border-[#45aaf2]"], ["for", "secondPhoneNumber"], ["type", "tel", "formControlName", "secondPhoneNumber", "placeholder", "Enter your second phone number", 1, "rounded-lg", "border-th", "mt-2", "md:min-h-14", "px-3", "py-2", "text-gray-300", "border-0", "bg-gray-700", "focus:outline-none", "focus:border-[#45aaf2]"], ["for", "bio"], ["type", "text", "formControlName", "bio", "placeholder", "Enter your bio", 1, "rounded-lg", "border-th", "mt-2", "md:min-h-14", "px-3", "py-2", "text-gray-300", "border-0", "bg-gray-700", "focus:outline-none", "focus:border-[#45aaf2]"], ["class", "lg:col-span-3 md:col-span-2 col-span-1 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex items-center gap-3", 4, "ngIf"], [1, "md:justify-center", "md:items-end", "mt-5", "self-end", "grid", "lg:col-span-3", "md:col-span-2"], ["type", "submit", 1, "d:min-w-24", "px-9", "rounded-md", "bg-yellow-700", "py-2.5", "hover:bg-yellow-600", "text-white", "font-semibold", "transition", "duration-300", "cursor-pointer"], [1, "text-red-500"], [4, "ngIf"], [1, "lg:col-span-3", "md:col-span-2", "col-span-1", "p-4", "rounded-xl", "bg-rose-500/10", "border", "border-rose-500/30", "text-rose-400", "text-sm", "flex", "items-center", "gap-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "font-medium"], [1, "lg:col-span-3", "md:col-span-2", "p-4", "rounded-xl", "bg-rose-500/10", "border", "border-rose-500/30", "text-rose-400", "text-sm", "flex", "items-center", "gap-3"]],
    template: function ProfileFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Change profile Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProfileFormComponent_Template_input_change_6_listener($event) {
          return ctx.onProfileImageSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProfileFormComponent_form_7_Template, 46, 7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\uD83D\uDD12 Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfileFormComponent_Template_form_ngSubmit_11_listener() {
          return ctx.onChangePassword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10)(13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Current Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10)(17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "New Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10)(21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Confirm New Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ProfileFormComponent_div_24_Template, 5, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18)(26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Update Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.changePasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordErrorMessage);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWZvcm0uY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9wcm9maWxlLWZvcm0vcHJvZmlsZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3676:
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/components/showevents/showevents.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShoweventsComponent: () => (/* binding */ ShoweventsComponent)
/* harmony export */ });
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/interaction */ 7068);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ 8566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/common.service */ 9653);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/angular */ 6514);
/* harmony import */ var _notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notification-list/notification-list.component */ 1964);







function ShoweventsComponent_full_calendar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "full-calendar", 9);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.calendarOptions);
  }
}
class ShoweventsComponent {
  constructor(common) {
    this.common = common;
    this.showCalendar = false;
    this.eventsArray = [];
    this.datas = [];
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__["default"]],
      dateClick: arg => this.handleDateClick(arg),
      events: this.eventsArray
    };
  }
  ngOnInit() {
    this.common.getEventsCalendarData().subscribe({
      next: res => {
        console.log(res);
        res.data.forEach(element => {
          this.eventsArray.push(element);
        });
        console.log(this.eventsArray, 'lk');
        this.showCalendar = true;
      },
      error: err => {
        console.log(err);
      }
    });
  }
  handleDateClick(arg) {}
  static #_ = this.ɵfac = function ShoweventsComponent_Factory(t) {
    return new (t || ShoweventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ShoweventsComponent,
    selectors: [["app-showevents"]],
    decls: 15,
    vars: 1,
    consts: [[1, "min-h-full", "bg-gray-900", "w-full", "mt-0"], [1, "flex", "flex-col", "justify-center", "items-center"], [1, "md:w-6/12", "md:p-8", "p-2", "rounded-md", "gap-4"], ["class", "bg-white", 3, "options", 4, "ngIf"], [1, "grid", "grid-cols-3", "gap-3"], [1, "text-white"], ["src", "./../../../../../assets/WhatsApp Image 2024-05-02 at 15.16.11_3d15a527.jpg", "alt", ""], ["src", "./../../../../../assets/WhatsApp Image 2024-05-02 at 15.16.43_ba773683.jpg", "alt", ""], ["src", "./../../../../../assets/WhatsApp Image 2024-05-02 at 15.17.31_07f16556.jpg", "alt", ""], [1, "bg-white", 3, "options"]],
    template: function ShoweventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ShoweventsComponent_full_calendar_3_Template, 1, 1, "full-calendar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " MEDIUM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " LOW ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " HIGH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "app-notification-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showCalendar);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__.FullCalendarComponent, _notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_1__.NotificationListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93ZXZlbnRzLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9zaG93ZXZlbnRzL3Nob3dldmVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1305:
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/components/sidebar/toolbar/toolbar.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolbarComponent: () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_jwt_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/jwt.service */ 61);
/* harmony import */ var src_app_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authguard.service */ 9394);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common.service */ 9653);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);







function ToolbarComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.navigate("employee"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Employees");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ToolbarComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.navigate("dashboard"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ToolbarComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.navigate("departments"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ToolbarComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.navigate("notifications"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ToolbarComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.navigate("addemployee"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Recruitment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ToolbarComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.navigate("complaintsList"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ToolbarComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarComponent_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.navigate("checkIn"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Check In/Check Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ToolbarComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarComponent_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r26.navigate("attendance"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Attendance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ToolbarComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.navigate("complaints"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Complaints");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ToolbarComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarComponent_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r30.navigate("leaveRequest"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Leave Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ToolbarComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarComponent_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r32.navigate("profile"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Profile Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ToolbarComponent_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarComponent_button_24_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r34.navigate("Messages"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class ToolbarComponent {
  constructor(router, jwt, authGuarService, common) {
    this.router = router;
    this.jwt = jwt;
    this.authGuarService = authGuarService;
    this.common = common;
    this.isCompany = false;
    this.isAdmin = false;
    this.isDepartmentHead = false;
    this.isEmployee = false;
    this.companyName = '';
    this.role = '';
  }
  ngOnInit() {
    const token = this.jwt.getTokenFromLocalStorage();
    this.common.getUserDetails().subscribe({
      next: res => {
        console.log(res);
        this.companyName = res.data[0].companyName;
        this.role = res.data[0].role;
        this.isCompany = this.role == 'companyAdmin';
        console.log(this.isCompany);
        this.isAdmin = this.role == 'admin';
        this.isEmployee = this.role == 'employee' || this.role == 'intern';
        this.isDepartmentHead = this.role == 'departmentHead';
      },
      error: err => {
        console.log(err);
      }
    });
  }
  passString(string) {
    this.authGuarService.shareTextBehaviourSubject.next(string);
  }
  ji() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  navigate(link) {
    console.log(this.role);
    const parentRole = this.role === 'intern' ? 'employee' : this.role;
    this.router.navigate([`/${parentRole}/${link}`]);
  }
  static #_ = this.ɵfac = function ToolbarComponent_Factory(t) {
    return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_jwt_service__WEBPACK_IMPORTED_MODULE_0__.JwtService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__.AuthguardService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ToolbarComponent,
    selectors: [["app-toolbar"]],
    decls: 29,
    vars: 13,
    consts: [[1, "md:w-[270px]", "min-h-screen", "flex", "flex-col", "shadow-2xl", "text-[#76839A]"], [1, "bg-gray-900", "text-white", "flex", "flex-row", "justify-center", "items-center", "text-center", "h-16", "gap-1"], ["aria-hidden", "false", "aria-label", "home icon", "fontIcon", "home"], [1, "font-bold", "hidden", "md:flex"], [1, "bg-gray-900", "text-white", "p-4", "flex", "flex-col", "items-center", "min-h-screen"], [1, "bg-gray-900", "hidden", "md:flex"], ["type", "text", "placeholder", "Search", 1, "bg-gray-700", "text-white", "p-2", "rounded", "shadow-md", "mb-4"], [1, "grid", "gap-2", "w-full", "h-full"], ["class", "btn btn-hover hover:bg-gray-800 gap-5", 3, "click", 4, "ngIf"], [1, "btn", "btn-hover", "hover:bg-gray-800", "gap-5", 3, "click"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "checklist"], [1, "md:block", "hidden"], ["aria-hidden", "false", "aria-label", "Logout", "fontIcon", "exit_to_app"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "people"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "dashboard"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "store"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "notifications"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "person_add"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "assignment_late"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "how_to_reg"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "assignment_ind"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "contact_support"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "work_off"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "person"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "insert_comment"]],
    template: function ToolbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ToolbarComponent_button_9_Template, 4, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ToolbarComponent_button_10_Template, 4, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ToolbarComponent_button_11_Template, 4, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ToolbarComponent_button_12_Template, 4, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ToolbarComponent_button_13_Template, 4, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ToolbarComponent_button_14_Template, 4, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ToolbarComponent_button_15_Template, 4, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ToolbarComponent_button_16_Template, 4, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ToolbarComponent_button_17_Template, 4, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ToolbarComponent_button_18_Template, 4, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_19_listener() {
          return ctx.navigate("todo");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ToolbarComponent_button_23_Template, 4, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ToolbarComponent_button_24_Template, 4, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_25_listener() {
          return ctx.ji();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCompany);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCompany);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCompany || ctx.isDepartmentHead);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCompany || ctx.isDepartmentHead || ctx.isEmployee);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCompany);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCompany || ctx.isDepartmentHead);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isEmployee || ctx.isDepartmentHead);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isEmployee || ctx.isDepartmentHead);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isEmployee || ctx.isDepartmentHead);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isEmployee || ctx.isDepartmentHead || ctx.isCompany);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isEmployee || ctx.isDepartmentHead);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isEmployee || ctx.isDepartmentHead || ctx.isCompany);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.btn[_ngcontent-%COMP%]{\n\t\n\n\topacity: 80%;\n\tpadding: 14px;\n\tpadding-left: 14%;\n\tborder-radius: 0px 10px 10px 0px;\n\tdisplay: flex;\n\talign-items: center;\n\ttransition: background-color 0.3s, opacity 0.3s;\n\n}\n.btn[_ngcontent-%COMP%]:hover{\n\ttransform: scale(1.05); \n\n\topacity: 10;\n\n}\n\nh1[_ngcontent-%COMP%]{\n\tmargin: 0 !important;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCRzs7O0FBR0g7Q0FDQyw0QkFBNEI7Q0FDNUIsWUFBWTtDQUNaLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsZ0NBQWdDO0NBQ2hDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsK0NBQStDOztBQUVoRDtBQUNBO0NBQ0Msc0JBQXNCLEVBQUUsaURBQWlEO0NBQ3pFLFdBQVc7O0FBRVo7O0FBRUE7Q0FDQyxvQkFBb0I7QUFDckIiLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmxvYWRlciB7XG5cdGJvcmRlci10b3AtY29sb3I6ICMzNDk4ZGI7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiBzcGlubmVyIDEuNXMgbGluZWFyIGluZmluaXRlO1xuXHRhbmltYXRpb246IHNwaW5uZXIgMS41cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcblx0MCUge1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblx0MTAwJSB7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgc3Bpbm5lciB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0fVxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuXHR9XG59ICovXG5cblxuLmJ0bntcblx0LyogYmFja2dyb3VuZDogYmx1ZXZpb2xldDsgKi9cblx0b3BhY2l0eTogODAlO1xuXHRwYWRkaW5nOiAxNHB4O1xuXHRwYWRkaW5nLWxlZnQ6IDE0JTtcblx0Ym9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgb3BhY2l0eSAwLjNzO1xuXG59XG4uYnRuOmhvdmVye1xuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyAvKiBBZGp1c3QgdGhlIHNjYWxlIGZhY3RvciBmb3IgdGhlIGhvdmVyIGVmZmVjdCAqL1xuXHRvcGFjaXR5OiAxMDtcblxufVxuXG5oMXtcblx0bWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cblxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9zaWRlYmFyL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JHOzs7QUFHSDtDQUNDLDRCQUE0QjtDQUM1QixZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixnQ0FBZ0M7Q0FDaEMsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiwrQ0FBK0M7O0FBRWhEO0FBQ0E7Q0FDQyxzQkFBc0IsRUFBRSxpREFBaUQ7Q0FDekUsV0FBVzs7QUFFWjs7QUFFQTtDQUNDLG9CQUFvQjtBQUNyQjs7OztBQUlBLG9oREFBb2hEIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmxvYWRlciB7XG5cdGJvcmRlci10b3AtY29sb3I6ICMzNDk4ZGI7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiBzcGlubmVyIDEuNXMgbGluZWFyIGluZmluaXRlO1xuXHRhbmltYXRpb246IHNwaW5uZXIgMS41cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcblx0MCUge1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblx0MTAwJSB7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgc3Bpbm5lciB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0fVxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuXHR9XG59ICovXG5cblxuLmJ0bntcblx0LyogYmFja2dyb3VuZDogYmx1ZXZpb2xldDsgKi9cblx0b3BhY2l0eTogODAlO1xuXHRwYWRkaW5nOiAxNHB4O1xuXHRwYWRkaW5nLWxlZnQ6IDE0JTtcblx0Ym9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgb3BhY2l0eSAwLjNzO1xuXG59XG4uYnRuOmhvdmVye1xuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyAvKiBBZGp1c3QgdGhlIHNjYWxlIGZhY3RvciBmb3IgdGhlIGhvdmVyIGVmZmVjdCAqL1xuXHRvcGFjaXR5OiAxMDtcblxufVxuXG5oMXtcblx0bWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7528:
/*!************************************************************************!*\
  !*** ./src/app/modules/shared/components/support/support.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportComponent: () => (/* binding */ SupportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SupportComponent {
  static #_ = this.ɵfac = function SupportComponent_Factory(t) {
    return new (t || SupportComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SupportComponent,
    selectors: [["app-support"]],
    decls: 56,
    vars: 0,
    consts: [[1, "bg-gray-900", "py-16", "min-h-full"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "lg:text-center"], [1, "text-base", "text-indigo-600", "font-semibold", "tracking-wide", "uppercase"], [1, "mt-2", "text-3xl", "leading-8", "font-extrabold", "tracking-tight", "text-gray-300", "sm:text-4xl"], [1, "mt-4", "text-xl", "text-gray-400", "lg:mx-auto"], [1, "mt-10", "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], [1, "bg-white", "rounded-lg", "p-6", "flex", "items-center"], [1, "flex-shrink-0", "bg-indigo-500", "rounded-md", "p-3"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "aria-hidden", "true", 1, "h-8", "w-8", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "ml-4"], [1, "text-lg", "leading-6", "font-medium", "text-gray-900"], [1, "mt-2", "text-base", "text-gray-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [1, "bg-yellow-700", "w-full", "col-span-2", "rounded-lg", "p-6", "flex", "items-center", "text-white"], [1, "text-lg", "leading-6", "font-medium"], [1, "mt-2", "text-base"]],
    template: function SupportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "WORKSYNC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Dedicated Support, Personalized Solutions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " At WorkSync, we understand that every business is unique, and our dedicated support team is here to provide personalized solutions tailored to your specific needs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11)(15, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "24/7 Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Our support team is available 24/7 to assist you with any questions or issues you may encounter.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7)(20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11)(24, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dedicated Account Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Each of our clients is assigned a dedicated account manager who understands their unique business requirements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7)(29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11)(33, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Comprehensive Knowledge Base");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Our extensive knowledge base provides detailed documentation, tutorials, and best practices to help you get the most out of WorkSync.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7)(38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11)(42, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Secure and Compliant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "At WorkSync, we prioritize the security and privacy of your data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17)(47, "div", 11)(48, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Contact Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "For support inquiries, feel free to contact us:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Phone: +918606893474");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Email: mattathedeveloper@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwb3J0LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2755:
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/components/table-list/table-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableListComponent: () => (/* binding */ TableListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);



function TableListComponent_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const head_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](head_r3);
  }
}
function TableListComponent_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const head_r6 = ctx.$implicit;
    const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4[head_r6]);
  }
}
function TableListComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableListComponent_ng_container_6_Template_tr_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const data_r4 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onRowClick(data_r4[ctx_r8.keyID]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableListComponent_ng_container_6_ng_container_2_Template, 3, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.tableHead);
  }
}
function TableListComponent_ng_container_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11)(2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const head_r12 = ctx.$implicit;
    const data_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", head_r12, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r10[head_r12]);
  }
}
function TableListComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableListComponent_ng_container_8_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const data_r10 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.onRowClick(data_r10[ctx_r14.keyID]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableListComponent_ng_container_8_ng_container_2_Template, 6, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.tableHead);
  }
}
class TableListComponent {
  constructor() {
    this.tableData = [];
    this.clickData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.tableHead = []; // Specify type as string array
  }

  ngOnInit() {
    console.log(this.keyID);
  }
  ngOnChanges(changes) {
    this.tableHead = Object.keys(this.tableData[0]);
    console.log(this.tableData);
  }
  onRowClick(keyID) {
    console.log(keyID);
    this.clickData.emit(keyID);
  }
  static #_ = this.ɵfac = function TableListComponent_Factory(t) {
    return new (t || TableListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TableListComponent,
    selectors: [["app-table-list"]],
    inputs: {
      tableData: "tableData",
      keyID: "keyID"
    },
    outputs: {
      clickData: "clickData"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 9,
    vars: 3,
    consts: [[1, "mx-auto", "max-w-screen-xl", "hidden", "lg:block"], [1, "table-auto", "w-full", "rounded", "shadow", "overflow-hidden"], [1, "bg-gray-800", "text-white"], ["class", "px-4 py-2 text-left", 4, "ngFor", "ngForOf"], [1, "text-white", "cursor-pointer"], [4, "ngFor", "ngForOf"], [1, "text-white", "block", "rounded-2xl", "md:px-5", "lg:hidden"], [1, "px-4", "py-2", "text-left"], [1, "hover:bg-gray-700", "border-b", "border-gray-700", "hover:text-gray-200", "transform", "transition-transform", "duration-300", 3, "click"], [1, "px-4", "py-2", "border", "border-gray-700"], [1, "border", "border-gray-700", "rounded-lg", "hover:bg-gray-700", "hover:text-gray-200", "py-3", "px-4", "mb-3", "transform", "transition-transform", "duration-300", 3, "click"], [1, "grid", "grid-cols-2", "gap-3", "border-gray-900", "border-b"], [1, "font-semibold"], [1, "text-gray-300"]],
    template: function TableListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "table", 1)(2, "thead", 2)(3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableListComponent_th_4_Template, 2, 1, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableListComponent_ng_container_6_Template, 3, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableListComponent_ng_container_8_Template, 3, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableHead);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy90YWJsZS1saXN0L3RhYmxlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 857:
/*!******************************************************************!*\
  !*** ./src/app/modules/shared/components/todo/todo.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoComponent: () => (/* binding */ TodoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/common.service */ 9653);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);




function TodoComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TodoComponent_div_13_Template_input_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const task_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.updateTaskStatus($event, task_r2._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div")(4, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div")(9, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoComponent_div_13_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const task_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.deleteTask(task_r2._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const task_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", task_r2.status === "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("line-through", task_r2.status === "done")("text-yellow-500", task_r2.status == "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r2.description);
  }
}
class TodoComponent {
  constructor(common) {
    this.common = common;
    this.tasks = [];
    this.newTask = {};
  }
  ngOnInit() {
    this.getTasklist(); // Call getTasklist method when component initializes
  }

  getTasklist() {
    this.common.getTasks().subscribe({
      next: res => {
        console.log(res);
        this.tasks = res.data[0].tasks;
        console.log(this.tasks);
      },
      error: err => {
        console.error('Error fetching tasks:', err);
        // Handle error gracefully, e.g., show an alert message
        alert('Failed to fetch tasks. Please try again.');
      }
    });
  }
  addTask() {
    const task = this.newTask;
    this.common.addTask(task).subscribe({
      next: res => {
        // Handle successful addition if needed
        console.log('Task added successfully:', res);
        // Clear newTask object or reset form fields
        this.newTask = {};
        // Fetch updated task list
        this.getTasklist();
      },
      error: err => {
        console.error('Error adding task:', err);
        // Handle error gracefully, e.g., show an alert message
        alert('Failed to add task. Please try again.');
      }
    });
  }
  deleteTask(id) {
    // Call the common service method to delete the task
    this.common.deleteTask(id).subscribe({
      next: res => {
        console.log(res);
        // Remove the deleted task from the tasks array
        this.tasks = this.tasks.filter(task => task._id !== id);
      },
      error: err => {
        console.error(err);
        // Handle error gracefully, e.g., show an alert message
        alert('Failed to delete task. Please try again.');
      }
    });
  }
  updateTaskStatus(event, taskId) {
    const status = event.target.checked ? 'done' : 'pending';
    this.common.updateTaskStatus(taskId, status).subscribe({
      next: res => {
        console.log(res);
        // Find the index of the updated task in the tasks array
        const updatedTaskIndex = this.tasks.findIndex(task => task._id === taskId);
        // Update the status of the task in the tasks array
        if (updatedTaskIndex !== -1) {
          this.tasks[updatedTaskIndex].status = status;
        }
      },
      error: err => {
        console.error(err);
        // Handle error gracefully, e.g., show an alert message
        alert('Failed to update task status. Please try again.');
      }
    });
  }
  static #_ = this.ɵfac = function TodoComponent_Factory(t) {
    return new (t || TodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TodoComponent,
    selectors: [["app-todo"]],
    decls: 14,
    vars: 4,
    consts: [[1, "min-h-full", "max-h-full", "overflow-scroll"], [1, "min-h-full", "max-h-full", "bg-gray-900"], [1, "container", "mx-auto", "px-4", "py-8"], [1, "text-3xl", "font-semibold", "text-white", "mb-4"], [3, "ngSubmit"], ["todoForm", "ngForm"], [1, "flex", "flex-col", "lg:flex-row", "items-center", "mb-4", "gap-6", "lg:gap-0"], ["type", "text", "name", "title", "placeholder", "Enter title", "required", "", 1, "w-full", "h-14", "md:w-full", "px-4", "py-2", "mb-2", "md:mb-0", "mr-0", "md:mr-4", "bg-gray-800", "text-white", "border", "border-gray-700", "rounded-md", "focus:outline-none", "focus:border-yellow-500", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "description", "placeholder", "Enter description", "required", "", 1, "w-full", "h-14", "px-4", "py-2", "mb-2", "md:mb-0", "mr-0", "md:mr-4", "bg-gray-800", "text-white", "border", "border-gray-700", "rounded-md", "focus:outline-none", "focus:border-yellow-500", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "px-4", "md:w-3/6", "w-full", "py-2", "text-white", "md:mt-0", "rounded-md", "bg-yellow-700", "hover:bg-yellow-800", "focus:outline-none", 3, "disabled"], [1, "flex-col-reverse", "flex"], ["class", "flex items-center  justify-between bg-gray-800 p-4 mb-4 rounded-md  hover:border hover:border-yellow-700 transition duration-100", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "bg-gray-800", "p-4", "mb-4", "rounded-md", "hover:border", "hover:border-yellow-700", "transition", "duration-100"], [1, "flex", "items-center"], ["type", "checkbox", 1, "mr-4", 3, "checked", "change"], [1, "text-white", "font-semibold", "mb-2"], [1, "text-gray-400"], [1, "px-8", "py-2", "bg-red-600", "text-white", "rounded-md", "hover:bg-red-800", "focus:outline-none", 3, "click"]],
    template: function TodoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Todo App");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function TodoComponent_Template_form_ngSubmit_5_listener() {
          return ctx.addTask();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TodoComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.newTask.title = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TodoComponent_Template_input_ngModelChange_9_listener($event) {
          return ctx.newTask.description = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TodoComponent_div_13_Template, 11, 7, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newTask.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newTask.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tasks);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2RvLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy90b2RvL3RvZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6233:
/*!**********************************************************************!*\
  !*** ./src/app/modules/shared/components/topbar/topbar.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopbarComponent: () => (/* binding */ TopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/authguard.service */ 9394);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/common.service */ 9653);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_userData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/userData.service */ 2902);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);







function TopbarComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopbarComponent_div_1_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.toggleMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.profile, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.name, " ");
  }
}
function TopbarComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopbarComponent_div_2_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.onLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class TopbarComponent {
  constructor(authGuardService, common, router, user) {
    this.authGuardService = authGuardService;
    this.common = common;
    this.router = router;
    this.user = user;
    this.profile = '';
    this.name = '';
    this.showPro = false;
    this.isMenuOpen = false;
  }
  ngOnInit() {
    this.common.getUsernameAndProfile().subscribe({
      next: res => {
        console.log(res);
        this.profile = res.data[0].photo;
        this.name = res.data[0].name;
        if (this.user.role == 'companyAdmin') {
          this.showPro = false;
        } else {
          this.showPro = true;
        }
      },
      error: err => {
        console.log(err);
        alert(err.error.message);
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    });
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  onLogout() {
    localStorage.clear();
  }
  static #_ = this.ɵfac = function TopbarComponent_Factory(t) {
    return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__.AuthguardService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_userData_service__WEBPACK_IMPORTED_MODULE_2__.userData));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: TopbarComponent,
    selectors: [["app-topbar"]],
    decls: 3,
    vars: 2,
    consts: [[1, "bg-gray-900", "max-w-full", "h-full", "flex", "flex-row-reverse", "items-center", "py-[4px]", "md:pr-12", "pr-6"], ["class", "md:w-60 w-fi hidden bg-gray-700 h-full rounded-full p-[4px] md:flex flex-row flex-wrap pr-2", 4, "ngIf"], ["class", "bg-gray-800  text-gray-400 rounded-md py-2 px-4 absolute z-30 right-12 mt-2 w-60 top-[70px] shadow-lg show fade-in", 4, "ngIf"], [1, "md:w-60", "w-fi", "hidden", "bg-gray-700", "h-full", "rounded-full", "p-[4px]", "md:flex", "flex-row", "flex-wrap", "pr-2"], [1, "md:w-full", "w-fit", "h-full", "bg-gray-800", "rounded-full", "pl-1", "py-[3px]", "flex", "flex-row", "text-gray-400"], [1, "bg-red-400", "min-w-14", "h-full", "rounded-[100%]", "object-cover"], ["alt", "", 1, "h-full", "flex", "w-full", "object-cover", "rounded-[100%]", 3, "src"], [1, "flex-1", "justify-center", "items-center", "hidden", "md:flex", "gap-2"], [1, "icon", 3, "click"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "arrow_drop_down", 1, "white-icon"], [1, "bg-gray-800", "text-gray-400", "rounded-md", "py-2", "px-4", "absolute", "z-30", "right-12", "mt-2", "w-60", "top-[70px]", "shadow-lg", "show", "fade-in"], ["routerLink", "/login", 1, "block", "px-4", "py-2", "text-sm", "hover:bg-gray-700", "hover:text-white", 3, "click"], ["routerLink", "profile", 1, "block", "px-4", "py-2", "text-sm", "hover:bg-gray-700", "hover:text-white"], ["routerLink", "support", 1, "block", "px-4", "py-2", "text-sm", "hover:bg-gray-700", "hover:text-white"], ["routerLink", "about", 1, "block", "px-4", "py-2", "text-sm", "hover:bg-gray-700", "hover:text-white"]],
    template: function TopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TopbarComponent_div_1_Template, 8, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TopbarComponent_div_2_Template, 9, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showPro);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isMenuOpen);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
    styles: [".white-icon[_ngcontent-%COMP%] {\n    color: white; \n\n    transform: scale(2);\n}\n\n.icon[_ngcontent-%COMP%]{\n    cursor: pointer;\n}\n\n.fade-in[_ngcontent-%COMP%] {\n    opacity: 0;\n    animation: _ngcontent-%COMP%_fadeIn 0.5s ease-in-out forwards; \n\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n    0% {\n        opacity: 0; \n\n        transform: scale(0.9); \n\n    }\n    50% {\n        opacity: 0.4; \n\n        transform: scale(0.9); \n\n    }\n    100% {\n        opacity: 1; \n\n        transform: scale(1); \n\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWSxFQUFFLDJCQUEyQjtJQUN6QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLDJDQUEyQyxFQUFFLDJCQUEyQjtBQUM1RTs7QUFFQTtJQUNJO1FBQ0ksVUFBVSxFQUFFLDJCQUEyQjtRQUN2QyxxQkFBcUIsRUFBRSxrQkFBa0I7SUFDN0M7SUFDQTtRQUNJLFlBQVksRUFBRSwyQkFBMkI7UUFDekMscUJBQXFCLEVBQUUsa0JBQWtCO0lBQzdDO0lBQ0E7UUFDSSxVQUFVLEVBQUUsaUJBQWlCO1FBQzdCLG1CQUFtQixFQUFFLGlCQUFpQjtJQUMxQztBQUNKIiwiZmlsZSI6InRvcGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoaXRlLWljb24ge1xuICAgIGNvbG9yOiB3aGl0ZTsgLyogU2V0IHRoZSBjb2xvciB0byB3aGl0ZSAqL1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG59XG5cbi5pY29ue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhZGUtaW4ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLWluLW91dCBmb3J3YXJkczsgLyogVXNlIGtleWZyYW1lIGFuaW1hdGlvbiAqL1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwOyAvKiBTdGFydCB3aXRoIGxvdyBvcGFjaXR5ICovXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTsgLyogSW5pdGlhbCBzY2FsZSAqL1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAwLjQ7IC8qIFN0YXJ0IHdpdGggbG93IG9wYWNpdHkgKi9cbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpOyAvKiBJbml0aWFsIHNjYWxlICovXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGdWxseSBvcGFxdWUgKi9cbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgLyogTm9ybWFsIHNjYWxlICovXG4gICAgfVxufVxuXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZLEVBQUUsMkJBQTJCO0lBQ3pDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsMkNBQTJDLEVBQUUsMkJBQTJCO0FBQzVFOztBQUVBO0lBQ0k7UUFDSSxVQUFVLEVBQUUsMkJBQTJCO1FBQ3ZDLHFCQUFxQixFQUFFLGtCQUFrQjtJQUM3QztJQUNBO1FBQ0ksWUFBWSxFQUFFLDJCQUEyQjtRQUN6QyxxQkFBcUIsRUFBRSxrQkFBa0I7SUFDN0M7SUFDQTtRQUNJLFVBQVUsRUFBRSxpQkFBaUI7UUFDN0IsbUJBQW1CLEVBQUUsaUJBQWlCO0lBQzFDO0FBQ0o7OztBQUdBLGc2Q0FBZzZDIiwic291cmNlc0NvbnRlbnQiOlsiLndoaXRlLWljb24ge1xuICAgIGNvbG9yOiB3aGl0ZTsgLyogU2V0IHRoZSBjb2xvciB0byB3aGl0ZSAqL1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG59XG5cbi5pY29ue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhZGUtaW4ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLWluLW91dCBmb3J3YXJkczsgLyogVXNlIGtleWZyYW1lIGFuaW1hdGlvbiAqL1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwOyAvKiBTdGFydCB3aXRoIGxvdyBvcGFjaXR5ICovXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTsgLyogSW5pdGlhbCBzY2FsZSAqL1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAwLjQ7IC8qIFN0YXJ0IHdpdGggbG93IG9wYWNpdHkgKi9cbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpOyAvKiBJbml0aWFsIHNjYWxlICovXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGdWxseSBvcGFxdWUgKi9cbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgLyogTm9ybWFsIHNjYWxlICovXG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6646:
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/services/attendence.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttendenceService: () => (/* binding */ AttendenceService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class AttendenceService {
  constructor(http) {
    this.http = http;
    this.userapi = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/attendance`;
  }
  postattendence(photo, action) {
    console.log(action);
    return this.http.post(`${this.userapi}/${action}`, photo);
  }
  getAttendence() {
    return this.http.get(`${this.userapi}/status`);
  }
  attandanceCalendar() {
    return this.http.get(`${this.userapi}/type`);
  }
  registerLeave(leaveRequest) {
    return this.http.post(`${this.userapi}/leaveRequest`, leaveRequest);
  }
  getLeaveStatus() {
    return this.http.get(`${this.userapi}/leaveRequest`);
  }
  static #_ = this.ɵfac = function AttendenceService_Factory(t) {
    return new (t || AttendenceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AttendenceService,
    factory: AttendenceService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9653:
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/services/common.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonService: () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class CommonService {
  constructor(http) {
    this.http = http;
    this.userApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getUserDetails() {
    return this.http.get(`${this.userApi}/userData`);
  }
  getListData(endpoint) {
    return this.http.get(`${this.userApi}/${endpoint}`);
  }
  postNotification(noty) {
    return this.http.post(`${this.userApi}/notification`, noty);
  }
  getProfile() {
    return this.http.get(`${this.userApi}/profile`);
  }
  UpdateProfile(body) {
    return this.http.patch(`${this.userApi}/profile`, body);
  }
  getUsernameAndProfile() {
    return this.http.get(`${this.userApi}/profileInfo`);
  }
  addTask(task) {
    return this.http.post(`${this.userApi}/todo`, task);
  }
  updateTaskStatus(id, status) {
    return this.http.patch(`${this.userApi}/todo`, {
      id,
      status
    });
  }
  deleteTask(id) {
    return this.http.delete(`${this.userApi}/todo/${id}`);
  }
  getTasks() {
    return this.http.get(`${this.userApi}/todo`);
  }
  getchatList() {
    return this.http.get(`${this.userApi}/chatlist`);
  }
  getReciever(id) {
    return this.http.get(`${this.userApi}/RecieverProfile/${id}`);
  }
  getFullEmployeeData(id) {
    return this.http.get(`${this.userApi}/employee/${id}`);
  }
  getEventsCalendarData() {
    return this.http.get(`${this.userApi}/events`);
  }
  getEmployeeAttendance(empID) {
    return this.http.get(`${this.userApi}/attendance/${empID}`);
  }
  changePassword(body) {
    return this.http.post(`${this.userApi}/change-password`, body);
  }
  static #_ = this.ɵfac = function CommonService_Factory(t) {
    return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CommonService,
    factory: CommonService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6140:
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/services/complaints.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComplaintsService: () => (/* binding */ ComplaintsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class ComplaintsService {
  constructor(http) {
    this.http = http;
    this.userApi = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/complaints`;
  }
  registerComplaint(complaint) {
    return this.http.post(`${this.userApi}`, complaint);
  }
  getComplaints() {
    return this.http.get(`${this.userApi}`);
  }
  static #_ = this.ɵfac = function ComplaintsService_Factory(t) {
    return new (t || ComplaintsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ComplaintsService,
    factory: ComplaintsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8524:
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_sidebar_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sidebar/toolbar/toolbar.component */ 1305);
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/topbar/topbar.component */ 6233);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _departmenthead_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../departmenthead/components/notifications/notifications.component */ 8959);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/todo/todo.component */ 857);
/* harmony import */ var _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/confirmation-dialog/confirmation-dialog.component */ 5407);
/* harmony import */ var _components_camera_camera_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/camera/camera.component */ 758);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-webcam */ 2477);
/* harmony import */ var _components_attendencecalender_attendencecalender_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/attendencecalender/attendencecalender.component */ 5089);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @fullcalendar/angular */ 6514);
/* harmony import */ var _components_leave_request_leave_request_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/leave-request/leave-request.component */ 9868);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _components_complaints_complaints_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/complaints/complaints.component */ 1505);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-multiselect-dropdown */ 268);
/* harmony import */ var _components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/multiselect/multiselect.component */ 5572);
/* harmony import */ var _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/datepicker/datepicker.component */ 7266);
/* harmony import */ var _components_table_list_table_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/table-list/table-list.component */ 2755);
/* harmony import */ var _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/notification-list/notification-list.component */ 1964);
/* harmony import */ var _components_chat_session_chat_session_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/chat-session/chat-session.component */ 2561);
/* harmony import */ var _components_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile-form/profile-form.component */ 1639);
/* harmony import */ var _components_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/chat-list/chat-list.component */ 3159);
/* harmony import */ var _components_employee_data_profile_employee_data_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/employee-data-profile/employee-data-profile.component */ 5415);
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/loading/loading.component */ 9897);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/about/about.component */ 9521);
/* harmony import */ var _components_support_support_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/support/support.component */ 7528);
/* harmony import */ var _public_public_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../public/public.module */ 5116);
/* harmony import */ var _components_showevents_showevents_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/showevents/showevents.component */ 3676);
/* harmony import */ var _components_employee_attendance_detaildata_employee_attendance_detaildata_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/employee-attendance-detaildata/employee-attendance-detaildata.component */ 9404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 1699);



































class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule, ngx_webcam__WEBPACK_IMPORTED_MODULE_27__.WebcamModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_28__.FullCalendarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatNativeDateModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_32__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__.MatIconModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_34__.NgMultiSelectDropDownModule, _public_public_module__WEBPACK_IMPORTED_MODULE_20__.PublicModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_sidebar_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent, _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__.TopbarComponent, _departmenthead_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_2__.NotificationsComponent, _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_3__.TodoComponent, _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmationDialogComponent, _components_camera_camera_component__WEBPACK_IMPORTED_MODULE_5__.CameraComponent, _components_attendencecalender_attendencecalender_component__WEBPACK_IMPORTED_MODULE_6__.AttendencecalenderComponent, _components_leave_request_leave_request_component__WEBPACK_IMPORTED_MODULE_7__.LeaveRequestComponent, _components_complaints_complaints_component__WEBPACK_IMPORTED_MODULE_8__.ComplaintsComponent, _components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_9__.MultiselectComponent, _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_10__.DatepickerComponent, _components_table_list_table_list_component__WEBPACK_IMPORTED_MODULE_11__.TableListComponent, _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_12__.NotificationListComponent, _components_chat_session_chat_session_component__WEBPACK_IMPORTED_MODULE_13__.ChatSessionComponent, _components_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_14__.ProfileFormComponent, _components_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_15__.ChatListComponent, _components_employee_data_profile_employee_data_profile_component__WEBPACK_IMPORTED_MODULE_16__.EmployeeDataProfileComponent, _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__.LoadingComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__.AboutComponent, _components_support_support_component__WEBPACK_IMPORTED_MODULE_19__.SupportComponent, _components_showevents_showevents_component__WEBPACK_IMPORTED_MODULE_21__.ShoweventsComponent, _components_employee_attendance_detaildata_employee_attendance_detaildata_component__WEBPACK_IMPORTED_MODULE_22__.EmployeeAttendanceDetaildataComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule, ngx_webcam__WEBPACK_IMPORTED_MODULE_27__.WebcamModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_28__.FullCalendarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatNativeDateModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_32__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__.MatIconModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_34__.NgMultiSelectDropDownModule, _public_public_module__WEBPACK_IMPORTED_MODULE_20__.PublicModule],
    exports: [_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__.TopbarComponent, _components_sidebar_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent, _departmenthead_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_2__.NotificationsComponent, _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmationDialogComponent, _components_camera_camera_component__WEBPACK_IMPORTED_MODULE_5__.CameraComponent, _components_attendencecalender_attendencecalender_component__WEBPACK_IMPORTED_MODULE_6__.AttendencecalenderComponent, _components_leave_request_leave_request_component__WEBPACK_IMPORTED_MODULE_7__.LeaveRequestComponent, _components_complaints_complaints_component__WEBPACK_IMPORTED_MODULE_8__.ComplaintsComponent, _components_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_9__.MultiselectComponent, _components_table_list_table_list_component__WEBPACK_IMPORTED_MODULE_11__.TableListComponent, _components_chat_session_chat_session_component__WEBPACK_IMPORTED_MODULE_13__.ChatSessionComponent, _components_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_14__.ProfileFormComponent, _components_employee_data_profile_employee_data_profile_component__WEBPACK_IMPORTED_MODULE_16__.EmployeeDataProfileComponent, _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__.LoadingComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__.AboutComponent, _components_support_support_component__WEBPACK_IMPORTED_MODULE_19__.SupportComponent, _components_showevents_showevents_component__WEBPACK_IMPORTED_MODULE_21__.ShoweventsComponent]
  });
})();

/***/ }),

/***/ 9260:
/*!*****************************************************!*\
  !*** ./src/app/services/AuthInterceptor.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt.service */ 61);


class AuthInterceptor {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(req, next) {
    const token = this.authService.getTokenFromLocalStorage();
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
  static #_ = this.ɵfac = function AuthInterceptor_Factory(t) {
    return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_jwt_service__WEBPACK_IMPORTED_MODULE_0__.JwtService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthInterceptor,
    factory: AuthInterceptor.ɵfac
  });
}

/***/ }),

/***/ 9394:
/*!***********************************************!*\
  !*** ./src/app/services/authguard.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthguardService: () => (/* binding */ AuthguardService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class AuthguardService {
  constructor() {
    this.shareTextBehaviourSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
  }
  canDeactivate(component, currentRoute, currentState, nextState) {
    return component.canExit();
  }
  static #_ = this.ɵfac = function AuthguardService_Factory(t) {
    return new (t || AuthguardService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthguardService,
    factory: AuthguardService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 61:
/*!*****************************************!*\
  !*** ./src/app/services/jwt.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtService: () => (/* binding */ JwtService)
/* harmony export */ });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


// import { LocalStorage } from '@angular/common';
class JwtService {
  setToken(token) {
    localStorage.setItem('yourToken', token);
  }
  getTokenFromLocalStorage() {
    return localStorage.getItem('yourToken');
  }
  deleteToken() {
    localStorage.clear();
  }
  decodeToken(token) {
    try {
      return (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__.jwtDecode)(token);
    } catch (error) {
      console.error('error decoding token:', error);
      return null;
    }
  }
  static #_ = this.ɵfac = function JwtService_Factory(t) {
    return new (t || JwtService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: JwtService,
    factory: JwtService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2548:
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingService: () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class LoadingService {
  constructor() {
    this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isLoading$ = this.loadingSubject.asObservable();
  }
  show() {
    this.loadingSubject.next(true);
  }
  hide() {
    this.loadingSubject.next(false);
  }
  static #_ = this.ɵfac = function LoadingService_Factory(t) {
    return new (t || LoadingService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LoadingService,
    factory: LoadingService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4409:
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocketService: () => (/* binding */ SocketService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ 8589);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);





class SocketService {
  constructor(http) {
    this.http = http;
    this.messageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl);
    this.socket.on('connect', () => {
      this.registerOnlineStatus();
    });
    this.registerOnlineStatus();
    this.setupListeners();
  }
  registerOnlineStatus() {
    const token = localStorage.getItem('yourToken');
    if (token) {
      this.socket.emit('setUserID', token);
    }
  }
  setupListeners() {
    this.socket.on('welcome', data => {
      console.log('Socket welcome:', data);
    });
    this.socket.on('sentedMessage', res => {
      this.messageSubject.next(res);
    });
  }
  welcomer() {
    this.registerOnlineStatus();
  }
  onSend(data) {
    const token = localStorage.getItem('yourToken');
    const packet = {
      ...data,
      token
    };
    this.socket.emit('onMessageSend', packet);
    return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(observer => {
      const handler = res => {
        observer.next(res);
        observer.complete();
      };
      this.socket.once('sentedMessage', handler);
    });
  }
  getMessageObservable() {
    return this.messageSubject.asObservable();
  }
  getPreviuosMessages(reciever) {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/messages/${reciever}`);
  }
  static #_ = this.ɵfac = function SocketService_Factory(t) {
    return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: SocketService,
    factory: SocketService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2902:
/*!**********************************************!*\
  !*** ./src/app/services/userData.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   userData: () => (/* binding */ userData)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt.service */ 61);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




class userData {
  constructor(http, jwt, router) {
    this.http = http;
    this.jwt = jwt;
    this.router = router;
    this._role = '';
  }
  get role() {
    if (this._role) {
      return this._role;
    }
    const token = localStorage.getItem('yourToken');
    if (!token) return '';
    const decoded = this.jwt.decodeToken(token);
    return decoded?.role || '';
  }
  set role(val) {
    this._role = val;
  }
  get token() {
    return localStorage.getItem('yourToken');
  }
  get decodedToken() {
    const token = this.token;
    return token ? this.jwt.decodeToken(token) : null;
  }
  isLoggedIn() {
    if (!this.token) {
      return true;
    } else {
      this.router.navigate([`/${this.role}`]);
      return false;
    }
  }
  isEmployee() {
    return this.role === 'employee' || this.role === 'departmentHead' || this.role === 'intern';
  }
  isDepartmentHead() {
    return this.role === 'departmentHead';
  }
  isCompanyAdmin() {
    return this.role === 'companyAdmin';
  }
  static #_ = this.ɵfac = function userData_Factory(t) {
    return new (t || userData)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_jwt_service__WEBPACK_IMPORTED_MODULE_0__.JwtService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: userData,
    factory: userData.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'https://worksync-backend-q4d8.onrender.com'
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
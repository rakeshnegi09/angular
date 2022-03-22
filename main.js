(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _pages_page_button_page_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-button/page-button.component */ "./src/app/pages/page-button/page-button.component.ts");
/* harmony import */ var _pages_page_process_page_process_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-process/page-process.component */ "./src/app/pages/page-process/page-process.component.ts");
/* harmony import */ var _pages_page_single_row_page_single_row_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-single-row/page-single-row.component */ "./src/app/pages/page-single-row/page-single-row.component.ts");







var routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
    },
    {
        path: 'page-button',
        component: _pages_page_button_page_button_component__WEBPACK_IMPORTED_MODULE_4__["PageButtonComponent"],
    },
    {
        path: 'page-process',
        component: _pages_page_process_page_process_component__WEBPACK_IMPORTED_MODULE_5__["PageProcessComponent"],
    },
    {
        path: 'page-single',
        component: _pages_page_single_row_page_single_row_component__WEBPACK_IMPORTED_MODULE_6__["PageSingleRowComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _pages_page_button_page_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-button/page-button.component */ "./src/app/pages/page-button/page-button.component.ts");
/* harmony import */ var _pages_page_process_page_process_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-process/page-process.component */ "./src/app/pages/page-process/page-process.component.ts");
/* harmony import */ var _pages_page_single_row_page_single_row_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-single-row/page-single-row.component */ "./src/app/pages/page-single-row/page-single-row.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dataservice.service */ "./src/app/dataservice.service.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
                _pages_page_button_page_button_component__WEBPACK_IMPORTED_MODULE_8__["PageButtonComponent"],
                _pages_page_process_page_process_component__WEBPACK_IMPORTED_MODULE_9__["PageProcessComponent"],
                _pages_page_single_row_page_single_row_component__WEBPACK_IMPORTED_MODULE_10__["PageSingleRowComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
            ],
            providers: [_dataservice_service__WEBPACK_IMPORTED_MODULE_12__["dataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dataservice.service.ts":
/*!****************************************!*\
  !*** ./src/app/dataservice.service.ts ***!
  \****************************************/
/*! exports provided: dataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataService", function() { return dataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var dataService = /** @class */ (function () {
    function dataService() {
        this.labels = "";
    }
    dataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], dataService);
    return dataService;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\r\n     --bs-table-bg: transparent; \r\n    --bs-table-accent-bg: transparent; \r\n     --bs-table-striped-color: ; \r\n     --bs-table-striped-bg: rgba(247, 247, 247, 0.05); \r\n     --bs-table-active-color: #212529; \r\n     --bs-table-active-bg: rgba(0, 0, 0, 0.1); \r\n    --bs-table-hover-color: #212529;\r\n    --bs-table-hover-bg: rgba(0, 0, 0, 0.075);\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n    color: #212529;\r\n    vertical-align: top;\r\n    border-color: #dee2e6;\r\n    margin: 20px;\r\n}\r\n\r\ninput#inputPassword {\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n}\r\n\r\ndiv#DataTables_Table_0_length {\r\n    display: none;\r\n}\r\n\r\nbutton.button.rounded.process-button {\r\n    color: #0b620b;\r\n    background: white;\r\n    border: 1px solid gray;\r\n}\r\n\r\n.gb-form {\r\n    border: 1px solid #beb1b1;\r\n    padding: 14px;\r\n}\r\n\r\n.button {\r\n    border: none;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n  }\r\n\r\nbutton.button.rounded.Button_121 {\r\n      margin-top: 20%;\r\n    color: #bb0707;\r\n    background: #2323af;\r\n}\r\n\r\n.button2 {background-color: #008CBA;}\r\n\r\n/* Blue */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLDBCQUEwQjtJQUMzQixpQ0FBaUM7S0FDaEMsMEJBQTBCO0tBQzFCLGdEQUFnRDtLQUNoRCxnQ0FBZ0M7S0FDaEMsd0NBQXdDO0lBQ3pDLCtCQUErQjtJQUMvQix5Q0FBeUM7SUFDekMsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUdBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0FBRUE7TUFDSSxlQUFlO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUUsVUFBVSx5QkFBeUIsQ0FBQzs7QUFBRSxTQUFTIiwiZmlsZSI6InNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgICAgLS1icy10YWJsZS1iZzogdHJhbnNwYXJlbnQ7IFxyXG4gICAgLS1icy10YWJsZS1hY2NlbnQtYmc6IHRyYW5zcGFyZW50OyBcclxuICAgICAtLWJzLXRhYmxlLXN0cmlwZWQtY29sb3I6IDsgXHJcbiAgICAgLS1icy10YWJsZS1zdHJpcGVkLWJnOiByZ2JhKDI0NywgMjQ3LCAyNDcsIDAuMDUpOyBcclxuICAgICAtLWJzLXRhYmxlLWFjdGl2ZS1jb2xvcjogIzIxMjUyOTsgXHJcbiAgICAgLS1icy10YWJsZS1hY3RpdmUtYmc6IHJnYmEoMCwgMCwgMCwgMC4xKTsgXHJcbiAgICAtLWJzLXRhYmxlLWhvdmVyLWNvbG9yOiAjMjEyNTI5O1xyXG4gICAgLS1icy10YWJsZS1ob3Zlci1iZzogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbmlucHV0I2lucHV0UGFzc3dvcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbmRpdiNEYXRhVGFibGVzX1RhYmxlXzBfbGVuZ3RoIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuYnV0dG9uLmJ1dHRvbi5yb3VuZGVkLnByb2Nlc3MtYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjMGI2MjBiO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG59XHJcblxyXG4uZ2ItZm9ybSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmViMWIxO1xyXG4gICAgcGFkZGluZzogMTRweDtcclxufVxyXG5cclxuXHJcbi5idXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uLmJ1dHRvbi5yb3VuZGVkLkJ1dHRvbl8xMjEge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICBjb2xvcjogI2JiMDcwNztcclxuICAgIGJhY2tncm91bmQ6ICMyMzIzYWY7XHJcbn1cclxuICBcclxuICAuYnV0dG9uMiB7YmFja2dyb3VuZC1jb2xvcjogIzAwOENCQTt9IC8qIEJsdWUgKi8iXX0= */"

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row  padding-bottom\">\n\t\t<div class=\"col-sm-4\">\n\t\t\t<button class=\"button rounded Button_121\" routerLink=\"/page-button\">Button_121</button>\n\t\t</div>\n\t\t<div class=\"col-sm-8 \" >\n\n\t<form [formGroup]=\"formDetails\" id=\"msform\"  #f=\"ngForm\">\n\t\t<h5 class=\"col-sm-2 col-form-label\">GB Text 1</h5>\n\t\t<div class=\"gb-form\">\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label for=\"staticEmail\"  class=\"col-sm-2 col-form-label\">Label 2</label>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<input type=\"text\" formControlName=\"label2\" class=\"form-control\" id=\"inputPassword\"  placeholder=\"\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Label 3</label>\n\t\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<input type=\"text\" formControlName=\"label3\" class=\"form-control\" id=\"inputPassword\" placeholder=\"\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Label 4</label>\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<input type=\"text\" formControlName=\"label4\" class=\"form-control\" id=\"inputPassword\" placeholder=\"\">\n\t\t\t\t</div><div class=\"col-sm-2\"></div>\n\t\t\t\t<div class=\"col-sm-4\"><button class=\"button rounded process-button\" (click)=\"submit()\">Process</button></div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n\n\n\t</div>\n</div>\n<div class=\"margin-top\">\n<table class=\"margin-top table table-striped table-bordered table-sm row-border hover\" datatable [dtOptions]=\"dtOptions\"\n  [dtTrigger]=\"dtTrigger\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>COLUMN_0</th>\n\t\t\t<th>COLUMN_1</th>\n\t\t\t<th>COLUMN_2</th>\n\t\t\t<th>COLUMN_3</th>\n\t\t\t<th>COLUMN_4</th>\n\t\t</tr>\n\t</thead>\n\t\n\t<tbody>\n\t\t<tr *ngFor=\"let row of lines\" [style.color]=\"row.color\" (dblclick)=\"eventEmitDoubleClick(row)\" [style.background]=\"row.background\">\n     \n\t\t\t<td *ngFor=\"let rowData of row\" >{{rowData}}</td>\n\t\t</tr>\n\t</tbody>\n\t</table>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var IndexComponent = /** @class */ (function () {
    function IndexComponent(http, formBuilder, service, router) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.dtOptions = {};
        this.lines = [];
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formDetails = this.formBuilder.group({
            label2: [''],
            label3: [''],
            label4: ['']
        });
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 500,
            processing: true,
            lengthChange: false,
            "searching": false,
        };
        this.http.get('assets/SAMPLE_INPUT.txt', { responseType: 'text' }).subscribe(function (res) {
            var allTextLines = res.split(/\r\n/);
            var headers = allTextLines[0].split(',');
            for (var i = 0; i < allTextLines.length; i++) {
                // split content based on comma
                var data = allTextLines[i].split(',');
                if (data.length == headers.length) {
                    var tarr = [];
                    for (var j = 0; j < headers.length; j++) {
                        if (j == 0) {
                            _this.sampleNumber = data[j],
                                _this.lastDigit = _this.sampleNumber % 10;
                            tarr['background'] = 'white';
                            tarr['color'] = 'gray';
                            if (_this.lastDigit === 1) {
                                tarr['background'] = 'red';
                                tarr['color'] = 'green';
                            }
                            if (_this.lastDigit === 2) {
                                tarr['background'] = 'white';
                                tarr['color'] = '#0000FF';
                            }
                            if (_this.lastDigit === 0) {
                                tarr['background'] = 'white';
                                tarr['color'] = 'red';
                            }
                        }
                        tarr.push(data[j]);
                    }
                    _this.lines.push(tarr);
                }
            }
        });
    };
    IndexComponent.prototype.eventEmitDoubleClick = function (event) {
        this.service.labels = event;
        this.router.navigateByUrl('/page-single');
    };
    IndexComponent.prototype.buttonInRowClick = function (event) {
        event.stopPropagation();
    };
    IndexComponent.prototype.wholeRowClick = function () {
    };
    IndexComponent.prototype.nextButtonClickEvent = function () {
    };
    IndexComponent.prototype.previousButtonClickEvent = function () {
    };
    IndexComponent.prototype.submit = function () {
        var params = {
            'label2': this.formDetails.value.label2,
            'label3': this.formDetails.value.label3,
            'label4': this.formDetails.value.label4
        };
        params;
        this.service.labels = params;
        this.router.navigateByUrl('/page-process');
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _dataservice_service__WEBPACK_IMPORTED_MODULE_4__["dataService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-button/page-button.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/page-button/page-button.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtYnV0dG9uL3BhZ2UtYnV0dG9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/page-button/page-button.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/page-button/page-button.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n    <div class=\"col-sm-9\"><br><br>\n\t\tButton_121 pressed\n  </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/page-button/page-button.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/page-button/page-button.component.ts ***!
  \************************************************************/
/*! exports provided: PageButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageButtonComponent", function() { return PageButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageButtonComponent = /** @class */ (function () {
    function PageButtonComponent() {
    }
    PageButtonComponent.prototype.ngOnInit = function () {
    };
    PageButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-button',
            template: __webpack_require__(/*! ./page-button.component.html */ "./src/app/pages/page-button/page-button.component.html"),
            styles: [__webpack_require__(/*! ./page-button.component.css */ "./src/app/pages/page-button/page-button.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageButtonComponent);
    return PageButtonComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-process/page-process.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/page-process/page-process.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\r\n    --bs-table-bg: transparent; \r\n   --bs-table-accent-bg: transparent; \r\n    --bs-table-striped-color: ; \r\n    --bs-table-striped-bg: rgba(247, 247, 247, 0.05); \r\n    --bs-table-active-color: #212529; \r\n    --bs-table-active-bg: rgba(0, 0, 0, 0.1); \r\n   --bs-table-hover-color: #212529;\r\n   --bs-table-hover-bg: rgba(0, 0, 0, 0.075);\r\n   width: 100%;\r\n   margin-bottom: 1rem;\r\n   color: #212529;\r\n   vertical-align: top;\r\n   border-color: #dee2e6;\r\n   margin: 20px;\r\n}\r\n\r\ninput#inputPassword {\r\n   margin-bottom: 15px;\r\n   margin-top: 10px;\r\n}\r\n\r\ndiv#DataTables_Table_0_length {\r\n   display: none;\r\n}\r\n\r\nbutton.button.rounded.process-button {\r\n   color: #0b620b;\r\n   background: white;\r\n   border: 1px solid gray;\r\n}\r\n\r\n.gb-form {\r\n   border: 1px solid #beb1b1;\r\n   padding: 14px;\r\n}\r\n\r\n.button {\r\n   border: none;\r\n   padding: 15px 32px;\r\n   text-align: center;\r\n   text-decoration: none;\r\n   display: inline-block;\r\n   font-size: 16px;\r\n   margin: 4px 2px;\r\n   cursor: pointer;\r\n }\r\n\r\nbutton.button.rounded.Button_121 {\r\n     margin-top: 20%;\r\n   color: #bb0707;\r\n   background: #2323af;\r\n}\r\n\r\n.button2 {background-color: #008CBA;}\r\n\r\n/* Blue */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZS1wcm9jZXNzL3BhZ2UtcHJvY2Vzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0dBQzNCLGlDQUFpQztJQUNoQywwQkFBMEI7SUFDMUIsZ0RBQWdEO0lBQ2hELGdDQUFnQztJQUNoQyx3Q0FBd0M7R0FDekMsK0JBQStCO0dBQy9CLHlDQUF5QztHQUN6QyxXQUFXO0dBQ1gsbUJBQW1CO0dBQ25CLGNBQWM7R0FDZCxtQkFBbUI7R0FDbkIscUJBQXFCO0dBQ3JCLFlBQVk7QUFDZjs7QUFFQTtHQUNHLG1CQUFtQjtHQUNuQixnQkFBZ0I7QUFDbkI7O0FBRUE7R0FDRyxhQUFhO0FBQ2hCOztBQUNBO0dBQ0csY0FBYztHQUNkLGlCQUFpQjtHQUNqQixzQkFBc0I7QUFDekI7O0FBRUE7R0FDRyx5QkFBeUI7R0FDekIsYUFBYTtBQUNoQjs7QUFHQTtHQUNHLFlBQVk7R0FDWixrQkFBa0I7R0FDbEIsa0JBQWtCO0dBQ2xCLHFCQUFxQjtHQUNyQixxQkFBcUI7R0FDckIsZUFBZTtHQUNmLGVBQWU7R0FDZixlQUFlO0NBQ2pCOztBQUVBO0tBQ0ksZUFBZTtHQUNqQixjQUFjO0dBQ2QsbUJBQW1CO0FBQ3RCOztBQUVDLFVBQVUseUJBQXlCLENBQUM7O0FBQUUsU0FBUyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtcHJvY2Vzcy9wYWdlLXByb2Nlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgICAtLWJzLXRhYmxlLWJnOiB0cmFuc3BhcmVudDsgXHJcbiAgIC0tYnMtdGFibGUtYWNjZW50LWJnOiB0cmFuc3BhcmVudDsgXHJcbiAgICAtLWJzLXRhYmxlLXN0cmlwZWQtY29sb3I6IDsgXHJcbiAgICAtLWJzLXRhYmxlLXN0cmlwZWQtYmc6IHJnYmEoMjQ3LCAyNDcsIDI0NywgMC4wNSk7IFxyXG4gICAgLS1icy10YWJsZS1hY3RpdmUtY29sb3I6ICMyMTI1Mjk7IFxyXG4gICAgLS1icy10YWJsZS1hY3RpdmUtYmc6IHJnYmEoMCwgMCwgMCwgMC4xKTsgXHJcbiAgIC0tYnMtdGFibGUtaG92ZXItY29sb3I6ICMyMTI1Mjk7XHJcbiAgIC0tYnMtdGFibGUtaG92ZXItYmc6IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcclxuICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dCNpbnB1dFBhc3N3b3JkIHtcclxuICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuZGl2I0RhdGFUYWJsZXNfVGFibGVfMF9sZW5ndGgge1xyXG4gICBkaXNwbGF5OiBub25lO1xyXG59XHJcbmJ1dHRvbi5idXR0b24ucm91bmRlZC5wcm9jZXNzLWJ1dHRvbiB7XHJcbiAgIGNvbG9yOiAjMGI2MjBiO1xyXG4gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxufVxyXG5cclxuLmdiLWZvcm0ge1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCAjYmViMWIxO1xyXG4gICBwYWRkaW5nOiAxNHB4O1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxuICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICBmb250LXNpemU6IDE2cHg7XHJcbiAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gfVxyXG5cclxuIGJ1dHRvbi5idXR0b24ucm91bmRlZC5CdXR0b25fMTIxIHtcclxuICAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgIGNvbG9yOiAjYmIwNzA3O1xyXG4gICBiYWNrZ3JvdW5kOiAjMjMyM2FmO1xyXG59XHJcbiBcclxuIC5idXR0b24yIHtiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Q0JBO30gLyogQmx1ZSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/pages/page-process/page-process.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/page-process/page-process.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\t\n  <div class=\"margin-top\">\n    <table class=\"margin-top table table-striped table-bordered table-sm row-border hover\" datatable [dtOptions]=\"dtOptions\"\n      [dtTrigger]=\"dtTrigger\">\n      <thead>\n        <tr>\n          <th *ngFor=\"let heading of headersData\">{{heading}}</th>          \n        </tr>\n      </thead>\n      \n      <tbody>\n        <tr *ngFor=\"let row of lines\" [style.color]=\"row.color\" [style.background]=\"row.background\">        \n          <td *ngFor=\"let rowData of row ; let i = index\" >{{rowData}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/page-process/page-process.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/page-process/page-process.component.ts ***!
  \**************************************************************/
/*! exports provided: PageProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageProcessComponent", function() { return PageProcessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PageProcessComponent = /** @class */ (function () {
    function PageProcessComponent(service, http, router) {
        this.service = service;
        this.http = http;
        this.router = router;
        this.lines = [];
        this.dtOptions = {};
        this.display_column_1 = 'none';
        this.display_column_2 = 'none';
        this.display_column_3 = 'none';
        this.display_column_4 = 'none';
        this.display_column_5 = 'none';
        this.headersData = [];
    }
    PageProcessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = this.service.labels;
        if (this.data == '') {
            this.router.navigateByUrl('/');
        }
        console.log(this.data);
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 500,
            processing: true,
            lengthChange: false,
            "searching": false,
        };
        this.http.get('assets/SAMPLE_INPUT.txt', { responseType: 'text' }).subscribe(function (res) {
            var allTextLines = res.split(/\r\n/);
            var headers = allTextLines[0].split(',');
            var headersRow = [_this.data.label2, _this.data.label3, _this.data.label4];
            for (var index = 0; index < headersRow.length; index++) {
                if (headersRow[index] != '') {
                    _this.headersData.push(headersRow[index]);
                }
            }
            for (var i = 0; i < allTextLines.length; i++) {
                // split content based on comma
                var data = allTextLines[i].split(',');
                if (data.length == headers.length) {
                    var tarr = [];
                    for (var j = 0; j < headers.length; j++) {
                        if (j == 0) {
                            _this.sampleNumber = data[j];
                            _this.lastDigit = _this.sampleNumber % 10;
                            tarr['background'] = 'white';
                            tarr['color'] = 'gray';
                            if (_this.lastDigit === 1) {
                                tarr['background'] = 'red';
                                tarr['color'] = 'green';
                            }
                            if (_this.lastDigit === 2) {
                                tarr['background'] = 'white';
                                tarr['color'] = '#0000FF';
                            }
                            if (_this.lastDigit === 0) {
                                tarr['background'] = 'white';
                                tarr['color'] = 'red';
                            }
                        }
                        /***********condition folr label 2 */
                        if (_this.data.label2 === 'column_0' && j == 0) {
                            tarr.push(data[j]);
                        }
                        else if (_this.data.label2 === 'column_1' && j == 1) {
                            tarr.push(data[j]);
                        }
                        else if (_this.data.label2 === 'column_2' && j == 2) {
                            tarr.push(data[j]);
                        }
                        else if (_this.data.label2 === 'column_3' && j == 3) {
                            tarr.push(data[j]);
                        }
                        else if (_this.data.label2 === 'column_4' && j == 4) {
                            tarr.push(data[j]);
                        }
                        /***********condition folr label 3 */
                        if (_this.data.label3 === 'column_0' && j == 0) {
                            tarr.push(data[j]);
                        }
                        else if (_this.data.label3 === 'column_1' && j == 1) {
                            tarr.push(data[j]);
                        }
                        else if (_this.data.label3 === 'column_2' && j == 2) {
                            tarr.push(data[j]);
                        }
                        else if (_this.data.label3 === 'column_3' && j == 3) {
                            tarr.push(data[j]);
                        }
                        else if (_this.data.label3 === 'column_4' && j == 4) {
                            tarr.push(data[j]);
                        }
                        /***********condition folr label 4 */
                        if (_this.data.label4 === 'column_0' && j == 0) {
                            tarr.push(data[j]);
                        }
                        else if (_this.data.label4 === 'column_1' && j == 1) {
                            tarr.push(data[j]);
                        }
                        else if (_this.data.label4 === 'column_2' && j == 2) {
                            tarr.push(data[j]);
                        }
                        else if (_this.data.label4 === 'column_3' && j == 3) {
                            tarr.push(data[j]);
                        }
                        else if (_this.data.label4 === 'column_4' && j == 4) {
                            tarr.push(data[j]);
                        }
                    }
                    _this.lines.push(tarr);
                }
            }
        });
    };
    PageProcessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-process',
            template: __webpack_require__(/*! ./page-process.component.html */ "./src/app/pages/page-process/page-process.component.html"),
            styles: [__webpack_require__(/*! ./page-process.component.css */ "./src/app/pages/page-process/page-process.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice_service__WEBPACK_IMPORTED_MODULE_3__["dataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PageProcessComponent);
    return PageProcessComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-single-row/page-single-row.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/page-single-row/page-single-row.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\r\n    --bs-table-bg: transparent; \r\n   --bs-table-accent-bg: transparent; \r\n    --bs-table-striped-color: ; \r\n    --bs-table-striped-bg: rgba(247, 247, 247, 0.05); \r\n    --bs-table-active-color: #212529; \r\n    --bs-table-active-bg: rgba(0, 0, 0, 0.1); \r\n   --bs-table-hover-color: #212529;\r\n   --bs-table-hover-bg: rgba(0, 0, 0, 0.075);\r\n   width: 100%;\r\n   margin-bottom: 1rem;\r\n   color: #212529;\r\n   vertical-align: top;\r\n   border-color: #dee2e6;\r\n   margin: 20px;\r\n}\r\n\r\ninput#inputPassword {\r\n   margin-bottom: 15px;\r\n   margin-top: 10px;\r\n}\r\n\r\ndiv#DataTables_Table_0_length {\r\n   display: none;\r\n}\r\n\r\nbutton.button.rounded.process-button {\r\n   color: #0b620b;\r\n   background: white;\r\n   border: 1px solid gray;\r\n}\r\n\r\n.gb-form {\r\n   border: 1px solid #beb1b1;\r\n   padding: 14px;\r\n}\r\n\r\n.button {\r\n   border: none;\r\n   padding: 15px 32px;\r\n   text-align: center;\r\n   text-decoration: none;\r\n   display: inline-block;\r\n   font-size: 16px;\r\n   margin: 4px 2px;\r\n   cursor: pointer;\r\n }\r\n\r\nbutton.button.rounded.Button_121 {\r\n     margin-top: 20%;\r\n   color: #bb0707;\r\n   background: #2323af;\r\n}\r\n\r\n.button2 {background-color: #008CBA;}\r\n\r\n/* Blue */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZS1zaW5nbGUtcm93L3BhZ2Utc2luZ2xlLXJvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0dBQzNCLGlDQUFpQztJQUNoQywwQkFBMEI7SUFDMUIsZ0RBQWdEO0lBQ2hELGdDQUFnQztJQUNoQyx3Q0FBd0M7R0FDekMsK0JBQStCO0dBQy9CLHlDQUF5QztHQUN6QyxXQUFXO0dBQ1gsbUJBQW1CO0dBQ25CLGNBQWM7R0FDZCxtQkFBbUI7R0FDbkIscUJBQXFCO0dBQ3JCLFlBQVk7QUFDZjs7QUFFQTtHQUNHLG1CQUFtQjtHQUNuQixnQkFBZ0I7QUFDbkI7O0FBRUE7R0FDRyxhQUFhO0FBQ2hCOztBQUNBO0dBQ0csY0FBYztHQUNkLGlCQUFpQjtHQUNqQixzQkFBc0I7QUFDekI7O0FBRUE7R0FDRyx5QkFBeUI7R0FDekIsYUFBYTtBQUNoQjs7QUFHQTtHQUNHLFlBQVk7R0FDWixrQkFBa0I7R0FDbEIsa0JBQWtCO0dBQ2xCLHFCQUFxQjtHQUNyQixxQkFBcUI7R0FDckIsZUFBZTtHQUNmLGVBQWU7R0FDZixlQUFlO0NBQ2pCOztBQUVBO0tBQ0ksZUFBZTtHQUNqQixjQUFjO0dBQ2QsbUJBQW1CO0FBQ3RCOztBQUVDLFVBQVUseUJBQXlCLENBQUM7O0FBQUUsU0FBUyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utc2luZ2xlLXJvdy9wYWdlLXNpbmdsZS1yb3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgICAtLWJzLXRhYmxlLWJnOiB0cmFuc3BhcmVudDsgXHJcbiAgIC0tYnMtdGFibGUtYWNjZW50LWJnOiB0cmFuc3BhcmVudDsgXHJcbiAgICAtLWJzLXRhYmxlLXN0cmlwZWQtY29sb3I6IDsgXHJcbiAgICAtLWJzLXRhYmxlLXN0cmlwZWQtYmc6IHJnYmEoMjQ3LCAyNDcsIDI0NywgMC4wNSk7IFxyXG4gICAgLS1icy10YWJsZS1hY3RpdmUtY29sb3I6ICMyMTI1Mjk7IFxyXG4gICAgLS1icy10YWJsZS1hY3RpdmUtYmc6IHJnYmEoMCwgMCwgMCwgMC4xKTsgXHJcbiAgIC0tYnMtdGFibGUtaG92ZXItY29sb3I6ICMyMTI1Mjk7XHJcbiAgIC0tYnMtdGFibGUtaG92ZXItYmc6IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcclxuICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dCNpbnB1dFBhc3N3b3JkIHtcclxuICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuZGl2I0RhdGFUYWJsZXNfVGFibGVfMF9sZW5ndGgge1xyXG4gICBkaXNwbGF5OiBub25lO1xyXG59XHJcbmJ1dHRvbi5idXR0b24ucm91bmRlZC5wcm9jZXNzLWJ1dHRvbiB7XHJcbiAgIGNvbG9yOiAjMGI2MjBiO1xyXG4gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxufVxyXG5cclxuLmdiLWZvcm0ge1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCAjYmViMWIxO1xyXG4gICBwYWRkaW5nOiAxNHB4O1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxuICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICBmb250LXNpemU6IDE2cHg7XHJcbiAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gfVxyXG5cclxuIGJ1dHRvbi5idXR0b24ucm91bmRlZC5CdXR0b25fMTIxIHtcclxuICAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgIGNvbG9yOiAjYmIwNzA3O1xyXG4gICBiYWNrZ3JvdW5kOiAjMjMyM2FmO1xyXG59XHJcbiBcclxuIC5idXR0b24yIHtiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4Q0JBO30gLyogQmx1ZSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/pages/page-single-row/page-single-row.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/page-single-row/page-single-row.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"margin-top\">\n<table class=\"margin-top table table-striped table-bordered table-sm row-border hover\" >\n\t<thead>\n\t\t<tr>\n\t\t\t<th>COLUMN_0</th>\n\t\t\t<th>COLUMN_1</th>\n\t\t\t<th>COLUMN_2</th>\n\t\t\t<th>COLUMN_3</th>\n\t\t\t<th>COLUMN_4</th>\n\t\t</tr>\n\t</thead>\n\t\n\t<tbody>\n\t\t<tr>\n     \n\t\t\t<td *ngFor=\"let rowData of data\" >{{rowData}}</td>\n\t\t</tr>\n\t</tbody>\n\t</table>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/pages/page-single-row/page-single-row.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-single-row/page-single-row.component.ts ***!
  \********************************************************************/
/*! exports provided: PageSingleRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSingleRowComponent", function() { return PageSingleRowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PageSingleRowComponent = /** @class */ (function () {
    function PageSingleRowComponent(service, http, router) {
        this.service = service;
        this.http = http;
        this.router = router;
        this.lines = [];
    }
    PageSingleRowComponent.prototype.ngOnInit = function () {
        this.data = this.service.labels;
        console.log(this.data);
    };
    PageSingleRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-single-row',
            template: __webpack_require__(/*! ./page-single-row.component.html */ "./src/app/pages/page-single-row/page-single-row.component.html"),
            styles: [__webpack_require__(/*! ./page-single-row.component.css */ "./src/app/pages/page-single-row/page-single-row.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice_service__WEBPACK_IMPORTED_MODULE_3__["dataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PageSingleRowComponent);
    return PageSingleRowComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Node\sampleAng\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
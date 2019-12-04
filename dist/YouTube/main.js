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



var routes = [];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'YouTube';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-list/video-list.component */ "./src/app/video-list/video-list.component.ts");
/* harmony import */ var _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-player/video-player.component */ "./src/app/video-player/video-player.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _video_item_video_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./video-item/video-item.component */ "./src/app/video-item/video-item.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");















var externalUrlProvider = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('externalUrlRedirectResolver');
var deactivateGuard = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('deactivateGuard');
var appRoutes = [
    { path: 'video-list', component: _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_5__["VideoListComponent"] },
    { path: 'video-player', component: _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_6__["VideoPlayerComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_5__["VideoListComponent"],
                _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_6__["VideoPlayerComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
                _video_item_video_item_component__WEBPACK_IMPORTED_MODULE_13__["VideoItemComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(appRoutes, { enableTracing: false }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n  color: #000000;\n}\n.sidenav-container {\n  height: 100%;\n}\n.sidenav {\n  width: 200px;\n}\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n.mat-toolbar.mat-primary {\n    background-color:  #ffffff !important;\n  box-shadow: 0 8px 6px -6px black;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.main-content{\n  background-color:  #FAFAFA;\n}\n.search-bar {\n    width: 70vw;\n    color: #111;\n    padding: 2px 6px;\n    font-size: 14px;\n    font-weight: 100;\n    border: 1px solid #ccc;\n    border-top-left-radius: 2px;\n    border-bottom-left-radius: 2px;\n    border-right: none;\n    height: 32px;\n    box-shadow: #eee 0px 1px 2px 0px inset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7SUFDSSxxQ0FBcUM7RUFDdkMsZ0NBQWdDO0VBQ2hDLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVU7QUFDWjtBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0NBQXNDO0FBQzFDIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLm1haW4tY29udGVudHtcbiAgYmFja2dyb3VuZC1jb2xvcjogICNGQUZBRkE7XG59XG4uc2VhcmNoLWJhciB7XG4gICAgd2lkdGg6IDcwdnc7XG4gICAgY29sb3I6ICMxMTE7XG4gICAgcGFkZGluZzogMnB4IDZweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBib3gtc2hhZG93OiAjZWVlIDBweCAxcHggMnB4IDBweCBpbnNldDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar><span><a routerLink=\"\" routerLinkActive=\"active\"><img src=\"../../assets/images/logo.png\" alt=\"logo\" style=\"width: 100px; margin-left: 10px; margin-top: 15px;\"></a></span>\n    </mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/video-list\" routerLinkActive=\"active\">Videos</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"main-content\">\n      <mat-toolbar color=\"primary\">\n          <button\n            type=\"button\"\n            aria-label=\"Toggle sidenav\"\n            mat-icon-button\n            (click)=\"drawer.toggle()\"\n            *ngIf=\"isHandset$ | async\">\n            <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n          </button>\n          <input type=\"text\" (keyup.enter)=\"onKey($event)\" (blur)=\"onKey($event)\" [(ngModel)]=\"searchItem\" class=\"search-bar\" placeholder=\"Search Videos\">\n          <a routerLink=\"/video-list\" routerLinkActive=\"active\">\n          <button>Search</button>\n          </a>\n        </mat-toolbar>\n    <!-- Add Content Here -->\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../video.service */ "./src/app/video.service.ts");





var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(breakpointObserver, videoService) {
        this.breakpointObserver = breakpointObserver;
        this.videoService = videoService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
        this.searchItem = "";
    }
    NavigationComponent.prototype.onKey = function (event) {
        this.videoService.onKey(event);
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"],
            _video_service__WEBPACK_IMPORTED_MODULE_4__["VideoService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/video-item/video-item.component.html":
/*!******************************************************!*\
  !*** ./src/app/video-item/video-item.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"videos-list-container\" *ngFor=\"let video of videos\">\n  <div class=\"thumbnail\">\n      <a routerLink=\"/video-player\" routerLinkActive=\"active\"><img (click)=\"onVideoSelected(video)\" style=\"margin: 10px\" src=\"{{this.video.snippet.thumbnails.medium.url}}\" alt=\"\"></a>\n  </div>\n  <div class=\"description\">\n    <h3>{{this.video.snippet.title}}</h3>\n    <p>{{this.video.snippet.description}}</p>\n    <!-- <a [href]=\"`https://ssyoutube.com/embed/${this.video.id.videoId}`\" \n    appExternalUrl\n    >Download</a> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/video-item/video-item.component.scss":
/*!******************************************************!*\
  !*** ./src/app/video-item/video-item.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2, h3, h4, h5, h6 {\n  color: #0E0E0E; }\n\np {\n  color: #606060; }\n\n.videos-list-container {\n  display: flex;\n  width: 70vw; }\n\n.thumbnail {\n  flex: 1; }\n\n.description {\n  flex: 2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmlyYWxpaXRrL0Rlc2t0b3AvTW90aW9ucy9zcmMvYXBwL3ZpZGVvLWl0ZW0vdmlkZW8taXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFFZjtFQUNJLE9BQU8sRUFBQTs7QUFHWDtFQUNJLE9BQU8sRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWl0ZW0vdmlkZW8taXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgIGNvbG9yOiAjMEUwRTBFO1xufVxucHtcbiAgICBjb2xvcjogIzYwNjA2MDtcbn1cblxuLnZpZGVvcy1saXN0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA3MHZ3O1xufVxuLnRodW1ibmFpbHtcbiAgICBmbGV4OiAxO1xufVxuXG4uZGVzY3JpcHRpb257XG4gICAgZmxleDogMjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/video-item/video-item.component.ts":
/*!****************************************************!*\
  !*** ./src/app/video-item/video-item.component.ts ***!
  \****************************************************/
/*! exports provided: VideoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoItemComponent", function() { return VideoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video.service */ "./src/app/video.service.ts");



var VideoItemComponent = /** @class */ (function () {
    function VideoItemComponent(videoService) {
        this.videoService = videoService;
    }
    VideoItemComponent.prototype.ngOnInit = function () {
    };
    VideoItemComponent.prototype.onVideoSelected = function (video) {
        this.selectedVideoSrc = "https://www.youtube.com/embed/" + video.id.videoId;
        this.videoService.selectedVideo = this.selectedVideoSrc;
        console.log("https://ssyoutube.com/embed/" + video.id.videoId);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoItemComponent.prototype, "videos", void 0);
    VideoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-item',
            template: __webpack_require__(/*! ./video-item.component.html */ "./src/app/video-item/video-item.component.html"),
            styles: [__webpack_require__(/*! ./video-item.component.scss */ "./src/app/video-item/video-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]])
    ], VideoItemComponent);
    return VideoItemComponent;
}());



/***/ }),

/***/ "./src/app/video-list/video-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/video-list/video-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-video-item \n    [videos]=\"videos\"\n  >\n  </app-video-item>\n</div>\n\n"

/***/ }),

/***/ "./src/app/video-list/video-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/video-list/video-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmlyYWxpaXRrL0Rlc2t0b3AvTW90aW9ucy9zcmMvYXBwL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIGNvbG9yOiAjMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/video-list/video-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/video-list/video-list.component.ts ***!
  \****************************************************/
/*! exports provided: VideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListComponent", function() { return VideoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video.service */ "./src/app/video.service.ts");



var VideoListComponent = /** @class */ (function () {
    function VideoListComponent(videoService) {
        this.videoService = videoService;
        this.videos = [];
        this.videos = this.videoService.videos;
        this.selectedVideo = this.videos[0];
        console.log('selected', this.selectedVideo.snippet);
    }
    VideoListComponent.prototype.ngOnInit = function () {
    };
    VideoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-list',
            template: __webpack_require__(/*! ./video-list.component.html */ "./src/app/video-list/video-list.component.html"),
            styles: [__webpack_require__(/*! ./video-list.component.scss */ "./src/app/video-list/video-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]])
    ], VideoListComponent);
    return VideoListComponent;
}());



/***/ }),

/***/ "./src/app/video-player/video-player.component.html":
/*!**********************************************************!*\
  !*** ./src/app/video-player/video-player.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe style=\"margin-left: 5px;\" [src]='safeURL' frameBorder=\"0\" height=\"90%\" width=\"90%\" title=\"Video Player\" allowfullscreen></iframe>\n"

/***/ }),

/***/ "./src/app/video-player/video-player.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/video-player/video-player.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdmlyYWxpaXRrL0Rlc2t0b3AvTW90aW9ucy9zcmMvYXBwL3ZpZGVvLXBsYXllci92aWRlby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWRlby1wbGF5ZXIvdmlkZW8tcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgY29sb3I6ICMwMDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/video-player/video-player.component.ts":
/*!********************************************************!*\
  !*** ./src/app/video-player/video-player.component.ts ***!
  \********************************************************/
/*! exports provided: VideoPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerComponent", function() { return VideoPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video.service */ "./src/app/video.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var VideoPlayerComponent = /** @class */ (function () {
    function VideoPlayerComponent(videoService, _sanitizer) {
        this.videoService = videoService;
        this._sanitizer = _sanitizer;
        this.videoSrc = this.videoService.selectedVideo;
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoSrc);
    }
    VideoPlayerComponent.prototype.ngOnInit = function () {
    };
    VideoPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-player',
            template: __webpack_require__(/*! ./video-player.component.html */ "./src/app/video-player/video-player.component.html"),
            styles: [__webpack_require__(/*! ./video-player.component.scss */ "./src/app/video-player/video-player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], VideoPlayerComponent);
    return VideoPlayerComponent;
}());



/***/ }),

/***/ "./src/app/video.service.ts":
/*!**********************************!*\
  !*** ./src/app/video.service.ts ***!
  \**********************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var VideoService = /** @class */ (function () {
    function VideoService() {
        var _this = this;
        this.videos = [];
        this.onKey = function (event) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
                            baseURL: 'https://www.googleapis.com/youtube/v3',
                        }).get('search', {
                            params: {
                                part: 'snippet',
                                maxResults: 9,
                                // key: 'AIzaSyD2ZGoCy8IZTLYyoAdbQhRG2n66J1cdWTg',
                                // key: 'AIzaSyCey3BKtfgdpr8FQpK1GBGGdIAH0UclQ5I',
                                key: 'AIzaSyADR5nw4MmGzzW9aUOVD6piq5K9TdO7iRc',
                                q: event.target.value,
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        this.videos = response.data.items;
                        this.selectedVideo = this.videos[0];
                        console.log(response.data.items);
                        return [2 /*return*/];
                }
            });
        }); };
    }
    VideoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoService);
    return VideoService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aviraliitk/Desktop/Motions/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
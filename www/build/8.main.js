webpackJsonp([8],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actor_details__ = __webpack_require__(291);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorDetailsModule", function() { return ActorDetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActorDetailsModule = (function () {
    function ActorDetailsModule() {
    }
    return ActorDetailsModule;
}());
ActorDetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__actor_details__["a" /* ActorDetails */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__actor_details__["a" /* ActorDetails */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__actor_details__["a" /* ActorDetails */]
        ]
    })
], ActorDetailsModule);

//# sourceMappingURL=actor-details.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_actors_api__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_actors_storage__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActorDetails; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActorDetails = (function () {
    function ActorDetails(navCtrl, navParams, _api, _storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._api = _api;
        this._storage = _storage;
        this.data = { profile_path: "" };
        this.actorDetail = "info";
        this.obj = { 'background-image': 'url(https://image.tmdb.org/t/p/w500' + this.data.profile_path + ')' };
        if (this.navParams.data.data) {
            this.data = this.navParams.data.data;
        }
        this._api.one(this.navParams.data.id).subscribe(function (res) {
            _this.data = res;
        });
    }
    ActorDetails.prototype.navMovie = function (movie) {
        this.navCtrl.push("MovieDetails", { data: movie, id: movie.id });
    };
    ActorDetails.prototype.navSerie = function (serie) {
        this.navCtrl.push("SerieDetails", { data: serie, id: serie.id });
    };
    ActorDetails.prototype.ionViewCanEnter = function () { };
    ActorDetails.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActorsDetails');
    };
    return ActorDetails;
}());
ActorDetails = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        segment: "actors/:id",
        defaultHistory: ['Actors']
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-actor-details',template:/*ion-inline-start:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\actor-details\actor-details.html"*/'<ion-header>\n\n  <ion-navbar class="gradient-header">\n    <ion-title>{{ data.name }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="details" [ngStyle]="obj">\n  <div class="wrapper">\n    <div>\n      <h1 class="title">{{ data.name }}</h1>\n    </div>\n  </div>\n  <ion-toolbar no-border>\n    <ion-segment color="light" [(ngModel)]="actorDetail">\n      <ion-segment-button value="series">\n        Series\n      </ion-segment-button>\n      <ion-segment-button value="info">\n        Info\n      </ion-segment-button>\n      <ion-segment-button value="movies">\n        Movies\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <div [ngSwitch]="actorDetail">\n    <ion-item>\n      <ion-chip *ngFor="let genre of data.genre_ids" item-end color="danger">\n        <ion-icon name="information-circle"></ion-icon>\n        <ion-label>{{ genre }}</ion-label>\n      </ion-chip>\n    </ion-item>\n    \n    <ion-list *ngSwitchCase="\'info\'">\n      <ion-item text-wrap>Also known as  {{ data.also_know_as }}</ion-item>\n      <ion-item text-wrap>Biography: {{ data.biography }}</ion-item>\n      <ion-item text-wrap>Popularity: {{ data.popularity }}</ion-item>\n      <ion-item text-wrap>Place of Birth: {{ data.place_of_birth }}</ion-item>\n      <!--<ion-item text-wrap>{{ data | json }}</ion-item>-->\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'series\'">\n      <ion-item (click)="navSerie(serie)" text-wrap *ngFor="let serie of data.tv_credits?.cast" >\n        <ion-thumbnail item-left>\n          <img src="https://image.tmdb.org/t/p/w92{{serie.poster_path}}">\n        </ion-thumbnail>\n        <h2>{{ serie.name }}</h2>\n        <p>Acted as {{ serie.character }}</p>\n        <p>First Air Date: {{ serie.first_air_date }}</p>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'movies\'">\n      <ion-item (click)="navMovie(movie)" text-wrap *ngFor="let movie of data.movie_credits?.cast" >\n          <ion-thumbnail item-left>\n            <img src="https://image.tmdb.org/t/p/w92{{movie.poster_path}}">\n          </ion-thumbnail>\n          <h2>{{ movie.title }}</h2>\n          <p>Acted as {{ movie.character }}</p>\n          <p>Release Date: {{ movie.release_date }}</p>\n        </ion-item>\n    </ion-list>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ekene\code\Ionic\movie-ease\src\pages\actor-details\actor-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_actors_api__["a" /* ActorsApi */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_actors_storage__["a" /* ActorsStorage */]])
], ActorDetails);

//# sourceMappingURL=actor-details.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map
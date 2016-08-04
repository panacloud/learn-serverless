"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.serviceUrl = 'https://jqxcbc4im6.execute-api.us-east-1.amazonaws.com/dev/mypost?value1=9'; // URL to service
        this.post();
    }
    AppComponent.prototype.post = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var request = { name: "zia" };
        this.http
            .post(this.serviceUrl, JSON.stringify(request), { headers: headers }).subscribe((function (res) { return console.log(res); }));
        //.toPromise()
        //.then(res => res.json().data)
        //.catch(this.handleError);
    };
    AppComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n       <div>\n\t\t{{index}}\n        \n\n\t"
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
platform_browser_dynamic_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map
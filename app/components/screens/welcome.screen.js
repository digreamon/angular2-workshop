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
var core_1 = require("@angular/core");
var hi_greeter_1 = require("../greet/hi.greeter");
var sq_greeter_1 = require("../greet/sq.greeter");
var speech_service_1 = require("../../service/speech/speech.service");
var WelcomeScreen = (function () {
    function WelcomeScreen(speechService) {
        this.speechService = speechService;
        this.speech = "";
    }
    WelcomeScreen.prototype.say = function () {
        if (this.speech) {
            this.speechService.say(this.speech);
        }
    };
    WelcomeScreen.prototype.ngAfterViewInit = function () {
        this.hiGreeter.greeting = this.hiGreeter.greeting + ", " + this.sqGreeter.greeting;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WelcomeScreen.prototype, "speech", void 0);
    __decorate([
        core_1.ViewChild(hi_greeter_1.HiGreeter), 
        __metadata('design:type', hi_greeter_1.HiGreeter)
    ], WelcomeScreen.prototype, "hiGreeter", void 0);
    __decorate([
        core_1.ViewChild(sq_greeter_1.SqGreeter), 
        __metadata('design:type', sq_greeter_1.SqGreeter)
    ], WelcomeScreen.prototype, "sqGreeter", void 0);
    WelcomeScreen = __decorate([
        core_1.Component({
            selector: "welcome",
            // can't do <greeter/> because of html5 specs :: https://github.com/angular/angular/blob/master/CHANGELOG.md#breaking-changes-20
            // <sq-greeter greeting='Custom greeting'></sq-greeter> for custom parameter, only if field is decorated with @Input()
            template: "<h3>\n                   <hi-greeter>\n                        <sq-greeter></sq-greeter>\n                   </hi-greeter>\n               </h3>\n               <div class=\"input-group\">\n                  <span class=\"input-group-btn\">\n                    <button (click)=\"say()\" type=\"button\" class=\"btn btn-default\">&nbsp;&nbsp;Say&nbsp;&nbsp;</button>\n                  </span>\n                  <input [(ngModel)]=\"speech\" type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Say something\">\n               </div>",
            directives: [
                hi_greeter_1.HiGreeter, sq_greeter_1.SqGreeter
            ]
        }), 
        __metadata('design:paramtypes', [speech_service_1.SpeechService])
    ], WelcomeScreen);
    return WelcomeScreen;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WelcomeScreen;
//# sourceMappingURL=welcome.screen.js.map
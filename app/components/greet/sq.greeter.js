"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var greeter_1 = require("./greeter");
var speech_service_1 = require("../../service/speech/speech.service");
// Important !!!! must be declared BEFORE the @Component
var LogDirective = (function () {
    function LogDirective() {
    }
    LogDirective.prototype.onInput = function () {
        console.log("Saying: \"" + this.message + "\"...");
    };
    __decorate([
        core_1.Input("logger"), 
        __metadata('design:type', String)
    ], LogDirective.prototype, "message", void 0);
    LogDirective = __decorate([
        core_1.Directive({
            selector: '[logger]',
            host: {
                '(click)': 'onInput()'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], LogDirective);
    return LogDirective;
}());
var SqGreeter = (function (_super) {
    __extends(SqGreeter, _super);
    function SqGreeter(speechService) {
        _super.call(this, speechService);
        this.title = "Swissquote - The Swiss Leader in Online Banking";
        this.greeting = "This is " + this.title;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SqGreeter.prototype, "greeting", void 0);
    SqGreeter = __decorate([
        core_1.Component({
            selector: "sq-greeter",
            directives: [LogDirective],
            /*
             * ANGULAR1: we would use directives instead of one-way binding
             * <button ng-click="vm.toggleImage()">
             * <button ng-click="vm.toggleImage($event)">
             */
            template: "<img alt='{{title}}' title='{{title}}' src='img/sq_logo.png' (click)='sayGreeting($event)' logger='{{greeting}}'>"
        }), 
        __metadata('design:paramtypes', [speech_service_1.SpeechService])
    ], SqGreeter);
    return SqGreeter;
}(greeter_1.AbstractGreeter));
exports.SqGreeter = SqGreeter;
//# sourceMappingURL=sq.greeter.js.map
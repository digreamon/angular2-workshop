"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractGreeter = (function () {
    function AbstractGreeter(speechService) {
        this.speechService = speechService;
    }
    AbstractGreeter.prototype.getGreeting = function () {
        return this.greeting;
    };
    AbstractGreeter.prototype.sayGreeting = function (event) {
        // console.log("Saying: \"" + this.greeting + "\"...");
        this.speechService.say(this.greeting);
        event.stopPropagation();
        return false;
    };
    return AbstractGreeter;
}());
exports.AbstractGreeter = AbstractGreeter;
//# sourceMappingURL=greeter.js.map
"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
let messsage = "Hello, TypeScript!";
console.log(messsage);
//Basic Types
let tempeature = 30;
let welcomeMessage = "hello";
let isLoggedIn = true;
//Arrays and Tuples
let color = ["blanc", "rouge", "vert"];
let tuple = ["yassine", 25];
//Enum, Any, Void, Null, and Undefined
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
let S = Season.Spring;
//Functions
function logValue(value) {
    console.log(value);
}
function NoReturn() {
    console.log("NoReturn");
}
function Greeting(a) {
    return 'hello, ${a}!';
}
function multiply(a, b) {
    return a * b;
}
function CreateEmail(subject, body = "aucun sujet") {
    if (subject)
        return subject + " " + body;
    else
        return subject;
}
function add(x, y, z) {
    if (z)
        return x + y + z;
    else
        return x + y;
}
//Rest Parameters
function getText(...string) {
    return string.reduce((accumulator, current) => accumulator + current, "");
}
function createVehicle(vehicle) {
    console.log("this is " + vehicle.make + " the model is " + vehicle.model + " ,the year is " + vehicle.year + ".");
}
function updatePerson(person) {
    let newPerson = { name: "Yaceeen",
        age: 25,
        email: "yelmoubtahij@sqli.com"
    };
    if (person.name) {
        newPerson.name = person.name;
    }
    if (person.age) {
        newPerson.age = person.age;
    }
    if (person.email) {
        newPerson.email = person.email;
    }
    return newPerson;
}
let C1 = { centerX: 4, centerY: 4, radius: 2 };
//C1.centerX=12;//
//Classes
class Animal {
    constructor(theName) { this.name = theName; }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters} m.`);
    }
}
class Dog extends Animal {
}
const newDog = new Dog("Rocky");
newDog.move(20);
//Modificateurs publics, privés et protégés
class Person {
    constructor(name) { this.name = name; }
}
const person = new Person("John");
//Génériques
function identity(arg) {
    return arg;
}
//Énumérations
var response;
(function (response) {
    response[response["No"] = 0] = "No";
    response[response["Yes"] = 1] = "Yes";
})(response || (response = {}));
var message;
(function (message) {
    message["Success"] = "SUCCESS";
    message["Failure"] = "FAILURE";
})(message || (message = {}));
//Types avancés
//Union Types
function padLeft(value, padding) {
}
const customer = {
    name: "yassine",
    credit: 1000,
    email: "yelmoubtahij@sqli.com",
    phone: "+212661367517"
};
//Modules
//Exporting and Importing Modules
function capitalizeString(str) {
    return str;
}
exports.default = capitalizeString;
//Decorateurs 
function logged(constructor, arg) {
    return;
}
let MyClass = (() => {
    let _classDecorators = [logged];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var MyClass = _classThis = class {
    };
    __setFunctionName(_classThis, "MyClass");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MyClass = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MyClass = _classThis;
})();
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const readonlyUser = {
    title: "Read-only User",
    description: "aaaaa.",
};
const updatedUser = updateTodo(readonlyUser, { description: "Updated description" });
console.log(updatedUser);

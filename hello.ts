let messsage: string = "Hello, TypeScript!";
console.log(messsage);

//Basic Types

let tempeature: number =30;
let welcomeMessage:string ="hello";
let isLoggedIn: boolean = true;
//Arrays and Tuples

let color : string[]=["blanc","rouge","vert"];
let tuple: [string,number]=["yassine",25];

//Enum, Any, Void, Null, and Undefined

enum Season {Spring,Summer,Autumn,Winter}
let S:Season = Season.Spring;
//Functions



function logValue(value : any ):void{
    console.log(value)
}

function NoReturn():void{
    console.log("NoReturn");
}


function Greeting(a:string): string{
    return 'hello, ${a}!';
}

function multiply(a:number, b:number):number{
    return a*b;
}

function CreateEmail(subject:string, body:string="aucun sujet"):string{
    if (subject) return subject + " " + body;
    else return subject;
}

function add(x:number,y:number,z?:number){
    if (z) return x+y+z
    else return x+y
}
//Rest Parameters

function getText(...string:string[]){
    return string.reduce((accumulator, current) => accumulator + current, "");
}
//Interfaces
interface Vehicle{
    make:string;
    model:string;
    year:Date;

}
function createVehicle(vehicle:Vehicle){
    console.log("this is "+vehicle.make+" the model is "+vehicle.model+" ,the year is "+vehicle.year+".")

}

//Optional Properties

interface Person{
    name: string;
    age: number;
    email?:string
}
function updatePerson(person:Person):{ name:string, age:number, email:string}{
    let newPerson={name:"Yaceeen",
    age:25,
    email:"yelmoubtahij@sqli.com"
};
    if (person.name){
        newPerson.name=person.name;
    }
    if (person.age){
        newPerson.age=person.age;
    }
    if (person.email){
        newPerson.email=person.email;
    }

        return newPerson;
}
//Readonly Properties
interface Circle{
    readonly centerX :number;
    readonly centerY: number;
    readonly radius:number;

}

let C1:Circle={centerX:4,centerY:4,radius:2}
//C1.centerX=12;//


//Classes
class Animal {
    name: string;

    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters} m.`);
    }
}
class Dog extends Animal{   

}
const newDog : Dog = new Dog("Rocky");
newDog.move(20);
//Modificateurs publics, privés et protégés

class Person {
    public name: string;
    constructor(name: string) { this.name = name; }
}
const person = new Person("John");
//Génériques
function identity<T>(arg: T): T {
    return arg;
}
//Interfaces génériques

interface GenericIdentityFn<T> {
    (arg: T): T;
}

//Énumérations

enum response {
   No = 0,
   Yes = 1
}

enum message{
    Success= "SUCCESS",
    Failure = "FAILURE"
}

//Types avancés
//Union Types

function padLeft(value:string, padding:string | number){

}
//Intersection Types

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Contact {
    email: string;
    phone: string;
}

type Customer = BusinessPartner & Contact;

const customer : Customer={
    name:"yassine",
    credit:1000,
    email:"yelmoubtahij@sqli.com",
    phone:"+212661367517"
}

//Modules

//Exporting and Importing Modules

export default function capitalizeString(str: string): string {
    return str;
}

//import { capitalizeString } from './stringUtils';


//Espaces de noms

//Espaces de noms et modules

namespace Calculator{
    export interface BasicCalculator{
        isValid(s:string):boolean;
    }
}

//Decorateurs 
function logged(constructor: Function , arg:any)
{
    return;
}
@logged
class MyClass {
}

//Types d’utilitaires
interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
}

const readonlyUser: Readonly<Todo> = {
    title: "Read-only User",
    description: "aaaaa.",
};

const updatedUser = updateTodo(readonlyUser, { description: "Updated description" });
console.log(updatedUser);


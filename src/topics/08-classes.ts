export class Person{
    // public name:string;
    // private address:string;

    constructor(public name:string, public address:string ='No address'){}

}

const iroman = new Person('David','México');

console.log(iroman);

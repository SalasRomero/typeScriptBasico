export class Person{
    // public name:string;
    // private address:string;

    constructor(public name:string, public address:string = 'No address'){}

}

export class Hero extends Person{
    constructor(public alterEgo:string, public age:number, public realName:string){
        super(realName,'New York');
    }
}

const iroman = new Hero('Iroman',45,'Tony');

console.log(iroman);

export class Person{
    // public name:string;
    // private address:string;

    constructor(public firstName:string,public lastName:string,public address:string = 'No address'){}

}

// export class Hero extends Person{

//     constructor(public alterEgo:string, public age:number, public realName:string){
//         super(realName,'New York');
//     }
// }

export class Hero {
    // public person: Person;
    
    constructor(public alterEgo:string, public age:number, public realName:string,
        public person:Person){
        // this.person = new Person(realName);
    }
}

const person = new Person('Tony','stark','New York');

const iroman = new Hero('Iroman',45,'Tony',person);

console.log(iroman);

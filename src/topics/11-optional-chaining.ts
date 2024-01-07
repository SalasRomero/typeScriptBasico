export interface Passeger{
    name: string;
    children?: string[];
}

const passenger1: Passeger = {
    name: "David"
}

const passenger2: Passeger = {
    name: "Alejandro",
    children:['Alejandra','Sofia']
}

const returnChildrenNumber = (passenger:Passeger): number => {
    
    const howMabyChildren = passenger.children?.length || 0;
    //const howMabyChildren = passenger.children!.length;
    
    console.log(passenger.name,howMabyChildren);
    return howMabyChildren;
};

returnChildrenNumber(passenger1);
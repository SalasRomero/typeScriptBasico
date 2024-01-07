
interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description:'Nokia A1',
    price: 150.0
}

const tablet : Product = {
    description: "iPad Air",
    price: 250.0
}

interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

function taxCalculation(options:TaxCalculationOptions): [number,number] {
    const {tax,products} = options;
    let total = 0;
    products.forEach(({price})=>{
        total += price;
    });

    return [total, total*tax]
}

const shoppingCart = [phone,tablet];
const tax = 0.15;


const [resultTax,resultTotal] = taxCalculation({tax:tax,products:shoppingCart});

console.log('Total',resultTotal);
console.log('Tax',resultTax);


export {};
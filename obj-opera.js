let product = {
        pid: 1234,
        name: 'tv',
        brand: 'Sonuu',
        price: 12000
    }
    //get all keys
console.log(Object.keys(product))

//get all values
console.log(Object.values(product))

//freeze the input will not change if we change also
Object.freeze(product)

//modify product
product.brand = 'Lg'
product.price = 20000
console.log(product)
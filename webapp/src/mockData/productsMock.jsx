import { faker } from "@faker-js/faker"
export function getProducts(params) {
    const products = []

    for (let i = 0; i < 12; i++) {
        products.push(createProduct())


    }
    console.log(products);
    return products;
}
const createProduct = () => {
    return {
        name: faker.commerce.productName(),
        image: faker.image.imageUrl(),
        ratings: faker.datatype.number({ min: 1, max: 5 }),
        status: faker.helpers.arrayElement(['Active', 'Inactive']),
        price: faker.datatype.number({ min: 300, max: 30000 }),
        stock: faker.datatype.number({ min: 300, max: 3000 })
    }
}
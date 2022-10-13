import { faker } from "@faker-js/faker"
export function getSubCategory(params) {
    const products = []

    for (let i = 0; i < 12; i++) {
        products.push(createSubCategory())

    }
    return products;
}
const createSubCategory = () => {
    return {
        name: faker.commerce.productName(),

        parent: faker.word.interjection(),
        status: faker.helpers.arrayElement(['Active', 'Inactive']),

    }
}
import { faker } from "@faker-js/faker"
export function getBanners(params) {
    const products = []

    for (let i = 0; i < 12; i++) {
        products.push(createBanner())

    }
    return products;
}
const createBanner = () => {
    return {
        name: faker.commerce.productName(),

        bannerType: faker.helpers.arrayElement(['Category', 'Product']),
        position: faker.helpers.arrayElement(['Top', 'Bottom', 'Middle']),
        status: faker.helpers.arrayElement(['Active', 'Inactive']),

    }
}
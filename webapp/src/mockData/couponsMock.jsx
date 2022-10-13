import { faker } from "@faker-js/faker"
export function getCoupons(params) {
    const products = []

    for (let i = 0; i < 12; i++) {
        products.push(createCoupon())

    }
    return products;
}
const createCoupon = () => {
    return {
        title: faker.helpers.arrayElement(['10% Off on Order of ₹4100', '50% Off on First Order', '15% Off on 5th Order']),
        code: faker.helpers.arrayElement(['GET10', 'FIRST100', 'FIFTH50']),
        minPurchase: faker.datatype.number({ min: 100, max: 4100 }),
        maxDiscount: faker.datatype.number({ min: 100, max: 4100 }),
        discountType: faker.helpers.arrayElement(['PERCENT', 'FLAT']),
        discount: faker.helpers.arrayElement(['10', '20']),
        startDate: faker.date.recent(),
        endDate: faker.date.future(),
        status: faker.helpers.arrayElement(['Active', 'Inactive']),
    }
}
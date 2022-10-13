import { faker } from "@faker-js/faker"
export function getOrders(params) {
    const products = []

    for (let i = 0; i < 12; i++) {
        products.push(createOrder())

    }
    return products;
}
const createOrder = () => {
    return {
        orderId: faker.datatype.number({ min: 100000 }),
        date: faker.date.future(1),
        slot: faker.helpers.arrayElement(['12:00 - 13:30', '18:10 - 19:30', '14:00-16:00']),
        customer: faker.name.fullName(),
        total: faker.datatype.number({ min: 300, max: 30000 }),
        status: faker.helpers.arrayElement(['Out For Delivery', 'Delivered', 'Cancelled', 'Processing', 'Confirmed']),
        paymentMethod: faker.helpers.arrayElement(['COD', 'UPI', 'Card Payment']),
    }
}
import { faker } from "@faker-js/faker"
export function getUsers(params) {
    const users = []

    for (let i = 0; i < 12; i++) {
        users.push(createUser())

    }
    return users;
}
const createUser = () => {
    return {
        name: faker.name.fullName(),
        image: faker.image.imageUrl(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        orderCount: faker.datatype.number({ min: 3, max: 32 }),
        createdAt: faker.date.recent(),
        status: faker.helpers.arrayElement(['Active', 'Inactive']),

    }
}
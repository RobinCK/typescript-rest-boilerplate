import { Service } from 'typedi';
import { User } from '../data';

const users: User[] = [
    {
        id: 1,
        email: 'foo@boo.com',
        firstName: 'foo',
        lastName: 'boo',
        age: 20,
        isActive: true,
        password: '123456',
    },
    {
        id: 2,
        email: 'foo2@boo.com',
        firstName: 'foo2',
        lastName: 'boo2',
        age: 22,
        isActive: true,
        password: '1234562',
    },
    {
        id: 3,
        email: 'foo3@boo.com',
        firstName: 'foo3',
        lastName: 'boo3',
        age: 23,
        isActive: true,
        password: '1234563',
    },
].map(u => {
    const user = new User();
    Object.assign(user, u);

    return user;
});

@Service()
export class UserRepository {
    findAll(): User[] {
        return users;
    }

    findById(id: number): User | undefined {
        return users.find((u: User) => u.id === id);
    }

    insert(user: User): void {
        users.push(user);
    }

    updateById(id: number, user: User) {} // tslint:disable-line

    removeById(id: number) {} // tslint:disable-line

    count(): number {
        return 0;
    }
}

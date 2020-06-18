import { User } from '../data/User'

export const fetchUser = (): Promise<User> =>
    Promise.resolve({
        name: 'Pepe',
        surname: 'Argento',
        age: 29,
        sex: 'Male',
    })

export interface User {
    name: string
    surname: string
    age: number
    sex: 'Male' | 'Female'
    hasPets?: boolean
}

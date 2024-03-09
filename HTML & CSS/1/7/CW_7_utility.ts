// interface User {
//     name: string;
//     age: number;
//     email: string;
// }
//
// type PartialUser = Partial<User>;
//
// // Result: { name?: string; age?: number; email?: string; }
//
// const user: User = {
//     name: 'Peter',
//     age: 30,
//     email: 'peter@gmail.com'
// }
//
// const partialUser: PartialUser = {
//     email: 'user@gmail.com'
// }


// interface User {
//     name: string;
//     age?: number;
//     email?: string;
// }
//
// type RequiredUser = Required<User>;
//
// // Result: { name: string; age: number; email: string; }
//
// const user: User = {
//     name: 'Peter',
// }
//
// const reqUser: RequiredUser = {
//     name: 'user',
//     age: 18,
//     email: 'user@gmail.com'
// }


// interface User {
//     name: string;
//     age: number;
//     email: string;
// }
//
// type ReadonlyUser = Readonly<User>;
// // Result: { readonly name: string; readonly age: number; readonly email: string; }
//
// const user: User = {
//     name: 'Peter',
//     age: 30,
//     email: 'peter@gmail.com'
// }
//
// user.name = 'Sveta';
//
// const strictUser: ReadonlyUser = {
//     name: 'user',
//     age: 18,
//     email: 'user@gmail.com'
// }
//
// strictUser.name = 'Andrey'; // Cannot assign to 'name' because it is a read-only property.


// interface User {
//     name: string;
//     age: number;
//     email: string;
// }
//
// type UserSocial = Pick<User, 'name' | 'email'>;
//
// // Result: { name: string; email: string; }
//
// const userSocial: UserSocial = {
//     name: "Vlad",
//     email: 'vadiyha@list.ru'
// }


// interface User {
//     name: string;
//     age: number;
//     email: string;
// }
//
// type UserSocial = Omit<User, 'age'>;
//
// // Result: { name: string; email: string; }
//
// const userSocial: UserSocial = {
//     name: "Vlad",
//     email: 'vadiyha@list.ru'
// }


// function myFunction(): string {
//     return 'Hello, world!';
// }
//
// type MyFunctionReturnType = ReturnType<typeof myFunction>; // type is 'string'


type MyUnion = 'a' | 'b' | 'c' | 'd';
type MyExcludedType = Exclude<MyUnion, 'a' | 'b'>;
// Result: 'c' | 'd'

const firstLetter: MyUnion = 'a';
// const secondLetter: MyExcludedType = 'b'; // Type '"b"' is not assignable to type 'MyExcludedType'
const lastLetter: MyExcludedType = 'd';


type Fruit = 'apple' | 'banana' | 'orange';

// Создаем объект, где ключами являются значения типа Fruit, а значениями - строки
const fruitColors: Record<Fruit, string> = {
    apple: 'red',
    banana: 'yellow',
    orange: 'orange',
};

console.log(fruitColors.apple); // "red"
console.log(fruitColors.banana); // "yellow"
console.log(fruitColors.orange); // "orange"

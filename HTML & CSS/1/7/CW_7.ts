let fontWeight: number | string = "bold";
fontWeight = 600;
const intersection: string[] & number[] = []

type PointTypeAlias = {
    x: number
    y: number
}

function printCoords(pt: PointTypeAlias) {
    console.log(`Значение координаты 'x': ${pt.x}`)
    console.log(`Значение координаты 'y': ${pt.y}`)
}

printCoords({ x: 3, y: 7 })

const user = {
    name: "Viktor",
    age: 12
}

type UserInfo = "typeof user"

interface Point {
    x: number
    y: number
}

function printCoordsWithTypeAliasSignature(pt: Point) {
    console.log(`Значение координаты 'x': ${pt.x}`)
    console.log(`Значение координаты 'y': ${pt.y}`)
}

printCoordsWithTypeAliasSignature({ x: 3, y: 7 })

interface I {
    a: number;
}

interface I {
    b: string;
}

const a: I = { a: 10, b: "str" }

// type T = { //Error: Duplicate identifier 'A'.
//     a: number;
// }
//
// type T = { //Error: Duplicate identifier 'A'.
//     b: string;
// }

interface ChildI extends I {
    c: boolean
}

type SomeAlias = ChildI & {d: Array<string>}

interface IWithReadonlyValueType {
    readonly name: string,
    age: number
}

const uData: IWithReadonlyValueType = {
    name: "Viktor",
    age: 12
}

//uData.name = "Boris"

interface StringArray {
    [index: number]: string
}

const myArray: StringArray = ["h", "hh"]
const secondItem = myArray[1]

interface NumberOrStringDictionary {
    [index: string]: number | string
    length?: number
    name?: string // <------- optional property
}

// function createArrayWithAnyTypeParams(...args: number[]): number[] {
//     return args;
// }
//
// const firstAny: any[] = createArrayWithAnyTypeParams(1, 2, 3);
// const secondAny: any[] = createArrayWithAnyTypeParams(1, "lalaka", true)

function createArray<T>(...args: T[]): T[] {
    return args;
}

const first: number[] = createArray<number>(1, 2, 3);
const second: string[] = createArray<string>("1", "2", "3");
const third: (number | string)[] = createArray<number | string>(10, "100", 50);


//syntax
function foo<T>(): void {
    let a: T
}


function foo2<T, S>(a: T): S {
  return a as unknown as S // приведение к типу
}

interface I1 {
    name: string;
    age: number;
}

interface I2 {
    name: string;
}

const someF = <T extends {name: string}>(arg: T)  => {}
const someFWithoutGen = (arg: {name: string})  => {}

let arg1: I1
let arg2: I2

someF(arg1)
someF(arg2)
someFWithoutGen(arg1)
someFWithoutGen(arg2)

//foo3("qweqw");
//foo3(1); // Error: Argument of type '1' is not assignable to parameter of type 'string'.

/*
Задача:

Напишите универсальную функцию getMaxValue, которая принимает массив элементов и возвращает максимальное значение.
 Функция должна корректно обрабатывать массивы разных типов элементов, таких как числа, строки или объекты с полем "value".

Пример:

const numbers = [5, 2, 8, 10];
const strings = ['apple', 'banana', 'orange'];
const objects = [{ value: 20 }, { value: 15 }, { value: 25 }];

const maxNumber = getMaxValue(numbers); // Ожидаем, что maxNumber будет равно 10
const maxString = getMaxValue(strings); // Ожидаем, что maxString будет равно 'orange'
const maxObject = getMaxValue(objects); // Ожидаем, что maxObject будет равно { value: 25 }

Подсказка:

Используйте дженерики и функцию reduce для поиска максимального значения.
Учтите, что если элемент является объектом, вы можете использовать ключ "value" для сравнения значений.

function getMaxValue<T>(array: T[]): T {
  // реализация функции
}
*/
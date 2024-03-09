// Протипизируйте массивы как в предыдущем примере:
// con arr2: Number[] = [1, 2, 3, 4, 5];
// st arr: Number[] = [1, 2, 3, 4, 5];
// const

//Укажите значения, чтобы не было ошибок компиляции
const a1: number = 5;
const a2: boolean = true;
const a3: string = "hello";
const a4: number[] = [5, 5];
const a5: Array<string> = ["i", "o"];
const a6: [string, string] = ["Tom", "i"];
const a7: [boolean, number] = [true, 5];
const a8: [number[], Array<string>] = [
  [5, 6, 7],
  ["i", "good"],
];

//Укажите типы, чтобы не было ошибок компиляции

const b1: number = 70;
const b2: boolean = false;
const b3: string = "lalaka";
const b4: [boolean, boolean] = [true, false];
const b6: [number, string] = [10, "10"];
const b7: boolean[] = [...[true]];

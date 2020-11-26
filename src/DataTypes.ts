const isDone: boolean = true;
//----------------------------------
const decimal: number = 10;
const hex: number = 0xf00d;
const binary: number = 0b00110;
const octa: number = 0o55476;
const age: number = 19;
// --------------------------------
const myName: string = "James";
const myProfile: string = `I'm ${myName} , I'm ${age} year olds.`;
//---------------------------------
const list: number[] = [1, 2, 3];
const numList: Array<number> = [1, 2, 3, 4, 5];
// numList.forEach((n) => console.log(n));
//---------------------------------
const tuple: [string, number] = ["James", 2];
//---------------------------------
enum Color {
  Red,
  Black,
  Pink,
}
let color: string = Color[1];
//---------------------------------
let notSure: unknown = 4;
//---------------------------------
declare function create(o: object | null): void;
// create({ name: "James" });
// create("0");
//---------------------------------
let someValue: string = "Hello from the other side.";
let strLength: number = (someValue as string).length;
// console.log(strLength);
//---------------------------------

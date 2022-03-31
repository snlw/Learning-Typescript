/*

    Variable declaration in Javascript

*/ 
const a = "hello"; // or  const a = String("hello");
console.log(a);

/* 

    Variable declaration in Typescript

*/

let coolVariable : string = 'sean';
console.log(coolVariable) // sean

// Error message will be displayed if 
// 1. Value of the variable does not match the type declared.
// coolVariable = 10; // Type assigned does not match the type declared previously for coolVariable.

// Opt out of the fixed type declaration 
// Although the initial type was inferred as string, the 'any' type allows the type to be inferred from the value.
let coolVariable2 : any = "hello world";
coolVariable2 = 10;
console.log(coolVariable2); // 10
console.log(typeof coolVariable2) // number
 
/* 

    Array declaration in Typescript

*/
let coolList: number[] = [1,2,3];
console.log(coolList);

// Error message will be displayed if 
// 1. Value in the array does not match the type declared in the array
// let coolList2: number[] = [1,2,3,'sean'];
// console.log(coolList2) // Type 'string' is not assignable to type 'number'

/* 

    Interface declaration in Typescript
    
*/
interface User {
    name : string;
    id : number;
    alive : boolean;
    nickname : any;
};

const user: User = {
    name : 'sean',
    id : 0,
    alive : true,
    nickname : "asd123"
};

console.log(user); // { name: 'sean', id: 0, alive: true, nickname: 'asd123' } 

// Error message will be displayed if 
// 1. Declared key is not present in the initial interface declaration.
// 2. Declared value does not match the declared type of the respective key.


/* 

    Class declaration in Typescript
    
*/
class UserAccount {
    name: string;
    id: number;
    alive : boolean;
    nickname : any;
   
    constructor(name: string, id: number, alive : boolean, nickname : any) {
      this.name = name;
      this.id = id;
      this.alive = alive;
      this.nickname = nickname;
    }
}
   
const user2: User = new UserAccount("Murphy", 1, true, 'M');
console.log(user2) ;

/* 

    Types :
        - Javascript 
            - boolean
            - bigint
            - null
            - number
            - undefined
            - symbol
        - Typescript (on top of those in Javascript)
            - any (allow anything)
            - unknown (ensure someone using this type declares what the type is)
            - never (it’s not possible that this type could happen)
            - void (a function which returns undefined or has no return value)
*/

/* 

    Composing Types

*/

/* 

    Unions

*/
type newBooleanLogic = true | false;

// We can create specific set of values so when we can ensure that a particular variable does not contain any other weird value.
// It will prompt and catch spelling mistakes in the event of a string declaration too.
type nikeModels = 'dunk' | 'air max' | 'jordan 1';
type lockStates = 'locked' | 'unlocked';

// Error message will be displayed if 
// 1. The declared value of a variable does not match the set of values composed.
// let myModel : nikeModels = 'sb dunk';
// console.log(myModel); 

// Function example below shows how a union declaration allows handling of different types.
const displayLength = (obj: string | string[]) => {
    console.log(obj.length);
    return;
};

displayLength('sean'); // 4
displayLength(['s', 's','a']); // 4

/* 

    Generics

*/

type stringArray = Array<string>;
type numberArray = Array<number>;
type objectArray = Array<{name : string}>;

let myArray : numberArray = [1,2,3];

// Error message will be displayed if 
// 1. The types in the array does not match the type declared previously.
// let myArray : numberArray = [1,2,3,'sea'];
// 2. you append a value of an incorrect type into the array declared.
// myArray.push('sea'); will result in a error.

// Example of using a Generic Type
interface Backpack<Type> {
    item : Type;
    material : Type;
};

declare const bag : Backpack<string>;
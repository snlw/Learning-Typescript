/*

    Structural Type System

*/

// In a structural type system, if two objects have the same shape, they are considered to be of the same type.

interface Point {
    x : number;
    y : number;
};

const displayPoint = (c : Point) => {
    console.log (`X : ${c.x}\nY : ${c.y}`);
};

const randomPoint = { x : 19, y : 30 };
console.log(`Type upon declaration of randomPoint : ${typeof randomPoint}`);
// When randomPoint is used in the above function with the type specified, it runs.
// TypeScript compares the shape of point to the shape of Point in the type-check. They have the same shape, so the code passes.
displayPoint(randomPoint);

// The shape-matching only requires a subset of the object’s fields to match.
// In this example, x and y matches (with correct types), thus the code passes too.
const threeDimensionalPoint = { x : 1, y : 5, z : 2};
displayPoint(threeDimensionalPoint);

// Error is displayed if 
// 1. Assigned type is incompatible with property of 'x' or 'y'
// const messedUpPoint = { x : 'north', y : 'south'};
// displayPoint(messedUpPoint) // Error

/*

    Composing Types

*/
// Error message will be displayed if 
// 1. The declared value of a variable does not match the set of values composed.
// let myModel : nikeModels = 'sb dunk';
// console.log(myModel); 
// Function example below shows how a union declaration allows handling of different types.
var displayLength = function (obj) {
    console.log(obj.length);
    return;
};
displayLength('sean'); // 4
displayLength(['s', 's', 'a']); // 4
var myArray = [1, 2, 3];
;

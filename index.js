"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Food(Name, Flavour, Resturant) {
    return {
        Name,
        Flavour,
        Resturant
    };
}
const Foods = [
    Food("Volcoda", "Spinich", "Howdy"),
    Food("Chicken Chowmein", "Mild", "P.F Changs"),
    Food("Pizza", "Kabab Stuffer", "Pizza Online")
];
// const invalidIndex = 5;
const validIndex = 2;
// console.log(`Food at index ${invalidIndex}: `, Food[invalidIndex])
console.log(`Food at index ${validIndex}: `, Foods[validIndex]);
Foods.forEach((Food) => {
    console.log(`Name: ${Food.Name}, Flavour: ${Food.Flavour}, Resturant: ${Food.Resturant}`);
});

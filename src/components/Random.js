import React from "react";

let Randomarray = () => {
    const iterable = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let arr = [];
    for (const value of iterable) {
        console.log("Value: "+value);
        arr.push(Math.floor(Math.random()*9));
        console.log("Array value: "+arr);
    }
    return arr;
};

export default Randomarray;
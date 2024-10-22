"use strict";
/*
Given an array of functions [f1, f2, f3, ..., fn], return a new function
fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.
You may assume each function in the array accepts one integer as
input and returns one integer as output.

Example 1:
Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
*/
const compositFn = (functions) => {
    return (x) => {
        for (let i = functions.length - 1; i >= 0; i--) {
            let fn = functions[i];
            x = fn(x);
        }
        return x;
    };
};
const FnsArr = [
    (x) => x + 1,
    (x) => x * x,
    (x) => 2 * x,
];
const x = 4;
const result = compositFn(FnsArr);
console.log(result(x)); // 65
/*
Intuition
The compose function takes an array of functions and returns a new function
that applies each function in the array, from right to left, to the input value.
This is useful when we want to apply a series of transformations to some input data.

Approach
The compose function first checks if the input array is empty, and
returns a function that simply returns its input if it is. Otherwise, it uses the reduceRight method of the array to apply the functions in reverse order. reduceRight is used instead of reduce to ensure that the functions are applied from right to left.

What is Composition
Composition simply means the combination of two or more functions to form
a new function. When you compose two functions, you apply one function
to the output of the other function.

For example, if you have two functions f(x) and g(x),
their composition would be (f∘g)(x) = f(g(x)).
This means that you first apply the function g(x) to the input x, and
then apply the function f(x) to the output of g(x).

Complexity: runtime: o(n), space: o(1);
*/

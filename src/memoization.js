// Memoization with an unexpected behavior
const add = (...args) => args.reduce((acc, cur) => acc + cur);

const memoizeUnexpected = (fn) => {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);

        // This condition checks if the value stored in the cache
        // object at the specified key is truthy. It doesn't specifically
        // check whether the property with the key exists in the object.
        if (cache[key]) {
            console.log('Result from cache');
            return cache[key];
        } else {
            console.log('Result from function calling');
            let res = fn(...args);
            cache[key] = res;
            return res;
        }
    };
}

const memoizedFn2 = memoizeUnexpected(add);

// Result from function calling (expected as the first call)
console.log(memoizedFn2(2, 3));

// Result from function calling (unexpected in this context
// as the sum of (2, 3) or (3, 2) is the same)
// It should use the cached result.
console.log(memoizedFn2(3, 2));

// Corrected version
const memoize = (fn) => {
    const cache = {};
    return function (...args) {
        // Use the sort method in this context
        // so arbitrary arguments also use the cache, as it only handles the sum function.
        const key = JSON.stringify(args.sort((a, b) => a - b));

        // This condition checks if the property with the specified key exists
        // in the cache object, regardless of the value associated with that property.
        // It specifically checks for the presence of the property.
        if (key in cache) {
            console.log('Result from cache');
            return cache[key];
        } else {
            console.log('Result from function calling');
            let res = fn(...args);
            cache[key] = res;
            return res;
        }
    };
}

const memoizedFn = memoize(add);

// Result from function calling (expected as the first call)
console.log(memoizedFn(2, 3));

// Result from cache
console.log(memoizedFn(3, 2));


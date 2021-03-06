// function naiveNthFib(n) {
//   if (n === 0 || n === 1) {
//     return n;
//   }
//   return naiveNthFib(n - 1) + naiveNthFib(n - 2);
// }

/* 
  Memoized Recursive Strategy 
  The idea: we'll use the same naive recursive logic but augment it 
  with the ability to save work we've already done. This doesn't actually
  improve the theoretical runtime complexity over the naive recursive 
  approach, but it does significantly improve the actual running time.
  
  1. Initialize a cache (can be an object or an array)
  2. Write a helper function that checks the cache for the answer we're looking for
  3. If the answer is not found, fall back on our naive logic
  4. The naive helper needs to recursively call the memoized version, not itself
  5. Return the value that the memoized function returns
*/

function nthFib(n) {
  // initialize cache
  let cache = Array(n);

  // use to cache data and call from cache
  function nthFibMemo(n) {
    // grab data from cache
    let value = cache[n];

    // if data exists
    if (!value) {
      // fall back on naiveNthFib
      value = naiveNthFib(n);
      cache[n] = value;
    }
    return value;
  }

  // fallback naive function
  function naiveNthFib(n) {
    // base case
    if (n === 0 || n === 1) {
      // first assignment of number in array
      return n;
    }
    // call nthFibMemo to chack cache for stored data
    return nthFibMemo(n - 1) + nthFibMemo(n - 2);
  } 

  return nthFibMemo(n);
}

/* 
  Bottom Up Iterative 
  The idea: Generally follow the same logic as the memoized recursive approach. We 
  still make use of a cache to save prior data. In this case though, we seed the cache
  with some initial values and then loop up to our input, along the way populating the
  cache with the answer for the currennt iteration.

  1. Initialize a cache (again, can be an object or array)
  2. Seed the cache with initial values so that we can build up from there
  3. Loop up to our input (don't forget to skip over the initial seed values)
  4. Populate the cache with the answer for the current iteration
  5. Return cache[n]
*/

function nthFibIterative(n) {
  const cache = Array(n);
  cache[0] = 0;
  cache[1] = 1;

  for (let i = 2; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }

  return cache[n];
}

console.log(nthFib(10));


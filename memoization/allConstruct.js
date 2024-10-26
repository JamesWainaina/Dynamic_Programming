const allConstruct = (target, wordBank, memo= {}) => {
    if (target in memo) return memo[target];  
    if (target === '') return [[]];
    const result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way ]);
            result.push(...targetWays);
        }
    }
    memo[target] = result;
    return result;
} 

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
// generate possible test case that would take a long time to run
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
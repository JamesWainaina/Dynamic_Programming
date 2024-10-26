const CountConstruct = (target, wordbank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1;
    let totalCount = 0;
    for (let word of wordbank) {
        if(target.indexOf(word) === 0) {
            const numWays = CountConstruct(target.slice(word.length), wordbank, memo);
            totalCount += numWays;
        }
    }
    memo[target] = totalCount;
    return totalCount;
}


console.log(CountConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  CountConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
// generate possible test case that would take a long time to run
console.log(
  CountConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
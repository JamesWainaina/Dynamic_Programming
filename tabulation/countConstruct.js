const countConstruct = ( target, wordBank) => {
    const table  = Array(target.length + 1).fill(0);
    table[0] = 1;
    for (let i = 0 ; i <= target.length; i++){
        for (let word of wordBank){
            if (target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            }
        }
    }
    return table[target.length];
}


console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
// generate possible test case that would take a long time to run
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
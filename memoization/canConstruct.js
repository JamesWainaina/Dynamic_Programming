const canConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if (target === '') return true;
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo) == true) {
                memo[target] = true;
                return true;
            };
        }
    }
    memo[target] = false;
    return false;
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
// generate possible test case that would take a long time to run
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeef',[
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
]));
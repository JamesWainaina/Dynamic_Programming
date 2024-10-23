const gridTravelor = (m, n, memo= {}) => {
    const key = m + "," + n;
    if (key in memo) return memo[key];
    if (m == 1 && n == 1) return 1;
    if (m == 0 || n == 0) return 0;

    memo[key] = gridTravelor(m-1, n, memo) + gridTravelor(m, n-1, memo);
    return memo[key];
}

console.log(gridTravelor(1,1));
console.log(gridTravelor(14,14));
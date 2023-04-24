function fatorial (n) {
    let f = n
    for (let c = 1; c < n; c++) {
        f *= c
    }
    return f
}
console.log(fatorial(5))
const fib = (n) => {
    if (n >= 0 & Number.isInteger(Number(n)) & n <= 1000) {
        const result = [0, 1];
        for (var i = 2; i < n; i++) {
            result.push(result[i - 2] + result[i - 1]);
        }
        return result[n - 1];
    } else {
        return 'Что-то пошло не так'
    }
}

const load = () => {
    let n = prompt("Введите n");
    alert(fib(n))
}
window.onload = load()


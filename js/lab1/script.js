const pow = (x, n) => {
    let result = x ** n
    alert(result)
}
const load = () => {
    let x = prompt("Введите x");
    let n = prompt("Введите n");
    pow(x, n)
}
window.onload = load()


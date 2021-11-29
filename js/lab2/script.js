const gcd = (a, b) => {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}
const load = () => {
    let a = prompt("Введите a");
    let b = prompt("Введите b");
    alert(gcd(a, b))
}
window.onload = load()


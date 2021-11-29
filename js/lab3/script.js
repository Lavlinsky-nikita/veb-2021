const minDigit = (x) => {
    if (x >= 0 & Number.isInteger(Number(x))) {
        let arr = x.split('')
        var arrOfNum = arr.map(Number);
        let min = 9
        arrOfNum.map((i) => { i <= min ? min = i : null })
        return min
    } else {
        return 'Что-то пошло не так'
    }

}
const load = () => {
    let x = prompt("Введите x");
    alert(minDigit(x))
}
window.onload = load()


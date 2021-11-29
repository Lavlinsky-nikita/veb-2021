const pluralizeRecords = (n) => {
    if (n >= 0 & Number.isInteger(Number(n))) {
        let arr = n.split('')
        let last = arr[arr.length - 1]
        var string
        var verb
        if (last == 1) {
            string = 'запись'
            verb = 'была найдена'
        }
        if (last > 1 & last < 5) {
            string = 'записи'
            verb = 'были найдены'
        }
        if (last == 0 | last >= 5) {
            string = 'записей'
            verb = 'было найдено'
        }
        return `В результате выполнения запроса ${verb + ' ' + n + ' ' + string}`
    } else {
        return 'Что-то пошло не так'
    }
}
const load = () => {
    let n = prompt("Введите n");
    alert(pluralizeRecords(n))
}
window.onload = load()


const howMany = arr => {
    var result = arr.reduce(function (acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});
    Object.keys(result).forEach(key => result[key] === 1 ? delete result[key] : '');
    return result
};

const load = () => {
    let n = prompt("Введите числа в массиве через запятую");
    let arr = n.split(',')
    arr = arr.map(Number);
    console.log(howMany(arr))
}
window.onload = load()


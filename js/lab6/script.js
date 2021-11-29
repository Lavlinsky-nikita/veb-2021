const bubbleSort = arr => {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
};

const load = () => {
    let n = prompt("Введите числа в массиве через запятую");
    let arr = n.split(',')
    arr = arr.map(Number);
    alert(bubbleSort(arr))
}
window.onload = load()


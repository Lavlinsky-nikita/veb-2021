const move = (arr, k) => {
    arr = arr.concat(arr.splice(0, k))
    return arr
}

const load = () => {
    console.log(move([1, 4, 2, 5, 3, 6, 7, 8, 1, 2], 5));
}
window.onload = load()


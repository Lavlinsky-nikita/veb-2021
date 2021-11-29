const minMatrix = arr => {
    var max = arr[0][0];
    var b
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[0].length; j++) {
            if (arr[i][j] < b || j == 0)
                b = arr[i][j];
        }
        if (b > max || i == 0) max = b;
    }
    return max
};

const load = () => {
    let matrix = [
        [1, 2, 3],
        [40, 30, 60],
        [7, 8, 9],
        [10, 11, 12],
    ];

    console.log(minMatrix(matrix))
}
window.onload = load()


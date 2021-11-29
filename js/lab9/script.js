var vector = {
    x: 5,
    y: 10,
    z: 15,
    plus(x, y, z) {
        var xx = this.x + x;
        var yy = this.y + y;
        var zz = this.z + z;
        return `Результат сложения: x= ${xx} y= ${yy} z= ${zz}`;
    },
    componentwise(x, y, z) {
        var xx = this.x * x;
        var yy = this.y * y;
        var zz = this.z * z;
        return `Результат умножения: x= ${xx} y= ${yy} z= ${zz}`;
    },
    minus(x, y, z) {
        var xx = this.x - x;
        var yy = this.y - y;
        var zz = this.z - z;
        return `Результат вычитания: x= ${xx} y= ${yy} z= ${zz}`;
    },
    skalar(n) {
        var xx = this.x * n;
        var yy = this.y * n;
        var zz = this.z * n;
        return `Результат умножения на скаляр: x= ${xx} y= ${yy} z= ${zz}`;
    },
    lengthVector() {
        var result = Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2)
        return `Длина вектора: ${result}`;
    },
    multiplication(x, y, z) {
        var result = this.x * x + this.y * y + this.z + z
        return `Скалярное произведение векторов: ${result}`
    }
};

const load = () => {
    console.log(vector.plus(3, 6, 9))
    console.log(vector.componentwise(3, 6, 9))
    console.log(vector.minus(3, 6, 9))
    console.log(vector.skalar(4))
    console.log(vector.lengthVector());
    console.log(vector.multiplication(3, 6, 9));
}
window.onload = load()


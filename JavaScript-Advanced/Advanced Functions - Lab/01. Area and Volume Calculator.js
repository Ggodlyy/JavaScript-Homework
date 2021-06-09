function solve(area, vol, string) {
    let arr = JSON.parse(string);
    let result = [];

    for (let obj of arr) {
        let resultObj = {};
        resultObj.area = area.call(obj);
        resultObj.volume = vol.call(obj);
        result.push(resultObj);
    }

    return result;
}

let output = solve(area, vol, '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]');

console.log(output);


function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

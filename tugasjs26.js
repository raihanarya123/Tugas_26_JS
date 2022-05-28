var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

function tugas26(data) {
    if(isFinite(1000 / data)) {
        return data+" IS NOT Infinite";
    }
    return data+" IS Infinite";
}

console.log(data.map(tugas26));
function solve(radius, height) {
    let s = Math.sqrt((radius ** 2) + (height ** 2))
    let volume = ((1 / 3) * Math.PI * radius ** 2 * height)
    let area = ((Math.PI * radius * Number(s)) + (Math.PI * (radius ** 2)));

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
solve(3,
    5
)
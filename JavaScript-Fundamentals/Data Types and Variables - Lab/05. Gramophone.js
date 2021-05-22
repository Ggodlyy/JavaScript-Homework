function solve(bandName, album, song) {
    let duration = (bandName.length * album.length) * song.length / 2;
    let rotations = Math.ceil(duration / 2.5);
    return `The plate was rotated ${rotations} times.`
}
solve('Black Sabbath', 'Paranoid', 'War Pigs')
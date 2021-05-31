function solve(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songNumber = Number(arr.shift());
    let typeList = arr.pop();
    let songs = [];

    for (let i = 0; i < songNumber; i++) {
        let [type, name, time] = arr[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeList === 'all') {
        songs.forEach(obj => console.log(obj.name));
    } else {
        songs.forEach(obj => {
            if (obj.typeList === typeList) {
                console.log(obj.name);
            }
        });
    }
}
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
)    
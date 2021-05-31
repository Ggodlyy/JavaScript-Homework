function solve(arr) {
    let movies = [];

    for (let input of arr) {
        let tokens = input.split(' ');

        if (tokens.includes('addMovie')) {
            let index = tokens.indexOf('addMovie');
            let movie = {};
            movie.name = tokens.slice(index + 1).join(' ');
            movies.push(movie);
        } else if (tokens.includes('directedBy')) {
            let index = tokens.indexOf('directedBy');
            let name = tokens.slice(0, index).join(' ');
            let director = tokens.slice(index + 1).join(' ');

            movies.forEach(m => {
                let values = Object.values(m);

                if (values.includes(name)) {
                    m.director = director;
                }
            });
        } else if (tokens.includes('onDate')) {
            let index = tokens.indexOf('onDate');
            let name = tokens.slice(0, index).join(' ');
            let date = tokens.slice(index + 1).join(' ');

            movies.forEach(m => {
                let values = Object.values(m);

                if (values.includes(name)) {
                    m.date = date;
                }
            });
        }
    }

    movies.forEach(m => {
        let keys = Object.keys(m);

        if (keys.length === 3) {
            let json = JSON.stringify(m);
            console.log(json);
        }
    });
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)
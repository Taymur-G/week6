const Movie = require('/movieModels');

exports.addMovie = (movieObj) => {
    try {
        const movie = await new Movie(movieObj);
        await movie.save();
        console.log(`Successfully added ${movie.title}`);
    } catch (e) {
        console.log(error);
    }
};

exports.listMovies = async () => {
    try {
        console.log(await Movie.find({}));
    } catch (e) {
        console.log(error);
    }
};

exports.updateMovie = async (movieObj) => {
    try {
        await Movie.updateOne(
            { name: movieObj.filter },
            { name: movieObj.update },
            { name: true }
        );
        console.log(`Successfully updated ${movieObj.title}'s content.`);
    } catch (e) {
        console.log(error);
    }
}
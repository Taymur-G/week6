require("./db/connection");
const yargs = require("yargs");
const { addMovie, listMovies, updateMovie } = require("./movies/movieMethods");

const app = (args) => {
    switch (process.argv[2]) {
        case "add":
            addMovie({ title: args.title, actor: args.actor });
            break;
        case "list":
            listMovies();
            break;
        case "update":
            updateMovie({ target: args.target, title: args.title, actor: args.actor });
            break;
        case "delete":
            break;

        default:
            console.log("Command not found");
            break;
    }
}

app(yargs.argv);
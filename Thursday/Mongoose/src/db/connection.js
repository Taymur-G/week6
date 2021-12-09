const { mongoose } = require('mongoose');

require('dotenv').config();

const connection = () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Succesful db connection!");
    } catch (e) {
        console.log(error);
    }
};

connection();
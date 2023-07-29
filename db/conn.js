const mongoose = require("mongoose");
const mongoURI='mongodb+srv://ishpreet956:Ishpreet02@attendancetracker.y1n3pio.mongodb.net/?retryWrites=true&w=majority';

const dotenv = require("dotenv")
dotenv.config();
mongoose.connect( mongoURI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log(`Connection successful`);
}).catch((e) => {
    console.log(`No connection: ${e}`);
});



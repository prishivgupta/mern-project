import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import express from "express";
import postsRouter from "./routers/postsRouter.js";

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postsRouter);

const URL_CONNECTION = "mongodb+srv://user:user@cluster0.gga4y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(URL_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch( (error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
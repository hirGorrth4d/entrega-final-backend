import mongoose from "mongoose";
import Config from "./config"

mongoose.connect(Config.MONGO_ATLAS_URL, {useNewUrlParser: true})
    .then(db=> console.log(`db is connected`))
    .catch(error=> console.log(error))
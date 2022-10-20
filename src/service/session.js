
import MongoStore from "connect-mongo";
import config from "./config";


export const sessionStore = {
    secret: config.TOKEN_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        mongoUrl: config.MONGO_ATLAS_URL,
        mongoOptions:{
            useNewUrlParser: true
        }
    }),
    cookie: { maxAge: 180 * 60 * 1000}
}
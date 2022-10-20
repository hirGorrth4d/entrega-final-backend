import Config from './service/config'
import app from "./service/server";
import "./service/db";

let PORT = Config.PORT



app.listen(PORT, () => {
    console.log('corriendo en puerto', PORT)
})
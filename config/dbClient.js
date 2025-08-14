import 'dotenv/config';
import { MongoClient } from "mongodb";

class dbClient {
    constructor() {
        const queryString = `mongodb://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}`;
        this.client = new MongoClient(queryString);
        this.connectDB();
    }

    async connectDB() {
        try {
            await this.client.connect();
            this.db = this.client.db('adopcion');
            console.log("Conectado al servidor de Base de Datos");
        }
        catch (e) {
            console.log(e);
        }
    }
}

export default new dbClient();
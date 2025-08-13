import { MongoClient } from "mongodb";

class dbClient {
    constructor() {
        const queryString = "mongodb://admin:aTv5ZVEw0ZUtYM69j3@31.97.218.22:27017";
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

export default new dbClient;
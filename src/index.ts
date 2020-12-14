import "reflect-metadata";
import { createConnection } from "typeorm";
import Server from "./1-api/server";
require('dotenv').config();

createConnection().then(async connection => {
    connection.driver.afterConnect().then(() => {
        const server = new Server();
        server.start();
    });
}).catch(error => console.log(error));

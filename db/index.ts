import { Sequelize, DataTypes } from "sequelize";
import { config } from "dotenv";

const sequelize = (): Sequelize => {
    
    config();

    if (
        process.env.DB_NAME &&
        process.env.DB_USER &&
        process.env.DB_PASS &&
        process.env.DB_HOST &&
        process.env.DB_PORT
    ){
        return new Sequelize(
        "database",
        process.env.DB_USER,
        process.env.DB_PASS,
        {
            dialect: "sqlite",
            host: "0.0.0.0",
            pool: {
                max: 5,
                min: 0,
                idle: 5000,
            },
            storage: "./scripts/visitsdb.sqlite"
        }
        );
    } else {
        console.error("Invalid database data");   
        return new Sequelize();
    }

}

export {
    sequelize,
    Sequelize,
    DataTypes
}
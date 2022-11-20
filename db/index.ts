import { Sequelize, DataTypes } from "sequelize";
import config from "./config"

const sequelize = (): any => {
  return new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        dialect: 'sqlite',
        storage: 'db/scripts/visitsdb.sqlite',
        define: {
          underscored: true
        }
      }
  );
}

let db: any = {
  sequelize: sequelize(),
  Sequelize
}

export {
    db,
    DataTypes
}
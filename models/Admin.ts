import { db, DataTypes } from "../db"

const Admin = db.sequelize.define(
  "admin",
  {
    username: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
  }
);


export default Admin

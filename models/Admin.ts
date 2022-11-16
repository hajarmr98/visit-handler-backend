import { sequelize, DataTypes } from "../db"

const Admin = sequelize && sequelize().define(
  "admin",
  {
    username: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);


export default Admin
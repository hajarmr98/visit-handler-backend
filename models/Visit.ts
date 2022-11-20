import { db, DataTypes } from "../db";
import Admin from "./Admin";


const Visit = db.sequelize.define(
  "visit",
  {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    visitor_identification: {
      type: DataTypes.STRING(9),
      allowNull: false,
    },
    startup: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    visitor_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    petitioner_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    petitioner_email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    status: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    }
  },
);

Visit.belongsTo(Admin, {
  foreignKey: {
    name: "admin_id",
  },
  as: "admin",
});


export default Visit;
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
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
);

Visit.belongsTo(Admin, {
  foreignKey: {
    name: "admin_id",
  },
  as: "admin",
});


export default Visit;
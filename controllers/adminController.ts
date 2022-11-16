import { Request, Response } from "express";
import { sequelize } from "../db";
import Admin from "../models/Admin";

const logAdminController = async (req: Request, res: Response) => {
    console.log("logAdminController")
    try {
        let admins: any = await Admin.findAll();
        await sequelize().authenticate();
        console.log('Connection has been established successfully.');
        res.send(admins)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export { 
    logAdminController
}
 
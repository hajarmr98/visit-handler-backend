import { Request, Response } from "express";
import { db } from "../db";
import Admin from "../models/Admin";

const logAdminController = async (req: Request, res: Response) => {
    console.log("logAdminController")
    try {
        let admins: any = await Admin.create({
          id: 2,
          username: "Admin2",
          password: "$2a$12$9eK8292vhsLJN0dPlW/3VO0BbwZnC9O6odSfOrqerorP/0ge2s6VS",
          email: "admin2@gmail.com",
        });
        // await db.sequelize.sync();
        // await db.sequelize.authenticate();
        res.send(admins)
        // db.sequelize.query('PRAGMA table_list').then(function(rows: any) {
        //   console.log(JSON.stringify(rows));
        //   // res.send({rows, admins});
        // });
        // res.send(admins)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export { 
    logAdminController
}
 
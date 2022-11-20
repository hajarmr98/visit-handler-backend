import { Request, Response, NextFunction } from "express";
import { db } from "../db";
import { isObjectNotEmpty, isStringNotEmpty } from "../lib/basics";
import { sendSuccess, sendError } from "../lib/http";
import { findLoginUser } from "../repositories/AdminRepository";
import Admin from "../models/Admin"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
require("dotenv").config();


const logAdminController = async (req: Request, res: Response, next: NextFunction) => {
  if (
    isObjectNotEmpty(req.body) &&
    isStringNotEmpty(req.body.usernameOrEmail) &&
    isStringNotEmpty(req.body.password)
  ){
    try {
      
      const { usernameOrEmail, password } = req.body;

      let admin = await findLoginUser(usernameOrEmail)

      if (admin && bcrypt.compareSync(password, admin.password)){

        const token = jwt.sign(
          {
            id: admin.id,
            username: admin.username
          },
          process.env.SECRET_KEY ?? ''
        );

        const cookie = {
          name: "authToken",
          value: token,
          options: {
            httpOnly: true,
            sameSite: "none",
            maxAge: 604800,
            secure: true,
          },
        };

        sendSuccess({
          res, 
          status: 200, 
          data: admin,
          cookie
        })

      } else sendError({
        res, 
        message: "Wrong password or user", 
        status: 401, 
        next
      });


      } catch (error) {
        // throw error;
        sendError({
          res, 
          message: "Database error", 
          status: 501, 
          next
        });
      }
    } else sendError({
      res, 
      message: "All data are required", 
      status: 400, 
      next
    });
}

export { 
    logAdminController
}
 
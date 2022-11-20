import { Request, Response, NextFunction } from "express";
import { db } from "../db";
import { isObjectNotEmpty, isStringNotEmpty } from "../lib/basics";
import { sendSuccess, sendError } from "../lib/http";
import Admin from "../models/Admin";

const logAdminController = async (req: Request, res: Response, next: NextFunction) => {
  if (
    isObjectNotEmpty(req.body) &&
    isStringNotEmpty(req.body.username) &&
    isStringNotEmpty(req.body.password)
  ){
    try {
      //Admin Login
      // let admin = Admin({})


      } catch (error) {
        sendError({
          res, 
          message: "All data are required", 
          status: 400, 
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
 
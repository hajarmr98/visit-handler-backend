import { Request, Response, NextFunction } from "express";
import { isObjectNotEmpty, isStringNotEmpty } from "../lib/basics";
import { sendSuccess, sendError } from "../lib/http";
import { findLoginUser, getAllVisits, updateVisit } from "../repositories/adminRepository";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import enm from "../lib/enum"

config()

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
      message: "All data is required", 
      status: 400, 
      next
    });
}

const getAllVisitsController = async (req: Request, res: Response, next: NextFunction) => {
  try {

    let allAdminsVisits = await getAllVisits()

    console.log(allAdminsVisits);
    
    sendSuccess({
      res, 
      status: 200, 
      data: allAdminsVisits
    })

  } catch (error) {
    throw error;
  }
}
const aproveVisitController = async (req: Request, res: Response, next: NextFunction) => {
  if (isStringNotEmpty(req.params.id)){
    try {
  
      let visitAprove = await updateVisit(req.params.id, enm.CONFIRMED)
  
      sendSuccess({
        res, 
        status: 200, 
        data: !!visitAprove
      })
  
    } catch (error) {
      throw error;
    }
  } else sendError({
    res, 
    message: "All data is required", 
    status: 400, 
    next
  });
}
const rejectVisitController = async (req: Request, res: Response, next: NextFunction) => {
  if (isStringNotEmpty(req.params.id)){
    try {
      let visitReject = await updateVisit(req.params.id, enm.CANCELED)

      sendSuccess({
        res, 
        status: 200, 
        data: !!visitReject
      })

    } catch (error) {
      throw error;
    }
  } else sendError({
    res, 
    message: "All data is required", 
    status: 400, 
    next
  });
}

export { 
  logAdminController,
  getAllVisitsController,
  aproveVisitController,
  rejectVisitController
}
 
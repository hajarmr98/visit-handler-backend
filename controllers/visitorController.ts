import { Request, response, Response } from "express";
import { isObjectNotEmpty, isStringNotEmpty } from "../lib/basics";
import { sendSuccess, sendError } from "../lib/http";
import { createNewVisit } from "../repositories/visitorRepository";

const visitorFormController = async (req: Request, res: Response) => {

    if (
        isObjectNotEmpty(req.body) &&
        isStringNotEmpty(req.body.date) &&
        isStringNotEmpty(req.body.visitor_identification) &&
        isStringNotEmpty(req.body.startup) &&
        isStringNotEmpty(req.body.visitor_name) &&
        isStringNotEmpty(req.body.petitioner_name) &&
        isStringNotEmpty(req.body.petitioner_email)
    ){
        try{

            let visit = await createNewVisit(req.body)

            sendSuccess({
                res, 
                status: 200,
                data: visit
            })

        } catch(err){
            // throw err;
            sendError({
                res, 
                message: "Database error", 
                status: 501
            });
        }

    }
}

export { 
    visitorFormController
};
 
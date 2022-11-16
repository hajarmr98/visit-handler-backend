import { Request, Response } from "express";

const logAdminController = async (req: Request, res: Response) => {
    console.log("logAdminController")
    try{
        res.send("Respuesta")
    } catch(err){
        throw err
    }
}

export { 
    logAdminController
};
 
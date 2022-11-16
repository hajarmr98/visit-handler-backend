import { Request, Response } from "express";

const visitorFormController = async (req: Request, res: Response) => {
    console.log("visitorFormController")
    try{
        res.send("Respuesta")
    } catch(err){
        throw err
    }
}

export { 
    visitorFormController
};
 
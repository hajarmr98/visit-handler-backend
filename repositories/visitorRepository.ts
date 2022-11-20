import { Visit } from "../models";
import { Op } from "sequelize";

const createNewVisit = async (visit: any) => {
    return await Visit.create(visit);
}

export {
    createNewVisit
}
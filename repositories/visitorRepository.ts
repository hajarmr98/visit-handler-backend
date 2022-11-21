import { Visit } from "../models";

const createNewVisit = async (visit: any) => {
    return await Visit.create(visit);
}

export {
    createNewVisit
}
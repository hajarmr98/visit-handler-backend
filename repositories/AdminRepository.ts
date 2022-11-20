import { Admin, Visit } from "../models";
import { Op } from "sequelize";

const findLoginUser = async (usernameOrEmail: string) => {
    return await Admin.findOne({
        where: {
            [Op.or]: [
                { username: usernameOrEmail},
                { email: usernameOrEmail }
            ]
        },
    });
}

const getAllVisits = async () => {
    return await Visit.findAll({});
}
const updateVisit = async (visitId: string, status: number) => {
    return await Visit.update({ status: status }, { where: { id: visitId } });
}

export {
    findLoginUser,
    getAllVisits,
    updateVisit
}
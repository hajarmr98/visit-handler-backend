import { Admin } from "../models";
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

export {
    findLoginUser
}
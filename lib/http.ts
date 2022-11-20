import { Response, NextFunction } from "express";

interface DynamicObject {
    [key: string]: any
}

interface ISendSuccessParams {
    res: Response;
    status: number;
    data: boolean | DynamicObject;
    cookie?: false | DynamicObject;
}

interface ISendErrParams {
    res: Response;
    message: string;
    status: number;
    next?: NextFunction;
    err?: false | DynamicObject;
}

const sendSuccess = ({res, status, data = false, cookie = false}: ISendSuccessParams) => {
    const obj: DynamicObject = { success: true };

    if (data) obj.data = data;

    if (cookie && cookie.name)
      if (cookie.value) {
        const { name, value, options } = cookie;
        res
          .cookie(name, value, options || {})
          .status(status)
          .json(obj);
      } else res.clearCookie(cookie.name).status(status).json(obj);
    else res.status(status).json(obj);
}

const sendError = ({res, message, status, next, err = false}: ISendErrParams) => {
    const errorResponse: DynamicObject = { success: false };

    const errorMessage: string = err ? err.message : message;

    console.error(errorMessage);

    if (next) next(new Error(errorMessage));

    errorResponse.error = message;
    errorResponse.status = status;

    res.status(status).json(errorResponse);
}

export {
    sendSuccess,
    sendError
};
  
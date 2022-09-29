import { NextFunction, Response, Request } from "express";
import { isValidClientData } from "../../../library/utilities";
import { formatResponse } from "../../../library/formatter";
import { deleteRecord } from "../../../library/database";
import { urlTable } from "../../../configs/database";


export const deleteShortLink = async (request: Request, response: Response, next: NextFunction) => {
    const { valid, message } = isValidClientData(request.params, ["id"]);

    if (!valid) {
        return formatResponse(response, true, message);
    }
    const { id } = request.params;
    try {
        const deleteResult = await deleteRecord(urlTable, { key: id });
        const { error, message, data } = deleteResult;
        if (error) {
            return formatResponse(response, true, message);
        }
        const { deletedCount } = data;
        const clientMessage = deletedCount > 0 ? "Short link deleted" : "Could not delete short link"
        return formatResponse(response, false, clientMessage, data);
    } catch (e: any) {
        return formatResponse(response, true, message);
    }
}
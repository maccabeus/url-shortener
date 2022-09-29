import { NextFunction, Response, Request } from "express";
import { isValidClientData } from "../../../library/utilities";
import { formatResponse } from "../../../library/formatter";
import { selectRecord } from "../../../library/database";
import { urlTable } from "../../../configs/database";

export const getAllUrl = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { error, message, data } = await selectRecord(urlTable);
        if (error) {
            return formatResponse(response, true, message);
        }
        const clientData: Array<any> = data ? data : null;
        const clientMessage = data.length > 0 ? "Shortened Url found" : "No shortened url found";
        return formatResponse(response, false, clientMessage, clientData);
    } catch (e: any) {
        console.log("data: ", e.message);
        return formatResponse(response, true, e.message, null);
    }
}

export const getUrlByShortLink = async (request: Request, response: Response, next: NextFunction) => {
    const { valid, message } = isValidClientData(request.params, ["shortLink"]);
    /**  validate client data*/
    if (!valid) {
        return formatResponse(response, true, message);
    }
    const { shortLink } = request.params;
    try {
        const { error, message, data } = await selectRecord(urlTable, { key: shortLink });
        if (error) {
            return formatResponse(response, true, message);
        }
        const clientData: Array<any> = data && data[0] ? data[0] : null;
        const clientMessage = data ? "Link  found" : " not found";
        return formatResponse(response, false, clientMessage, clientData);
    } catch (e: any) {
        return formatResponse(response, false, e.message);
    }
}
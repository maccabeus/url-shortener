import { NextFunction, Response, Request } from "express";
import { isValidClientData } from "../../../library/utilities";
import { formatResponse } from "../../../library/formatter";
import { selectRecord } from "../../../library/database";
import { urlTable } from "../../../configs/database";
import { ShortLink } from '../../../library/url-service/url-service';

export const redirectToShortLink = async (request: Request, response: Response, next: NextFunction) => {
    const { valid, message } = isValidClientData(request.params, ["shortLink"]);
    if (!valid) {
        return formatResponse(response, true, message);
    }
    const { shortLink } = request.params;
    try {
        const { error, message, data } = await selectRecord(urlTable, { key: shortLink });
        if (error) {
            return formatResponse(response, true, message);
        }
        const clientData: ShortLink = data && data[0] ? data[0] : null;
        if (clientData && clientData.url) {
            response.redirect(clientData.url);
        }
    } catch (e: any) {
        response.status(500);
        response.end("Interval Server Error Occurs");
    }
}
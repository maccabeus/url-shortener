
import { NextFunction, Response, Request } from "express";
import { isValidClientData, isValidUrl } from "../../../library/utilities";
import { formatResponse } from "../../../library/formatter";
import { insertRecord } from "../../../library/database";
import { urlTable } from "../../../configs/database";
import { ShortLinkData, UrlService } from '../../../library/url-service/url-service';

export const addShortLink = async (request: Request, response: Response, next: NextFunction) => {
    const predicate = (data: any) => isValidUrl(data);
    const { valid, message } = isValidClientData(
        request.body,
        [{
            key: "url", message: "You must provide valid url",
            predicate,
        }]);
    if (!valid) {
        return formatResponse(response, true, message);
    }
    const { url } = request.body;
    const urlService = UrlService.getInstance();
    const link: ShortLinkData = urlService.getShortLink(request.hostname, request.protocol);
    try {
        const postData: any = { url, shortLink: link.shortLink, key: link.key };
        const insertRecordData: any = await insertRecord(urlTable, postData);
        const { error, message } = insertRecordData;
        if (error) {
            return formatResponse(response, true, message);
        }
        const clientMessage = "Url short link created";
        return formatResponse(response, false, clientMessage, { shortLink: postData.shortLink });
    } catch (e: any) {
        console.log("err: ", e);
        return formatResponse(response, true, e.message, null);
    }
}

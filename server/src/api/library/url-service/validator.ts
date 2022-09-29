
import { selectRecord } from '../database';
import { urlTable } from "../../configs/database";

export interface ILinkValidatorResponse {
    valid: boolean;
    link: string;
}
export interface ILinkValidator {
    (...args: any): Promise<ILinkValidatorResponse>;
}
/**
 * Validate the generated shortLink to ensure it is unique and 
 * not already used for other url
 * 
 * @param shortLink generated shortLink to validate 
 * @returns  `true` if link is valid  or `false`
 */
export const linkValidator: ILinkValidator = async (shortLink: string) => {
    return selectRecord(urlTable, { key: shortLink }).then((response: any) => {
        const { data, error } = response;
        return !data || data.length <= 0 ? { valid: true, link: shortLink } : { valid: false, link: shortLink };
    });
}
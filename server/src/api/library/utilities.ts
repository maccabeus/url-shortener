
export interface ValidatorResponse {
    valid: boolean
    message: string
    data?: any
}
export interface Predicate<T> {
    (args: T): boolean
}
/**
 * Validate if client data provided contains all 
 * @param data The client data provided.
 * @param list An array list of `key indexes` to validate. This will map to a `key value` in the `data` param
 * @returns  {ValidatorResponse} instance
 */
export const isValidClientData = (
    data: any,
    list: Array<string> | Array<{ key: string, message?: string, predicate?: Predicate<any> }>,
): ValidatorResponse => {

    /** the base notification message  */
    const baseMessage = "must be provided";

    const validatorResponse = (valid: boolean, message: string, data: any = null) => {
        return ({ valid, message, data });
    }

    for (let value of list) {
        if (typeof value === "string") {
            /** User only passed in string  key of list */
            if (!data[value] || data[value] == undefined || data[value] == "") {
                /** return an error */
                return validatorResponse(false, `'${value}' ${baseMessage}`)
            }
        } else if (typeof value === "object") {
            let { key, message, predicate } = value;
            key = key.trim();
            let customMessage = message ? message : `${key} ${baseMessage}`;
            if (predicate !== undefined && typeof predicate === "function") {
                if (predicate(data[key]) !== true) {
                    return validatorResponse(false, customMessage)
                }
            } else {
                if (!data[key]) {
                    return validatorResponse(false, customMessage)
                }
            }
        }
    }
    /** return true if all validation passed */
    return validatorResponse(true, "validation successful")
}
/**
 * Validate if a url is valid
 * @param url Url to check
 * @returns `True` or `false` depending on url validity
 */
export const isValidUrl = (url: string): boolean => {
    const regExp = new RegExp("((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)");
    return regExp.test(url);
}
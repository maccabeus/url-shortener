/**
 * Validate if a url is valid
 * 
 * @param url Url to check
 * @returns `True` or `false` depending on url validity
 */
export const isValidUrl = (url: string): boolean => {
    const regExp = new RegExp("((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)");
    return regExp.test(url);
}
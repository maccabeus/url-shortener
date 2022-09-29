import { Response } from "express";

/**
 * The server response interface. Our response formatter will 
 * implements this interface to enforce uniform response for all our `API` 
 */
export interface ResponseInterface {
    error: boolean;
    message: string | null
    errorCode: number | null
    statusCode: number | string
    data: string | null
}
/**
 * 
 * Format our server response for consistent output 
 * 
 * @Note This we must always use this for any server response
 * 
 * @param response express response object instance
 * @param error evaluates to `true` of `false`. default to `true`
 * @param data The data to pass over to the client
 * @param statusCode The status code of our request
 * @param errorCode The error code to send back to client. default to `null`
 * @returns 
 */
export const formatResponse = (response: Response, error: boolean = false, message: string | null = null, data: any = null, statusCode: number = 200, errorCode: number | null = null): boolean => {
    /** create a  uniform response data for  all response */
    const responseData: ResponseInterface = { error, message, data, statusCode, errorCode };
    try {
        response.json(responseData).status(statusCode);
        response.end();
        return true
    } catch (e: any) {
        console.log(e.message)
        return false;
    }
}
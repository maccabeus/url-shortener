
/**
 * Export APi wide configurations and settings
 */
export const testBaseUrl: string = "http://localhost:4001";
/**
 * Application CORS options
 * 
 * @todo we must remove the wildcard symbol and allow only know sources
 */
export const corsOptions = {
    credentials: true,
    origin: "*"
};
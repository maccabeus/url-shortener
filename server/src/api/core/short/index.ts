/** 
 * load all shortener routes. Routes name  prefix corresponds to the appropriate 
 * `REST` API verb.
 * @Note we can add more verbs to the  one defined at any time
  */
import shortenerRouter from "./router/all.router";

/** 
 * Define router for all the `shortener` endpoint. This will map `http methods`
 * to their corresponding route handlers.
 * 
 * export the router. This will handle all request relating to `shortener`
 * 
 * @example
 * ```bash
 * curl http://domain.com/shortener
 * ```
 */
export default shortenerRouter;
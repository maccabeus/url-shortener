/** 
 * load all link  routes. Routes name  prefix corresponds to the appropriate 
 * `REST` API verb.
 * @Note we can add more verbs to the  one defined at any time
  */
import linkRouter from "./router/all.router";

/** 
 * Defines routes for all the `/link` endpoints
 * @example
 * ```bash
 * curl http://domain.com/link/MyuytytQe
 * ```
 * Visiting the link above should take the user to the equivalent long 
 * url associated with the  `http://actualurl.com
 */
export default linkRouter;